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
    slug: "subscription-customer-dashboard",
    category: "Dashboards",
    client: "Navanagara House Building Society",
    title: "A self-serve dashboard that cuts support load",
    summary:
      "Letting customers manage billing, plans, and usage themselves reduced tickets and lifted plan upgrades.",
    image: "/images/case-studies/user-dashboard.webp",
    industry: "Consumer Subscription",
    timeline: "10 weeks",
    year: "2026",
    role: "End-to-end product design",
    services: ["UX Research", "UI Design", "Front-end"],
    stack: ["React", "Stripe", "Tailwind"],
    metrics: [
      { value: "-33%", label: "Support tickets" },
      { value: "+19%", label: "Self-serve upgrades" },
      { value: "4.6 / 5", label: "Post-task rating" },
    ],
    overview:
      "Customers contacted support for routine things — changing a plan, fixing a card, checking usage — because the account area didn't let them do it themselves.",
    challenge:
      "Common tasks were hidden or missing, so the cheapest interactions became the most expensive ones.",
    approach: [
      "Prioritised the handful of tasks that drove most support contacts.",
      "Designed clear billing, plan, and usage views with reassuring confirmations.",
      "Made upgrades a calm, well-explained choice rather than a sales trap.",
    ],
    results: [
      "Support tickets for account tasks fell 33%.",
      "Self-serve plan upgrades rose 19%.",
      "Post-task satisfaction settled at 4.6 / 5.",
    ],
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