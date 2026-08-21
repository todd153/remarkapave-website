import * as S from '../src/utils/schema.js';
import { services } from '../src/data/services.js';
import { reviews, site } from '../src/data/site.js';

function buildGraph(pathname, title, description, pageSchema, ogImage='/images/og-default.jpg'){
  const canonical = new URL(pathname, site.url).href;
  const isHome = pathname === '/';
  const reviewPages = ['/', '/about', '/about/'];
  const realReviews = reviewPages.includes(pathname) ? reviews.filter(r=>r.real) : [];
  const pageNode = S.webPageNode({ url: canonical, name:title, description,
    image:new URL(ogImage, site.url).href,
    about:(pageSchema.find(n=>n&&n['@type']==='Service')||{})['@id'] });
  const pageNodes = pageSchema.filter(Boolean).map(node=>{
    const out={...node};
    if(!out['@id']){const t=Array.isArray(out['@type'])?out['@type'][0]:out['@type'];
      out['@id']=`${canonical}#${String(t).toLowerCase()}`;}
    if(!out.isPartOf) out.isPartOf={'@id':pageNode['@id']};
    return out;
  });
  const graph=[
    isHome?S.organizationNode(realReviews):{'@type':'PavingContractor','@id':S.ORG},
    ...(isHome?[S.personNode(),S.websiteNode()]:[{'@type':'WebSite','@id':S.WEBSITE}]),
    pageNode, ...pageNodes,
  ];
  if(!isHome && realReviews.length>0) graph[0]=S.organizationNode(realReviews);
  return graph;
}

let fail=0;
function check(label, cond, extra=''){ console.log((cond?'  PASS  ':'  FAIL  ')+label+(extra?' — '+extra:'')); if(!cond) fail++; }

// --- HOMEPAGE ---
const home = buildGraph('/', 'Parking Lot Striping Ponca City & Tulsa, OK | RemarkaPave','desc',
  [S.faqSchema([{q:'Q1',a:'A1'}])]);
console.log('\n== HOMEPAGE ==');
check('defines the org in full', !!home[0].address);
check('defines Todd', home.some(n=>n['@id']===S.TODD));
check('has aggregateRating from real reviews', !!home[0].aggregateRating,
  home[0].aggregateRating ? home[0].aggregateRating.ratingValue+' from '+home[0].aggregateRating.reviewCount : 'none');
check('FAQ got an @id stamped', home.find(n=>n['@type']==='FAQPage')['@id'].includes('#faqpage'));
check('org offers match services.js exactly', home[0].makesOffer.length===services.length, home[0].makesOffer.length+' offers / '+services.length+' services');

check('every service in services.js is offered by the org', (()=>{
  const offered=new Set(home[0].makesOffer.map(o=>o['@id']));
  return services.every(s=>offered.has(`${site.url}/services/${s.slug}/#service`));
})());

// --- SERVICE PAGE ---
const s = services.find(x=>x.slug==='parking-lot-striping');
const trail=[{name:'Home',href:'/'},{name:'Services',href:'/services/'},{name:s.short,href:`/services/${s.slug}/`}];
const svc = buildGraph(`/services/${s.slug}/`, 'Line Striping','desc',
  [S.serviceSchema({name:s.name,description:s.answer,url:`/services/${s.slug}/`,serviceType:s.name,alternateName:s.short,priceFrom:s.priceFrom}),
   S.faqSchema(s.faqs), S.breadcrumbSchema(trail)]);
console.log('\n== SERVICE PAGE ==');
check('org is a REFERENCE only, not redefined', !svc[0].address && svc[0]['@id']===S.ORG);
check('no reviews leak onto service pages', !svc[0].aggregateRating);
check('Service node id matches org makesOffer', home[0].makesOffer.some(o=>o['@id']===svc.find(n=>n['@type']==='Service')['@id']));
check('WebPage is about the Service', svc.find(n=>n['@type']==='WebPage').about['@id'].includes('#service'));
check('FAQ count matches page data', svc.find(n=>n['@type']==='FAQPage').mainEntity.length===s.faqs.length,
  s.faqs.length+' Q&A');
check('Service carries provider ref', svc.find(n=>n['@type']==='Service').provider['@id']===S.ORG);

// --- TOWN PAGE ---
const town = buildGraph('/services/parking-lot-striping-bixby-ok/','Bixby','desc',
  [S.serviceSchema({name:'Striping in Bixby',description:'d',url:'/services/parking-lot-striping-bixby-ok/',areaName:'Bixby'}),
   S.breadcrumbSchema(trail)]);
console.log('\n== TOWN PAGE ==');
check('org referenced, not redefined', !town[0].address);
check('areaServed scoped to the one city', town.find(n=>n['@type']==='Service').areaServed.name==='Bixby');

// --- PRIVACY PAGE (no reviews, no FAQ) ---
const priv = buildGraph('/privacy-policy/','Privacy','desc',[]);
console.log('\n== PRIVACY PAGE ==');
check('no reviews', !priv[0].aggregateRating);
check('minimal graph', priv.length===3, priv.length+' nodes');

// --- GLOBAL: dangling reference check across all page types ---
console.log('\n== REFERENCE INTEGRITY ==');
const defined=new Set();
// A node counts as DEFINED wherever it appears with @id plus other properties,
// including nested inside another node (valid JSON-LD). Only a bare {"@id":...}
// is a pure reference.
const collect=o=>{ if(Array.isArray(o)) o.forEach(collect);
  else if(o&&typeof o==='object'){ const k=Object.keys(o);
    if(o['@id'] && k.length>1) defined.add(o['@id']);
    k.forEach(x=>collect(o[x])); } };
collect([home,svc,town,priv]);
services.forEach(x=>defined.add(`${site.url}/services/${x.slug}/#service`));
const refs=new Set();
const walk=o=>{ if(Array.isArray(o)) o.forEach(walk);
  else if(o&&typeof o==='object'){ const k=Object.keys(o);
    if(k.length===1&&k[0]==='@id') refs.add(o['@id']); else k.forEach(x=>walk(o[x])); } };
walk([home,svc,town,priv]);
const dangling=[...refs].filter(r=>!defined.has(r));
check('every @id reference resolves', dangling.length===0, dangling.length?dangling.join(', '):'0 dangling');

// --- JSON validity + escaping ---
console.log('\n== SERIALIZATION ==');
const out=JSON.stringify({'@context':'https://schema.org','@graph':home}).replace(/</g,'\\u003c');
check('serializes and re-parses cleanly', !!JSON.parse(out.replace(/\\u003c/g,'<'))['@graph']);
check('no raw < survives (tag-break safe)', !out.includes('<'));
check('homepage graph size sane', out.length<100000, out.length+' bytes');

console.log('\n'+(fail?`${fail} CHECK(S) FAILED`:'ALL CHECKS PASSED'));
process.exit(fail?1:0);
