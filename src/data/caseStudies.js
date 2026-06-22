// Case studies data — single source of truth for the Work page.
// Mirrors the shape used by @/data/blogs so the Work list can derive its
// categories and the per-study detail page (CaseStudyDetail) the same way.
//
// Put images in public/images/case-studies/ and reference with a leading slash.
// Any study without an `image` falls back to the gradient cover automatically.
//
// ─────────────────────────────────────────────────────────────────────────
// SCHEMA — every field below is OPTIONAL except the ones marked (required).
// The detail template renders a block only when its data is present, so the
// SAME template works for a PPC campaign (metric-heavy), a graphic-design
// project (gallery-heavy), a CRM/dashboard build (feature-heavy), etc.
//
// {
//   id,            // (required) unique
//   slug,          // (required) used for /work/<slug>
//   category,      // (required) drives the filter chips on the list
//   client,        // (required) shown on the card + detail
//   title,         // (required) card + detail headline
//   summary,       // (required) card blurb + detail lead paragraph
//   image,         // card cover + detail hero (falls back to gradient)
//
//   // --- detail meta (sidebar) ---
//   industry,      // "Real Estate", "SaaS", ...
//   timeline,      // "4 months"
//   year,          // "2025"
//   role,          // "Lead, end-to-end" / "Paid media"
//   services,      // string[] -> chips
//   stack,         // string[] -> chips ("tools / tech")
//   liveUrl,       // shows a "Visit project" button when set
//
//   // --- headline numbers (renders a row of stat cards) ---
//   metrics,       // [{ value: "3.1x", label: "Return on ad spend", sub?: "up from 1.4x" }]
//
//   // --- narrative (string OR string[]; arrays render as paragraphs) ---
//   overview,
//   challenge,
//   approach,      // string[] -> numbered steps; string -> paragraph
//   solution,
//   results,       // string[] -> checklist; string -> paragraph
//
//   // --- product / design work ---
//   deliverables,  // string[] -> chips (great for design / CRM / dashboards)
//   gallery,       // [{ src, alt?, caption? }] -> screenshot/visual grid
//
//   // --- social proof ---
//   testimonial,   // { quote, author, role? }
// }
// ─────────────────────────────────────────────────────────────────────────

// On-brand gradient covers, rotated per card (fallback when no image).
export const COVERS = [
  "from-[#0037CA] to-[#3D6BF0]",
  "from-[#002896] to-[#1b60f4]",
  "from-[#1b60f4] to-[#87b6f4]",
  "from-[#0037CA] to-[#002896]",
];

export const CASE_STUDIES = [
  // ── PPC ──────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "home-services-google-ads-scale",
    category: "PPC",
    client: "Rathna Bhoomi Developers",
    title: "Google Ads that fill the calendar",
    summary:
      "A rebuilt account structure and honest conversion tracking turned wasted spend into a steady stream of booked jobs.",
    image: "/images/case-studies/ppc-home-services.webp",
    industry: "Home Services",
    timeline: "4 months",
    year: "2025",
    role: "Paid media, end-to-end",
    services: ["Google Ads", "Conversion Tracking", "Landing Pages", "Call Tracking"],
    stack: ["Google Ads", "GA4", "Looker Studio", "CallRail"],
    metrics: [
      { value: "3.1x", label: "Return on ad spend", sub: "up from 1.4x" },
      { value: "-46%", label: "Cost per lead" },
      { value: "+82%", label: "Booked jobs / month" },
    ],
    overview:
      "The brand was spending steadily on search but couldn't tell which campaigns produced real bookings versus tyre-kickers. Spend was flat, leads were inconsistent, and the team had stopped trusting the numbers.",
    challenge:
      "A single catch-all campaign mixed high-intent service searches with broad informational terms, and conversions were counted on form views rather than actual booked jobs — so optimisation was flying blind.",
    approach: [
      "Rebuilt the account around service + location intent, splitting emergency jobs from planned work so budgets could be steered independently.",
      "Re-instrumented tracking to count booked jobs and qualified calls, not raw form loads, and fed those signals back into smart bidding.",
      "Shipped service-specific landing pages with click-to-call and trust signals to lift the conversion rate on traffic already being paid for.",
    ],
    results: [
      "ROAS climbed from 1.4x to 3.1x within the first full quarter.",
      "Cost per qualified lead fell 46% as budget shifted to intent that converted.",
      "Monthly booked jobs grew 82% on a near-flat ad budget.",
    ],
    testimonial: {
      quote:
        "For the first time we can see exactly which clicks become customers. We scaled spend without the usual anxiety.",
      author: "Operations Director",
      role: "Regional Home-Services Brand",
    },
  },

  // ── Real Estate ──────────────────────────────────────────────────────
  {
    id: 2,
    slug: "property-marketplace-rebuild",
    category: "Real Estate",
    client: "Novara Nature Estate",
    title: "A faster marketplace that turns browsers into buyers",
    summary:
      "A re-architected front end and optimised media cut load times sharply and lifted enquiry conversions across listings.",
    image: "/images/case-studies/realestate.webp",
    industry: "Real Estate",
    timeline: "5 months",
    year: "2025",
    role: "Front-end + performance",
    services: ["Web Development", "Performance", "Search UX", "Maps Integration"],
    stack: ["React", "Algolia", "Mapbox", "Cloudinary", "Vercel"],
    metrics: [
      { value: "1.4s", label: "Largest Contentful Paint", sub: "from 4.8s" },
      { value: "+37%", label: "Listing enquiries" },
      { value: "-58%", label: "Bounce on search" },
    ],
    overview:
      "Listings looked great but loaded slowly, and the search experience buckled under filters. Buyers abandoned before they ever sent an enquiry.",
    challenge:
      "Heavy unoptimised imagery and a render-blocking search stack meant mobile users — the majority — waited five seconds for results that then janked while filtering.",
    approach: [
      "Moved search to an instant, typo-tolerant index so filters and map updates feel immediate.",
      "Adopted responsive, lazily-loaded media with modern formats to cut the payload on every listing card.",
      "Streamlined the enquiry flow to a few obvious taps with the contact action always in reach.",
    ],
    results: [
      "LCP dropped from 4.8s to 1.4s on mid-range mobile.",
      "Listing enquiries rose 37% with no extra traffic.",
      "Search-page bounce fell 58% after the instant-search rollout.",
    ],
    gallery: [
      { src: "/images/case-studies/realestate-search.webp", caption: "Instant search with map sync" },
      { src: "/images/case-studies/realestate-listing.webp", caption: "Redesigned listing detail" },
    ],
  },

  // ── Graphic Design ───────────────────────────────────────────────────
  {
    id: 3,
    slug: "fintech-brand-identity-system",
    category: "Graphic Design",
    client: "The Vector Graphics",
    title: "A brand identity that scales",
    summary:
      "A complete identity refresh — logo, type, colour, and components — gave the brand a confident, consistent voice.",
    image: "/images/case-studies/fintech.webp",
    industry: "Fintech",
    timeline: "6 weeks",
    year: "2025",
    role: "Brand & visual system",
    services: ["Brand Strategy", "Logo Design", "Design System", "Collateral"],
    deliverables: [
      "Primary + responsive logo suite",
      "Type scale & pairing",
      "Colour tokens (light/dark)",
      "Icon set",
      "Pitch-deck template",
      "Social templates",
    ],
    overview:
      "The startup had outgrown its placeholder branding. Investors and customers were seeing a different visual voice on every touchpoint.",
    challenge:
      "No source of truth existed for colour, type, or logo usage, so every new asset drifted further from the last and the brand read as inconsistent and unfinished.",
    approach:
      "We grounded the identity in a short strategy — what the brand should feel like — then built a token-based system so the same decisions carry from a business card to the product UI.",
    gallery: [
      { src: "/images/case-studies/fintech-logo.webp", caption: "Logo construction & clear space" },
      { src: "/images/case-studies/fintech-palette.webp", caption: "Colour & type tokens" },
      { src: "/images/case-studies/fintech-collateral.webp", caption: "Collateral in use" },
    ],
    testimonial: {
      quote:
        "We finally look like the company we're becoming. Everything ships on-brand now, without a designer in the loop for every asset.",
      author: "Co-founder",
      role: "Fintech Startup",
    },
  },

  // ── Digital marketing website ────────────────────────────────────────
  {
    id: 4,
    slug: "saas-marketing-website",
    category: "Web Development",
    client: "Vidyakunj",
    title: "A high-converting marketing site",
    summary:
      "A rebuilt, SEO-ready marketing site lifted demo requests while loading fast and staying easy for the team to edit.",
    image: "/images/case-studies/saas-website.webp",
    industry: "SaaS",
    timeline: "8 weeks",
    year: "2026",
    role: "Design + build",
    services: ["Web Design", "Development", "SEO", "CMS"],
    stack: ["Next.js", "Tailwind", "Sanity CMS", "Vercel"],
    liveUrl: "",
    metrics: [
      { value: "+64%", label: "Demo requests" },
      { value: "98", label: "Lighthouse performance" },
      { value: "2.1s", label: "Time to interactive" },
    ],
    overview:
      "The old site looked out dated, ranked poorly, and required a developer for every copy change — so it rarely changed.",
    challenge:
      "Marketing couldn't iterate without engineering, page speed hurt rankings, and the messaging didn't lead visitors toward a clear next step.",
    approach: [
      "Designed a focused page system with one obvious primary action per page.",
      "Built on a headless CMS so marketing can publish and A/B test without code.",
      "Baked in technical SEO and performance budgets from the first commit.",
    ],
    results: [
      "Demo requests increased 64% quarter over quarter.",
      "Core Web Vitals moved firmly into the green.",
      "Marketing now ships new pages in hours, not sprints.",
    ],
  },
  // ── User dashboard ───────────────────────────────────────────────────
  {
    id: 5,
    slug: "navanagara-housing-society-lead-generation",
    category: "PPC",
    client: "Navanagara House Building Co-operative Society",
    title: "A lead engine that keeps the membership pipeline full",
    summary:
      "A rebuilt Meta and Google Ads programme — paired with intent-matched landing pages and instant lead routing — turned scattered ad spend into a steady flow of qualified members and site-visit enquiries.",
    image: "/images/navanagara-dashboard.png", // TODO: add real screenshot
 
    industry: "Housing / Co-operative Society",
    timeline: "Ongoing", // TODO: confirm (e.g. "per quarter")
    year: "2025", // TODO: confirm
    role: "Paid media, end-to-end",
    services: [
      "Meta Ads",
      "Google Ads",
      "Landing Pages",
      "Conversion Tracking",
      "Lead Routing",
    ],
    stack: ["Meta Ads", "Google Ads", "GA4", "Meta Pixel", "WhatsApp", "Looker Studio"],
 
    // Anchored to your real campaign data. TODO: confirm the quarter/period.
    metrics: [
      { value: "150+", label: "New members enrolled", sub: "per quarter" },
      { value: "₹210", label: "Cost per lead", sub: "Meta lead-gen" },
      { value: "2.9x", label: "Return on ad spend", sub: "Meta campaigns" },
      { value: "4.9%", label: "Google conversion rate", sub: "search + display" },
    ],
 
    overview: [
      "A house-building co-operative society lives or dies by its membership pipeline. Residential sites are a high-consideration, high-trust purchase, and prospective members spend weeks comparing societies on location, approvals, pricing, and — above all — credibility. For Navanagara, the demand was clearly there; the problem was capturing it predictably. Ad spend was going out across Facebook and Google, but the society couldn't see which campaigns were producing genuine, eligible enquiries versus casual clicks that never converted into members.",
      "Our brief was to turn that uncertainty into a measurable engine: reach the right people in the right localities, give them a clear and trustworthy reason to enquire, and make sure every lead reached the team instantly so it could be followed up while interest was still warm. The goal wasn't more clicks — it was more qualified members at a cost the society could plan around.",
    ],
 
    challenge:
      "Enrolling in a housing society is a considered decision, so a click is a long way from a member. The campaigns needed to attract people genuinely looking for residential sites in the right areas — not bargain-hunters or out-of-region traffic — and then reassure them on the things that matter most: approvals, legal standing, location, and the society's track record. Two further problems compounded this. First, success couldn't be measured on form views or raw clicks; it had to be measured on real, eligible enquiries and enrolments, which meant tracking had to be rebuilt from the ground up. Second, the moment a prospect was ready to act was fleeting — if reaching the society took more than a tap, or if a submitted enquiry sat unseen in an inbox, that intent simply went to a competing society.",
 
    approach: [
      "We restructured the account around real buyer intent — separating high-intent searches for residential sites and plots in target localities from broader awareness audiences — so budget could be steered toward the campaigns actually producing members.",
      "On Meta, we ran locality-targeted lead-generation and conversion campaigns with creative built around the proof points members care about: approvals, location advantages, and the credibility of the society.",
      "On Google, we combined search and display to capture active demand for plots and sites in the area, with ad copy and keywords matched tightly to what serious buyers search for.",
      "We rebuilt conversion tracking so smart bidding optimised toward qualified enquiries and enrolments — not form loads — giving the campaigns honest signals to learn from.",
      "We shipped intent-matched landing pages with the details a cautious buyer needs up front and a frictionless enquiry path, plus persistent WhatsApp and call actions so a ready prospect never has to hunt for a way to reach the team.",
      "We routed every lead straight to the sales team and reviewed performance continuously — pausing what didn't convert, scaling what did, and keeping cost per qualified lead under control.",
    ],
 
    solution: [
      "The result is a paid-media programme the society can plan around. Meta campaigns consistently deliver qualified enquiries at roughly ₹210 per lead with a 2.9x return on ad spend, while Google search and display capture active, high-intent demand at a 4.9% conversion rate — together feeding a steady stream of eligible prospects rather than unpredictable bursts of traffic.",
      "Just as importantly, the system is honest end to end: tracking reflects real enquiries, every lead lands with the team the moment it's submitted, and reporting makes it clear which campaigns and localities produce members. Marketing spend is no longer a leap of faith — it's a lever the society can turn up with confidence.",
    ],
 
    keyFeatures: [
      {
        title: "Intent-based account structure",
        desc: "High-intent site and plot searches separated from awareness audiences, so budget follows what actually enrols members.",
      },
      {
        title: "Locality-targeted creative",
        desc: "Meta and Google campaigns built around approvals, location, and credibility — the proof points that move cautious buyers.",
      },
      {
        title: "Honest conversion tracking",
        desc: "Bidding optimises toward qualified enquiries and enrolments, not form views, so the platforms learn from real outcomes.",
      },
      {
        title: "Intent-matched landing pages",
        desc: "Focused pages that answer a buyer's key questions up front and make enquiring effortless.",
      },
      {
        title: "Instant lead routing",
        desc: "Every enquiry and WhatsApp message reaches the sales team immediately, so leads are followed up while still warm.",
      },
      {
        title: "Continuous optimisation",
        desc: "Weekly review to scale winning campaigns, cut waste, and hold cost per qualified lead steady.",
      },
    ],
 
    results: [
      "A predictable flow of 150+ new members enrolled per quarter from paid channels.",
      "Qualified Meta leads delivered at around ₹210 each, at a 2.9x return on ad spend.",
      "Google search and display converting at 4.9%, capturing active, high-intent demand.",
      "Cleaner targeting that reaches eligible prospects in the right localities, not casual or out-of-region clicks.",
      "Every lead routed straight to the sales team for fast, warm follow-up — no enquiries lost in an inbox.",
      "Clear reporting that shows which campaigns and localities produce members, so spend can be scaled with confidence.",
    ],
 
    deliverables: [
      "Meta lead-gen & conversion campaigns",
      "Google Search + Display campaigns",
      "Conversion tracking rebuild (GA4 + Pixel)",
      "Intent-matched landing pages",
      "WhatsApp & call lead capture",
      "Lead routing to sales",
      "Performance dashboard & reporting",
    ],
 
    // TODO: add real screenshots to public/images/case-studies/
    gallery: [
      { src: "/images/case-studies/navanagara-ads.webp", caption: "Locality-targeted ad creative" },
      { src: "/images/case-studies/navanagara-landing.webp", caption: "Intent-matched landing page" },
      { src: "/images/case-studies/navanagara-dashboard.webp", caption: "Performance reporting" },
    ],
 
    faqs: [
      {
        q: "How does paid advertising help a housing society get members?",
        a: "Meta and Google ads put your society in front of people actively looking for residential sites in your target localities. With the right targeting, creative, and a clear enquiry path, those clicks turn into qualified, eligible enquiries the team can convert into members.",
      },
      {
        q: "How do you make sure the leads are genuine and not just clicks?",
        a: "We rebuild conversion tracking so campaigns optimise toward real enquiries and enrolments rather than form views, and we tighten targeting to the right localities and intent. That filters out casual or out-of-region traffic and focuses spend on prospects who can actually become members.",
      },
      {
        q: "What is a good cost per lead for housing or real-estate campaigns?",
        a: "It varies by location, competition, and offer, but for this programme Meta lead-gen runs at around ₹210 per qualified lead at a 2.9x return on ad spend. We set realistic targets up front based on your goals and improve cost per lead over time.",
      },
      {
        q: "How quickly do enquiries reach the sales team?",
        a: "Instantly. Every form submission, WhatsApp message, and call routes straight to your team, so leads are followed up while interest is still warm rather than going cold in an inbox.",
      },
      {
        q: "Do you run both Facebook and Google ads?",
        a: "Yes. We use Meta (Facebook and Instagram) to reach and persuade likely buyers in your localities, and Google search and display to capture people already searching for plots and sites. Together they cover the full demand funnel.",
      },
      {
        q: "Can we see exactly where our ad spend goes?",
        a: "Yes. We provide clear reporting that shows spend, leads, cost per lead, and return on ad spend by campaign and locality — so you always know which campaigns are producing members and can scale them confidently.",
      },
    ],
 
    // TODO: replace with the client's actual quote, name and role.
    testimonial: {
      quote:
        "For the first time our enquiries are predictable, and they're the right people. We can plan our membership drives around the leads coming in instead of hoping the ads work.",
      author: "Navanagara House Building Co-operative Society",
      role: "Management",
    },
  },

  // ── CRM ──────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: "b2b-sales-crm-implementation",
    category: "CRM",
    client: "Skyup CRM",
    title: "A CRM the team actually uses",
    summary:
      "Clean pipeline stages, automations, and reporting gave leadership real visibility and reps far less busywork.",
    image: "/images/case-studies/crm.webp",
    industry: "B2B Services",
    timeline: "6 weeks",
    year: "2025",
    role: "CRM implementation",
    services: ["CRM Setup", "Automation", "Reporting", "Team Enablement"],
    stack: ["HubSpot", "Zapier", "Slack", "Looker Studio"],
    metrics: [
      { value: "94%", label: "Rep adoption", sub: "from ~40%" },
      { value: "-6 hrs", label: "Admin time / rep / week" },
      { value: "+22%", label: "Forecast accuracy" },
    ],
    overview:
      "Deals lived in inboxes and one rep's memory. Leadership had no reliable forecast and reps resented double data entry.",
    challenge:
      "An over-complicated setup asked reps to fill fields nobody used, so the data was stale and the pipeline view couldn't be trusted.",
    approach: [
      "Stripped the pipeline to stages that reflect how deals truly move.",
      "Automated the busywork — logging, reminders, and handoffs — so the CRM updates itself.",
      "Built one shared dashboard leadership and reps both look at.",
    ],
    deliverables: ["Pipeline redesign", "Automation playbooks", "Lead routing", "Forecast dashboard", "Team training"],
    results: [
      "Rep adoption rose from roughly 40% to 94%.",
      "Reps reclaimed about six hours a week from manual logging.",
      "Forecast accuracy improved 22% against actuals.",
    ],
    testimonial: {
      quote:
        "It went from a tool the team avoided to the first thing they open. The forecast is finally something I can take to the board.",
      author: "VP of Sales",
      role: "B2B Sales Team",
    },
  },

  // ── Real Estate — Rathna Bhoomi Developers (expanded) ─────────────────
// Paste into the CASE_STUDIES array in src/data/caseStudies.js.
//
// ⚠️ PLACEHOLDERS to replace with real data before publishing:
//    metrics, timeline, year, stack, gallery image paths, testimonial.
//
// `keyFeatures` and `faqs` are NEW fields. They're ignored until you add
// the matching render blocks to CaseStudyDetail.jsx (snippets provided).
{
  id: 7,
  slug: "rathna-bhoomi-developers-real-estate-website",
  category: "Real Estate",
  client: "Rathna Bhoomi Developers",
  title: "A property site that turns browsers into site visits",
  summary:
    "We designed and built a fast, mobile-first website for Rathna Bhoomi Developers that presents every project with clarity and makes enquiring — or booking a site visit — effortless.",
  image: "/images/case-studies/rathna-bhoomi.webp",

  industry: "Real Estate",
  timeline: "7 weeks", // TODO: confirm
  year: "2025", // TODO: confirm
  role: "Design + build",
  services: ["Web Design", "Web Development", "Local SEO", "Lead Generation"],
  stack: ["React", "Tailwind", "Vite"], // TODO: confirm
  liveUrl: "https://www.rathnabhoomidevelopers.in/",

  // TODO: replace with real, verified figures.
  metrics: [
    { value: "+44%", label: "Enquiries from the site", sub: "vs the old site" },
    { value: "1.8s", label: "Mobile load time" },
    { value: "-39%", label: "Bounce on project pages" },
    { value: "2x", label: "Site-visit requests" },
  ],

  overview: [
    "Rathna Bhoomi Developers sells high-consideration property — the kind of purchase a buyer researches for weeks before they ever pick up the phone. Most of that research now happens on a mobile screen, often on a patchy connection, and almost always alongside a dozen competing developers. The website is where credibility is won or lost: if it loads slowly, hides the details buyers actually want, or makes getting in touch feel like work, the enquiry simply goes to whoever made it easier.",
    "Our brief was to give Rathna Bhoomi a website that does three things at once — establish trust the moment the page loads, present each project clearly enough that a serious buyer can self-qualify, and turn that interest into a real, trackable enquiry. It needed to feel premium without being heavy, work flawlessly on the phones most buyers actually use, and stay easy for the team to keep current as projects launch and sell out.",
  ],

  challenge:
    "Property buying is rarely an impulse. A prospect wants to understand exactly what they're considering — location, plot or unit sizes, pricing guidance, amenities, and crucially the legal standing and approvals that separate a safe investment from a risky one. Surfacing all of that without overwhelming the visitor is hard, and harder still on mobile, where space is tight and patience is thin. A developer also markets more than one project, so the site has to let people move between offerings without getting lost or confusing one layout for another. On top of that, the moment a buyer is ready to act is fleeting; if calling, messaging on WhatsApp, or sending an enquiry takes more than a tap or two, that intent evaporates. And none of it matters if the site can't be found — buyers search for property by area, and a site that doesn't speak that language to search engines never gets the chance to convert anyone.",

  approach: [
    "We started by mapping the real buyer journey — discover a project, judge whether the developer is credible, study the location and specifics, then reach out — and shaped the entire site structure around those four moments rather than around an internal org chart.",
    "Each project got a focused detail page: a strong image gallery, location context, key highlights and sizes, approval and legal information, and a clear enquiry path, all in a consistent layout so comparing projects feels effortless.",
    "We made contact frictionless on mobile — persistent call, WhatsApp, and enquiry actions, plus short forms that route straight to the sales team — so a ready buyer never has to hunt for a way to reach you.",
    "Performance was treated as a feature, not an afterthought: compressed, lazily loaded imagery and a lean front end, so pages open quickly even on slower mobile networks.",
    "We designed deliberate trust signals — approvals, legal clarity, and room for testimonials — placed where a hesitant buyer needs reassurance most.",
    "We laid local-SEO foundations — descriptive page titles, location-aware copy, clean metadata, and alignment with the brand's Google presence — so the site can earn visibility for nearby property searches over time.",
    "We kept the content model simple, so the team can add a new project or mark one as sold out without waiting on a developer.",
  ],

  solution: [
    "The result is a website that reads as trustworthy from the first scroll. The homepage leads with who Rathna Bhoomi is and the proof points that matter to a cautious buyer, then guides visitors into a clean projects overview. From there, each project tells its own story through imagery, location, specifications, and approval details, with the enquiry and WhatsApp actions always within reach.",
    "Because the majority of buyers arrive on a phone, the whole experience is mobile-first and loads fast, turning what is often a frustrating mobile visit into a smooth, confidence-building one. Just as importantly, the team can keep content current as inventory changes, and every enquiry lands with sales immediately — so genuine interest is followed up while it's still warm rather than going cold in an inbox.",
  ],

  keyFeatures: [
    { title: "Per-project detail pages", desc: "A consistent, scannable page for each project with gallery, location, specs, and approvals." },
    { title: "One-tap contact", desc: "Persistent call, WhatsApp, and enquiry actions so a ready buyer never hunts for a way to reach you." },
    { title: "Routed enquiries", desc: "Forms and messages land directly with the sales team for fast, warm follow-up." },
    { title: "Mobile-first performance", desc: "Compressed media and a lean front end keep pages fast on any connection." },
    { title: "Local SEO foundation", desc: "Structured metadata and location-aware copy position the site for nearby property searches." },
    { title: "Easy content updates", desc: "The team can add projects or mark them sold out without touching code." },
  ],

  results: [
    "A noticeably faster, mobile-first experience that loads quickly even on modest connections, so fewer buyers leave before the page appears.",
    "A clearer path from project page to enquiry, lifting the share of visitors who actually reach out instead of bouncing.",
    "More qualified enquiries and site-visit requests landing directly with the sales team, where they can be acted on quickly.",
    "Lower drop-off on key project pages, as buyers find the location, specs, and approval details they need in one place.",
    "A more consistent brand experience across every project, reinforcing credibility with cautious buyers.",
    "A discoverable foundation positioned to rank for local property searches and compound in value over time.",
  ],

  deliverables: [
    "Responsive marketing website",
    "Per-project detail pages",
    "Enquiry & WhatsApp capture",
    "Image galleries",
    "Approvals & trust section",
    "Local SEO setup",
    "Performance optimisation",
    "Content-update guidance",
  ],

  // TODO: add real screenshots to public/images/case-studies/
  gallery: [
    { src: "/images/case-studies/rathna-home.webp", caption: "Homepage & credibility" },
    { src: "/images/case-studies/rathna-project.webp", caption: "Project detail page" },
    { src: "/images/case-studies/rathna-mobile.webp", caption: "Mobile enquiry flow" },
  ],

  faqs: [
    {
      q: "How long does it take to build a real estate website?",
      a: "A focused project site usually takes a few weeks. The timeline depends on how many projects you're showcasing, how ready the content and images are, and any integrations — we scope it up front so there are no surprises.",
    },
    {
      q: "Will the website help us rank for local property searches?",
      a: "We build with local SEO in mind: a clean structure, location-aware copy, fast load times, and alignment with your Google Business presence. Rankings build over time, and a fast, relevant site is the foundation that makes it possible.",
    },
    {
      q: "Can our team update projects and pricing ourselves?",
      a: "Yes. The site is structured so adding a new project or marking one as sold out is straightforward, with no developer needed for routine updates.",
    },
    {
      q: "How do enquiries reach our sales team?",
      a: "Every enquiry form and WhatsApp message routes straight to your team, so leads arrive instantly and can be followed up while interest is still warm.",
    },
    {
      q: "Is the site optimised for mobile?",
      a: "It's built mobile-first. Most property buyers browse on a phone, so the site is designed and tuned for small screens and slower connections before anything else.",
    },
    {
      q: "Do you handle the content and images?",
      a: "We guide the structure and copy, and we optimise the images you provide for fast loading. Strong project photography makes the biggest difference, so it's worth investing there.",
    },
  ],

  // TODO: replace with the client's actual quote, name and role
  testimonial: {
    quote:
      "The new site finally does our projects justice. It looks the part, it's quick on a phone, and the enquiries coming through are far more serious.",
    author: "Rathna Bhoomi Developers",
    role: "Management",
  },
},
];