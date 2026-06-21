import {
  Search,
  Share2,
  Target,
  Mail,
  Bot,
  BrainCircuit,
  PenTool,
  Palette,
  Code2,
  Users,
} from "lucide-react";

export const SERVICES = [
  // ─────────────────────────────────────────────────────────── SEO ──
  {
    slug: "seo",
    name: "Proven SEO",
    Icon: Search,
    href: "/service/seo",
    from: "#FEF3C7",
    to: "#FFEDD5",
    accent: "#F59E0B",
    tagline:
      "Higher rankings, real buyers — not just browsers. We build permanent traffic that keeps compounding.",
    items: [
      "Technical SEO — speed, crawlability, schema",
      "On-page — content, meta, internal linking",
      "Content strategy — topic clusters & keyword mapping",
      "Link building — high-DA outreach",
      "Local SEO — Google Business Profile & citations",
      "Reporting — monthly rank tracking & analytics",
    ],
    heroHeadline: "Rank Higher, Get Found, Grow Faster with Expert SEO",
    heroSubline:
      "We develop SEO that gets results. It's obviously profitable while you're sleeping! As a trusted SEO firm in Bangalore, however, Skyup's goal is to deliver lasting visibility, enhance the SEO rank, and achieve measurable business development.",
    painPoints: {
      title: "Your competitors are ranking. You're stuck on page 3.",
      intro:
        "You've posted blogs. Maybe hire a freelancer. But traffic stays flat, leads don't come from search, and nobody can explain why. It's frustrating—and it's fixable.",
      points: [
        {
          title: "Not visible on Google",
          desc: "If you're not on Google's first page, you're invisible to 90% of searchers. Smart companies invest in SEO to get discovered where their customers are already looking.",
        },
        {
          title: "Content that goes nowhere",
          desc: "Blogs built without SEO keyword research, a bad structure, or a weak technical SEO foundation.",
        },
        {
          title: "No reporting, no clarity",
          desc: "You don’t know what’s working. Old agency reports were extremely difficult. We make each SEO audit report simple, so you always know where you stand for growth.",
        },
        {
          title: "Locked into contracts",
          desc: "Paying month after month with no evidence your SEO services in Bangalore are going the right direction?",
        },
      ],
    },
    offerings: {
      title: "Visibility That Covers All Corners of Your SEO",
      points: [
        {
          title: "Technical SEO Audit & Fixes",
          desc: "We crawl your site to determine what is causing your website to slow down or even prevent Google from crawling it. Faster load times, a cleaner structure, and improved crawlability with advanced technical SEO improvements and professional SEO audit tools.",
        },
        {
          title: "Keyword Research & Strategy",
          desc: "We find out what your buyers are searching for. The keywords we target with our SEO are keywords with high intent, which means that these keywords will generate the traffic that is relevant, not random.",
        },
        {
          title: "On-Page Optimisation",
          desc: "Whether it's the type of tags or internal links, all the pages are holding the search engines hostage as authoritative. Smart on-page SEO utilizes your existing content and optimises it.",
        },
        {
          title: "Content Strategy & Creation",
          desc: "We craft strategic content that ranks, performs, and converts. Every piece aligns search intent with business goals and proven tactics, creating a cohesive content ecosystem where each asset supports and strengthens the others.",
        },
        {
          title: "Link Building",
          desc: "Outreach and digital PR efforts will result in links pointing to our website, either organically or by us reaching out to other sites to offer our own. Off-Page SEO helps build your website's authority — which will help grow your ranking potential. ",
        },
        {
          title: "Local SEO",
          desc: "We optimize your business for local searches, making it easy for nearby customers to find you on Google Search and Maps. Through local keywords, Google Business Profile, and citations, we drive more calls, leads, and visitors to you.",
        },
        {
          title: "E-Commerce SEO",
          desc: "Simplified product pages, category pages, and site structure for D2C brands. Increased organic product discovery, reduced ad spend, and increased SEO ranking performance.",
        },
        {
          title: "Monthly SEO Reporting",
          desc: "Monthly reporting of dashboards, rankings, traffic, and leads in a non-technical way. Only the numbers that impact your business.",
        },
      ],
    },
    processIntro:
      "Yes, we are an SEO agency in Bangalore and have a scientific approach to SEO and follow data-driven processes so that we can ensure consistent and measurable results to each and every client.",
    process: [
      {
        title: "Website SEO Audit",
        desc: "We analyze your website and its technical condition, on-page parameters, website quality, profile of backlinks, and competitive analysis. It means that you have a goal, and a goal is accompanied by the things that you’re going to do to overcome it. ",
      },
      {
        title: "Keyword Research & Mapping",
        desc: "Our SEO specialists have the capacity and expertise to perform an extensive keyword analysis to find the high-priority, high-intent keyword phrases your audience is searching for. Then we put keywords on the right pages of your website, and we do it strategically.",
      },
      {
        title: "SEO Strategy & Planning",
        desc: "The results of these plus keyword research help us develop a customized SEO strategy, which in the short term will provide us with immediate results but in the long term, better ranking. Your tactics will depend on your objectives, competitors, and industry.",
      },
      {
        title: "On-Page Optimisation",
        desc: "All on-page optimizations performed in the audit, including all optimized content, fixes, optimized navigational links, etc., are performed.",
      },
      {
        title: "Off-Page SEO & Link Building",
        desc: "We use white hat off-page SEO techniques to get good quality backlinks from authoritative and relevant sites, which help enhance search ranking and domain authority.",
      },
      {
        title: "Reporting & Continuous Improvement",
        desc: "Unabridged monthly reports on keywords, visits, leads, and ROI will be provided. SEO marketing is a continuous process — we continuously work on strategies based on the real data.",
      },
    ],
    whyChooseUs: {
      title: "Why brands choose Skyup for SEO",
      points: [
        {
          title: "You always know what you're paying for",
          desc: "There are no optimizations; all deliverables are known in advance.",
        },
        {
          title: "No pressure, no lock-in",
          desc: "Our work is on a monthly basis. If we are not delivering, then you can walk away. We can assure you we don't lock you into a contract.",
        },
        {
          title: "ROI is the only metric we care about",
          desc: "We’re not gamblers. We measure organic traffic, qualified leads, revenue influence, and the tangible benefits of SEO and how they translate to your business.",
        },
        {
          title: "Industry-leading tools, real expertise",
          desc: "We leverage Ahrefs, Semrush, Screaming frog, Google Analytics, and more — but strategy always leads. As Bangalore's results-driven SEO experts, we use the right tools, not the most tools.",
        },
      ],
    },
    // Dummy — replace with a real client result.
    caseStudy: {
      industry: "D2C Skincare Brand, Bangalore",
      problem:
        "Rs 80K/month on Google Ads, near-zero organic traffic, and no content strategy in place.",
      whatWeDid:
        "A full technical audit, 40+ keyword-mapped blogs, category-page optimisation, and 60 quality backlinks over five months.",
      result:
        "Organic sessions grew from 900 to 11,400/month. Ad spend cut by 55% while revenue grew.",
    },
    testimonial: {
      quote:
        "We'd been burned by two SEO agencies before Skyup. Within 60 days our traffic started climbing. By month four we ranked in the top 3 for our main product keywords — and the monthly report actually made sense.",
      author: "Rohan K.",
      role: "Founder, D2C Wellness Brand",
    },
    faqTitle: "Honest answers to your questions",
    faqs: [
      {
        q: "Why is SEO important for businesses?",
        a: "SEO marketing helps businesses increase online visibility, attract qualified traffic, and generate long-term organic leads. One of the biggest advantages of SEO is that it continues delivering traffic even after content is published — unlike paid ads that stop the moment your budget runs out.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "Most websites begin seeing early SEO ranking improvements within 6–12 weeks. Competitive industries may take longer, but SEO creates sustainable long-term growth.",
      },
      {
        q: "What are the different types of SEO?",
        a: "The main types are On-Page SEO, Technical SEO, Off-Page SEO, Local SEO, and E-Commerce SEO. Each plays a role in improving search visibility and website performance.",
      },
      {
        q: "What is included in an SEO audit?",
        a: "An SEO audit checks your website's technical health, page structure, keyword optimization, backlinks, speed, mobile performance, and indexing issues. Professional SEO audit tools help identify what's limiting your rankings.",
      },
      {
        q: "What are SEO backlinks?",
        a: "SEO backlinks are links from other websites pointing to yours. High-quality backlinks are a core part of off-page SEO and help improve your website's authority and search engine rankings.",
      },
      {
        q: "What is SEO keyword research?",
        a: "SEO keyword research is the process of finding the exact words and phrases your target audience searches on Google. Proper keyword research underpins both on-page SEO and content strategy to attract relevant traffic.",
      },
      {
        q: "What makes Skyup a trusted SEO company in Bangalore?",
        a: "As a dedicated SEO agency in Bangalore, Skyup focuses on transparent reporting, ROI-driven strategies, technical SEO expertise, and long-term organic growth—without lock-in contracts.",
      },
      {
        q: "What are the benefits of SEO compared to paid ads?",
        a: "Unlike paid ads, SEO continues generating traffic without paying for every click. The benefits of SEO include better brand visibility, consistent leads, improved trust, and lower long-term acquisition costs.",
      },
      {
        q: "What is SEO optimization?",
        a: "SEO optimization is the process of improving website pages, content, and technical performance to help them rank higher in search engines and attract more relevant visitors.",
      },
      {
        q: "Do small businesses need SEO marketing?",
        a: "Absolutely. SEO marketing helps small businesses compete with larger brands by targeting niche keywords, local searches, and high-intent customer queries—making it one of the most cost-effective channels available.",
      },
    ],
    cta: {
      title: "Ready to stop paying for every click?",
      subtitle:
        "No contracts. No jargon. Just a free audit and a plan that makes sense.",
    },
    related: [
      {
        slug: "graphic-design",
        desc: "Great content needs great visuals. Design makes your blogs readable and your brand memorable — and supports your SEO.",
      },
      {
        slug: "web-development",
        desc: "A poorly structured site caps your technical SEO. We fix it at the root.",
      },
      {
        slug: "performance-marketing",
        desc: "Run PPC while SEO gains traction, so you capture leads across the whole funnel.",
      },
    ],
  },

  // ─────────────────────────────────────────── Social Media Marketing ──
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    Icon: Share2,
    href: "/service/social-media-marketing",
    from: "#E0F2FE",
    to: "#F0F9FF",
    accent: "#0EA5E9",
    tagline:
      "Turn followers into fans and fans into buyers. We build communities that actually care about your brand.",
    items: [
      "Social strategy — platform choice & content calendar",
      "Content creation — writing, design & video",
      "Community management — comments, DMs, engagement",
      "Paid social — lead, sales & awareness campaigns",
      "Analytics — reach, engagement & conversion tracking",
    ],
    socialPlatforms: {
      title: "Social Media Platforms We Manage",
      note: "Not all brands need to be on all platforms, so we determine the appropriate mix for your business based on your audience, industry, and goals.",
      items: [
        { name: "Instagram", icon: "/images/instagram.svg" },
        { name: "Facebook", icon: "/images/facebook.svg" },
        { name: "Youtube", icon: "/images/youtube.svg" },
        { name: "Twitter", icon: "/images/Twitter.svg" },
        { name: "Pinterest", icon: "/images/Pinterest.svg" },
      ],
    },
    heroHeadline:
      "Grow Faster with Professional Social Media marketing services in Bangalore",
    heroSubline:
      "Drive real business growth with data-driven social media strategies for businesses and brands in Bangalore. At Skyup Digital Solutions we don’t just manage your social media, we make it your most powerful sales and branding channel. ",
    painPoints: {
      title:
        "Your competitors are getting attention. You’re still posting with no leads.",
      intro:
        "You’ve posted reels, creatives, and offers. Maybe even hired a designer. But reach stays low, enquiries don’t come, and nobody knows what content is actually working. It’s frustrating — and it’s fixable.",
      points: [
        {
          title: "Posting but no enquiries",
          desc: "You’re active on social media, but your posts are not turning viewers into calls, WhatsApp messages, or leads. Without the right content strategy, posting becomes activity without business results.",
        },
        {
          title: "Low reach and engagement",
          desc: "Your content is not reaching the right audience, or people are scrolling past without taking action. Strong social media needs hooks, storytelling, consistency, and platform-specific content.",
        },
        {
          title: "Good designs, weak strategy",
          desc: "Attractive posts alone don’t generate customers. Your content needs a clear message, customer pain points, service positioning, trust-building, and a strong call-to-action.",
        },
        {
          title: "No tracking, no clarity",
          desc: "You don’t know which post, reel, campaign, or platform is bringing enquiries. Without proper reporting, you keep posting randomly without knowing what is actually growing your business.",
        },
      ],
    },
    offerings: {
      title: "Our Social Media Marketing Services in Bangalore",
      subtitle:
        "Skyup Digital Solutions, a social media marketing agency in Bangalore offers social media marketing solutions, and is focused on performance, not activity. Every strategy we have is based upon your business goals, your audience's actions and intelligence provided by the platform.",
      points: [
        {
          title: "Social Media Strategy & Content Planning",
          desc: "We develop platform strategies based on research, competitor analysis, and keyword intelligence. This includes your content pillars, posts schedule, brand voice and a monthly content calendar; so that your team never has to panic for ideas.",
        },
        {
          title: "Content Creation — Short-Form Video, Reels & Graphics",
          desc: "We create platform-specific content strategies that are informed by audience research, competitor analysis, and keyword intelligence. This means deciding what your content pillars are, how often you’re going to post, what your brand voice will be, and creating a content calendar on a monthly basis — so your team isn’t left scrambling to come up with ideas.",
        },
        {
          title: "Community Management & Audience Engagement",
          desc: "Attracting followers is just as crucial as cultivating a loyal community. All comments, DMs, mentions and conversations in the community are managed, helping you to be responsive, human and trustworthy at all times.",
        },
        {
          title: "Paid Social Media Advertising",
          desc: "Our paid social team is certified and can build and deploy social media ads that meet our client's objectives – whether it's getting them qualified leads, sales, or brand awareness, all of which at an optimal cost per qualified lead (CQL). Continuous monitoring, streamlining and recording of all currencies.",
        },
        {
          title: "Analytics, Reporting & Optimisation",
          desc: "We're not just giving you vanity metrics. Our monthly reports provide you with high-level metrics of reach, engagement rate, lead quality, cost per lead, follower growth and conversion attribution so you can see ROI and know what to do next every month.",
        },
      ],
    },
    processIntro:
      "All Skyup Digital Solutions client engagements have a proven, repeatable process that removes any guesswork and guarantees your social media investment provides compounding returns.",
    processTitle: "How We Work — Our 5-Step Social Media Marketing Process",
    process: [
      {
        title: "Discovery & Social Media Audit",
        desc: "We start with an in-depth review of your current social media footprint – identifying what's successful, what isn't and where your greatest potential is. You are compared with the competition in Bangalore and your industry.",
      },
      {
        title: "Goal Setting & Strategy Development",
        desc: "Based on the audit insight, we set clear KPIs (reach, engagement, lead volume, cost per lead or revenue) and develop a strategy that can be executed over a 90-day period that is aligned to your business goals. You will be shown this strategy for your review prior to creating any content.",
      },
      {
        title: "Content Creation & Calendar Approval",
        desc: "All content is created in an isolated batch session for quality and consistency. Each post is reviewed and approved before it's published, so you always have the final say on what's created, and we take the burden of doing the work.",
      },
      {
        title: "Publishing, Engagement & Community Building",
        desc: "They're published at the optimum time for algorithmic reach, they're actively involved with your audience and they're responding to inbound requests on all channels, meaning your social pages are live business tools.",
      },
      {
        title: "Measure, Report & Optimise",
        desc: "Every month we send you a simple performance report that gives you the main metrics, the insights and our recommended optimisations for the next month. Strategy is always evolving, we tailor it as platform evolves and audience behaviour changes.",
      },
    ],
    whyChooseUs: {
      title:
        "Why Choose Skyup Digital Solutions as Your Social Media Marketing Agency in Bangalore?",
      points: [
        {
          title: "Content That Engages & Converts",
          desc: "Our team produces creative pieces, reels, videos and engaging copy that engage and inspire response.",
        },
        {
          title: " Platform-Specific Expertise",
          desc: "From Facebook and Instagram to LinkedIn and YouTube, we tailor campaigns to each platform for maximum reach and engagement.",
        },
        {
          title: "Performance Tracking & Reporting",
          desc: "All campaigns are data supported. Key metrics monitored, performance analysed and strategies optimised for better results.",
        },
        {
          title: "Lead Generation Focus",
          desc: "We develop social media marketing campaigns that attract the right visitors to your site, capture leads and enhance your conversions for your business.",
        },
      ],
    },
    // Dummy — replace with a real client result.
    caseStudy: {
      industry: "D2C Skincare Brand, Bangalore",
      problem:
        "Rs 80K/month on Google Ads, near-zero organic traffic, and no content strategy in place.",
      whatWeDid:
        "A full technical audit, 40+ keyword-mapped blogs, category-page optimisation, and 60 quality backlinks over five months.",
      result:
        "Organic sessions grew from 900 to 11,400/month. Ad spend cut by 55% while revenue grew.",
    },
    testimonial: {
      quote:
        "We'd been burned by two SEO agencies before Skyup. Within 60 days our traffic started climbing. By month four we ranked in the top 3 for our main product keywords — and the monthly report actually made sense.",
      author: "Rohan K.",
      role: "Founder, D2C Wellness Brand",
    },
    faqTitle: "Honest answers to your questions",
    faqs: [
      {
        q: "Why is SEO important for businesses?",
        a: "SEO marketing helps businesses increase online visibility, attract qualified traffic, and generate long-term organic leads. One of the biggest advantages of SEO is that it continues delivering traffic even after content is published — unlike paid ads that stop the moment your budget runs out.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "Most websites begin seeing early SEO ranking improvements within 6–12 weeks. Competitive industries may take longer, but SEO creates sustainable long-term growth.",
      },
      {
        q: "What are the different types of SEO?",
        a: "The main types are On-Page SEO, Technical SEO, Off-Page SEO, Local SEO, and E-Commerce SEO. Each plays a role in improving search visibility and website performance.",
      },
      {
        q: "What is included in an SEO audit?",
        a: "An SEO audit checks your website's technical health, page structure, keyword optimization, backlinks, speed, mobile performance, and indexing issues. Professional SEO audit tools help identify what's limiting your rankings.",
      },
      {
        q: "What are SEO backlinks?",
        a: "SEO backlinks are links from other websites pointing to yours. High-quality backlinks are a core part of off-page SEO and help improve your website's authority and search engine rankings.",
      },
      {
        q: "What is SEO keyword research?",
        a: "SEO keyword research is the process of finding the exact words and phrases your target audience searches on Google. Proper keyword research underpins both on-page SEO and content strategy to attract relevant traffic.",
      },
      {
        q: "What makes Skyup a trusted SEO company in Bangalore?",
        a: "As a dedicated SEO agency in Bangalore, Skyup focuses on transparent reporting, ROI-driven strategies, technical SEO expertise, and long-term organic growth—without lock-in contracts.",
      },
      {
        q: "What are the benefits of SEO compared to paid ads?",
        a: "Unlike paid ads, SEO continues generating traffic without paying for every click. The benefits of SEO include better brand visibility, consistent leads, improved trust, and lower long-term acquisition costs.",
      },
      {
        q: "What is SEO optimization?",
        a: "SEO optimization is the process of improving website pages, content, and technical performance to help them rank higher in search engines and attract more relevant visitors.",
      },
      {
        q: "Do small businesses need SEO marketing?",
        a: "Absolutely. SEO marketing helps small businesses compete with larger brands by targeting niche keywords, local searches, and high-intent customer queries—making it one of the most cost-effective channels available.",
      },
    ],
    cta: {
      title: "Ready to stop paying for every click?",
      subtitle:
        "No contracts. No jargon. Just a free audit and a plan that makes sense.",
    },
    related: [
      {
        slug: "graphic-design",
        desc: "Great content needs great visuals. Design makes your blogs readable and your brand memorable — and supports your SEO.",
      },
      {
        slug: "web-development",
        desc: "A poorly structured site caps your technical SEO. We fix it at the root.",
      },
      {
        slug: "performance-marketing",
        desc: "Run PPC while SEO gains traction, so you capture leads across the whole funnel.",
      },
    ],
  },

  // ───────────────────────────────────────────── Performance Marketing ──
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    Icon: Target,
    href: "/service/performance-marketing",
    from: "#DBEAFE",
    to: "#EFF6FF",
    accent: "#0037CA",
    tagline:
      "Every rupee tracked. Google, Meta and LinkedIn ads optimised to drive revenue, not just clicks.",
    items: [
      "Google Ads — Search, Shopping, Display, YouTube",
      "Meta Ads — Facebook & Instagram campaigns",
      "LinkedIn Ads — B2B lead generation",
      "Full attribution — GA4, Pixel & CAPI tracking",
      "Landing pages — built for Quality Score & conversion",
      "Weekly optimisation & transparent reporting",
    ],
    heroHeadline:
      "Performance marketing that turns ad spend into measurable revenue",
    heroSubline:
      "We're built for one goal: making every ad rupee count. Our performance marketing is about action — clicks, leads, conversions, and revenue. Not impressions. Not guesswork. Results.",
    statsTitle: "Performance at a glance",
    stats: [
      { value: "12+", label: "Clients" },
      { value: "Rs 1 Cr+", label: "Ad spend managed" },
      { value: "3.4x", label: "Average ROAS" },
      { value: "40%", label: "CPL reduction" },
    ],
    overview: [
      "Performance marketing is advertising where you only pay for measurable actions — a click, a lead, a sale, or an install — and it's driven by data. Unlike traditional advertising, you don't spend up front and hope; every channel is held accountable to a clear business metric.",
      "As a performance marketing agency in Bangalore, we run paid campaigns on Google Ads, Meta Ads, and LinkedIn Ads — all connected to a single attribution stack, so you always know what's working. The outcome: you stop funding guesswork and start funding growth that compounds month after month.",
    ],
    benefitsTitle: "Why performance marketing beats traditional advertising",
    benefits: [
      {
        title: "Pay only for outcomes",
        desc: "Your budget pays for clicks, leads, and conversions — not just eyeballs. We cut wasted impressions from your media plan.",
      },
      {
        title: "Complete attribution visibility",
        desc: "See exactly which keyword, creative, or audience led to each sale, down to the last touchpoint.",
      },
      {
        title: "Real-time optimisation",
        desc: "Campaigns can be paused, scaled, or redirected within hours — no fixed spends you can't control mid-flight.",
      },
    ],
    offerings: {
      title: "Our performance marketing services — Google, Meta & LinkedIn Ads",
      points: [
        {
          title: "Google Ads — capture demand at the moment of intent",
          desc: "Search, Shopping & Performance Max, Display & remarketing, and YouTube — plus Smart Bidding (Target ROAS/CPA). Every campaign optimised for Quality Score, lower CPC, and conversions, with product-level ROAS tracking for e-commerce.",
        },
        {
          title: "Meta Ads — scale revenue on Facebook & Instagram",
          desc: "Full-funnel TOFU/MOFU/BOFU strategy, lookalike and retargeting audiences, systematic creative testing (8-12 variants per cycle), DPA & catalogue for e-commerce, and server-side Pixel + CAPI for clean post-iOS tracking.",
        },
        {
          title: "LinkedIn Ads — B2B lead generation that fills your pipeline",
          desc: "Account setup and funnel strategy, sponsored content, Lead Gen Forms, Message & Conversation Ads, ABM and job-title targeting, plus retargeting — tuned for consistent, lower CPL.",
        },
      ],
    },
    process: [
      {
        title: "Discovery & Full Account Audit",
        desc: "We review existing Google, Meta, and LinkedIn accounts, your GA4 link, conversion funnel, and past CPL/ROAS — spotting budget leaks, tracking gaps, and quick wins before a rupee is spent.",
      },
      {
        title: "Strategy & Channel Planning",
        desc: "An account-level strategy targeting your CAC, LTV, and funnel stages — with budget split across channels and KPI targets, audience strategy, and creative briefs per channel.",
      },
      {
        title: "Creative, Copy & Landing Page Development",
        desc: "Our team produces ad copy and creative for every channel in parallel, plus dedicated landing pages built for Quality Score and conversion rate.",
      },
      {
        title: "Launch, Track & Optimise in Real Time",
        desc: "Campaigns go live with full Pixel, GA4, and CRM tracking. Bids, audiences, and creatives are adjusted daily, with weekly performance calls — no surprises.",
      },
      {
        title: "Scale Winners, Kill Losers, Report Clearly",
        desc: "We scale winning campaigns to hit ROAS and CPL targets, and report monthly on spend, revenue, ROAS, CPL, and clear next steps per channel.",
      },
    ],
    toolsTitle: "Tools & integrations we use",
    tools: [
      "Google Keyword Planner",
      "Google Ads Editor",
      "GA4 + Google Ads linking",
      "Google Merchant Center",
      "Looker Studio",
      "Google Tag Manager",
      "Meta Ads Manager",
      "Meta Business Suite",
      "Meta Conversions API",
      "LinkedIn Campaign Manager",
      "LinkedIn Insight Tag",
      "Matched Audiences",
    ],
    faqTitle: "Frequently asked questions about performance marketing",
    faqs: [
      {
        q: "What are Google Ads?",
        a: "Paid advertisements that appear on Google Search, YouTube, the Display Network, and partner sites to generate leads, traffic, and sales.",
      },
      {
        q: "How much budget is needed for Google Ads?",
        a: "It depends on your industry, competition, and goals. Most businesses start with a scalable monthly budget based on target CPL or ROI.",
      },
      {
        q: "How long does Google Ads take to show results?",
        a: "Google Ads can start generating traffic within days, while optimised conversion performance usually improves within 30-90 days.",
      },
      {
        q: "What are Meta Ads?",
        a: "Paid campaigns across Facebook and Instagram to increase brand awareness, traffic, leads, and online sales.",
      },
      {
        q: "Are Meta Ads good for lead generation?",
        a: "Yes — they're highly effective using advanced audience targeting, retargeting, and conversion-focused creatives.",
      },
      {
        q: "Which businesses benefit most from Meta Ads?",
        a: "E-commerce, real estate, coaches, local businesses, and D2C brands benefit significantly from Facebook and Instagram advertising.",
      },
      {
        q: "What are LinkedIn Ads used for?",
        a: "Mainly B2B marketing, lead generation, recruitment, brand awareness, and targeting decision-makers.",
      },
      {
        q: "Are LinkedIn Ads better for B2B?",
        a: "Yes — they offer precise targeting by job title, industry, and company size, making them ideal for B2B campaigns.",
      },
      {
        q: "How expensive are LinkedIn Ads vs Google or Meta?",
        a: "LinkedIn usually has a higher CPC, but it often generates higher-quality B2B leads and better decision-maker targeting.",
      },
      {
        q: "What is performance marketing?",
        a: "A digital marketing strategy where campaigns are optimised around measurable results — leads, conversions, sales, and ROI.",
      },
    ],
    cta: {
      title: "Stop wasting ad spend.",
      subtitle:
        "Our free performance marketing audit shows exactly where your spend is being wasted — and a clear, channel-by-channel plan to fix it. No lock-in. No inflated retainers.",
    },
    related: [
      {
        slug: "seo",
        desc: "Run paid while SEO compounds, capturing demand now and lowering acquisition cost over time.",
      },
      {
        slug: "graphic-design",
        desc: "Creative is the biggest lever in paid performance. We produce ad creative built to convert.",
      },
      {
        slug: "web-development",
        desc: "High-converting landing pages turn your clicks into leads instead of bounces.",
      },
    ],
  },

  // ──────────────────────────────────────────────── Email Marketing ──
  {
    slug: "email-marketing",
    name: "Email Marketing",
    Icon: Mail,
    href: "/service/email-marketing",
    from: "#FFE4E6",
    to: "#FFF1F2",
    accent: "#F43F5E",
    tagline:
      "Your cheapest acquisition channel is already in your list. We turn cold subscribers into repeat buyers.",
    items: [
      "Email strategy & deliverability audit",
      "Campaign management — launches & promotions",
      "Automation & drip sequences",
      "List growth & segmentation",
      "Template design & A/B testing",
      "ESP setup, migration & reporting",
    ],
    heroHeadline: "Email marketing that converts — not just communicates",
    heroSubline:
      "Most businesses send emails. We build email programs that generate pipeline, recover lost revenue, and turn one-time buyers into loyal customers — with measurable ROI on every campaign.",
    statsTitle: "Why email still wins",
    stats: [
      { value: "36-42%", label: "Avg open rate (all industries)" },
      { value: "4.3B", label: "Global email users" },
      { value: "36x", label: "Average ROI" },
    ],
    overview: [
      "When it comes to cost per acquisition, nothing matches email. Unlike paid social and PPC, where you pay for every impression, email campaigns are delivered to an audience you already own. Email consistently outperforms social by 2-3x on conversion rate, at a much lower cost per lead.",
      "In a competitive Bangalore market, that efficiency compounds: your list expands, your automations run constantly, and your revenue multiplies while your spend does not.",
    ],
    painPoints: {
      title: "Most businesses leave email severely under-optimised",
      intro: "If any of these sound familiar, you're losing revenue every day:",
      points: [
        {
          title: "Low open and click rates",
          desc: "Emails land in the promotions tab or feel generic, so they get ignored.",
        },
        {
          title: "No automation sequences",
          desc: "Leads go cold while you follow up manually — or not at all.",
        },
        {
          title: "No segmentation",
          desc: "Everyone gets the same message at the same time, regardless of behaviour or lifecycle stage.",
        },
      ],
    },
    offerings: {
      title: "Our email marketing services — built for growth",
      points: [
        {
          title: "Email Strategy & Audit",
          desc: "A thorough evaluation of your current program — deliverability, list quality, automation gaps, and revenue loss — used to build a strategy around your goals, segments, and lifecycle stages.",
        },
        {
          title: "Campaign Management",
          desc: "Content, design, scheduling, and deployment in one place. Every campaign has a clear purpose — launch, promotion, re-engagement, or nurture — with performance expectations set before send.",
        },
        {
          title: "Automation & Drip Sequences",
          desc: "Welcome series, abandoned-cart flows, post-purchase flows, win-back campaigns, and lead-nurture journeys that run 24/7 and convert subscribers automatically.",
        },
        {
          title: "List Growth & Segmentation",
          desc: "Ethical list building (lead magnets, signup forms, gated content), then segmentation by behaviour, purchase history, and lifecycle stage so every message is relevant.",
        },
        {
          title: "Template Development",
          desc: "Mobile-responsive, on-brand templates optimised for deliverability and engagement, tested across email clients and devices.",
        },
        {
          title: "A/B Testing",
          desc: "Systematic testing of subject lines, preview text, CTAs, send times, and personalisation — each test statistically significant before we draw conclusions.",
        },
        {
          title: "ESP Setup & Migration",
          desc: "Launching a first platform or moving between ESPs — domain authentication, IP warming, audience migration, template rebuilds, and automation rewiring with no data loss.",
        },
        {
          title: "Reporting & Analytics",
          desc: "Clear monthly reports covering opens, clicks, conversions, revenue attribution, deliverability health, and list growth — full visibility into campaign ROI.",
        },
      ],
    },
    process: [
      {
        title: "Discovery & Audit",
        desc: "We audit the quality, setup, and historical performance of your current list to establish a baseline and find the quickest wins.",
      },
      {
        title: "Strategy & Roadmap",
        desc: "A prioritised roadmap aligned to your goals — campaign plan, automation builds, segmentation logic, and the KPIs we're accountable for.",
      },
      {
        title: "Build & Design",
        desc: "We build templates, copy, and automation workflows, review and approve with you, and QA every asset across devices and clients.",
      },
      {
        title: "Launch & Optimise",
        desc: "We launch campaigns and automations, monitor deliverability and engagement live, and start A/B testing from week one.",
      },
      {
        title: "Report & Scale",
        desc: "Monthly reporting turns data into decisions — new segments to target, new sequences to build, new revenue streams to activate.",
      },
    ],
    // Dummy — replace with verified client metrics.
    caseStudies: [
      {
        title: "Gruhakalpa Housing Society Ltd",
        industry: "Real estate",
        result:
          "12,400 active contacts - 58% open rate (2x avg) - 21% CTR (6.5x avg) - 640 hot enquiries - 0.9% bounce.",
      },
      {
        title: "Rathna Bhoomi Developers",
        industry: "Real estate",
        result:
          "9,800 active contacts - 54% open rate (1.9x avg) - 19% CTR (5.9x avg) - 480 hot qualified leads - 1.1% bounce.",
      },
    ],
    toolsTitle: "Platform-agnostic. Expertly integrated.",
    tools: [
      "Mailchimp",
      "Klaviyo",
      "HubSpot",
      "ActiveCampaign",
      "Brevo",
      "Shopify Email",
    ],
    toolsNote:
      "We're a platform-agnostic email marketing company in Bangalore. We recommend and use whatever tool fits your budget, tech stack, and growth goals — not the one that pays us the most referral fee.",
    faqTitle: "FAQs about our email marketing services",
    faqs: [
      {
        q: "What is email marketing and how does it help?",
        a: "A strategy that helps businesses nurture leads, increase retention, and drive sales through targeted campaigns and automation.",
      },
      {
        q: "Why is email marketing important for growth?",
        a: "It delivers one of the highest ROIs in digital marketing by building relationships, increasing repeat purchases, and generating consistent revenue.",
      },
      {
        q: "How much ROI can email marketing generate?",
        a: "On average up to 36x ROI, making it one of the most cost-effective channels for lead generation and retention.",
      },
      {
        q: "What's included in your email marketing solutions?",
        a: "Strategy, campaign management, automation setup, drip sequences, list segmentation, template design, A/B testing, reporting, and ESP migration.",
      },
      {
        q: "What are email automation and drip campaigns?",
        a: "Pre-scheduled sequences triggered by user behaviour that nurture leads, recover abandoned carts, and improve conversions automatically.",
      },
      {
        q: "Which platforms do you work with?",
        a: "Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo, Shopify Email, and other CRM-integrated ESPs.",
      },
      {
        q: "How do you improve open and click-through rates?",
        a: "Segmentation, personalised content, A/B testing, optimised subject lines, mobile-responsive design, and deliverability best practices.",
      },
      {
        q: "Can email marketing increase e-commerce sales?",
        a: "Yes — it recovers abandoned carts, increases repeat purchases, promotes products, and improves customer lifetime value.",
      },
      {
        q: "Do you provide email marketing for B2B?",
        a: "Yes — B2B campaigns focused on lead nurturing, funnel automation, onboarding sequences, and conversion across longer cycles.",
      },
      {
        q: "Why choose your email marketing agency in Bangalore?",
        a: "We focus on ROI, transparent reporting, automation-led growth, and personalised strategies tailored to your business goals.",
      },
    ],
    cta: {
      title:
        "Ready to work with a results-driven email marketing agency in Bangalore?",
      subtitle:
        "Every day without an optimised email program is revenue left on the table. Start with a free, no-obligation audit of your current setup.",
    },
    related: [
      {
        slug: "crm",
        desc: "Connect your email program to a CRM so every lead, message, and conversion lives in one place.",
      },
      {
        slug: "ai-automation",
        desc: "Automate triggers, segmentation, and reporting so your email program runs itself.",
      },
      {
        slug: "social-media-marketing",
        desc: "Grow the list that email monetises with consistent social content and paid capture.",
      },
    ],
  },

  // ─────────────────────────────────────────────────── AI Automation ──
  {
    slug: "ai-automation",
    name: "AI Automation",
    Icon: Bot,
    href: "/service/ai-automation",
    from: "#EDE9FE",
    to: "#F5F3FF",
    accent: "#7C3AED",
    tagline:
      "Stop doing the same work twice. We automate your marketing, ops and customer workflows using AI.",
    items: [
      "AI chatbots & virtual assistants",
      "Lead generation & CRM automation",
      "WhatsApp & voice AI agents",
      "Document processing automation",
      "Workflow automation across systems",
      "AI customer support & booking automation",
    ],
    heroHeadline:
      "Stop doing it manually. Start scaling with AI automation in Bangalore.",
    heroSubline:
      "We're the trusted AI automation company helping Bangalore businesses automate repetitive tasks, drive growth, and harness the real potential of AI — without the technical mess.",
    painPoints: {
      title: "Is your team stuck doing work AI can handle in seconds?",
      intro:
        "Repetitive tasks cost you days and hours every year — time you could invest in strategy, growth, and customer experience. McKinsey finds businesses adopting AI automation see up to 40% higher conversion rates and 30% faster execution.",
      points: [
        {
          title: "Manual lead follow-up",
          desc: "Your sales team follows up with every lead by hand instead of using AI workflow automation.",
        },
        {
          title: "Hours lost to marketing busywork",
          desc: "Scheduling, reporting, and posting eat time that's perfectly suited to AI marketing automation.",
        },
        {
          title: "Copy-paste between systems",
          desc: "Your ops team moves data between tools that should talk to each other automatically.",
        },
        {
          title: "No real-time visibility",
          desc: "Reporting is still manual, so you can't see performance as it happens.",
        },
        {
          title: "Can't scale without hiring",
          desc: "You want to grow but can't afford five more people just to handle volume.",
        },
      ],
    },
    offerings: {
      title: "Our AI automation services in Bangalore",
      points: [
        {
          title: "AI Chatbots & Virtual Assistants",
          desc: "Instant, intelligent customer interactions — automate conversations, answer queries, and deliver 24/7 support across channels.",
        },
        {
          title: "Lead Generation & CRM Automation",
          desc: "Capture, qualify, and manage leads automatically while keeping your CRM updated in real time.",
        },
        {
          title: "WhatsApp Business Automation",
          desc: "AI-powered WhatsApp that manages inquiries, books appointments, follows up leads, and responds instantly at scale.",
        },
        {
          title: "Voice AI Agents",
          desc: "Human-first voice agents that answer calls, schedule appointments, and handle support 24/7 while cutting costs.",
        },
        {
          title: "Document Processing Automation",
          desc: "Extract, process, and organise business documents with AI — less manual effort, more accuracy and speed.",
        },
        {
          title: "Workflow Automation",
          desc: "Automate processes across departments and systems to increase efficiency, reduce errors, and enable seamless operations.",
        },
        {
          title: "AI-Powered Customer Support",
          desc: "Faster, more personalised service through AI-driven responses and smart ticket handling.",
        },
        {
          title: "Appointment & Booking Automation",
          desc: "Automated scheduling, reminders, and calendar management — easier for customers, fewer no-shows.",
        },
        {
          title: "Custom AI Automation Solutions",
          desc: "Bespoke automation fitted to your processes and daily routine, designed to scale your business smarter.",
        },
      ],
    },
    process: [
      {
        title: "Free AI Automation Audit",
        desc: "A free strategy session to understand your business, tools, and biggest pain points — followed by a deep dive into your workflows and a customised roadmap within 48 hours.",
      },
      {
        title: "Custom AI Blueprint & Design",
        desc: "Our architects map a bespoke workflow and system design — every touchpoint, integration, and trigger — delivered as a clear, jargon-free blueprint before a line of code is written.",
      },
      {
        title: "Build, Test & Launch",
        desc: "Certified specialists build, QA, and deploy your full system, with team training, complete documentation, and 30 days of post-launch monitoring and optimisation.",
      },
    ],
    statsTitle: "Real results from our AI automation",
    stats: [
      { value: "10+ hrs", label: "Saved per team member / week" },
      { value: "3x", label: "Pipeline growth (lead nurturing)" },
      { value: "40%", label: "Faster lead response time" },
      { value: "~50%", label: "Less QA time (automation testing)" },
    ],
    whyChooseUs: {
      title: "Why Bangalore businesses choose Skyup for AI automation",
      points: [
        {
          title: "Local team, real context",
          desc: "A Bangalore-based team with deep understanding of Indian business workflows, tools, and compliance.",
        },
        {
          title: "Glass-box, you own it",
          desc: "Full documentation and no black boxes — you own every automation we build.",
        },
        {
          title: "Live in 48-72 hours",
          desc: "First automation live within days, not six-week agency timelines (for standard workflows).",
        },
        {
          title: "Senior hands, no handoffs",
          desc: "No junior handoffs or offshore surprises — senior expertise from the foundation up.",
        },
        {
          title: "Proven, measurable ROI",
          desc: "Every rupee invested is tied to results that have already delivered measurable ROI for businesses.",
        },
      ],
    },
    // Dummy — replace with verified client testimonials.
    testimonials: [
      {
        quote:
          "Skyup completely transformed our sales process. Their AI automation saved our team 12 hours every week and tripled our lead response speed. If you're looking for the best AI automation company in Bangalore, look no further.",
        author: "Rahul Sharma",
        role: "Founder, E-Commerce Brand, Bangalore",
      },
      {
        quote:
          "We were drowning in manual tasks — data entry, follow-ups, reporting. Skyup built us an end-to-end AI workflow automation system in under three weeks. Our team now focuses on strategy, not spreadsheets.",
        author: "Priya Menon",
        role: "Operations Director, Professional Services Firm",
      },
    ],
    faqTitle: "Frequently asked questions about our AI automation services",
    faqs: [
      {
        q: "What are AI automation services?",
        a: "They use AI to handle repetitive business tasks automatically — saving time, reducing errors, and helping you scale without hiring more staff.",
      },
      {
        q: "How does a local AI automation company help?",
        a: "A Bangalore-based company understands your market, tools, and environment, and eliminates manual work across sales, marketing, and ops — with support a call away.",
      },
      {
        q: "What is AI workflow automation?",
        a: "It connects your tools and systems so data moves and tasks trigger automatically — no manual copy-pasting, follow-ups, or reporting.",
      },
      {
        q: "What is AI marketing automation?",
        a: "It runs your email campaigns, lead nurturing, social posting, and reporting on autopilot, delivering personalised communication at scale.",
      },
      {
        q: "Do I need technical knowledge?",
        a: "No. We handle design, build, testing, and training — you get the results without touching code.",
      },
      {
        q: "How long does it take to go live?",
        a: "Most clients are live within 2-4 weeks of their first strategy call, depending on workflow complexity.",
      },
      {
        q: "What is AI in automation testing?",
        a: "It uses machine learning to generate and run software test cases automatically — reducing QA time by up to 70% and catching bugs faster.",
      },
      {
        q: "Which industries do you serve?",
        a: "All industries — e-commerce, real estate, healthcare, SaaS, professional services, education, and manufacturing.",
      },
      {
        q: "How much do AI automation services cost?",
        a: "It depends on scope and workflows. We offer a free AI audit first, so you know exactly what's needed before any investment.",
      },
      {
        q: "Why choose Skyup for AI automation?",
        a: "A proven, Bangalore-based team with deep expertise in AI automation, delivering measurable results through a transparent, no-obligation process.",
      },
    ],
    cta: {
      title: "Get your free AI automation audit today",
      subtitle:
        "Book a free 30-minute strategy call. No commitment, no jargon — just a clear picture of what AI automation can do for your business.",
    },
    related: [
      {
        slug: "crm",
        desc: "Pair automation with SkyUp CRM so captured leads are assigned, greeted, and tracked automatically.",
      },
      {
        slug: "machine-learning",
        desc: "Go beyond rules — add predictive models for scoring, forecasting, and anomaly detection.",
      },
      {
        slug: "web-development",
        desc: "Connect automations to your site and apps with the right integrations and endpoints.",
      },
    ],
  },

  // ───────────────────────────────────────────────── Machine Learning ──
  {
    slug: "machine-learning",
    name: "Machine Learning",
    Icon: BrainCircuit,
    href: "/service/machine-learning",
    from: "#E0E7FF",
    to: "#EEF2FF",
    accent: "#4F46E5",
    tagline:
      "Smarter decisions with models that learn from your data — predict churn, demand and lifetime value.",
    items: [
      "Custom ML model development",
      "Predictive analytics & forecasting",
      "NLP, deep learning & computer vision",
      "Recommendation & anomaly detection",
      "MLOps & model deployment",
      "Integration, monitoring & support",
    ],
    heroHeadline:
      "Machine learning services in Bangalore for smarter business growth",
    heroSubline:
      "Turn your business data into something useful — not just numbers. We help teams use AI and machine learning to automate, optimise, forecast, and make better decisions, and to spot new growth avenues.",
    overview: [
      "Every day, businesses produce huge amounts of data, but most struggle to turn it into meaningful insight. Growing competition, inaccurate forecasting, data silos, and manual decision-making are key challenges for growth-focused companies.",
      "This is where machine learning becomes a real competitive advantage. With advanced algorithms, businesses can reveal hidden patterns, anticipate outcomes, automate routine work, and move faster with smarter decisions.",
      "Modern ML models keep learning from new data and improve over time, unlike classical analytics. We help businesses find the most impactful opportunities and deploy scalable machine learning that creates long-term value.",
    ],
    offerings: {
      title: "Our machine learning services",
      points: [
        {
          title: "Machine Learning Consulting",
          desc: "We help you find opportunities to apply AI and ML for automation, optimisation, and data-driven decisions, with custom strategies matched to your objectives.",
        },
        {
          title: "Custom ML Model Development",
          desc: "We design and build custom models for your specific challenges using your data — accurate predictions, sharper insights, and smarter automation.",
        },
        {
          title: "Predictive Analytics Solutions",
          desc: "Insights from historical and real-time data to give you a clearer picture of trends, customer needs, demand, and potential risks.",
        },
        {
          title: "ML Algorithm Development",
          desc: "We fine-tune and design algorithms for specific tasks — classification, clustering, forecasting, recommendation systems — and optimise their performance.",
        },
        {
          title: "Data Preparation & Feature Engineering",
          desc: "Good data is the base for good models. We clean, organise, and engineer features to boost model accuracy and efficiency.",
        },
        {
          title: "Natural Language Processing (NLP)",
          desc: "Sentiment analysis, text classification, chatbots, document processing, and language automation powered by AI language understanding.",
        },
        {
          title: "Deep Learning Solutions",
          desc: "Models for image recognition, speech processing, language understanding, and intelligent decision-making.",
        },
        {
          title: "Computer Vision Solutions",
          desc: "Object detection, image classification, facial recognition, video analytics, and quality-inspection systems.",
        },
        {
          title: "Model Training & Optimization",
          desc: "We train, validate, and optimise models for higher accuracy and performance, kept scalable and dependable for real-world use.",
        },
        {
          title: "AI & ML Integration",
          desc: "Blend AI and ML into your existing apps, systems, and workflows to drive efficiency, automation, and better customer experiences.",
        },
        {
          title: "MLOps & Model Deployment",
          desc: "Solid MLOps practices for smooth integration, ongoing monitoring, and scalable production environments that stay stable under changing traffic.",
        },
        {
          title: "Fraud Detection Systems",
          desc: "Intelligent models that spot suspicious behaviour and anomalies in real time, protecting you from losses and security risks.",
        },
        {
          title: "Customer Behavior Analytics",
          desc: "Understand customer preferences and interactions to improve engagement, retention, and relevant marketing.",
        },
        {
          title: "Anomaly Detection Solutions",
          desc: "Catch unusual patterns, operational issues, and threats early with proactive monitoring and risk management.",
        },
        {
          title: "Real-Time Data Analytics",
          desc: "Process and analyse streaming data in real time so teams get instant insights for fast-moving environments.",
        },
        {
          title: "ML Maintenance & Support",
          desc: "Ongoing monitoring, maintenance, and optimisation, improving model performance as new data and requirements arrive.",
        },
        {
          title: "AI & ML Product Development",
          desc: "We build AI-powered products that improve user experiences, automate processes, and create a real competitive edge.",
        },
      ],
    },
    process: [
      {
        title: "Business Understanding & Requirement Analysis",
        desc: "We align on your goals, challenges, and needs so it's clear which type of ML to use and what success looks like.",
      },
      {
        title: "Data Collection & Assessment",
        desc: "We gather and aggregate data from your sources, ensuring it's relevant, complete, and fit for model building.",
      },
      {
        title: "Data Preparation & Feature Engineering",
        desc: "We clean and organise raw data, remove inconsistencies, and engineer features that improve predictive accuracy.",
      },
      {
        title: "Model Selection & Development",
        desc: "We choose the right algorithms and build custom models for your requirements.",
      },
      {
        title: "Model Training & Validation",
        desc: "Models are trained on historical data and rigorously validated to be reliable and accurate.",
      },
      {
        title: "Performance Optimization",
        desc: "We fine-tune parameters and optimise algorithms for efficiency, scalability, and accuracy while controlling compute cost.",
      },
      {
        title: "Deployment & Integration",
        desc: "Validated models are deployed to production and integrated into your applications, systems, and workflows.",
      },
      {
        title: "Monitoring & Continuous Improvement",
        desc: "We monitor performance continuously and retrain models with new data to maintain effectiveness and business value.",
      },
      {
        title: "Ongoing Support & Maintenance",
        desc: "We provide technical support, updates, and maintenance so your ML solution keeps evolving with your business.",
      },
    ],
    whyChooseUs: {
      title: "Why choose us",
      points: [
        {
          title: "Expertise in AI & ML",
          desc: "Strong, practical know-how to craft smart solutions for complex business problems — not just theory.",
        },
        {
          title: "Custom-built solutions",
          desc: "Every model is tuned to your business goals, industry needs, and data environment — never one-size-fits-all.",
        },
        {
          title: "End-to-end development",
          desc: "Strategy, data prep, model deployment, and ongoing support — the whole journey handled in one place.",
        },
        {
          title: "Advanced algorithms",
          desc: "We use the latest ML algorithms, deep learning, and AI capabilities for accurate, dependable results.",
        },
        {
          title: "Scalable & future-ready",
          desc: "Models built to scale with your business, supporting long-term performance and adaptability.",
        },
        {
          title: "Data-driven decision making",
          desc: "We surface useful insights so leaders make smarter decisions and improve operational efficiency.",
        },
        {
          title: "Seamless integration",
          desc: "Solutions fit smoothly into your apps, CRM, ERP, websites, and workflows, with minimal disruption.",
        },
        {
          title: "Focus on accuracy & performance",
          desc: "Continuous training, testing, and validation until models hit solid real-world accuracy.",
        },
        {
          title: "Transparent communication",
          desc: "Steady updates, performance summaries, and full visibility into how the work is progressing.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "What are machine learning services?",
        a: "They help businesses use AI models and algorithms to automate processes, analyse data, and make intelligent predictions.",
      },
      {
        q: "How can machine learning benefit my business?",
        a: "It improves efficiency, reduces manual effort, enhances decision-making, and uncovers valuable insights from data.",
      },
      {
        q: "What industries can use ML solutions?",
        a: "Healthcare, finance, retail, manufacturing, logistics, education, and many others.",
      },
      {
        q: "What's the difference between AI and ML?",
        a: "AI is the broader concept; machine learning is a subset of AI that enables systems to learn from data.",
      },
      {
        q: "How long does it take to develop a model?",
        a: "It depends on complexity, data availability, and requirements — typically from a few weeks to several months.",
      },
      {
        q: "Do I need large amounts of data?",
        a: "More quality data often helps, but many models can be developed effectively with moderate datasets.",
      },
      {
        q: "What types of models do you develop?",
        a: "Predictive models, recommendation engines, classification models, anomaly detection, NLP, and computer vision applications.",
      },
      {
        q: "Can ML be integrated into existing systems?",
        a: "Yes — into websites, mobile apps, CRM platforms, ERP systems, and business workflows.",
      },
      {
        q: "How accurate are ML models?",
        a: "Accuracy depends on data quality, use case, and algorithm choice; we continuously optimise for the best possible performance.",
      },
      {
        q: "Do you provide support after deployment?",
        a: "Yes — ongoing maintenance, monitoring, retraining, and optimisation so models keep performing.",
      },
    ],
    cta: {
      title: "Ready to transform your business with machine learning?",
      subtitle:
        "Collaborate with a reliable Machine Learning services provider in Bangalore and unlock the full potential of your data with state-of-the-art AI and ML.",
    },
    related: [
      {
        slug: "ai-automation",
        desc: "Combine predictive models with automation so insights trigger real actions.",
      },
      {
        slug: "crm",
        desc: "Feed model outputs — lead scores, churn risk — straight into your CRM workflows.",
      },
      {
        slug: "web-development",
        desc: "Ship models into production apps and dashboards your team actually uses.",
      },
    ],
  },

  // ───────────────────────────────────────────────────── UI/UX Design ──
  {
    slug: "ui-ux-design",
    name: "UI / UX Design",
    Icon: PenTool,
    href: "/service/ui-ux-design",
    from: "#CCFBF1",
    to: "#F0FDFA",
    accent: "#0D9488",
    tagline:
      "Good design doesn't just look beautiful — it converts. Interfaces people actually enjoy using.",
    items: [
      "UX research, audits & journey mapping",
      "Information architecture & wireframing",
      "UI design & visual language",
      "Interactive prototyping",
      "Design systems & dashboards",
      "Usability testing & developer handoff",
    ],
    heroHeadline:
      "UI/UX design in Bangalore that enhances experience & drives conversions",
    heroSubline:
      "We're a leading UI/UX design company in Bangalore that turns digital products into seamless, intuitive experiences — higher engagement, lower bounce rates, and stronger conversions.",
    benefitsTitle: "What makes our UI/UX design different",
    benefits: [
      "Research-first methodology — every design decision is backed by user data",
      "End-to-end delivery — from wireframes and prototypes to final handoff",
      "Bangalore-based team with global delivery experience",
    ],
    offerings: {
      title: "Our UI/UX design services",
      points: [
        {
          title: "UX Research & Audit",
          desc: "User interviews, heuristic evaluations, competitor analysis, and usability audits to uncover friction in your current product.",
        },
        {
          title: "User Journey Mapping",
          desc: "We map the complete customer journey to find pain points and create seamless interactions across every touchpoint.",
        },
        {
          title: "Information Architecture",
          desc: "Sitemaps, content structure, and navigation designed so users always find what they're looking for.",
        },
        {
          title: "Wireframing & Low-Fi Prototypes",
          desc: "Structural layouts and user flows validated before visual treatment — we check the logic before the pixels.",
        },
        {
          title: "UI Design & Visual Language",
          desc: "Pixel-perfect, on-brand interface design with full attention to desktop and mobile breakpoints.",
        },
        {
          title: "Interactive Prototyping",
          desc: "Clickable, animated prototypes of the real experience for stakeholder review and user testing.",
        },
        {
          title: "Design Systems",
          desc: "A scalable component library with typography, colour, and spacing tokens for your dev team.",
        },
        {
          title: "Dashboard & Enterprise UI Design",
          desc: "Easy-to-use dashboards, CRM apps, ERP platforms, and business apps that streamline workflows.",
        },
        {
          title: "Mobile App UI/UX Design",
          desc: "User-friendly Android and iOS interfaces focused on usability, engagement, and satisfaction.",
        },
        {
          title: "E-commerce UI/UX Design",
          desc: "Intuitive navigation, product discovery, and streamlined checkout that increase conversions.",
        },
        {
          title: "Responsive Design",
          desc: "Interfaces that deliver a seamless experience across desktop, tablet, and mobile.",
        },
        {
          title: "Interface Redesign",
          desc: "Bring an existing product up to modern standards for usability, experience, and conversion.",
        },
        {
          title: "Usability Testing",
          desc: "Moderated and unmoderated sessions with real users to validate design decisions before development.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why choose us as your UI/UX design company in Bangalore",
      points: [
        {
          title: "Results-focused design",
          desc: "Our success is measured by what happens after launch — engagement, conversion, and retention, tied to your KPIs from the start.",
        },
        {
          title: "End-to-end expertise",
          desc: "Research, IA, visual design, and front-end thinking in one seamless process. No handoff gaps, no silos.",
        },
        {
          title: "Transparency at every step",
          desc: "Live Figma files, weekly syncs, and a dedicated project lead — no black-box agency.",
        },
        {
          title: "Industry-leading tools",
          desc: "Deep experience with Figma, Adobe XD, and Miro for UI and collaborative UX work.",
        },
        {
          title: "Local presence, global experience",
          desc: "A Bangalore UI/UX firm offering local cost-effectiveness with global-quality output.",
        },
      ],
    },
    process: [
      {
        title: "Discovery & Research",
        desc: "Stakeholder interviews, user research, competitor analysis, and a heuristic evaluation — plus personas and current-state journey mapping.",
      },
      {
        title: "UX Strategy & Architecture",
        desc: "Information architecture, user flows, and sitemap — the product structure defined before any visual work.",
      },
      {
        title: "Wireframing",
        desc: "Low-fidelity wireframes of key pages and flows, reviewed with you before visual design.",
      },
      {
        title: "Visual UI Design",
        desc: "High-fidelity, fully branded UI covering all breakpoints, states (hover, error, empty), and interactions.",
      },
      {
        title: "Prototyping & Testing",
        desc: "Interactive Figma prototypes tested with real users via Maze; results inform the final iteration.",
      },
      {
        title: "Handoff & Support",
        desc: "Design tokens, component annotations, and developer specs via Figma Dev Mode — and we stay available during the build.",
      },
    ],
    toolsTitle: "Tools we design with",
    tools: ["Figma", "Adobe XD", "Miro", "Maze"],
    // Dummy — replace with verified client testimonials.
    testimonials: [
      {
        quote:
          "Working with their team was the best UI/UX decision we made. The redesign of our SaaS dashboard reduced onboarding drop-off by 47%. Their process is structured, transparent, and genuinely collaborative.",
        author: "Priya Menon",
        role: "CPO, FinTrack Technologies, Bangalore",
      },
      {
        quote:
          "We'd tried two other agencies before finding them. The difference was night and day — their designers actually read our user research, challenged our assumptions, and delivered samples in week two more polished than what we'd seen after months elsewhere.",
        author: "Karthik Rajan",
        role: "Founder, MedBook Health, Chennai",
      },
    ],
    faqTitle: "Frequently asked questions about UI/UX design",
    faqs: [
      {
        q: "What are UI/UX design services in Bangalore?",
        a: "They help businesses create user-friendly, visually appealing websites and apps that improve customer experience and engagement.",
      },
      {
        q: "Why is UI/UX design important for a website?",
        a: "It improves usability, enhances satisfaction, and increases conversions through intuitive navigation and better experiences.",
      },
      {
        q: "How do I choose the best UI/UX company in Bangalore?",
        a: "Look for a strong portfolio, proven experience, client testimonials, and a structured UI/UX design process.",
      },
      {
        q: "What does a UI/UX designer do?",
        a: "Researches user behaviour, creates wireframes, designs interfaces, and optimises digital experiences for web and mobile.",
      },
      {
        q: "What's the difference between UI and UX design?",
        a: "UI focuses on visual elements like colour, type, and layout; UX focuses on user journeys, usability, and overall experience.",
      },
      {
        q: "What's included in UI/UX design services?",
        a: "User research, wireframing, prototyping, UI design, usability testing, and implementation support.",
      },
      {
        q: "What is the UI/UX design process?",
        a: "Research, planning, wireframing, prototyping, visual design, testing, and continuous optimisation.",
      },
      {
        q: "How much do UI/UX services cost in Bangalore?",
        a: "It depends on project complexity, features, design requirements, and timelines.",
      },
      {
        q: "Can you redesign an existing website?",
        a: "Yes — UI/UX web design can improve the usability, performance, and visual appeal of an existing site.",
      },
      {
        q: "Why choose your UI/UX services in Bangalore?",
        a: "We focus on intuitive, conversion-driven digital experiences tailored to your business goals.",
      },
    ],
    cta: {
      title: "Turn more visitors into customers",
      subtitle:
        "We create user experiences that reduce friction, improve engagement, and help your business achieve its goals.",
    },
    related: [
      {
        slug: "web-development",
        desc: "We build the designs we create — pixel-accurate, fast, and conversion-focused.",
      },
      {
        slug: "graphic-design",
        desc: "A cohesive visual identity makes every interface feel on-brand and trustworthy.",
      },
      {
        slug: "seo",
        desc: "Clean structure and fast, usable pages support both UX and search performance.",
      },
    ],
  },

  // ──────────────────────────────────────────────────── Graphic Design ──
  {
    slug: "graphic-design",
    name: "Graphic Design",
    Icon: Palette,
    href: "/service/graphic-design",
    from: "#FCE7F3",
    to: "#FDF2F8",
    accent: "#DB2777",
    tagline:
      "Your brand is the first impression you can't undo. We craft visuals that make people stop scrolling.",
    items: [
      "Logo & brand identity design",
      "Social media creative design",
      "Ad creative — Google, Meta & LinkedIn",
      "Brochures & company profiles",
      "Infographics & pitch decks",
      "Press-ready files & motion assets",
    ],
    heroHeadline:
      "Graphic design in Bangalore that finally looks like your business deserves",
    heroSubline:
      "You've outgrown Canva templates and unreliable freelancers. We produce visual identities and design systems that show where your brand is going — not just where it's been.",
    painPoints: {
      title: "If any of this sounds familiar, you're in the right place",
      intro:
        "Bad design doesn't announce itself — it quietly costs you customers, credibility, and conversions. These are the problems we solve every week.",
      points: [
        {
          title: "Our brand looks different everywhere",
          desc: "No guidelines, no system. Every designer and campaign produces something slightly different, so the brand feels amateur even when the product isn't.",
        },
        {
          title:
            "We briefed three agencies and still don't have a logo we like",
          desc: "Generic concepts and designers who present options instead of recommendations. The problem isn't your brief — it's the process.",
        },
        {
          title: "Our content goes out but nothing stops the scroll",
          desc: "Thumb-stopping design is earned through platform-native thinking, visual hierarchy, and creative built to perform.",
        },
        {
          title: "We got the files but can't use half of them",
          desc: "A folder of unlabelled PSDs and an AI file that won't open isn't a deliverable. Professional design ends with a handover, not a file dump.",
        },
      ],
    },
    whyChooseUs: {
      title:
        "What makes Skyup different from every other graphic design company in Bangalore",
      points: [
        {
          title: "Strategy before software",
          desc: "Every project starts with a discovery session, not a blank artboard — so every design decision has a reason behind it.",
        },
        {
          title: "48-hour turnaround on core deliverables",
          desc: "Most projects move from approved brief to first concept in two business days, without sacrificing quality for speed.",
        },
        {
          title: "You own everything, always",
          desc: "Source files, IP, and usage rights transfer to you completely on final payment. No licensing traps.",
        },
      ],
    },
    offerings: {
      title: "Graphic design services built around what brands actually need",
      points: [
        {
          title: "Logo & Branding Design",
          desc: "Complete visual identities — logo suites, colour palettes, typography, and guidelines — tested across real-world applications from a 16px favicon to a 16-foot hoarding.",
        },
        {
          title: "Social Media Creative Design",
          desc: "Creatives for Instagram, LinkedIn, and Facebook with the right dimensions, hierarchy, and consistency to earn attention and compound over time.",
        },
        {
          title: "Ad Creative Design — Google, Meta & LinkedIn",
          desc: "Format variations for every placement, built around what actually converts — ad creative as a performance lever, not just a visual.",
        },
        {
          title: "Brochure Design",
          desc: "Brochures that communicate clearly and survive the print process without colour shifts — delivered press-ready as standard.",
        },
        {
          title: "Company Profile Design",
          desc: "Profiles structured for scan-reading and built to establish credibility, formatted for both digital and print.",
        },
        {
          title: "Infographic Design",
          desc: "Complex data turned into something people actually finish reading — designed for comprehension first, shareability second.",
        },
        {
          title: "Presentation & Pitch Deck Design",
          desc: "Decks that structure your story visually and make your data land — because investors form a view in the first four slides.",
        },
      ],
    },
    // Dummy — replace with verified portfolio results.
    caseStudies: [
      {
        title: "Fintech Brand Identity Overhaul — Bengaluru NBFC",
        industry: "Lending platform",
        result:
          "Rebuilt the complete visual identity ahead of a retail banking partnership — 34% increase in app store ratings within 90 days, driven partly by stronger first-impression trust at onboarding.",
      },
      {
        title: "D2C Skincare — Social Media Design System",
        industry: "FMCG skincare",
        result:
          "Replaced ad-hoc templates with a cohesive design system — 42% uplift in Instagram engagement rate and a 2.1x improvement in paid ad CTR the following quarter.",
      },
    ],
    process: [
      {
        title: "Brief & Discovery",
        desc: "A structured discovery covering positioning, audience, competitive landscape, and what success looks like — surfacing decisions that have been delaying the project for months.",
      },
      {
        title: "Concept & Moodboard",
        desc: "Two or three distinct creative directions as moodboards before any finished artwork — a low-cost decision point, not a blind commitment.",
      },
      {
        title: "Design & Iteration",
        desc: "You get a working file or presentation deck, not just flat images, so you can test the design in context.",
      },
      {
        title: "Review & Revisions",
        desc: "Structured feedback via a single consolidated document — faster turnarounds and fewer iterations. Revision rounds are agreed and capped upfront.",
      },
      {
        title: "Final Delivery",
        desc: "A handover, not a file dump — deliverables packaged by use case, with a document explaining what each file is for.",
      },
    ],
    toolsTitle: "The tools behind the work",
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "After Effects",
      "Canva Pro",
    ],
    toolsNote:
      "Tool choice is a craft decision, not a preference. A logo built in Photoshop can't scale to a billboard; a template built outside a shared Figma workspace becomes a maintenance problem. We choose every format for what the output has to do in the real world. Final formats include PNG, SVG, PDF, AI, PSD, and MP4.",
    // Dummy — replace with a verified testimonial.
    testimonial: {
      quote:
        "We'd gone through two agencies before Skyup and kept getting work that looked fine but didn't feel like us. The discovery session in week one surfaced things about our positioning we hadn't been able to articulate. The final identity was the first one our entire founding team agreed on — no arguments, no compromises.",
      author: "Priya Nambiar",
      role: "Co-Founder & CEO, Nestara Health",
    },
    faqTitle: "Questions clients ask before they brief us",
    faqs: [
      {
        q: "How much do graphic design services cost in Bangalore?",
        a: "Costs vary based on scope, complexity, turnaround, and deliverables. We provide customised quotes based on your needs.",
      },
      {
        q: "Why is graphic design important for growth?",
        a: "It builds credibility, strengthens brand recognition, improves communication, and increases conversions through professional visuals.",
      },
      {
        q: "How do I choose the right design agency?",
        a: "Look for a strong portfolio, relevant experience, clear communication, a structured process, and understanding of your goals.",
      },
      {
        q: "What's the difference between graphic design and branding?",
        a: "Design creates visual assets; branding includes strategy, messaging, positioning, and identity. Design is one part of branding.",
      },
      {
        q: "Can graphic design improve social engagement?",
        a: "Yes — high-quality design makes content more engaging and effective at capturing attention.",
      },
      {
        q: "How long does it take to design a logo?",
        a: "Typically one to three weeks, depending on complexity, feedback, and revisions.",
      },
      {
        q: "Do I need brand guidelines?",
        a: "Yes — they ensure consistency in logos, colours, typography, and visuals across all channels.",
      },
      {
        q: "What files should I receive?",
        a: "Editable source files and formats such as AI, PSD, SVG, PDF, PNG, and JPG for print and digital.",
      },
      {
        q: "What makes a good logo?",
        a: "Simple, memorable, scalable, versatile, and relevant across all platforms and applications.",
      },
      {
        q: "Can graphic design increase conversion rates?",
        a: "Yes — it improves user experience, message clarity, engagement, and overall conversion.",
      },
    ],
    cta: {
      title: "Ready to make your brand impossible to ignore?",
      subtitle: "Let's create designs that drive real business results.",
    },
    related: [
      {
        slug: "ui-ux-design",
        desc: "Brand visuals and product interfaces designed to feel like one cohesive system.",
      },
      {
        slug: "social-media-marketing",
        desc: "Great creative needs a great distribution engine — we run the social side too.",
      },
      {
        slug: "web-development",
        desc: "We turn your identity into a fast, on-brand website that converts.",
      },
    ],
  },

  // ─────────────────────────────────────────────────── Web Development ──
  {
    slug: "web-development",
    name: "Web Development",
    Icon: Code2,
    href: "/service/web-development",
    from: "#CFFAFE",
    to: "#ECFEFF",
    accent: "#0891B2",
    tagline:
      "Fast, conversion-optimized websites that scale with your growth. Built right. Built to last.",
    items: [
      "Custom & corporate websites",
      "E-commerce websites & storefronts",
      "Web apps, ERP & LMS",
      "Admin panels & dashboards",
      "Website redesign & PWAs",
      "CMS, maintenance & support",
    ],
    heroHeadline:
      "Web development in Bangalore that drives real business results",
    heroSubline:
      "A complete solution for web development — custom websites, CMS platforms, and enterprise web apps. Our certified developers build digital products that perform, scale, and convert.",
    overview: [
      "We blend strategy, design, development, and digital marketing expertise to build websites that look great and perform exceptionally well — SEO-friendly, mobile-responsive, secure, and scalable, customised to your business goals.",
      "Lots of companies treat their website like a digital brochure. We think it should be a powerful marketing and sales vehicle — not just online, but a real part of your business goals.",
    ],
    benefitsTitle: "Why your business needs professional web development",
    benefits: [
      "Generate qualified leads",
      "Improve search engine rankings",
      "Increase customer trust",
      "Enhance user experience",
      "Improve conversion rates",
      "Automate business processes",
      "Support long-term business growth",
    ],
    offerings: {
      title: "Our web development services in Bangalore",
      points: [
        {
          title: "Custom Website Development",
          desc: "Bespoke websites that reflect your goals, audience, and brand — fast, responsive, SEO-friendly, and built to bring in leads and conversions.",
        },
        {
          title: "Corporate Website Development",
          desc: "Credibility-first corporate sites that are easy to use, secure, and scalable, showcasing your services to potential clients.",
        },
        {
          title: "E-Commerce Website Development",
          desc: "Secure, functional storefronts built to convert — payment gateway integration, product management, and a smooth shopping experience.",
        },
        {
          title: "Web Application Development",
          desc: "CRMs, ERPs, customer portals, and dashboards that automate workflows and boost productivity — secure and built to grow with you.",
        },
        {
          title: "ERP Development Solutions",
          desc: "Systems that centralise and automate core operations — HR, inventory, accounting, procurement — with real-time business insights.",
        },
        {
          title: "Learning Management Systems (LMS)",
          desc: "Platforms to deliver, manage, and track online learning — course management, assessments, progress tracking, and certification.",
        },
        {
          title: "Admin Panels & Business Dashboards",
          desc: "Custom panels giving complete control over data, users, and processes, with real-time analytics and reporting.",
        },
        {
          title: "Website Redesign",
          desc: "Transform an outdated site into a modern, high-performing platform — better UX, SEO, loading speed, and conversion.",
        },
        {
          title: "Progressive Web Apps (PWA)",
          desc: "Apps combining the best of web and mobile — fast, offline-capable, with push notifications and a seamless cross-device experience.",
        },
        {
          title: "Website Maintenance & Support",
          desc: "Regular updates, security monitoring, bug fixes, backups, and performance optimisation to keep your site at its best.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why choose us for web development in Bangalore",
      points: [
        {
          title: "Built for business growth",
          desc: "We develop digital assets that support your marketing goals, increase conversions, and generate leads — not just websites.",
        },
        {
          title: "Custom solutions",
          desc: "Solutions matched to your brand, industry, and requirements rather than one-size-fits-all templates.",
        },
        {
          title: "SEO-ready development",
          desc: "SEO-friendly from the start — clean code, well-structured architecture, fast loading, and mobile responsiveness.",
        },
        {
          title: "Mobile-first & responsive",
          desc: "Your site works perfectly on every device, boosting engagement and conversions.",
        },
        {
          title: "Easy content management",
          desc: "CMS development that lets your team update images, pages, blogs, and content without technical expertise.",
        },
        {
          title: "Transparent process & on-time delivery",
          desc: "Clear communication, milestone tracking, and on-time delivery from start to finish.",
        },
        {
          title: "Dedicated support & maintenance",
          desc: "Ongoing support, maintenance, performance monitoring, and updates after launch.",
        },
        {
          title: "Experienced team",
          desc: "Designers, developers, SEO experts, and marketers in one team, blending creativity, technology, and strategy.",
        },
      ],
    },
    process: [
      {
        title: "Discovery & Requirements",
        desc: "A workshop to understand your business, users, and technical needs. Deliverable: a project scope and technology recommendation document.",
      },
      {
        title: "Strategy & Architecture",
        desc: "Sitemap, information architecture, and tech stack defined, with benchmarks for integration, performance, and scalability before coding.",
      },
      {
        title: "UX Design & Prototyping",
        desc: "Figma wireframes refined with your feedback until interactions are intuitive, then high-fidelity visual design aligned to your brand.",
      },
      {
        title: "Development & Integration",
        desc: "Front-end and back-end built in concurrent sprints, with a staging environment from day one for ongoing feedback.",
      },
      {
        title: "QA, Testing & Optimisation",
        desc: "Cross-browser, cross-device, security, accessibility, and performance testing before launch. Bugs fixed, PageSpeed optimised.",
      },
      {
        title: "Launch & Ongoing Support",
        desc: "Safe, controlled deployment with rollback procedures, then uptime, performance, and security monitoring with tiered maintenance retainers.",
      },
    ],
    // Dummy — replace with verified client testimonials.
    testimonials: [
      {
        quote:
          "Skyup is the best web development company in Bangalore we've worked with. They built our SaaS portal on time, on budget, and the code quality is exceptional. Our engineering team continues to work with their codebase with zero friction.",
        author: "Rohan Mehta",
        role: "CTO, FinStack Technologies, Bangalore",
      },
      {
        quote:
          "Our old website was killing our conversion rates. Their team redesigned and rebuilt our store in 8 weeks. The mobile experience is night and day — we saw a 58% lift in sales within the first quarter post-launch.",
        author: "Priya Nair",
        role: "Founder, StyleVault (E-Commerce)",
      },
    ],
    faqTitle: "Frequently asked questions about web development in Bangalore",
    faqs: [
      {
        q: "What are web development services?",
        a: "Designing, developing, and maintaining websites to help businesses establish a strong online presence.",
      },
      {
        q: "How much does website development cost in Bangalore?",
        a: "It varies based on features, design complexity, and functionality. Contact us for a customised quote.",
      },
      {
        q: "How long does it take to develop a website?",
        a: "A standard business website typically takes 2-6 weeks, depending on requirements and revisions.",
      },
      {
        q: "Why is web development important?",
        a: "A professionally developed website attracts visitors, generates leads, improves credibility, and supports growth.",
      },
      {
        q: "Do you provide custom web development?",
        a: "Yes — solutions tailored to your business goals, industry, and customer needs.",
      },
      {
        q: "Will my website be mobile-friendly?",
        a: "Absolutely. All our websites are fully responsive and optimised for desktop, tablet, and mobile.",
      },
      {
        q: "Do you offer CMS web development?",
        a: "Yes — we build on CMS platforms like WordPress so you can easily manage and update content.",
      },
      {
        q: "Is SEO included in web development?",
        a: "Yes — we follow SEO best practices, including optimised structure, fast loading, and mobile responsiveness.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes — we modernise existing sites to improve performance, user experience, and conversions.",
      },
      {
        q: "Why choose your web development company in Bangalore?",
        a: "We build SEO-friendly, conversion-focused websites that combine great design, performance, and business strategy.",
      },
    ],
    cta: {
      title: "Ready to build something great?",
      subtitle:
        "Looking for web development services in Bangalore? Get a free consultation and a no-charge estimate based on your business goals.",
    },
    related: [
      {
        slug: "ui-ux-design",
        desc: "We design the experience before we build it — usable, on-brand, and conversion-focused.",
      },
      {
        slug: "seo",
        desc: "A well-structured, fast site is the foundation of strong technical SEO.",
      },
      {
        slug: "ai-automation",
        desc: "Wire your new site into automated lead capture, follow-up, and reporting.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────── SkyUp CRM ──
  {
    slug: "crm",
    name: "SkyUp CRM",
    Icon: Users,
    href: "/service/crm",
    from: "#D1FAE5",
    to: "#ECFDF5",
    accent: "#059669",
    tagline:
      "An enterprise platform unifying lead tracking, real-time comms, AI transcription and analytics in one system.",
    items: [
      "Lead capture, assignment & tracking",
      "WhatsApp, SMS & email in one inbox",
      "AI voice bot (Saanvi) qualification",
      "Campaign automation & ad dashboards",
      "Call recording, AI transcription & analytics",
      "Attendance, roles & native Android app",
    ],
    heroHeadline: "Close more deals with AI-powered lead management",
    heroSubline:
      "Built for sales-driven teams who are tired of losing leads in spreadsheets and missed follow-ups. Skyup CRM gives your team one unified platform to capture leads from Facebook, Google & your website; assign them to agents in seconds; and track them.",
    statsTitle: "SkyUp CRM in numbers",
    stats: [
      { value: "12+", label: "Integrated modules" },
      { value: "3", label: "User roles & hierarchy" },
      { value: "10+", label: "Third-party integrations" },
      { value: "14 days", label: "Free trial — no card" },
    ],
    painPoints: {
      title:
        "Sound Familiar ? These Are the Pain Points Every Sales Manager Knows",
      intro:
        "Before discovering the right CRM, most sales teams struggle with the same challenges. SkyUp CRM was built specifically to eliminate them.",
      points: [
        {
          title: "Leads buried in spreadsheets",
          desc: "Facebook and Google Ads leads are entered manually — hours of wasted effort.",
          solution:
            "SkyUp auto-captures leads from Meta and Google Ads via webhook in real time. Zero manual entry.",
        },
        {
          title: "Hot leads go cold",
          desc: "Agents forget follow-ups, and revenue walks out the door.",
          solution:
            "Built-in follow-up scheduling, reminder alerts, and AI temperature classification (Hot/Warm/Cold) ensure no lead is forgotten.",
        },
        {
          title: "No visibility into the team",
          desc: "You can't tell what your sales reps are actually doing all day.",
          solution:
            "The real-time admin dashboard shows every agent's leads, calls, conversions, and attendance at a glance.",
        },
        {
          title: "Calling one-by-one wastes hours",
          desc: "Manually calling hundreds of leads burns your team's most valuable time.",
          solution:
            "Saanvi, the AI voice bot, calls and qualifies leads automatically — escalating hot prospects to humans instantly.",
        },
        {
          title: "WhatsApp disconnected from the CRM",
          desc: "Your main channel lives outside your system with no record of conversations.",
          solution:
            "Full two-way WhatsApp Business chat is built in. Every message is logged against the lead.",
        },
        {
          title: "No idea which campaign drives ROI",
          desc: "You spend on ads but can't see what converts.",
          solution:
            "SkyUp maps every lead to its exact source campaign, ad set, and ad — so you know where revenue comes from.",
        },
        {
          title: "Expensive, complex CRM",
          desc: "Your current CRM needs weeks of training and a big budget.",
          solution:
            "SkyUp is intuitive, affordable (from Rs 999/mo), and your team is operational on day one.",
        },
      ],
    },
    overview: [
      "SkyUp CRM is a cloud-based, multi-tenant platform purpose-built for sales-driven organisations of all sizes — from a 3-person startup to a 200-agent enterprise team. It gives your business one unified system to capture, track, manage, and convert every lead.",
      "It goes beyond a traditional CRM, combining lead lifecycle management, multi-channel communication (WhatsApp, SMS, email), AI voice qualification, campaign automation, attendance tracking, and deep analytics — all in one platform your team can use from day one.",
      "Whether a lead arrives from a Facebook ad at 2 AM or a manual entry by a field agent, SkyUp captures it, assigns it, greets it, and tracks every interaction until it converts.",
    ],
    offerings: {
      title: "Everything your sales team needs — in one platform",
      points: [
        {
          title: "Lead Management",
          desc: "Auto-capture from Meta and Google Ads, web forms, bulk CSV, or manual entry — with deduplication, a full lead record, a visual journey drawer, and lead merging.",
        },
        {
          title: "Smart Lead Assignment",
          desc: "Fair, automated round-robin assignment with manual override, full reassignment history, and a previous-agent guard.",
        },
        {
          title: "Real-Time Admin Dashboard",
          desc: "KPI cards, lead temperature breakdown, source-wise distribution, per-agent performance, date filters, and a live attendance view.",
        },
        {
          title: "Communications Hub — WhatsApp, SMS & Email",
          desc: "Two-way WhatsApp Business chat, template messages, media, auto-greeting, SMS, and email — every message logged against the lead.",
        },
        {
          title: "Campaign Automation & CRM Marketing",
          desc: "SMS, WhatsApp, and email blasts to filtered segments, temperature targeting, status tracking, and Meta/Google ad dashboards with campaign-to-lead mapping.",
        },
        {
          title: "AI Voice Bot — Saanvi",
          desc: "Batch outbound calling that qualifies and classifies leads Hot/Warm/Cold, updates temperature instantly, alerts admins, and captures a full transcript and summary.",
        },
        {
          title: "Call Recordings & AI Transcription",
          desc: "On-device recording, browser playback, ElevenLabs transcription, GPT call summaries, sentiment scoring, and secure cloud storage.",
        },
        {
          title: "Reports & Analytics",
          desc: "Full lead reports with advanced filters, source-wise charts, per-agent conversion tables, daily email summaries, full call logs, CSV export, and phone masking.",
        },
        {
          title: "Attendance Tracking",
          desc: "Web/Android clock-in-out, break tracking, idle detection, status overrides, and an exportable admin attendance view — no separate HR tool.",
        },
        {
          title: "Enterprise Security",
          desc: "BIP39 encryption, JWT + role-based access, complete company isolation, phone masking, API rate limiting, and HMAC-SHA256 webhook verification.",
        },
        {
          title: "User & Team Management",
          desc: "Add/edit/delete agents and sub-admins, auto-generated credentials, scoped roles, password strength enforcement, and plan-limit enforcement.",
        },
        {
          title: "Mobile App (Android)",
          desc: "GPS clock-in-out, call-outcome logging, recording upload, on-the-go lead management, and FCM push notifications for reminders and hot-lead alerts.",
        },
      ],
    },
    audience: {
      title: "Built for sales teams. Trusted by growing businesses.",
      points: [
        {
          title: "Real Estate & Property",
          desc: "High lead volumes from digital ads, WhatsApp-first communication, and complex follow-up cycles — exactly what SkyUp is built for.",
        },
        {
          title: "EdTech & Coaching",
          desc: "Manage admissions inquiries, automate WhatsApp and SMS follow-ups, and track counselor performance with full reporting.",
        },
        {
          title: "Financial Services & Loans",
          desc: "Strict data security, phone masking, and role-based access make SkyUp ideal for regulated sales environments.",
        },
        {
          title: "Insurance & Wealth",
          desc: "AI voice-bot qualification and automated follow-up campaigns ensure no prospect falls through the cracks.",
        },
        {
          title: "Field Sales Teams",
          desc: "An Android app for call logging, attendance, and lead management — entirely on the go.",
        },
      ],
    },
    integrationsTitle: "Connects to the tools you already use",
    integrations: [
      {
        name: "Meta (Facebook) Ads",
        desc: "Webhook receives leads from Facebook and Instagram lead forms in real time, with full campaign, ad-set, and ad tagging.",
      },
      {
        name: "Google Ads",
        desc: "Webhook receives leads from Google Ads lead-form extensions, every lead tagged to its exact campaign.",
      },
      {
        name: "WhatsApp Business",
        desc: "MSG91 or Meta Cloud API — two-way chat, template blasts, and auto-greeting on every new lead.",
      },
      {
        name: "MSG91 SMS",
        desc: "Transactional and promotional SMS with delivery-status tracking via webhook callbacks.",
      },
      {
        name: "Brevo (Email)",
        desc: "Transactional and blast emails with a per-company sending identity and HTML email editor.",
      },
      {
        name: "Razorpay",
        desc: "Online plan upgrades — payment confirmed via webhook, subscription activated instantly.",
      },
      {
        name: "ElevenLabs",
        desc: "High-accuracy speech-to-text transcription for call recordings.",
      },
      {
        name: "OpenAI API",
        desc: "Call-transcript summarisation with key points, next actions, and sentiment.",
      },
      {
        name: "Cloudinary",
        desc: "Secure cloud storage for all call recordings and uploaded media.",
      },
      {
        name: "Website / Web Form",
        desc: "A generic webhook endpoint — drop one line of code on any site to start capturing leads.",
      },
    ],
    process: [
      {
        title: "Lead Capture",
        desc: "A lead fills your Facebook ad form at 11 PM. Before they put their phone down, SkyUp has captured it and tagged it with the campaign, ad set, and ad.",
      },
      {
        title: "Auto-Assignment",
        desc: "The round-robin engine assigns the lead to the next available agent evenly, with no duplicates, and notifies them instantly.",
      },
      {
        title: "Auto-Greeting",
        desc: "A personalised WhatsApp, SMS, or email goes out automatically — a great first impression, even at midnight.",
      },
      {
        title: "Agent Follow-Up",
        desc: "The agent calls, logs the outcome and next step, and schedules a follow-up — every action on the lead's activity timeline.",
      },
      {
        title: "AI Voice Bot",
        desc: "For high-volume campaigns, the admin queues leads for Saanvi, which calls, qualifies, and escalates hot leads to a human immediately.",
      },
      {
        title: "Conversion",
        desc: "The agent marks the lead Converted; the admin sees it live, with source, campaign, and agent credited automatically.",
      },
      {
        title: "Reporting",
        desc: "Every morning, a daily report lands in the admin's inbox: leads created, calls made, conversions, and follow-ups per agent and team.",
      },
    ],
    benefitsTitle: "Why sales teams choose SkyUp CRM",
    benefits: [
      {
        title: "Never lose a lead",
        desc: "Every lead from every source is captured, deduplicated, and assigned within seconds. Nothing slips through the cracks.",
      },
      {
        title: "Reach leads where they are",
        desc: "Real two-way WhatsApp conversations, templates, and documents — all without leaving the CRM. No third-party tools.",
      },
      {
        title: "Qualify at scale with AI",
        desc: "Saanvi calls hundreds of leads, qualifies them, and escalates only the hot ones — so your team spends time on buyers.",
      },
      {
        title: "Full team visibility, in real time",
        desc: "A live view of every lead, agent, campaign, and conversion. No waiting for end-of-day reports.",
      },
      {
        title: "Enterprise security, no complexity",
        desc: "BIP39 encryption, role-based access, phone masking, company isolation, and webhook verification — all built in.",
      },
      {
        title: "One platform, not a stack of tools",
        desc: "CRM + WhatsApp + SMS + Email + Campaigns + Attendance + AI Calls + Analytics. One login, one dashboard, one bill.",
      },
    ],
    whyChooseUs: {
      title: "Why sales leaders trust SkyUp CRM",
      points: [
        {
          title: "Experience — built for Indian sales teams",
          desc: "Purpose-built for an environment where WhatsApp is primary, digital ads dominate lead sources, and enterprise CRM is often out of reach.",
        },
        {
          title: "Expertise — modern engineering",
          desc: "Built on React 18, Node.js, MongoDB, Socket.io, and a native Android app, handling real-time multi-tenant data with full isolation.",
        },
        {
          title: "Authoritativeness — a complete platform",
          desc: "Lead capture, assignment, communication, AI qualification, campaigns, call recording, analytics, attendance, and billing — all in one.",
        },
        {
          title: "Trustworthiness — security you can rely on",
          desc: "BIP39 encryption, JWT on every endpoint, multi-tenant isolation, phone masking, and a full audit trail on every action.",
        },
      ],
    },
    pricingTitle: "Simple, transparent pricing",
    pricing: [
      {
        name: "Basic",
        price: "Rs 999/mo",
        desc: "For small teams getting started.",
        features: [
          "5 users",
          "1,000 leads",
          "Lead capture & assignment",
          "14-day free trial",
        ],
      },
      {
        name: "Pro",
        price: "Rs 2,999/mo",
        desc: "For growing sales teams.",
        features: [
          "20 users",
          "10,000 leads",
          "Campaigns & ad integrations",
          "AI call features",
          "14-day free trial",
        ],
      },
      {
        name: "Enterprise",
        price: "Rs 9,999/mo",
        desc: "For large, scaling operations.",
        features: [
          "Unlimited users",
          "Unlimited leads",
          "Custom reports",
          "White-label",
          "14-day free trial",
        ],
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "What is SkyUp CRM and who is it for?",
        a: "A cloud-based sales CRM for sales-driven businesses of all sizes, covering the full lead lifecycle — capture, assignment, communication, AI qualification, conversion, and reporting.",
      },
      {
        q: "Does SkyUp CRM integrate with WhatsApp?",
        a: "Yes, natively — via MSG91 and Meta WhatsApp Cloud API. Two-way conversations, templates, documents, and blast campaigns, all inside the CRM.",
      },
      {
        q: "How does the AI Voice Bot (Saanvi) work?",
        a: "You queue a group of leads and Saanvi calls each one, classifies it Hot/Warm/Cold, and updates the record. Hot leads alert the admin; warm leads reassign to a human.",
      },
      {
        q: "Can I capture leads from Facebook and Google Ads?",
        a: "Yes — via webhook. The moment a lead fills your ad form, it appears in SkyUp tagged with the exact campaign, ad set, and ad. No manual import.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes — 14 days, no credit card. A warning appears 7 days before expiry; after that, an upgrade prompt. You can upgrade via Razorpay in minutes.",
      },
      {
        q: "Is my data secure and isolated?",
        a: "Yes — fully multi-tenant, so every company's data is isolated and cross-tenant access is architecturally impossible. Sensitive data is BIP39-encrypted with JWT-protected endpoints.",
      },
      {
        q: "Does SkyUp CRM have a mobile app?",
        a: "Yes — a native Android app for field agents: GPS clock-in-out, call logging, recording upload, lead management, and push notifications.",
      },
      {
        q: "What integrations does it support?",
        a: "Meta Ads, Google Ads, WhatsApp (MSG91 + Meta Cloud API), MSG91 SMS, Brevo, Razorpay, ElevenLabs, OpenAI, Cloudinary, and any website or web form via webhook.",
      },
      {
        q: "Can I manage attendance inside SkyUp CRM?",
        a: "Yes — a built-in attendance system with web/mobile clock-in-out, work hours, breaks, idle periods, and status overrides. No separate HR tool.",
      },
      {
        q: "What are the pricing plans?",
        a: "Basic Rs 999/mo (5 users, 1,000 leads), Pro Rs 2,999/mo (20 users, 10,000 leads, campaigns, ad integrations, AI calls), and Enterprise Rs 9,999/mo (unlimited, custom reports, white-label). All include a 14-day trial.",
      },
    ],
    cta: {
      title: "Ready to transform your sales operations with SkyUp CRM?",
      subtitle:
        "Join sales teams across India who replaced scattered spreadsheets, disconnected WhatsApp groups, and expensive CRM software with one unified, affordable platform.",
    },
    related: [
      {
        slug: "ai-automation",
        desc: "Extend your CRM with custom AI workflows across marketing, ops, and support.",
      },
      {
        slug: "performance-marketing",
        desc: "Feed high-quality leads into the CRM from fully tracked Google, Meta, and LinkedIn campaigns.",
      },
      {
        slug: "web-development",
        desc: "Connect your website and web forms to the CRM for instant, automatic lead capture.",
      },
    ],
  },
];
