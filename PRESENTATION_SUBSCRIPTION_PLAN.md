# Presentation & Porter Subscription — Tiered Plan + Lot-Rating System

Prepared July 2026. Goal: turn Todd's high-frequency service idea (portering, dumpster-pad
washing, window washing, striping, crack/seal, pothole patching) into a **recurring
subscription** with a repeatable way to **grade a lot** and drop it into the right **tier** —
priced so the flat monthly fee actually clears cost after drive time and the every-few-years
capital work.

This is a **new product line, separate from the existing Care Plan.** The current
`/care-plan/` (Essential / Protect / Total Care) is a *pavement-lifecycle* program — 1 to 4
visits a **year**, built around crack fill, sealcoat and striping. What Todd described here is
a *presentation / day-porter* program — **weekly-and-more** visits, built around
cleanliness, appearance, and documentation, with the pavement work folded in on cycle. They
serve different buyers and shouldn't wear the same name (see §7, recommendation #12).

---

## 1. What Todd described (captured, then critiqued)

| Service | Todd's stated cadence | Notes |
|---|---|---|
| **Portering** | 3×/week — pick up all trash, verify "everything in order" (no graffiti, no broken windows, nothing out of the ordinary), **with picture updates** | The anchor service. Photo updates = the differentiator. |
| **Dumpster-pad pressure wash** | ≥1×/week, prefers **2×/week** | Highest-frequency wet work; grease-driven. |
| **Window / storefront washing** | 2×/**month** (Todd first said "week," corrected to month) | Storefront glass, ground level. |
| **Line-striping touch-ups** | Quarterly touch-ups, **full re-stripe 1×/year** | Episodic, priced per stall. |
| **Crack fill + seal coat** | Every **2–3 years** (industry standard) | Capital work — big dollars, rare cadence. |
| **Pothole repair** | **Free** if **< 5 potholes at 2'×2'**, depending on lot condition | Liability + cost risk — see §6. |

The instinct is right: this is exactly the bundle that turns a one-off paving vendor into a
**property-presentation partner** on monthly recurring revenue (MRR). But two things in that
list fight each other, and one clause is dangerous. Both are fixed in the design below.

**The core tension:** the list mixes two completely different cost structures —

- **Labor-recurring** (porter, pressure wash, window wash): small dollars, *high frequency*,
  cost scales with **drive time**. Priced per visit.
- **Capital-episodic** (crack fill, sealcoat, full re-stripe, pothole patch): big dollars,
  *low frequency* (every 1–3 years), cost scales with **lot square footage**. Priced per sq ft / per stall.

The resolution (Todd's call, July 2026 — and the right one): run it like the strongest trade
memberships (HVAC/plumbing service agreements). The monthly fee covers **only the
labor-recurring services** (porter, dumpster-pad wash, window wash + the photo log), and
membership earns a **tier-based discount on all the capital work** — striping, crack fill,
sealcoat, pothole repair, and mill & pave — each quoted per job at then-current prices (§4).
Capital dollars never hide inside the flat fee, so there's no sinking-fund math to get wrong,
no month-30 sealcoat eating a year of margin, and no refund fight if a customer cancels
before the big job. The trade-off: the customer's capital bills still spike (softened by the
discount) — an optional "all-inclusive" amortized variant can be offered case-by-case to
property managers who insist on one flat line, priced with a term commitment.

---

## 2. The Lot-Rating System ("RemarkaScore")

Todd asked to *"rate their lot."* Here's a repeatable 0–100 rubric that does three jobs at
once: **(a)** recommends a tier, **(b)** sets a condition price-multiplier, and **(c)** flags
whether a one-time **restoration** is required *before* the flat-fee subscription can start.
This is the single most important cost-control tool in the whole program — it stops Todd from
inheriting a failed lot on a fixed fee.

Score each factor 1–5 (5 = best/cleanest), multiply by the weight, sum to 100.

| # | Factor | What you're grading | Weight | Drives… |
|---|---|---|---|---|
| 1 | **Pavement structure** | % cracking, potholes, alligatoring, base failure | ×6 | Onboarding restoration + pothole risk |
| 2 | **Sealcoat / surface age** | Oxidation, last seal date, raveling | ×4 | Capital amortization line |
| 3 | **Striping & ADA** | Line visibility, ADA/fire-lane compliance | ×3 | Re-stripe scope |
| 4 | **Litter / debris load** | How fast trash accumulates (traffic, tenants, wind exposure) | ×4 | **Porter frequency = tier** |
| 5 | **Dumpster / grease severity** | Enclosure condition, grease, odor, drain | ×3 | Pressure-wash frequency |
| 6 | **Glass frontage** | Pane count, height, reachability | ×2 | Window-wash scope |
| 7 | **Size & traffic** | Sq ft + vehicle/day volume | ×5 | Everything (base price) |
| 8 | **Vandalism / graffiti exposure** | History, lighting, neighborhood | ×3 | Add-on risk (see rec #7) |

**Grade → action:**

| Score | Grade | Lot state | Action |
|---|---|---|---|
| 85–100 | **A** | Sharp, well-kept | Subscribe to **maintain**. Lowest multiplier (×1.0). Tier by size/frequency need. |
| 70–84 | **B/C** | Minor backlog | Light onboarding (deep clean + spot fixes), then Pro tier. Multiplier ×1.1–1.2. |
| 55–69 | **D** | Real backlog | **Required restoration project quoted separately** (catch-up crack fill, patch, re-stripe, first deep clean). Subscription starts *after*. Multiplier ×1.2–1.35. If the owner balks at the restoration price: subscribe now — **member pricing applies to the deferred restoration** when they book it (see `RESTORATION_PATHWAY_PLAN.md`). |
| < 55 | **F** | Failed lot | Do **not** subscribe first. Route into the **RemarkaRestore Pathway** (`RESTORATION_PATHWAY_PLAN.md`): phased or financed mill & overlay / reconstruction, with the subscription auto-quoted for the season after completion. |

Keep the filled-in scorecard **attached to the contract** — it's the baseline the annual
re-grade compares against, and it's the paper trail that proves lot condition at start (a
liability shield the day a tenant claims a pothole "was your job").

> **Recommended next artifact:** build this as an interactive scorecard the same way
> `tools/crack-fill-bid-calculator.html` works — reps fill 8 sliders on a phone during the
> walk, it spits out grade + tier + multiplier + a "restoration required?" flag. Say the word
> and I'll build it.

---

## 3. The Three Tiers

Todd's stated cadence **is the top tier.** Two dials differentiate the tiers: **frequency**
of the included labor services (frequency drives Todd's cost — drive time + labor), and
**discount depth** on the capital work (member pricing is the retention hook).

**What the monthly fee includes** — labor services only:

| Included monthly | **Tier 1 — Curb Appeal** | **Tier 2 — Presentation Pro** ⭐ *recommended* | **Tier 3 — White-Glove** |
|---|---|---|---|
| **Porter visit** (trash + condition check + photos) | **1×/week** | **2×/week** | **3×/week** |
| **Dumpster-pad pressure wash** | 1×/month | **1×/week** | **2×/week** |
| **Window / storefront wash** | 1×/month | **2×/month** | 2×/month (weekly optional) |
| **Cold-patch pothole cap** (during a porter visit — §6) | — (billed per visit) | Up to **10 sq ft / quarter** | Up to **20 sq ft / quarter** |
| **RemarkaReport™ photo log** | Monthly summary | **Per-visit** | Per-visit + **quarterly executive review** |
| **Annual RemarkaScore re-grade + 5-yr capital plan** | ✓ | ✓ | ✓ |
| **Waived mobilization fees** on member jobs | — | ✓ | ✓ |
| **Response time (new issues)** | 5 business days | **48–72 hr** | **24–48 hr** |
| **Indicative monthly** (typical 15–30k sq ft pad, 1 dumpster, ~15 panes) | **$250–$550** | **$600–$1,150** | **$1,300–$2,400** |

**Member pricing on capital work** — quoted per job at then-current rates, discount by tier:

| Quoted work | Tier 1 | Tier 2 ⭐ | Tier 3 |
|---|---|---|---|
| Striping (touch-ups & full re-stripe) | **10% off** | **15% off** | **20% off** |
| Crack fill / routing | **10% off** | **15% off** | **20% off** |
| Sealcoating | **10% off** | **15% off** | **20% off** |
| Pothole repair, hot-mix (beyond the included cold-patch cap) | **10% off** | **15% off** | **20% off** |
| **Mill & overlay / reconstruction** (GC'd — see `RESTORATION_PATHWAY_PLAN.md`) | Priority scheduling | **5% off** after 12 mo active | **10% off** after 12 mo active |

Discount rules (the anti-gaming print): member pricing requires an **active subscription at
booking and through completion**; discounts apply to RemarkaPave's quoted scope, not
pass-through materials escalation; self-performed discounts start **day one** (the 12-month
minimum term is the guard — a customer who "games" a 20% sealcoat discount by subscribing
just bought a year of Tier 3); the **mill & pave discount is tenure-gated to 12 months**
because GC'd margin is thin (§4).

The monthly bands land below the industry's Basic/Pro/Elite benchmarks (~$850 / $1,450 /
$2,200) because capital work is no longer baked in — the capital revenue now arrives as
discounted-but-still-profitable project work on top of MRR. **Aim the sales mix at ~20%
Tier 1 / 60% Tier 2 / 20% Tier 3** and track *attach rate* (% of members who buy at least
one capital job per year) as the metric that proves the model.

---

## 4. How the money works (build-up, internal only)

The public site stays **no-unit-price** (that's the deliberate strategy in the README and
`services.js` — value language + written quote). These numbers are the **internal quoting
logic** behind the flat monthly fee, not website copy.

**Monthly fee = (Σ per-visit cost × frequency × margin) + report/overhead** — labor only.
Capital work is quoted per job with the member discount applied (§3).

Per-visit market anchors (2026, adjusted toward OK's lower band):

| Line item | Market per-visit | Recurring-contract per-visit (what to model) |
|---|---|---|
| Porter pass (30–60 min, single pad) | day-porter billed hourly | **$45–$110 / visit** |
| Dumpster-pad pressure wash (1 pad, on contract) | $150–$400 one-off | **$40–$90 / visit** on weekly contract |
| Storefront window wash (~15 panes, ground) | $1–$2 / pane high-freq | **$50–$130 / visit** |
| Pothole cold-patch (throw & compact) | $75–$400 / pothole one-off | material ~cheap; **cost is the mobilization** |

**Why the discount ladder is affordable — margin math:**

- **Self-performed pavement work runs fat margins once equipment is owned.** The crack-fill
  plan documented material at only 10–15% of billed price and post-equipment margins of
  **45–55%**; striping and sealcoat behave similarly. A **20% member discount on a
  50%-margin service still leaves ~30% margin** — cheap for what it buys: retention, the
  inside track on every capital job on the property, and zero customer-acquisition cost on
  that work. The discount isn't charity; it's replacing the sales/bidding cost of winning
  that job competitively.
- **GC'd mill & pave is the exception.** Todd's take is a **15–25% GC markup** on a sub's
  price — a 10% customer discount consumes roughly half of it. That's why the ladder caps
  mill & pave at **5–10%, tenure-gated to 12 months of active membership** (by then the
  member has paid $7k–$29k in fees), and why Tier 1's mill & pave benefit is priority
  scheduling, not a percentage.
- **Waived mobilization is the sleeper perk.** The crack-fill plan carries a $100–$250
  mobilization fee on small jobs. For members the porter route already passes the property,
  so waiving it costs almost nothing and reads as real money to the customer.

**Two hard rules that make or break margin:**

1. **Route density is everything.** A 2×/week or 3×/week visit only pencils if accounts are
   **clustered by zone** — drive time is dead cost you can't bill. Sell high-frequency tiers
   **by area** (or add a travel surcharge outside the core Ponca City / Kay County zone, the
   same way the crack-fill plan carries a $100–$250 mobilization fee for small jobs). One
   3×/week account 25 minutes out of the way can wipe out its own margin.
2. **Minimum contract term = 12 months, auto-renew, monthly billing.** With capital work out
   of the flat fee there's no sinking fund to protect, so 36-month lock-ins are no longer
   structurally necessary — 12 months is enough to make the day-one discounts self-guarding
   and keeps the sale easy. Offer a rate-lock (no price increases) as the carrot for
   24–36-month signings. See rec #5 on "bimonthly."

---

## 5. Contract terms, exclusions, seasonality

- **Term:** 12-month minimum, **auto-renew**, monthly billing; 24–36-month signings earn a
  rate-lock. Tier can move at renewal (and you recommend *down* if the lot no longer needs
  it — mirrors the existing Care Plan's honest-downgrade promise, which builds trust and
  referrals). Member discounts require active status at booking **and through completion**
  of the discounted job.
- **Onboarding fee:** one-time, grade-gated (§2). Covers first deep clean + any required
  restoration. Never fold a D/F lot's backlog into the flat fee.
- **Oklahoma seasonality:** sealcoat/stripe season is ~**April–October** (needs dry pavement,
  50°F+). Pressure washing risks freezing Nov–Feb. Build a **seasonal calendar**: shift winter
  budget toward porter + condition checks; offer **snow/ice as a paid add-on** rather than
  eating it.
- **Exclusions (put in writing):** structural/base failure, mill-and-overlay, alligatored
  areas, wide cracks over ¾" (route to the mastic/exclusion clause already in the crack-fill
  plan), snow removal, graffiti *removal* and glass *replacement* (flag-and-quote, rec #7),
  storm/vandalism cleanup beyond normal load, biohazard.
- **Insurance & photo baseline:** the attached RemarkaScore scorecard + first-visit photo set
  is the pre-existing-condition record.

---

## 6. Fix the "free pothole" clause before it costs you

Todd's clause — *"free if < 5 potholes at 2'×2', depending on lot condition"* — is generous
in a way that can quietly lose money and create liability. Two problems:

1. **2'×2' is a *large* pothole (4 sq ft), and large potholes usually mean base failure.**
   Filling one with cold patch hides a subgrade problem and can leave a sinking, re-opening
   depression — a trip hazard on Todd's name. That's the same reasoning the crack-fill plan
   uses to *exclude* wide cracks.
2. **"Free" but mobilized separately loses money.** The material for five 2'×2' patches is
   ~$40–$100, but a dedicated hot-mix trip carries a $100–$300 minimum. If the porter isn't
   already on-site, "free" is a net loss every time.

**Tightened policy (recommended wording):**

> *Included pothole service: surface potholes up to 4 sq ft each and ≤ 3" deep, **cold-patch
> throw-and-compact only**, performed during a scheduled porter visit, up to **[the sq ft
> cap for your tier — 10/quarter on Tier 2, 20/quarter on Tier 3]** included; hot-mix repair
> beyond the cap is quoted at member pricing. Potholes showing base failure, alligatoring, or subgrade
> movement are **excluded** and documented (photo + location) for a separate hot-mix repair
> quote. Cold-patch is a temporary stabilization, not a permanent structural repair.*

This keeps the "we just take care of it" feel Todd wants, ties the free work to a visit that's
**already happening** (no wasted mobilization), caps the exposure, and routes the dangerous
base-failure potholes to a paid, properly-scoped repair — protecting both margin and liability.

---

## 7. Where to improve the plan (the elaborate part)

Ranked by impact on Todd's margin and risk:

1. **Keep capital work out of the flat fee — membership discounts instead of amortization.**
   *(Adopted July 2026 — Todd's restructure.)* The monthly fee covers labor services only;
   striping, crack fill, sealcoat, pothole and mill & pave are quoted per job with tiered
   member discounts (§3–§4). This removes the plan's single biggest financial trap (capital
   dollars hidden in a flat fee), keeps every capital job priced at then-current rates, and
   turns the discount into a retention lever. Guard it with the discount rules in §3:
   active-through-completion, tenure-gate on mill & pave, discounts sized to per-service
   margin (deep on self-performed, shallow on GC'd).

2. **Grade-gate a one-time onboarding/restoration fee.** Never start a flat-fee subscription
   on a D/F lot. Fix the backlog as a separate quote, *then* maintain. The RemarkaScore rubric
   (§2) is what enforces this.

3. **Tighten the pothole clause** (§6). Cap it, cold-patch only, tie to an existing visit,
   exclude base failure.

4. **Frequency is the tier engine — vary it.** Todd listed one cadence; that's the top tier.
   Build the ladder down (§3) so buyers self-select and the cheap tier doesn't cost you the
   same as the expensive one.

5. **Resolve "bimonthly."** It means either *twice a month* or *every two months* — opposite
   things. For a program built on weekly labor, **bill monthly on an annual auto-renew.**
   Every-two-months billing hurts cash flow and makes the member-discount tenure math
   awkward. (If "bimonthly" meant the *service* cadence, it's already superseded by the
   per-tier frequencies.)

6. **Make the photo log a named, standardized deliverable — RemarkaReport™.** You already own
   the brand, plus a worker + HubSpot logging pipeline (`/api/accept`, the worker). Turn every
   porter visit into a **timestamped, geo-tagged photo log** auto-compiled into a report.
   This is the #1 retention and premium-pricing lever — property managers *pay for proof*, and
   it doubles as your liability record (documents the graffiti/broken window you flagged, and
   proves what the lot looked like when you left).

7. **Decide "flag" vs. "fix" for graffiti and broken glass — and price accordingly.** "Make
   sure there's no graffiti / no broken windows" reads as a *removal* promise, but graffiti
   removal and glass replacement are specialized, variable-cost work. Make the porter's job
   **detect → document → notify** (included), and sell **removal/replacement as add-ons or
   pass-through**. Otherwise one tagged wall can blow a month's margin.

8. **Sell high-frequency tiers by zone.** Route density is the hidden P&L driver (§4, rule 1).
   Consider launching Tier 2/3 only where you can cluster accounts, or attach a travel
   surcharge outside the core zone.

9. **Add an à-la-carte upsell ladder.** Snow/ice, landscaping edges & islands, cart-corral
   detailing, bollard/curb repainting, sign & EV-stall cleaning, pet stations, pressure-washing
   sidewalks/entrances, quarterly RemarkaReport executive summaries. These lift ARPU without
   new sales.

10. **Reconcile with the existing Care Plan so you don't sell two confusing "3-tier"
    products.** Cleanest options: **(a)** rename this line (e.g. *Presentation Plan* /
    *Porter Care*) and position the annual Care Plan as the pavement-only entry point that
    *upgrades into* this; or **(b)** merge into **one** 3-tier ladder where the top tier is
    weekly-touch presentation and the bottom is annual pavement care. Two separate
    Essential/Protect/Total ladders on the same site will confuse buyers and dilute both.

11. **Re-grade annually and show the delta.** Re-run RemarkaScore each renewal, show the owner
    the before/after — it justifies the spend, catches tier drift, and is a natural moment to
    upsell or honestly downsell.

12. **Build the payback story into the pitch.** Frame it like the Care Plan already does:
    catching problems at the porter/crack-filler stage is a fraction of structural repair, and
    a managed-looking lot protects tenant retention and property value. Presentation isn't a
    cost — it's the cheapest liability insurance a property has.

---

## 8. Suggested next steps

1. **Pick the "bimonthly" answer** (recommend: monthly billing, annual auto-renew) and the
   tier names (recommend renaming to avoid Care-Plan collision — rec #10).
2. **Set the pothole cap number** (the `[20 sq ft/quarter]` placeholder in §6).
3. **Approve the RemarkaScore weights** (§2) — tune to how Todd actually thinks about lots.
4. **Build the RemarkaScore scorecard tool** (interactive, phone-friendly, like the existing
   bid calculator) — I can build this next if you want it.
5. **Draft the one-page tier sheet + contract exclusions** for the sales binder / a future
   `care-plan`-style page.

---

## Sources

- [Evergreen Cleaning Group — Day Porter Cost](https://evergreencleaninggroup.com/what-does-day-porter-cost-chicago-suburbs/)
- [LOT Management — Day Porter Services](https://www.lotmanagement.com/services/day-porter-services/)
- [UnitedExpress — How Often to Schedule Parking Lot Maintenance (2026)](https://unitedexpress.us/how-often-to-schedule-parking-lot-maintenance-2026-guide/)
- [Bowman — Seal Coating vs Striping Lifecycles](https://bowmanparkinglotstriping.com/seal-coating-vs-parking-lot-striping-lifecycles/)
- [Rose Paving — Striping Maintenance](https://www.rosepaving.com/blog/parking-lot-striping-maintenance/)
- [Hometown Dumpster Rental — Dumpster Pad Cleaning Costs](https://www.hometowndumpsterrental.com/blog/commercial-dumpster-pad-and-container-cleaning-costs)
- [HomeGuide — Commercial Pressure Washing Prices (2026)](https://homeguide.com/costs/commercial-pressure-washing-prices)
- [HomeGuide — Asphalt Repair / Pothole Costs (2026)](https://homeguide.com/costs/asphalt-repair-cost)
- [AsphaPro — Pothole Repair Cost Guide (2026)](https://asphapro.com/blog/pothole-repair-cost.html)
- [SealMaster — Cost to Fix a Pothole](https://sealmaster.net/faq/much-cost-fix-pothole/)
- [Housecall Pro — Window Cleaning Price Guide (2026)](https://www.housecallpro.com/resources/how-to-price-window-cleaning-guide/)
- [Jobber — Window Cleaning Pricing (2026)](https://www.getjobber.com/academy/window-cleaning/how-to-price-window-cleaning/)
- [Financial Models Lab — Parking Lot Maintenance Tiers & ARPU](https://financialmodelslab.com/blogs/how-much-makes/parking-lot-maintenance)
