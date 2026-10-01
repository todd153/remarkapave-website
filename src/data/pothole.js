// ============================================================
// RemarkaPave — Infrared pothole repair, per-city landing pages.
//
// These 14 cities each carry genuinely unique copy — different opening
// angle, local geography, example context, and FAQ set — so the pages
// read as real local pages, not a city-name swap. The TECHNICAL FACTS
// are held constant across every page (they came from verified sources)
// even though the phrasing varies:
//
//   • Infrared reheats the existing asphalt to about 300°F, rakes hot
//     mix into the softened area, and compacts the whole thing as one —
//     so there is no cold seam and no joint for water to get under.
//   • It is the right fix for surface damage — potholes, settled spots,
//     failed seams, trip hazards — where the base underneath is still
//     solid.
//   • It is NOT a fix for failed base. Alligator cracking, spongy soft
//     spots, and wide settlement mean the base is gone, and that needs
//     full-depth (saw-cut and remove) repair. Every page says so.
//   • The patch is traffic-ready in about an hour after compaction.
//
// Slugs MUST match the town slugs in towns.js. Page URL pattern:
//   /services/pothole-repair-<citySlug>/
// ============================================================

export const potholeHub = {
  slug: 'pothole-repair',
  name: 'Infrared Pothole Repair',
  short: 'Pothole Repair',
  priceFrom: 'Priced per repair — free written quote',
};

export const potholeCities = [
  {
    slug: 'ponca-city-ok',
    name: 'Ponca City',
    county: 'Kay County',
    neighbors: ['Tonkawa', 'Newkirk'],
    h1: 'Infrared Pothole Repair in Ponca City, OK',
    title: 'Infrared Pothole Repair Ponca City OK | RemarkaPave',
    meta: 'Infrared pothole repair in Ponca City, OK — the existing asphalt is reheated and re-compacted with no cold seam for water to find. Free written quote: (580) 304-7225.',
    answer:
      'RemarkaPave repairs potholes across Ponca City, Oklahoma with infrared asphalt repair — from the Grand Avenue storefronts downtown to the 14th Street retail corridor. This is our home base, so a Ponca City repair usually gets scheduled fast, and every job comes with a free written quote. Call (580) 304-7225.',
    intro:
      'Walk out and look at the last pothole someone patched in your lot. If you can see a rectangle of darker asphalt with a hard edge all the way around it, that edge is a cold seam — two pieces of asphalt sitting next to each other, not bonded — and it is already letting water back in. Infrared repair is what removes that seam.',
    para:
      'Instead of cutting out a square and dropping in cold mix, an infrared heater warms the existing asphalt in place until it is workable at around 300°F. We rake fresh hot mix into the softened area, then compact the old and new together so they fuse into one surface. There is no joint, so there is nothing for Ponca City’s summer storms and winter freeze to pry open. Because RemarkaPave is based right here, you also get the owner on the job rather than a crew passing through.',
    included: [
      'The failed area heated in place to a workable temperature — no saw-cut square left behind',
      'Fresh hot mix raked in and compacted with the reheated asphalt as a single bonded surface',
      'A finished patch with no cold seam around the edge, so water has no way under it',
      'The repair traffic-ready in about an hour, so the lot keeps working',
    ],
    infrared:
      'Infrared is the right tool when the surface has failed but the base under it is still sound — a pothole, a settled low spot, a crumbling seam, a lip that catches a toe or a cart wheel. What it will not fix is a base that is already gone. If the asphalt is cracked into a scaly, alligator-hide pattern, or the spot feels soft and springy underfoot, or a whole section has sunk, the problem is underneath the surface and no amount of reheating the top layer solves it. Those areas need full-depth repair — saw-cut, remove, rebuild — and we tell you that straight rather than sell you a patch that will fail by spring.',
    faqs: [
      { q: 'Does RemarkaPave do pothole repair in Ponca City?', a: 'Yes. Ponca City is our home base, so repairs here are usually scheduled quickly, and every job starts with a free written quote — materials and labor broken out before any work begins.' },
      { q: 'Is infrared repair better than a cold-patch?', a: 'For a lasting fix, yes. A cold-patch drops loose mix into the hole and leaves a hard seam around it that water works under within a season. Infrared reheats and bonds the new mix to the old, so there is no seam to fail.' },
      { q: 'How soon can I drive on the repair?', a: 'About an hour after we compact it. We schedule around your hours so the lot never has to fully close.' },
      { q: 'What if the base under my pavement has failed?', a: 'Then infrared is the wrong fix and we will say so. Alligator cracking, soft spots, or a sunken section mean the base is gone and needs full-depth repair. We quote that honestly instead of patching over it.' },
    ],
  },
  {
    slug: 'newkirk-ok',
    name: 'Newkirk',
    county: 'Kay County',
    neighbors: ['Ponca City', 'Blackwell'],
    h1: 'Infrared Pothole Repair in Newkirk, OK',
    title: 'Pothole Repair Newkirk OK — Infrared Asphalt | RemarkaPave',
    meta: 'Newkirk, OK pothole repair done with infrared so the patch bonds instead of leaving a cold seam. Kay County seat, minutes from our Ponca City shop. Free quote: (580) 304-7225.',
    answer:
      'RemarkaPave provides infrared pothole repair for businesses and property owners in Newkirk, Oklahoma — the Kay County seat, from the courthouse square downtown to the commercial properties along US-77. Newkirk is a short run from our Ponca City shop, so scheduling is easy. Free written quote — call (580) 304-7225.',
    intro:
      'Most potholes in Newkirk started as a cold-patch that did not hold. Someone shoveled loose mix into a hole, tamped it down, and within a few months traffic had kicked it loose and the hole was back — a little wider each time. The reason is always the same: cold mix never bonds to the pavement around it.',
    para:
      'Infrared repair fixes the root problem instead of repeating it. We heat the existing asphalt right where it sits until it softens at about 300°F, work fresh hot mix into it, and compact old and new as one piece. The finished patch has no edge for water to get behind, which is what makes it last through the freeze-thaw winters that pull Kay County pavement apart. Newkirk sits just north of Ponca City, so getting a crew out here does not carry a long-haul trip charge.',
    included: [
      'No fresh saw-cut and no loose cold mix — the existing asphalt is softened and reused',
      'Hot mix blended into the heated area, then rolled so new and old cure as one surface',
      'A seamless edge that a cold-patch can never give you, so the repair does not unravel',
      'Open to traffic roughly an hour after compaction',
    ],
    infrared:
      'Think of infrared as surface repair, not structural repair. It is ideal for a pothole, a low spot that ponds water, a raveled joint, or a raised trip hazard — anywhere the top has broken down but the ground under it is still holding weight. Where it does not belong is a spot where the base itself has failed: alligator-pattern cracking, a section that gives when you step on it, or pavement that has settled several inches. That is a full-depth job — cut it out, fix what is under it, and rebuild — and we will tell you when a patch would just be throwing money at it.',
    faqs: [
      { q: 'Can you repair a pothole in Newkirk without repaving the whole lot?', a: 'Yes — that is exactly what infrared is for. We repair the failed spot and bond it to the pavement around it, so there is no reason to repave a lot that is otherwise sound.' },
      { q: 'Why do my cold-patch repairs keep coming back?', a: 'Cold mix never bonds to the surrounding asphalt, so its edges stay open and traffic and water work it loose. Infrared reheats and fuses the patch in place, which removes that failure point.' },
      { q: 'How far is Newkirk from your crew?', a: 'Newkirk is a short drive north of our Ponca City base, so scheduling is quick and there is no long-distance trip charge on a local repair.' },
      { q: 'What if the pavement is cracked all over, not just one hole?', a: 'Widespread, scaly cracking usually means the base has failed, and infrared will not fix that. We would quote full-depth repair for those areas instead of patching the surface.' },
    ],
  },
  {
    slug: 'tonkawa-ok',
    name: 'Tonkawa',
    county: 'Kay County',
    neighbors: ['Ponca City', 'Blackwell'],
    h1: 'Infrared Pothole Repair in Tonkawa, OK',
    title: 'Infrared Pothole Repair Tonkawa OK | RemarkaPave',
    meta: 'Pothole repair in Tonkawa, OK with infrared — one crew, one visit, drivable in about an hour. Near the NOC campus and the I-35 casino corridor. Free quote from RemarkaPave.',
    answer:
      'RemarkaPave repairs potholes in Tonkawa, Oklahoma using infrared asphalt repair — around the Northern Oklahoma College campus and the casino and hotel traffic off I-35. It is a quick run from our Ponca City shop, and the repair is drivable in about an hour. Free written quote: (580) 304-7225.',
    intro:
      'A pothole in a Tonkawa lot is a one-visit problem when it is handled right. Between the college and the interstate traffic coming off I-35, these lots stay busy, and the last thing a property needs is a repair that closes a drive lane for a day and then has to be redone. Infrared repair is built for exactly that.',
    para:
      'One crew shows up, heats the failed asphalt in place to about 300°F, rakes in fresh hot mix, and compacts it all into a single bonded surface — then it is open to traffic in roughly an hour. No second mobilization, no waiting for a separate patch crew, no cold seam left around the edge for water to attack. Tonkawa is close enough to our Ponca City base that we can usually fold a repair into a nearby route without a special trip.',
    included: [
      'One visit, one crew — heat, fill, compact, done',
      'Existing asphalt reheated and reused instead of cut out and hauled off',
      'Hot mix compacted with the softened pavement so the patch bonds edge to edge',
      'Traffic-ready in about an hour, so a busy lot barely skips a beat',
    ],
    infrared:
      'Infrared earns its keep on surface failures — the pothole itself, a settled dip, a seam that has started to come apart, a lip that trips people at a doorway — as long as the base beneath is still solid. It is not the answer when the base has given out. A patch of cracking that looks like alligator skin, a soft spongy area, or pavement that has dropped well below the surface around it all point to base failure, and those need a full-depth fix rather than a reheated surface. We will look, tell you which one you have, and quote the repair that actually holds.',
    faqs: [
      { q: 'Does RemarkaPave repair potholes in Tonkawa?', a: 'Yes. We handle infrared pothole repair for commercial and institutional properties across Tonkawa, and it is a short run from our Ponca City base.' },
      { q: 'How long will my lot be out of service?', a: 'Not long. An infrared repair is compacted and drivable in about an hour, and we schedule around your busiest times so traffic keeps flowing.' },
      { q: 'Is infrared better than having someone throw in cold-patch?', a: 'Considerably. Cold-patch sits loose and pops out; infrared fuses new mix to the reheated pavement so the repair holds instead of failing at the edges.' },
      { q: 'What if it turns out my base has failed?', a: 'We tell you before we touch it. Soft spots, alligator cracking, and deep settlement are base problems that need full-depth repair — infrared would only hide them for a season.' },
    ],
  },
  {
    slug: 'blackwell-ok',
    name: 'Blackwell',
    county: 'Kay County',
    neighbors: ['Tonkawa', 'Newkirk'],
    h1: 'Infrared Pothole Repair in Blackwell, OK',
    title: 'Pothole Repair Blackwell OK — Infrared Asphalt | RemarkaPave',
    meta: 'Infrared pothole repair in Blackwell, OK stops water at the source — no cold seam, no re-opening after the first freeze. Industrial-grade work from RemarkaPave. Free quote.',
    answer:
      'RemarkaPave repairs potholes in Blackwell, Oklahoma with infrared asphalt repair — from the Main Street historic district to the industrial park along US-177 and Highway 11. Blackwell is a short drive from our Ponca City shop, and every repair comes with a free written quote. Call (580) 304-7225.',
    intro:
      'Water is what turns a hairline problem into a pothole, and it almost always gets in at an edge. A freeze-thaw winter in north-central Oklahoma runs water into every open seam, freezes it overnight, and levers the asphalt apart a little more each cycle. Blackwell pavement, with its heavy industrial traffic, feels that faster than most.',
    para:
      'Infrared repair shuts that door. We reheat the failed asphalt in place until it is workable at around 300°F, blend in fresh hot mix, and compact everything into one continuous surface with no cold joint around it. Because there is no seam, there is no entry point — water runs off instead of soaking in and freezing. Blackwell property owners already know the difference between a quick patch and work built to hold up, and infrared is the version that holds.',
    included: [
      'The damaged asphalt softened in place with an infrared heater — the old material stays in the repair',
      'Fresh hot mix worked in and compacted so new and existing pavement bond as one',
      'A continuous, sealed edge that keeps water and freeze-thaw out of the repair',
      'Drivable again in about an hour after compaction',
    ],
    infrared:
      'Infrared is a surface fix, and it is the right one when the base under the pavement is still carrying its load — potholes, settled spots, failed seams, and trip hazards all qualify. It is the wrong fix when the base has broken down. If you see alligator-style cracking spreading across an area, feel a soft spot flex under weight, or find pavement that has settled well below its neighbors, that is a structural failure that infrared cannot reach. Those spots get full-depth repair — remove the failed material and rebuild — and we are upfront about which one your lot needs before we quote it.',
    faqs: [
      { q: 'Does RemarkaPave serve Blackwell?', a: 'Yes — Blackwell is part of our core Kay County service area and a short drive from Ponca City, so repairs schedule quickly.' },
      { q: 'Will an infrared repair survive an Oklahoma winter?', a: 'That is the point of it. Because the patch has no cold seam, water cannot get under the edge and freeze — which is what pulls ordinary patches apart.' },
      { q: 'Can you handle heavier industrial pavement?', a: 'Yes. Infrared reheats and re-compacts the existing asphalt, which makes for a dense, bonded repair that stands up to truck and equipment traffic better than loose cold-patch.' },
      { q: 'What if the damage is deeper than the surface?', a: 'If the base has failed — soft spots, deep settlement, alligator cracking — we quote full-depth repair instead. Infrared only fixes the surface, and we will not pretend otherwise.' },
    ],
  },
  {
    slug: 'bartlesville-ok',
    name: 'Bartlesville',
    county: 'Washington County',
    neighbors: ['Dewey', 'Ochelata'],
    h1: 'Infrared Pothole Repair in Bartlesville, OK',
    title: 'Infrared Pothole Repair Bartlesville OK | RemarkaPave',
    meta: 'Pothole repair in Bartlesville, OK with infrared asphalt repair — documented, contractor-grade, no cold seam. Serving Washington County offices and medical lots. Free written quote.',
    answer:
      'RemarkaPave provides infrared pothole repair for Bartlesville, Oklahoma — Washington County’s hub, from the downtown offices near the Price Tower to the US-75 retail corridor. Bartlesville sits about an hour east of our Ponca City base, and every repair is documented in a written quote. Call (580) 304-7225.',
    intro:
      'Bartlesville’s corporate campuses and medical facilities do not accept a mystery patch that shows up as a dark rectangle in the lot. They want work they can point to, document, and count on — and infrared repair gives you a finished surface you can actually inspect. Look at the edge after the repair: if it is fused into the surrounding asphalt with no hard line, it was done right.',
    para:
      'The process is straightforward and it is the same on a small pothole or a run of them. An infrared heater warms the existing asphalt in place to about 300°F, we rake in fresh hot mix, and we compact old and new together so they cure as one surface. No cold seam means no edge for Washington County’s freeze-thaw cycles to work under. RemarkaPave is a licensed and insured contractor, and Bartlesville jobs come with the written materials-and-labor breakdown that property managers here expect.',
    included: [
      'Infrared heat used to make the existing asphalt workable, not a cut-and-dump patch',
      'Hot mix compacted into the reheated pavement so the repair bonds seamlessly',
      'A documented repair with a written scope — what was fixed, and how',
      'Traffic-ready in about an hour, scheduled around building hours',
    ],
    infrared:
      'Infrared is the correct method for surface failures over a sound base — potholes, settled areas, deteriorated seams, and trip hazards at entrances and crosswalks. It is not a substitute for structural repair. When the base itself has failed — signaled by alligator cracking, a spongy area that moves under load, or a section that has sunk noticeably — reheating the top layer does nothing for the real problem. Those areas call for full-depth repair, and on a documented job that distinction matters: we identify it in the assessment and quote the right fix rather than papering over a base failure with a surface patch.',
    faqs: [
      { q: 'Does RemarkaPave travel to Bartlesville?', a: 'Yes. Bartlesville is roughly an hour east of our Ponca City shop and part of our regular service area — repairs are scheduled and quoted in writing.' },
      { q: 'Do you provide documentation for the repair?', a: 'Yes. Every Bartlesville job comes with a written materials-and-labor quote and a clear scope, which is what property managers and facilities teams here need for their records.' },
      { q: 'Why choose infrared over a conventional patch?', a: 'Infrared reheats and bonds new mix to the existing asphalt, leaving no cold seam. A conventional cut-and-fill patch leaves a joint that water eventually opens.' },
      { q: 'What happens if the base under the pavement is bad?', a: 'We flag it in the assessment. Base failure — soft spots, deep settlement, alligator cracking — needs full-depth repair, and we quote that rather than an infrared patch that would not last.' },
    ],
  },
  {
    slug: 'bixby-ok',
    name: 'Bixby',
    county: 'Tulsa County',
    neighbors: ['Jenks', 'Broken Arrow'],
    h1: 'Infrared Pothole Repair in Bixby, OK',
    title: 'Pothole Repair Bixby OK — Infrared Asphalt Repair | RemarkaPave',
    meta: 'Bixby, OK pothole repair with infrared — a clean, bonded patch that keeps a retail lot looking managed. Serving the Tulsa metro from Ponca City. Free quote: (580) 304-7225.',
    answer:
      'RemarkaPave repairs potholes in Bixby, Oklahoma with infrared asphalt repair — from the Memorial Drive retail corridor to the riverside commercial strips. Bixby is part of our Tulsa-metro service area, and a repair here is drivable in about an hour. Free written quote — call (580) 304-7225.',
    intro:
      'In Bixby, curb appeal is the whole game — a clean, well-kept lot reads as a well-run property to every customer and prospective tenant who pulls in. A ragged pothole, or worse, a patchwork of dark cold-patch rectangles, undoes that impression before anyone reaches the door. Infrared repair fixes the hole without leaving the scar.',
    para:
      'Because infrared reheats and reuses the asphalt already in your lot, the repair blends into the surrounding surface instead of standing out as a contrasting square. We warm the failed area in place to about 300°F, rake in fresh hot mix, and compact it all into one bonded surface with no visible cold seam — and it is open to traffic in roughly an hour. RemarkaPave is based in Ponca City and runs the Tulsa metro, so Bixby sits squarely in our route rather than at the far edge of it.',
    included: [
      'The existing asphalt reheated in place so the repair matches the lot, not a contrasting patch',
      'Fresh hot mix compacted into the softened area as a single bonded surface',
      'A clean edge with no cold seam — better looking and longer lasting',
      'Drivable in about an hour, so the lot stays open for business',
    ],
    infrared:
      'Infrared handles surface problems over a solid base: the pothole, a low spot that collects water, a seam coming apart, a raised trip hazard at a storefront entrance. It cannot repair a base that has failed. When you see cracking spread into an alligator-hide pattern, feel a section give underfoot, or find pavement that has settled deep, the trouble is below the surface and a reheated top layer will not hold. Those areas need full-depth repair, and we point them out during the walk-through so you are not paying for a patch that is destined to sink again.',
    faqs: [
      { q: 'Does RemarkaPave do pothole repair in Bixby?', a: 'Yes. Bixby is part of our Tulsa-metro service area, and we repair potholes with infrared so the patch blends in and holds up.' },
      { q: 'Will the repair be obvious in my lot?', a: 'Much less than a cold-patch. Infrared reuses your existing asphalt, so the finished repair blends into the surrounding surface instead of leaving a dark contrasting rectangle.' },
      { q: 'How quickly can customers park on it?', a: 'About an hour after compaction. We work around your business hours so a repair does not cost you a busy afternoon.' },
      { q: 'What if my lot has failed underneath, not just on top?', a: 'Then infrared is the wrong fix and we say so. Alligator cracking, soft spots, and deep settlement are base failures that need full-depth repair.' },
    ],
  },
  {
    slug: 'broken-arrow-ok',
    name: 'Broken Arrow',
    county: 'Tulsa County',
    neighbors: ['Bixby', 'Coweta'],
    h1: 'Infrared Pothole Repair in Broken Arrow, OK',
    title: 'Infrared Pothole Repair Broken Arrow OK | RemarkaPave',
    meta: 'Pothole repair in Broken Arrow, OK done with infrared so the patch bonds instead of popping out like cold-patch. Rose District to the Creek Turnpike parks. Free quote from RemarkaPave.',
    answer:
      'RemarkaPave repairs potholes in Broken Arrow, Oklahoma with infrared asphalt repair — from the Rose District storefronts to the warehouse parks along the Creek Turnpike. Broken Arrow is part of our Tulsa-metro service area. Free written quote — call (580) 304-7225.',
    intro:
      'If your Broken Arrow lot has a pothole that keeps coming back no matter how many times it gets filled, the fix has been wrong every time. Loose cold-patch shoveled into a hole never bonds to the asphalt around it, so traffic works it loose and the hole reopens — usually a little bigger. The way to end that cycle is to stop leaving a seam in the first place.',
    para:
      'Infrared repair does that. We heat the existing asphalt in place until it softens at about 300°F, rake fresh hot mix into it, and compact the old and new together so they fuse into a single surface. There is no cold joint around the edge, which is the exact spot where ordinary patches fail. With new construction going up all over Broken Arrow, a faded, patched-over lot stands out for the wrong reasons — a clean, bonded repair keeps yours from looking like the tired one on the block.',
    included: [
      'The failed asphalt reheated and reused — no repeat of the loose cold-patch that keeps popping out',
      'Hot mix raked in and compacted into the softened pavement as one bonded surface',
      'A sealed, seamless edge that traffic and water cannot work loose',
      'Open to traffic about an hour after the repair is compacted',
    ],
    infrared:
      'Infrared is the answer for surface failures sitting on a sound base — potholes, settled dips, failed seams, and trip hazards. It is not the answer for a failed base. Alligator-pattern cracking, a soft area that flexes under weight, or a section that has settled several inches all mean the structure under the pavement is gone, and heating the surface does not touch that. Those need full-depth repair — cut out, rebuild — and we will tell you which category your damage falls into before quoting, so you are not paying twice for the same hole.',
    faqs: [
      { q: 'Why does my Broken Arrow lot keep getting the same pothole?', a: 'Because cold-patch never bonds to the pavement around it, so the edges stay open and traffic reopens the hole. Infrared fuses the repair to the existing asphalt, which removes that failure point.' },
      { q: 'Does RemarkaPave serve Broken Arrow?', a: 'Yes — Broken Arrow is part of our Tulsa-metro service area, and repairs come with a free written quote.' },
      { q: 'How long until the repair can take traffic?', a: 'About an hour after compaction. We schedule around your hours so the lot keeps moving.' },
      { q: 'What if the base has failed, not just the surface?', a: 'Then we quote full-depth repair instead. Soft spots, deep settlement, and alligator cracking are base problems that infrared cannot fix.' },
    ],
  },
  {
    slug: 'claremore-ok',
    name: 'Claremore',
    county: 'Rogers County',
    neighbors: ['Verdigris', 'Catoosa'],
    h1: 'Infrared Pothole Repair in Claremore, OK',
    title: 'Pothole Repair Claremore OK — Infrared Asphalt | RemarkaPave',
    meta: 'Infrared pothole repair in Claremore, OK seals the edge so freeze-thaw water stays out. Route 66 corridor, Rogers County. Free written quote from RemarkaPave: (580) 304-7225.',
    answer:
      'RemarkaPave repairs potholes in Claremore, Oklahoma using infrared asphalt repair — from the Will Rogers Boulevard district to the Route 66 commercial strip. Claremore is part of our Tulsa-metro service area in Rogers County. Free written quote — call (580) 304-7225.',
    intro:
      'A Claremore pothole rarely starts as a pothole. It starts as water finding an open edge — a crack, an old patch seam, a raveled joint — then freezing overnight and prying the asphalt apart a little at a time until a chunk lets go. Along the Route 66 corridor, where traffic is constant, that process runs fast.',
    para:
      'Infrared repair breaks the cycle by removing the edge water uses. We reheat the existing asphalt in place to about 300°F, work fresh hot mix into it, and compact the whole area into one continuous surface — no cold seam, nothing for water to slip under and freeze. The lots along Claremore’s corridor are the first thing visitors judge, and a sealed, bonded repair keeps yours looking maintained instead of patched. It is drivable again in about an hour.',
    included: [
      'The existing asphalt reheated in place, keeping the repair tied into the surrounding surface',
      'Fresh hot mix compacted with the softened pavement so there is no open joint',
      'A sealed edge that keeps Rogers County freeze-thaw water out of the repair',
      'Traffic-ready roughly an hour after compaction',
    ],
    infrared:
      'Infrared is a surface repair for damage sitting on a base that is still solid — a pothole, a settled low spot, a failing seam, a trip hazard. It does not fix a base that has failed. If the pavement is cracked into an alligator pattern, feels soft and springy, or has settled well below the surrounding surface, water and traffic have already broken down what is underneath, and reheating the top will not bring it back. Those spots need full-depth repair, and we will say so plainly rather than sell a patch that will not survive the next winter.',
    faqs: [
      { q: 'Does RemarkaPave repair potholes in Claremore?', a: 'Yes. Claremore is part of our Tulsa-metro service area, and we use infrared so the repair seals against the freeze-thaw water that causes most potholes here.' },
      { q: 'What actually causes the potholes in my lot?', a: 'Almost always water getting into an open edge, freezing, and expanding. Infrared removes the seam a patch would leave, so water has nowhere to get in.' },
      { q: 'Is infrared better than cold-patch for this?', a: 'Yes. Cold-patch leaves an open edge that water reopens; infrared bonds the repair to the existing asphalt so there is no edge to fail.' },
      { q: 'What if my base has already failed?', a: 'We quote full-depth repair for that. Alligator cracking, soft spots, and deep settlement are base failures — infrared only repairs the surface.' },
    ],
  },
  {
    slug: 'collinsville-ok',
    name: 'Collinsville',
    county: 'Tulsa County',
    neighbors: ['Owasso', 'Skiatook'],
    h1: 'Infrared Pothole Repair in Collinsville, OK',
    title: 'Infrared Pothole Repair Collinsville OK | RemarkaPave',
    meta: 'Pothole repair in Collinsville, OK — infrared means one crew, one visit, drivable in about an hour, no cold seam. Growing US-169 corridor. Free quote from RemarkaPave.',
    answer:
      'RemarkaPave repairs potholes in Collinsville, Oklahoma with infrared asphalt repair — from the Main Street business district along US-169 to the newer development near Highway 20. Collinsville is part of our Tulsa-metro service area. Free written quote — call (580) 304-7225.',
    intro:
      'The advantage of infrared in a Collinsville lot is that the whole thing is one visit. There is no waiting for a patch crew on one day and a compaction crew on another, no drive lane roped off overnight. One crew heats the failed asphalt, fills it, compacts it, and the repair is drivable in about an hour.',
    para:
      'Here is how that single visit works: an infrared heater warms the existing pavement in place until it is workable at around 300°F, we rake in fresh hot mix, and we compact old and new into one bonded surface with no cold seam around it. Collinsville is growing fast north of Tulsa, and an older lot now sits next to brand-new pavement — a clean, one-visit repair keeps yours from looking like the one that got left behind. RemarkaPave runs the Tulsa metro out of Ponca City, so Collinsville is on the route.',
    included: [
      'One crew, one visit — heat, fill, compact, reopen',
      'The existing asphalt softened and reused instead of cut out and hauled away',
      'Hot mix compacted into the reheated pavement so the repair bonds edge to edge',
      'Drivable in about an hour, with no second mobilization',
    ],
    infrared:
      'Infrared is the right call for surface damage over a base that still holds — potholes, settled spots, failed seams, and trip hazards. It is not built for base failure. When cracking spreads into an alligator pattern, when a spot flexes under load, or when a section has dropped noticeably, the base underneath has failed and reheating the surface will not fix it. That is full-depth repair territory — remove and rebuild — and we identify it up front so a one-visit patch does not turn into a repeat problem.',
    faqs: [
      { q: 'Does RemarkaPave serve Collinsville?', a: 'Yes — Collinsville is part of our Tulsa-metro service area, reached on our regular metro routes from Ponca City.' },
      { q: 'How many visits does an infrared repair take?', a: 'One. The same crew heats, fills, and compacts the repair in a single visit, and it is drivable in about an hour.' },
      { q: 'Why not just have someone throw in cold-patch?', a: 'Cold-patch stays loose and works its way out. Infrared bonds new mix to the reheated asphalt, so the repair holds instead of becoming next month’s pothole.' },
      { q: 'What if the damage goes deeper than the surface?', a: 'If the base has failed — soft spots, deep settlement, alligator cracking — we quote full-depth repair. Infrared fixes the surface, not the structure under it.' },
    ],
  },
  {
    slug: 'coweta-ok',
    name: 'Coweta',
    county: 'Wagoner County',
    neighbors: ['Broken Arrow', 'Wagoner'],
    h1: 'Infrared Pothole Repair in Coweta, OK',
    title: 'Pothole Repair Coweta OK — Infrared Asphalt Repair | RemarkaPave',
    meta: 'Coweta, OK pothole repair with infrared — bonds the patch instead of leaving a cold seam that reopens. Highway 51 corridor, Wagoner County. Free quote: (580) 304-7225.',
    answer:
      'RemarkaPave repairs potholes in Coweta, Oklahoma with infrared asphalt repair — from the Highway 51 commercial corridor to the growing development along 353rd Avenue. Coweta is part of our Tulsa-metro service area in Wagoner County. Free written quote — call (580) 304-7225.',
    intro:
      'The pothole in your Coweta lot has probably been filled before, and it probably came back. That is not bad luck — it is what cold-patch does. Loose mix dropped into a hole cannot bond to the asphalt around it, so its edges stay open, traffic loosens it, and the hole returns. The only way to stop the repeat is to leave no seam behind.',
    para:
      'Infrared repair is how you do that. We reheat the failed asphalt right where it is until it softens at about 300°F, blend in fresh hot mix, and compact the old and new together into one bonded surface. No cold joint means no weak edge for Highway 51 traffic and Wagoner County weather to work apart. Coweta’s commercial corridor is expanding, and property owners here are investing in pavement that matches the growth — a bonded repair is part of that, not a patch that undoes it.',
    included: [
      'The existing asphalt reheated and reused, ending the cold-patch that keeps popping out',
      'Fresh hot mix compacted into the softened area as a single bonded surface',
      'A sealed, seamless edge that traffic cannot pry loose',
      'Traffic-ready in about an hour after compaction',
    ],
    infrared:
      'Infrared is a surface repair, and it is the right one when the base under the pavement is still sound — potholes, settled spots, deteriorating seams, and trip hazards. It will not repair a failed base. Alligator-pattern cracking, a soft area that gives under weight, or pavement that has settled deep all mean the structure underneath is gone, and no surface reheating fixes that. Those areas need full-depth repair, and we tell you honestly which one you are looking at so you are not paying to patch the same hole twice.',
    faqs: [
      { q: 'Does RemarkaPave do pothole repair in Coweta?', a: 'Yes. Coweta is part of our Tulsa-metro service area, and repairs come with a free written quote.' },
      { q: 'Why does the same pothole keep reopening?', a: 'Because a cold-patch never bonds to the surrounding asphalt, its edges stay open and traffic works it loose. Infrared fuses the repair in place, so there is no edge to fail.' },
      { q: 'How soon can traffic use the repair?', a: 'About an hour after we compact it — and we schedule around your business hours.' },
      { q: 'What if my base is the problem?', a: 'Then infrared is the wrong tool and we say so. Soft spots, deep settlement, and alligator cracking need full-depth repair instead.' },
    ],
  },
  {
    slug: 'jenks-ok',
    name: 'Jenks',
    county: 'Tulsa County',
    neighbors: ['Bixby', 'Tulsa'],
    h1: 'Infrared Pothole Repair in Jenks, OK',
    title: 'Infrared Pothole Repair Jenks OK | RemarkaPave',
    meta: 'Jenks, OK pothole repair with infrared — inspect the edge yourself: bonded, no cold seam. Riverwalk and downtown retail. Free written quote from RemarkaPave: (580) 304-7225.',
    answer:
      'RemarkaPave repairs potholes in Jenks, Oklahoma with infrared asphalt repair — from the antique shops of downtown to the shopping and dining along Riverwalk Crossing. Jenks is part of our Tulsa-metro service area. Free written quote — call (580) 304-7225.',
    intro:
      'You can judge a pothole repair yourself without knowing anything about asphalt — just look at the edge. If there is a hard line all the way around a darker rectangle, that is a cold seam, and it is already a path for water. A proper infrared repair does not have one, and that is the whole point.',
    para:
      'On a Jenks job, an infrared heater warms the existing asphalt in place to about 300°F, we rake fresh hot mix into the softened area, and we compact old and new together until they fuse into one surface. Run your eye — or your hand — around the finished repair and there is no seam to find, because the new and existing asphalt cured as a single piece. Jenks pulls in shoppers and tourists from across Green Country, so a lot that reads as maintained is doing quiet marketing work, and a seamless repair keeps it that way. It is drivable in about an hour.',
    included: [
      'The existing asphalt reheated in place so the repair fuses into the lot, not onto it',
      'Hot mix compacted with the softened pavement into one continuous surface',
      'A finished edge you can inspect — no cold seam, no hard line around the patch',
      'Open to traffic about an hour after compaction',
    ],
    infrared:
      'Infrared is the right method for surface failures over a solid base — a pothole, a settled dip, a seam that has come apart, a lip that trips a shopper at the door. It is not a base repair. If the asphalt has cracked into an alligator-hide pattern, gives when you press on it, or has sunk well below the pavement around it, the base has failed and a reheated surface will not hold. Those spots need full-depth repair, and we will show you the difference on the walk-through so you know exactly what you are paying to fix.',
    faqs: [
      { q: 'Does RemarkaPave repair potholes in Jenks?', a: 'Yes — Jenks is part of our Tulsa-metro service area, and every repair comes with a free written quote.' },
      { q: 'How can I tell the repair was done right?', a: 'Look at the edge. A good infrared repair has no cold seam — no hard line around a darker rectangle — because the new and existing asphalt were compacted as one surface.' },
      { q: 'How long until customers can drive on it?', a: 'About an hour after compaction. We schedule around your busiest hours so it barely interrupts the lot.' },
      { q: 'What if the base under the lot has failed?', a: 'Then we quote full-depth repair. Alligator cracking, soft spots, and deep settlement are base problems that infrared cannot reach.' },
    ],
  },
  {
    slug: 'owasso-ok',
    name: 'Owasso',
    county: 'Tulsa County',
    neighbors: ['Collinsville', 'Tulsa'],
    h1: 'Infrared Pothole Repair in Owasso, OK',
    title: 'Pothole Repair Owasso OK — Infrared Asphalt | RemarkaPave',
    meta: 'Infrared pothole repair in Owasso, OK seals the edge against freeze-thaw water so the patch lasts. US-169 retail corridor. Free written quote from RemarkaPave: (580) 304-7225.',
    answer:
      'RemarkaPave repairs potholes in Owasso, Oklahoma with infrared asphalt repair — from the Smith Farm Marketplace area to the US-169 retail corridor. Owasso is part of our Tulsa-metro service area. Free written quote — call (580) 304-7225.',
    intro:
      'Behind almost every pothole in an Owasso lot is water and a hard winter. Water works into an open crack or an old patch seam, freezes overnight, expands, and lifts the asphalt — and after enough freeze-thaw cycles, a piece breaks free and you have a hole. Fixing the hole without closing the way water got in just resets the clock.',
    para:
      'Infrared repair closes it. We reheat the existing asphalt in place to about 300°F, work fresh hot mix into it, and compact the whole area into one bonded surface with no cold seam. With no open edge, water sheds off the repair instead of soaking under it and freezing. Owasso’s retail along US-169 is measured against brand-new centers, so a repair that holds and blends in keeps an older lot competitive. The patch takes traffic again in about an hour.',
    included: [
      'The failed asphalt reheated in place and kept in the repair',
      'Fresh hot mix compacted into the softened pavement so there is no open joint',
      'A sealed edge that keeps freeze-thaw water from getting back under the repair',
      'Drivable roughly an hour after compaction',
    ],
    infrared:
      'Infrared repairs the surface when the base beneath is still solid — potholes, settled spots, failed seams, and trip hazards are all in scope. Base failure is not. When cracking spreads into an alligator pattern, when a spot feels soft and moves under weight, or when pavement has settled deep, the base has broken down and reheating the top layer does nothing for it. Those areas need full-depth repair, and we call that out before quoting so you are not spending on a surface patch over a structural problem.',
    faqs: [
      { q: 'Does RemarkaPave serve Owasso?', a: 'Yes — Owasso is part of our Tulsa-metro service area, reached on our regular metro routes.' },
      { q: 'Will an infrared repair hold through winter?', a: 'That is what it is built for. With no cold seam, water cannot get under the edge and freeze — which is what breaks ordinary patches apart.' },
      { q: 'Is infrared worth it over a quick cold-patch?', a: 'For a repair that lasts, yes. Cold-patch leaves an open edge that reopens; infrared bonds the mix to the existing asphalt so the repair stays put.' },
      { q: 'What if the base has failed under my lot?', a: 'We quote full-depth repair for that. Infrared only fixes the surface — soft spots, deep settlement, and alligator cracking need the base rebuilt.' },
    ],
  },
  {
    slug: 'sand-springs-ok',
    name: 'Sand Springs',
    county: 'Tulsa County',
    neighbors: ['Tulsa', 'Sapulpa'],
    h1: 'Infrared Pothole Repair in Sand Springs, OK',
    title: 'Infrared Pothole Repair Sand Springs OK | RemarkaPave',
    meta: 'Pothole repair in Sand Springs, OK with infrared — a dense, bonded patch built for heavy industrial traffic, drivable in about an hour. Free quote from RemarkaPave: (580) 304-7225.',
    answer:
      'RemarkaPave repairs potholes in Sand Springs, Oklahoma with infrared asphalt repair — from the Highway 97 corridor to the industrial sites along the Arkansas River. Sand Springs is part of our Tulsa-metro service area. Free written quote — call (580) 304-7225.',
    intro:
      'Sand Springs pavement works harder than most. Heavy industrial traffic near the river mixes with everyday neighborhood retail, and pavement under that load shows wear sooner and turns small failures into potholes faster. A repair here has to be dense and bonded, not a scoop of loose mix that a loaded truck will kick right back out.',
    para:
      'Infrared repair gives you that. We reheat the existing asphalt in place to about 300°F, rake in fresh hot mix, and compact old and new together into a single dense surface with no cold seam. Reheating and re-compacting the existing material makes for a tighter, more durable repair than dropping cold-patch into a hole — which matters where trucks and equipment run over it daily. And it is drivable in about an hour, so a working yard barely pauses.',
    included: [
      'The existing asphalt reheated and re-compacted into a dense, bonded repair',
      'Fresh hot mix worked into the softened area so new and old cure as one surface',
      'A seamless edge built to take truck and equipment traffic without unraveling',
      'Open to traffic in about an hour, so a busy yard keeps moving',
    ],
    infrared:
      'Infrared is a surface repair for damage over a base that is still carrying its load — potholes, settled spots, failed seams, and trip hazards. It is not a fix for a base that has failed under heavy use. Alligator-pattern cracking, a soft spot that flexes under a load, or a section that has settled deep all point to base failure, and reheating the surface will not restore it. Those areas need full-depth repair — remove and rebuild — and on hard-working industrial pavement that call matters, so we make it honestly before quoting.',
    faqs: [
      { q: 'Does RemarkaPave repair potholes in Sand Springs?', a: 'Yes. Sand Springs is part of our Tulsa-metro service area, and repairs come with a free written quote.' },
      { q: 'Will an infrared repair hold up to heavy truck traffic?', a: 'Yes. Reheating and re-compacting the existing asphalt makes a denser, better-bonded repair than cold-patch, which is what you want under industrial loads.' },
      { q: 'How long is the area out of service?', a: 'About an hour. The repair is compacted and drivable quickly, and we schedule around your operation.' },
      { q: 'What if the base has failed under the load?', a: 'Then we quote full-depth repair. Soft spots, deep settlement, and alligator cracking are base failures — infrared repairs the surface, not the structure.' },
    ],
  },
  {
    slug: 'skiatook-ok',
    name: 'Skiatook',
    county: 'Osage County',
    neighbors: ['Collinsville', 'Sperry'],
    h1: 'Infrared Pothole Repair in Skiatook, OK',
    title: 'Pothole Repair Skiatook OK — Infrared Asphalt | RemarkaPave',
    meta: 'Skiatook, OK pothole repair with infrared — no cold seam to pop out, drivable in about an hour. US-75 strip and lake-traffic lots. Free written quote from RemarkaPave.',
    answer:
      'RemarkaPave repairs potholes in Skiatook, Oklahoma with infrared asphalt repair — from the US-75 commercial strip to the retail and marina traffic feeding Skiatook Lake. Skiatook straddles Osage and Tulsa counties and is part of our Tulsa-metro service area. Free written quote — call (580) 304-7225.',
    intro:
      'A cold-patch in a Skiatook lot is a temporary thing pretending to be a repair. Loose mix pressed into a hole never bonds to the pavement around it, and with the lake-season surge in traffic on top of everyday local business, it works loose fast — so the hole is back before long, usually wider. Ending that means not leaving a seam to begin with.',
    para:
      'Infrared repair does exactly that. We heat the existing asphalt in place until it softens at about 300°F, rake fresh hot mix into it, and compact old and new together into one bonded surface with no cold joint around the edge. Skiatook draws marina and lake traffic on top of its regular local trade, and a clean, seamless lot handles both without looking neglected. The repair is drivable in about an hour, and it holds instead of becoming next season’s pothole.',
    included: [
      'The existing asphalt reheated and reused instead of a loose cold-patch that pops out',
      'Hot mix compacted into the softened pavement as a single bonded surface',
      'A sealed, seamless edge that heavy seasonal traffic cannot work loose',
      'Traffic-ready in about an hour after compaction',
    ],
    infrared:
      'Infrared is the right fix for surface failures over a base that is still solid — potholes, settled spots, failing seams, and trip hazards. It is not the fix for a failed base. When cracking spreads into an alligator pattern, when a spot gives underfoot, or when pavement has settled well below its surroundings, the base has broken down and reheating the surface will not bring it back. Those areas call for full-depth repair, and we tell you which one your lot needs rather than sell a patch that will not last the season.',
    faqs: [
      { q: 'Does RemarkaPave serve Skiatook?', a: 'Yes — Skiatook is part of our Tulsa-metro service area, covering both the Osage and Tulsa county sides of town.' },
      { q: 'Why do cold-patches fail so fast in my lot?', a: 'Cold mix never bonds to the surrounding asphalt, so seasonal lake traffic works its open edges loose. Infrared fuses the repair to the existing pavement, which removes that weak point.' },
      { q: 'How soon can the lot take traffic again?', a: 'About an hour after compaction, and we schedule around your busy periods.' },
      { q: 'What if the base has failed, not just the surface?', a: 'Then we quote full-depth repair. Alligator cracking, soft spots, and deep settlement are base failures that infrared cannot fix.' },
    ],
  },
];

// Page objects for getStaticPaths — slug becomes /services/pothole-repair-<citySlug>/
export function potholePages() {
  return potholeCities.map((c) => ({
    city: c,
    slug: `pothole-repair-${c.slug}`,
  }));
}
