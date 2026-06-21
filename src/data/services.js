import {
  Bot,
  BrainCircuit,
  Code2,
  Mail,
  Palette,
  PenTool,
  Search,
  Share2,
  Target,
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
        q: "What is social media marketing?",
        a: "Social media marketing is the process of promoting your business through platforms like Facebook, Instagram, LinkedIn, and X to increase brand awareness, engagement, and sales.",
      },
      {
        q: "Why is social media marketing important?",
        a: "It helps businesses reach their target audience, build trust, generate leads, and improve customer relationships.",
      },
      {
        q: "Which social media platforms are best for my business?",
        a: "The right platform depends on your audience and goals. Facebook, Instagram, LinkedIn, and YouTube are among the most effective options.",
      },
      {
        q: "How often should I post on social media?",
        a: "Most businesses benefit from posting 3–5 times per week with consistent engagement and content updates.",
      },
      {
        q: "How long does it take to see results?",
        a: "Organic growth typically takes a few months, while paid campaigns can generate visibility and leads much faster.",
      },
      {
        q: "Can social media marketing generate leads?",
        a: "Yes, a well-planned social media strategy can attract qualified leads and increase conversions.",
      },
      {
        q: "What type of content performs best on social media?",
        a: "Videos, reels, carousels, customer testimonials, educational posts, and behind-the-scenes content often perform well.",
      },
      {
        q: "Do I need paid advertising on social media?",
        a: "Paid ads are not mandatory, but they can significantly improve reach, traffic, and lead generation.",
      },
      {
        q: "How do you measure social media success?",
        a: "Success is measured through engagement, reach, follower growth, website traffic, leads, and conversions.",
      },
      {
        q: "Why should I hire a social media marketing agency?",
        a: "An agency helps create strategies, manage campaigns, produce content, and optimize performance for better results.",
      },
    ],
    cta: {
      title: "Ready to Grow Your Brand on Social Media?",
      subtitle:
        "Our social media marketing team in Bangalore is available to audit your existing profile and uncover your greatest social media growth potential, and create a strategy that is unique to your business. ",
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
      "Performance Marketing That Turns Ad Spend Into Measurable Revenue",
    heroSubline:
      "Performance Marketing Agency Bangalore is an agency that has been created for the sole goal of making every ad dollar count. At our core, our performance marketing services are about action—clicks, leads, conversions, and revenue. No range. Not perceptions. Results:",
    statsTitle: "Performance at a glance",
    stats: [
      { value: "12+", label: "Clients" },
      { value: "₹1 Cr+", label: "Ad Spend Managed" },
      { value: "3.4x", label: "Average ROAS" },
      { value: "40%", label: "CPL reduction" },
    ],
    painPoints: {
      title: "You’re spending on ads. But are you getting quality leads?",
      intro:
        "You may be running Google Ads, Meta Ads, or other paid campaigns. But if the leads are poor, cost per lead is high, follow-ups are weak, or conversions are not happening, your ad budget is not working properly. It’s frustrating — and it’s fixable.",
      points: [
        {
          title: "High ad spend, low-quality leads",
          desc: "Many businesses spend money on ads but receive leads that are not serious, not relevant, or not ready to buy. Performance marketing helps target the right audience and improve lead quality.",
        },
        {
          title: "Cost per lead is too high",
          desc: "If campaigns are not optimized properly, every enquiry becomes expensive. Better targeting, ad creatives, landing pages, and conversion tracking can reduce wasted spend.",
        },
        {
          title: "Clicks are coming, but conversions are not",
          desc: "Your ads may be getting clicks, but visitors may not call, fill the form, book a demo, or purchase. This usually happens because of weak landing pages, unclear offers, or poor CTA placement.",
        },
        {
          title: "No proper tracking or reporting",
          desc: "Without conversion tracking, you don’t know which campaign, keyword, creative, or audience is actually generating business. Performance marketing needs clear data to improve results.",
        },
      ],
    },
    offerings: {
      title: "Our Performance Marketing Services — Google Ads",
      points: [
        {
          title: "Google Ads Services",
          desc: "Capture high-intent customers when they are actively searching for your product or service. We manage search campaigns, Performance Max campaigns, display ads, YouTube ads, shopping ads, and remarketing campaigns.",
        },
        {
          title: "Meta Ads Services",
          desc: "Scale leads and sales through Facebook and Instagram campaigns. We build full-funnel Meta Ads strategies with audience targeting, creative testing, retargeting, lead forms, WhatsApp ads, and conversion campaigns.",
        },
        {
          title: "LinkedIn Ads Services",
          desc: "Generate high-quality B2B leads by targeting decision-makers based on job title, company size, industry, seniority, and professional interests. Ideal for SaaS, enterprise, consulting, and B2B service businesses.",
        },
      ],
    },
    processIntro:
      "This is a tried and tested approach for each performance marketing deal—Google Ads, Meta Ads, and LinkedIn Ads. No shortcuts.",
    processTitle: "Our 5-Step Performance Marketing Process",
    process: [
      {
        title: "Discovery & Full Account Audit",
        desc: "We check existing Google Ads, Facebook Ads, LinkedIn profiles, and Meta accounts as well as your GA4 linked account, website conversion funnel, and previous CPL/ROAS. We spot budget leaks, tracking gaps and quick-win opportunities even before a single rupee is spent on performance marketing.",
      },
      {
        title: "Performance Marketing Strategy & Channel Planning",
        desc: "We create an account-level strategy that targets your CAC, customer LTV, and stages of the funnel and distributes your budget between Google Ads, Meta Ads, and LinkedIn Ads. KPI target, audience strategy & creative briefs are provided to every channel of your performance marketing plan before launch.",
      },
      {
        title: "Creative, Copy & Landing Page Development",
        desc: "Copywriters within our team create Google Ads copy, Meta Ads creatives, and LinkedIn Ads sponsored content at the same time. Our unique landing pages are created for every performance marketing campaign, designed to be highly relevant and effective for both Google Ads Q-SCORE and Meta Ads Q-SCORE as well as conversion rate.",
      },
      {
        title: "Launch, Track & Optimise in Real Time",
        desc: "All campaigns are live and have full pixel, GA4, and CRM tracking code. Bids, audiences, and creatives were dynamically adjusted across all channels and platforms, daily, based on dashboard performance feeds from the live platform. Weekly performance calls are the answer to keeping you on track—no surprises.",
      },
      {
        title: "Scale Winners, Kill Losers, Report Clearly",
        desc: "Once we see that we have winning campaigns in all of your performance marketing mix, we scale hard but hit ROAS and CPL targets. Every channel is granularized in basic terms on a monthly level; spend, revenue, ROAS, CPL, and forward recommendations are calculated.",
      },
    ],
    whyChooseUs: {
      title: "Why Brands Choose SkyUp for Performance Marketing",
      points: [
        {
          title: "You Know Where Every Rupee Goes",
          desc: "We track your ad spend, leads, conversions, CPL, and ROAS clearly so you know exactly what your campaigns are delivering.",
        },
        {
          title: "No Guesswork, Only Data",
          desc: "Every decision is backed by campaign data, audience behaviour, creative performance, conversion tracking, and lead quality insights.",
        },
        {
          title: "Multi-Channel Expertise",
          desc: "We manage Google Ads, Meta Ads, and LinkedIn Ads with a channel-specific strategy instead of using the same approach everywhere.",
        },
        {
          title: "Lead Quality Focus",
          desc: "We do not focus only on cheap leads. We optimize campaigns to attract relevant leads that are more likely to convert into customers.",
        },
        {
          title: "Weekly Optimization",
          desc: "Your campaigns are monitored and improved regularly through keyword changes, audience updates, creative testing, and budget adjustments.",
        },
        {
          title: "Built for Growth",
          desc: "Whether you want more enquiries, demo bookings, sales, or B2B pipeline, our performance marketing strategy is built around measurable business outcomes.",
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
    campaignResults: {
      eyebrow: "CLIENT RESULTS",
      title: "Real Campaigns. Real Numbers.",
      subtitle:
        "A snapshot of recent Google & Meta performance across 12 client accounts.",
      tables: [
        {
          theme: "blue",
          eyebrow: "META ADS  |  FACEBOOK & INSTAGRAM",
          title: "Meta Campaign Results — 12 Clients",
          note: "Platform: Facebook & Instagram · Meta objective shown per client",
          columns: [
            { key: "client", label: "Client" },
            { key: "industry", label: "Industry" },
            { key: "objective", label: "Meta Objective", color: "blue" },
            { key: "cpl", label: "CPL", color: "blue" },
            { key: "ctr", label: "CTR" },
            { key: "roas", label: "ROAS", color: "green" },
            { key: "leads", label: "Leads" },
          ],
          rows: [
            {
              client: "Rathna Bhoomi Developers",
              industry: "Real Estate",
              objective: "Lead Generation",
              cpl: "₹195",
              ctr: "4.8%",
              roas: "3.3x",
              leads: "200+ Leads/Qtr",
            },
            {
              client: "Navanagara Coop. Society",
              industry: "Finance",
              objective: "Lead Generation",
              cpl: "₹210",
              ctr: "3.9%",
              roas: "2.9x",
              leads: "150+ Members",
            },
            {
              client: "Garuda Holidays",
              industry: "Travel",
              objective: "Conversions",
              cpl: "₹280",
              ctr: "5.2%",
              roas: "4.1x",
              leads: "120+ Bookings",
            },
            {
              client: "Sharani Edu Solutions",
              industry: "Education",
              objective: "Lead Generation",
              cpl: "₹165",
              ctr: "6.1%",
              roas: "3.8x",
              leads: "300+ Admissions",
            },
            {
              client: "LGruhakalpa Coop. Society",
              industry: "Housing Finance",
              objective: "Lead Generation",
              cpl: "₹225",
              ctr: "4.3%",
              roas: "3.1x",
              leads: "180+ Members",
            },
            {
              client: "Godrej Properties",
              industry: "Premium Real Estate",
              objective: "Lead Generation",
              cpl: "₹380",
              ctr: "3.7%",
              roas: "4.6x",
              leads: "250+ Leads/Qtr",
            },
            {
              client: "Satva Luminia",
              industry: "Residential Real Estate",
              objective: "Lead Generation",
              cpl: "₹320",
              ctr: "4.5%",
              roas: "3.7x",
              leads: "180+ Leads/Qtr",
            },
            {
              client: "TATA Varnam",
              industry: "Residential Real Estate",
              objective: "Lead Generation",
              cpl: "₹355",
              ctr: "4.8%",
              roas: "4.2x",
              leads: "220+ Leads/Qtr",
            },
            {
              client: "SLV Golden Towers",
              industry: "Real Estate",
              objective: "Traffic + Retargeting",
              cpl: "₹290",
              ctr: "4.2%",
              roas: "3.5x",
              leads: "160+ Leads/Qtr",
            },
            {
              client: "Novara Nature Estates",
              industry: "Luxury Real Estate",
              objective: "Lead Generation",
              cpl: "₹410",
              ctr: "3.8%",
              roas: "4.6x",
              leads: "160+ Leads/Qtr",
            },
            {
              client: "Purvankara",
              industry: "Premium Real Estate",
              objective: "Lead Generation + Video Views",
              cpl: "₹360",
              ctr: "4.1%",
              roas: "4.4x",
              leads: "300+ Leads/Qtr",
            },
            {
              client: "Greater Knack",
              industry: "CA/CS/CMA Coaching",
              objective: "Conversions",
              cpl: "₹165",
              ctr: "6.2%",
              roas: "3.8x",
              leads: "300+ Admissions",
            },
          ],
          footer: [
            { value: "₹165", label: "Best CPL (Sharani Edu)" },
            { value: "6.1%", label: "Best CTR (Sharani Edu)" },
            { value: "4.6x", label: "Best ROAS (Novara NE)" },
            { value: "12", label: "Clients on Meta" },
          ],
        },
        {
          theme: "green",
          eyebrow: "GOOGLE ADS  |  SEARCH | DISPLAY | PMAX | YOUTUBE",
          title: "Google Campaign Results — 12 Clients",
          note: "Platform: Google Ads · Campaign type shown per client",
          columns: [
            { key: "client", label: "Client" },
            { key: "industry", label: "Industry" },
            { key: "type", label: "Campaign Type", color: "green" },
            { key: "cpc", label: "Avg. CPC", color: "blue" },
            { key: "conv", label: "Conv. Rate" },
            { key: "quality", label: "Quality Score", color: "amber" },
            { key: "roas", label: "ROAS", color: "green" },
          ],
          rows: [
            {
              client: "Rathna Bhoomi Developers",
              industry: "Real Estate",
              type: "Search + PMax",
              cpc: "₹42",
              conv: "6.8%",
              quality: "8/10",
              roas: "3.1x",
            },
            {
              client: "Navanagara Coop. Society",
              industry: "Finance",
              type: "Search + Display",
              cpc: "₹35",
              conv: "4.9%",
              quality: "8/10",
              roas: "2.7x",
            },
            {
              client: "Garuda Holidays",
              industry: "Travel",
              type: "Search + PMax",
              cpc: "₹58",
              conv: "6.4%",
              quality: "9/10",
              roas: "4.3x",
            },
            {
              client: "Sharani Edu Solutions",
              industry: "Education",
              type: "Search + YouTube",
              cpc: "₹28",
              conv: "7.2%",
              quality: "9/10",
              roas: "3.9x",
            },
            {
              client: "LGruhakalpa Coop. Society",
              industry: "Housing Finance",
              type: "Search + Display",
              cpc: "₹38",
              conv: "5.1%",
              quality: "8/10",
              roas: "3.0x",
            },
            {
              client: "Godrej Properties",
              industry: "Premium Real Estate",
              type: "Search + PMax",
              cpc: "₹95",
              conv: "4.6%",
              quality: "9/10",
              roas: "4.5x",
            },
            {
              client: "Satva Luminia",
              industry: "Residential Real Estate",
              type: "Search + PMax",
              cpc: "₹72",
              conv: "5.3%",
              quality: "8/10",
              roas: "3.6x",
            },
            {
              client: "TATA Varnam",
              industry: "Residential Real Estate",
              type: "Search + YouTube",
              cpc: "₹68",
              conv: "5.7%",
              quality: "8/10",
              roas: "4.1x",
            },
            {
              client: "SLV Golden Towers",
              industry: "Real Estate",
              type: "Search + Display",
              cpc: "₹55",
              conv: "5.0%",
              quality: "8/10",
              roas: "3.4x",
            },
            {
              client: "Novara Nature Estates",
              industry: "Luxury Real Estate",
              type: "PMax + Search",
              cpc: "₹105",
              conv: "4.5%",
              quality: "9/10",
              roas: "4.6x",
            },
            {
              client: "Purvankara",
              industry: "Premium Real Estate",
              type: "Search + PMax",
              cpc: "₹88",
              conv: "4.9%",
              quality: "9/10",
              roas: "4.3x",
            },
            {
              client: "Greater Knack",
              industry: "CA/CS/CMA Coaching",
              type: "Search + PMax",
              cpc: "₹32",
              conv: "6.8%",
              quality: "9/10",
              roas: "3.9x",
            },
          ],
          footer: [
            { value: "₹28", label: "Best CPC (Sharani Edu)" },
            { value: "7.2%", label: "Best Conv. Rate (Sharani Edu)" },
            { value: "9/10", label: "Top Quality Score (5 clients)" },
            { value: "4.6x", label: "Best ROAS (Novara NE)" },
          ],
        },
      ],
    },
    faqTitle: "Frequently Asked Questions About Performance Marketing Services",
    faqs: [
      {
        q: "What are Google Ads?",
        a: "Google Ads are paid advertisements that appear on Google Search, YouTube, Display Network, and partner websites to generate leads, traffic, and sales.",
      },
      {
        q: "How much budget is needed for Google Ads?",
        a: "Google Ads budgets depend on your industry, competition, and goals. Most businesses start with a scalable monthly ad budget based on target CPL or ROI.",
      },
      {
        q: "How long does Google Ads take to show results?",
        a: "Google Ads can start generating traffic and leads within days, while optimized conversion performance usually improves within 30–90 days.",
      },
      {
        q: "What are Meta Ads?",
        a: "Meta Ads are paid campaigns run across Facebook and Instagram to increase brand awareness, website traffic, leads, and online sales.",
      },
      {
        q: "Are Meta Ads good for lead generation?",
        a: "Yes. Meta Ads are highly effective for lead generation using advanced audience targeting, retargeting, and conversion-focused creatives.",
      },
      {
        q: "Which businesses benefit most from Meta Ads?",
        a: "E-commerce brands, real estate companies, coaches, local businesses, and D2C brands benefit significantly from Facebook and Instagram advertising.",
      },
      {
        q: "What are LinkedIn Ads used for?",
        a: "LinkedIn Ads are mainly used for B2B marketing, lead generation, recruitment, brand awareness, and targeting decision-makers professionally.",
      },
      {
        q: "Are LinkedIn Ads better for B2B marketing?",
        a: "Yes. LinkedIn Ads provide precise targeting based on job title, industry, company size, and professional interests, making them ideal for B2B campaigns.",
      },
      {
        q: "How expensive are LinkedIn Ads compared to Google or Meta Ads?",
        a: "LinkedIn Ads usually have a higher CPC, but they often generate higher-quality B2B leads and better decision-maker targeting.",
      },
      {
        q: "What is performance marketing?",
        a: "Performance marketing is a digital marketing strategy where campaigns are optimized based on measurable results such as leads, conversions, sales, and ROI.",
      },
    ],
    cta: {
      title: "Ready to Stop Wasting Ad Spend?",
      subtitle:
        "Get a free performance marketing audit and discover where your Google Ads, Meta Ads, and LinkedIn Ads budget is being wasted — and how to fix it.",
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
    heroHeadline: "Email Marketing That Converts — Not Just Communicates",
    heroSubline:
      "Most businesses send emails. We build email programs that consistently generate pipeline, recover lost revenue, and turn one-time buyers into loyal customers.",
    statsTitle: "Why email still wins",
    stats: [
      { value: "36-42%", label: "Avg open rate (all industries)" },
      { value: "4.3B", label: "Global email users" },
      { value: "36x", label: "Average ROI" },
    ],

    painPoints: {
      title: "Your leads are in your list. But they’re not converting.",
      intro:
        "You’ve collected customer emails through ads, website forms, enquiries, or past purchases. But emails are not being sent consistently, follow-ups are missed, and potential customers forget your brand. It’s frustrating — and it’s fixable.",
      points: [
        {
          title: "Leads are not followed up",
          desc: "Many companies gather leads but don't do second floor sales.Many businesses get leads, but don't do second floor sales. If you don't follow-up with your interested customers via email, they might lose interest or turn to another competitor.",
        },
        {
          title: "Emails are not getting opened",
          desc: "You might be sending emails that are getting to people inboxes, but if the subject line is weak, the timing is not right or the content is irrelevant, then those emails may not be reaching the correct people. A robust email campaign can help create visibility.",
        },
        {
          title: "No automation, too much manual work",
          desc: "Sending offers, reminders, updates and followups by hand takes time and is prone to being either missed or forgotten. Email automation enables you to connect with customers without having to do it manually each day.",
        },
        {
          title: "No tracking, no clarity",
          desc: "You cannot know who has opened your emails or who has clicked, shown interest, or had enquiries come through your campaign. When not reported, email marketing is not a growth system; it's guesswork.",
        },
      ],
    },
    offerings: {
      title: "Our Email Marketing Services — Built for Growth",
      subtitle:
        "Skyup Digital Solutions, a Email marketing agency in Bangalore Email marketing solutions, and is focused on performance, not activity. Every strategy we have is based upon your business goals, your audience's actions and intelligence provided by the platform.",
      points: [
        {
          title: "Email Strategy & Audit",
          desc: "We analyze your e-mail performance, deliverability, list quality, automation shortcomings and lost revenue opportunities and develop a practical approach based on your audience, customer journey, business objectives and growth priorities.",
        },
        {
          title: "Managing Campaigns",
          desc: "Email writing, design, testing and deployment for launches, promotions, re-engagement and nurturing campaigns are all taken care of, so that every email is goal-driven and performance expected from the get-go. ",
        },
        {
          title: "Automation & Drip Sequences",
          desc: "We design automated email sequences such as welcome, abandoned cart, post-purchase, win-back, lead nurturing, and more, that can nurture your leads and drive conversions any time of the day, without any manual effort.",
        },
        {
          title: "List Growth & Segmentation",
          desc: "We nurture your email list using ethical tactics such as lead magnets, forms and gated content, and then segment your leads by their actions, buying history, interests and lifecycle stage for more targeted messaging.",
        },
        {
          title: "Development of the Template",
          desc: "We create mobile-responsive, on-brand email templates that are optimized for high deliverability and engagement. Email templates are tested in all email clients and devices. We create beautiful, conversion-focused websites. Effective calls to action, readability, and hierarchical structure. ",
        },
        {
          title: "A/B Testing",
          desc: "Clear data guides our testing of subject lines, preview text, CTAs, send time, content format, personalization, and other elements to boost engagement, conversions, and future email strategy after each campaign.",
        },
        {
          title: "ESP Setup & Migration",
          desc: "Whether you’re launching your first email platform or moving from one ESP to another, we do the technical heavy lifting. This includes domain authentication, IP warming, audience migration, rebuilding of templates, and rewiring of automation with no data loss.",
        },
        {
          title: "Reporting & Analytics",
          desc: "We deliver transparency on opens, clicks, conversions, revenue attribution, deliverability, and list growth – you will have a clear idea of what is working, what needs to be improved and why each and every decision made with your campaigns.",
        },
      ],
    },
    processIntro:
      "All Skyup Digital Solutions client engagements have a proven, repeatable process that removes any guesswork and guarantees your social media investment provides compounding returns.",
    processTitle: "Our 5-Step Email Marketing Process",
    process: [
      {
        title: "Discovery & Audit: ",
        desc: "Discovery & Audit We audit your current email list quality, setup and historical data. We now have a baseline and can see the fastest wins we can get before a strategy is agreed.",
      },
      {
        title: "Strategy & Roadmap: ",
        desc: "An audit roadmap will be given to you (by e-mail) and will be prioritized based on your business objectives. This includes the campaign plan, the automation builds, the Segmentation Logic and the KPIs that will be measured and will be our responsibility.",
      },
      {
        title: "Build & Design:",
        desc: "We create your templates, copywriting and automation processes and then discuss and confirm with you before launching live. All assets are QA tested on devices and e-mail clients.",
      },
      {
        title: "Launch & Optimise:",
        desc: "We build campaigns and set up automations, and track campaign performance as it occurs. Week 1 - you do A/B testing and get the incremental improvement to all sends from that point onwards.",
      },
      {
        title: "Report & Scale:",
        desc: "Monthly reporting sessions: data to decisions. As you continue to make performance breakthroughs, you open new doors. New segments to be targeted. New sequences to construct. New revenue streams to be activated.",
      },
    ],
    caseResults: {
      title: "Email Marketing Results That Speak for Themselves",
      items: [
        {
          name: "Gruhakalpa Housing Society Ltd",
          metrics: [
            { label: "List size", value: "12,400", sub: "Active contacts" },
            { label: "Open rate", value: "58%", sub: "2× industry average" },
            {
              label: "Click-through",
              value: "21%",
              sub: "6.5× industry average",
            },
            { label: "Enquiries", value: "640", sub: "Hot qualified" },
            {
              label: "Bounce rate",
              value: "0.9%",
              sub: "Excellent list health",
            },
          ],
        },
        {
          name: "Rathna Bhoomi Developers",
          metrics: [
            { label: "List size", value: "9,800", sub: "Active contacts" },
            { label: "Open rate", value: "54%", sub: "1.9× industry average" },
            {
              label: "Click-through",
              value: "19%",
              sub: "5.9× industry average",
            },
            { label: "Enquiries", value: "480", sub: "Hot qualified leads" },
            {
              label: "Bounce rate",
              value: "1.1%",
              sub: "Excellent list health",
            },
          ],
        },
      ],
    },

    platformBlock: {
      title: "Platform-Agnostic. Expertly Integrated.",
      intro:
        "We are certified and know all the top email service providers, such as Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and Brevo.",
      tools: ["Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign", "Brevo"],
      note: "We are an email marketing company, platform agnostic, based out of Bangalore. We suggest and use any tool that meets your budget, tech stack, and growth objectives, not the ones that pay us the most referral fee.",
    },
    whyChooseUs: {
      title: "Why Brands Prefer SkyUp for Email Marketing?",
      points: [
        {
          title: "Compose a Letter of the Sea",
          desc: "You don't want to convey difficult marketing terms to your customers. We compose emails that are clear, natural, helpful, and understandable.",
        },
        {
          title: "Using a Calculator to Make Strategy Decisions",
          desc: "We're not blasting emails out for the sake of blasting emails. Each campaign has a defined goal and audience, a message, and a CTA.",
        },
        {
          title: "Automation That Saves Time",
          desc: "We ensure that the team does not have to do the follow-ups manually by automating the journey with email for leads, customers and inactive users.",
        },
        {
          title: "Better Lead Nurturing",
          desc: "The bulk of leads require some time to purchase. Using valuable and timely email communication, we keep you connected to them.",
        },
        {
          title: "Clean Design & Mobile-Friendly Layouts",
          desc: "The majority of people read emails via a mobile device. We build responsive, easy to read, simple to act on email designs.",
        },
        {
          title: "Measurable Reporting",
          desc: "You will have feedback on what is successful. We monitor opens, clicks, responses, enquiries, conversions and audience engagement.",
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
    faqTitle: "FAQ’s About Our Email Marketing Services",
    faqs: [
      {
        q: "What is email marketing and how does it help businesses?",
        a: "Email marketing is a digital marketing strategy that helps businesses nurture leads, increase customer retention, and drive sales through targeted email campaigns and automation.",
      },
      {
        q: "Why is email marketing important for business growth?",
        a: "Email marketing delivers one of the highest ROIs in digital marketing by helping businesses build customer relationships, increase repeat purchases, and generate consistent revenue.",
      },
      {
        q: "How much ROI can email marketing generate?",
        a: "On average, email marketing can generate up to 36x ROI, making it one of the most cost-effective digital marketing channels for lead generation and customer retention.",
      },
      {
        q: "What services are included in your email marketing solutions?",
        a: "Our email marketing services include email strategy, campaign management, automation setup, drip sequences, list segmentation, template design, A/B testing, reporting, and ESP migration.",
      },
      {
        q: "What are email automation and drip campaigns?",
        a: "Email automation and drip campaigns are pre-scheduled email sequences triggered by user behavior, helping businesses nurture leads, recover abandoned carts, and improve conversions automatically.",
      },
      {
        q: "Which email marketing platforms do you work with?",
        a: "We work with leading email marketing platforms, including Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo, Shopify Email, and other CRM-integrated ESPs.",
      },
      {
        q: "How do you improve email open rates and click-through rates?",
        a: "We improve email performance using audience segmentation, personalised content, A/B testing, optimized subject lines, mobile-responsive design, and deliverability best practices.",
      },
      {
        q: "Can email marketing help increase e-commerce sales?",
        a: "Yes. Email marketing for e-commerce helps recover abandoned carts, increase repeat purchases, promote products, and improve customer lifetime value through automated workflows.",
      },
      {
        q: "Do you provide email marketing services for B2B companies?",
        a: "Yes. We create B2B email marketing campaigns focused on lead nurturing, sales funnel automation, onboarding sequences, and improving conversion rates across longer sales cycles.",
      },
      {
        q: "Why choose your email marketing agency in Bangalore?",
        a: "As a results-driven email marketing agency in Bangalore, we focus on ROI, transparent reporting, automation-led growth, and personalized strategies tailored to your business goals.",
      },
    ],
    cta: {
      title: "Ready to Work With a Results-Driven Email Marketing Agency in Bangalore?",
      subtitle:
        "Every day that you don’t have a properly optimised email program is revenue left on the table—and your competitors are taking it. Let's fix that with a free audit of your current email setup. No obligation. We’ll find your biggest opportunities and show you exactly what’s possible—in plain language, with real numbers.",
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
      "Stop Doing It Manually. Start Scaling with AI Automation Services in Bangalore.",
    heroSubline:
      "Skyup Digital Solution LLP is the trusted AI automation company that assists organizations in Bangalore by automating repetitive tasks, drive their growth, and harness the true potential of AI Automation without the technological mess. ",
    painPoints: {
      title:
        "Is Your Team Stuck Doing Work That AI Can Handle in Seconds?",
      intro:
        "You may be spending hours on repetitive tasks like lead follow-ups, customer replies, data entry, reporting, reminders, and task updates. These small delays reduce productivity, increase missed opportunities, and slow down business growth. It’s frustrating — and it’s fixable.",
      points: [
        {
          title: "Too much manual work",
          desc: "Your team spends valuable time on repeated tasks like sending messages, updating sheets, assigning leads, creating reports, and following up with customers. AI automation helps reduce manual effort and saves time every day.",
        },
        {
          title: "Leads are missed or delayed",
          desc: "When enquiries come from ads, website, WhatsApp, or social media, slow response can make customers lose interest. AI automation can respond instantly, qualify leads, and trigger follow-ups without delay.",
        },
        {
          title: "No system for follow-ups",
          desc: "Many businesses lose customers because follow-ups depend on memory or manual tracking. AI automation can schedule reminders, send WhatsApp/email follow-ups, and keep every lead moving in the sales funnel.",
        },
        {
          title: "Reports take too much time",
          desc: "Daily reports, sales updates, task summaries, and performance tracking can take hours. AI automation can collect data, prepare summaries, and show clear insights without manual report preparation.",
        },
      ],
    },
    offerings: {
      title: "Our AI Automation Services in Bangalore",
      subtitle:
        "Skyup Digital Solution LLP is an AI Automation company in Bangalore, a digital marketing partner, and creates, builds and implements intelligent automation solutions for businesses of all sizes.",
      points: [
        {
          title: "AI Chatbots & Virtual Assistants",
          desc: "Provide instant, intelligent customer interactions with AI-powered chatbots and virtual assistants. Automate conversations, answer customer queries, and deliver 24/7 support across multiple channels.",
        },
        {
          title: "Lead Generation & CRM Automation",
          desc: "Capture, qualify, and manage leads automatically while keeping your CRM updated in real time. Streamline your sales process and improve conversion rates with intelligent automation.",
        },
        {
          title: "WhatsApp Business Automation",
          desc: "Send your customers good news through Artificial Intelligence-powered WhatsApp automation! Manage inquiries, make appointments, follow up leads, and make instant responses, at scale.",
        },
        {
          title: "Voice AI Agents",
          desc: "Integrate humans-first AI voice agents for answering phone calls, scheduling appointments and customer support 24/7. Optimize customer interactions, cut down on expenses.",
        },
        {
          title: "Document Processing Automation",
          desc: "Extract, process, and organize business documents using AI. Minimize man-power, enhance accuracy and speed data-driven workflows. ",
        },
        {
          title: "AI-Powered Customer Support",
          desc: "Deliver faster and more personalized customer service with intelligent support automation. Resolve queries efficiently through AI-driven responses and smart ticket handling.",
        },
        {
          title: "Appointment & Booking Automation",
          desc: "Schedule automations, reminders and calendar management as a way of simplifying scheduling. Making it easier for the customer and decreasing no shows and administrative load.",
        },
        {
          title: "Custom Artificial Intelligence Automation Solutions",
          desc: "All businesses are different. You scale smarter with our customized AI automation, fitted to your processes and daily routine and enhanced by increased efficiency.",
        },
      ],
    },
    processIntro:
      "All our AI automation services in Bangalore are delivered through a tried and tested 3-step process. As a results oriented AI automation company in Bangalore, we strive to keep it simple, transparent and outcome oriented right from the beginning.",
    processTitle: "How Skyup Digital Solutions LLP Delivers Your AI Automation",
    process: [
      {
        title: "Free AI Automation Audit",
        desc: "We begin with a free strategy session to get to know your business, what tools you are using and your biggest pain points. We then perform a comprehensive assessment of your workflows and determine where your best shots for automation are today \n• Investigate current tech stack and processes with a deep dive approach \n• AI automation roadmap customised to the client's needs, sent within 48 hours.",
      },
      {
        title: "Custom AI Blueprint & Design",
        desc: "Our automation architects outline a bespoke AI workflow and system design – from every touch point, every integration and every trigger. You receive a clear, jargon-free blueprint beforehand, and prior to writing a single line of code. \n• Clearly define the overall system design and choose tools in the system. \n• 360-degree integration with your CRM, marketing and ops tools \n• Build without any surprises by signing-off before starting construction.",
      },
      {
        title: "Build, Test & Launch",
        desc: "Our team of certified automation specialists constructs, tests and implements your entire AI automation system. Thorough quality checks conducted, including some aspects of AI in automation testing, and complete handover training and documentation. \n• Full build, QA testing and go-live support. \n• Team training and onboarding was included. \n• The post-launch monitoring and optimisation will be followed for 30 days. ",
      }
    ],
    whyChooseUs: {
      title:
        "Why Brands Choose SkyUp for AI Automation",
      points: [
        {
          title: "You own every automation we build",
          desc: "No hidden systems. No black boxes. Every automation is documented, explained, and handed over clearly, so your team knows exactly how it works and how to use it.",
        },
        {
          title: "Faster setup, without long agency delays",
          desc: "We help businesses go live with their first automation faster for standard workflows. From lead follow-ups to task alerts, we focus on practical systems that start saving time quickly.",
        },
        {
          title: "Built around your real business process",
          desc: "We do not force generic automation templates. We first understand your team, tools, workflow, customer journey, and daily manual tasks, then build automation that fits your operations.",
        },
        {
          title: "Automation focused on measurable ROI",
          desc: "Every workflow we create is designed to reduce manual work, avoid missed leads, improve response time, and save operational hours — so automation directly supports business growth.",
        },
      ],
    },

     resultsBlock: {
      title: "Real Results from Our AI Automation Services in Bangalore",
      intro:
        "At Skyup Digital Solution LLP, a trusted AI automation company in Bangalore, we do not just guarantee results. We deliver them. Here are some of the results we have seen for our clients in Bangalore and across India with our AI automation services:",
      results: [
        {
          value: "10+ hrs",
          label:
            "saved per team member per week with AI workflow automation",
        },
        {
          value: "3×",
          label:
            "pipeline growth with AI marketing automation for lead nurturing",
        },
        {
          value: "40%",
          label:
            "faster lead response time with AI chatbot & automation services",
        },
        {
          value: "50%",
          label:
            "less QA time for clients who leverage AI for automation testing",
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
    faqTitle: "Frequently Asked Questions About Our AI Automation Services",
    faqs: [
      {
        q: "What are AI automation services?",
        a: "AI automation services use artificial intelligence to handle repetitive business tasks automatically - saving time, reducing errors and helping your business scale faster without hiring more staff.",
      },
      {
        q: "How does an AI automation company in Bangalore help my business?",
        a: "A local AI automation company in Bangalore understands your market, tools and business environment. Skyup eliminates manual work across sales, marketing and operations — so your team focuses on growth while AI handles the routine tasks 24/7, with support just a call away.",
      },
      {
        q: "What is AI workflow automation?",
        a: "AI workflow automation connects your tools and systems so data moves and tasks trigger automatically — no manual copy-pasting, follow-ups or reporting needed.",
      },
      {
        q: "What is AI marketing automation?",
        a: "AI marketing automation runs your email campaigns, lead nurturing, social posting and reporting on autopilot — delivering personalised communication to your audience at scale.",
      },
      {
        q: "Do I need technical knowledge to use AI automation?",
        a: "No. Skyup Digital Solution LLP handles everything — design, build, testing and training. You get the results without touching any code.",
      },
      {
        q: "How long does it take to go live?",
        a: "Most clients are live within 2 to 4 weeks of their first strategy call, depending on the complexity of the workflows involved.",
      },
      {
        q: "What is AI in automation testing?",
        a: "AI in automation testing uses machine learning to automatically generate and run software test cases — reducing QA time by up to 70% and catching bugs faster.",
      },
      {
        q: "Which industries do you serve?",
        a: "We deliver AI automation services across all industries — e-commerce, real estate, healthcare, SaaS, professional services, education and manufacturing.",
      },
      {
        q: "How much do AI automation services cost?",
        a: "Pricing depends on the scope and workflows involved. We offer a free AI audit first so you know exactly what's needed before any investment is made.",
      },
      {
        q: "Why choose Skyup Digital Solution LLP as my AI automation company in Bangalore?",
        a: "We are a proven, Bangalore-based AI automation company in Bangalore with deep expertise in artificial intelligence automation — delivering real, measurable results for 50+ businesses through a transparent, no-obligation process. We know Bangalore's business landscape and we speak your language.",
      },
    ],
    cta: {
      title: "Get Your Free AI Automation Audit Today",
      subtitle:
        "Book your free 30-minute strategy call now. No commitment. No jargon. Just a clear picture of what AI automation can do for your business — from the team that knows Bangalore best.",
      primaryLabel:"Book My Free AI Automation Audit"
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
      "Custom Machine Learning Solutions",
      "End-to-End AI & ML Development support",
      "Artificial Intelligence & Machine Learning",
      "Machine Learning Projects for Industry",
    ],
    heroHeadline:
      "Machine Learning Services in Bangalore for Smarter Business Growth",
    heroSubline:
      "Turn your business data into something useful, not just numbers — with our machine learning services in Bangalore. We help teams use Artificial Intelligence and Machine Learning to automate, optimise, forecast, and reimagine day-to-day processes for better decision-making — and to spot new growth avenues, quietly but effectively. As a trusted AI & Machine Learning solutions vendor, we create, build, and deploy custom Machine Learning models that address your business goals — from predictive analytics to customer intelligence, fraud prevention to computer vision and NLP — all scalable and enterprise-ready.",
    painPoints: {
      title:
        "Your business has data. But it’s not helping you make smarter decisions.",
      intro:
        "You may already have customer data, sales data, enquiry data, operational data, or reports. But if that data is only stored and not analysed intelligently, you may be missing patterns, predictions, and opportunities for growth. It’s frustrating — and it’s fixable.",
      points: [
        {
          title: "Data is collected but not used",
          desc: "Many businesses store large amounts of data in spreadsheets, CRM tools, software, or reports. But without machine learning, that data does not help predict customer behaviour, demand, sales trends, or business risks.",
        },
        {
          title: "Decisions are based on guesswork",
          desc: "Business owners often make decisions based on experience alone. Machine learning helps identify patterns in data, making decisions more accurate, faster, and insight-driven.",
        },
        {
          title: "Manual analysis takes too much time",
          desc: "Reviewing reports, comparing numbers, and finding trends manually can take hours or days. Machine learning can process data quickly and highlight useful insights automatically.",
        },
        {
          title: "No prediction, only past reports",
          desc: "Traditional reports only show what already happened. Machine learning helps forecast what may happen next — such as future sales, customer churn, demand changes, or lead quality.",
        },
      ],
    },
    offerings: {
      title: "Our Machine Learning Services",
      points: [
        {
          title: "Machine Learning Consulting",
          desc: "We provide machine learning consulting to help companies find opportunities to leverage AI and machine learning for automation, optimization, and data-driven decision-making. We create custom strategies to match your business objectives.",
        },
        {
          title: "Custom Machine Learning Model Development",
          desc: "We design and develop custom machine learning models that tackle your specific business obstacles using your data. These solutions bring accurate predictions, sharper insights, and smarter automation — in a way that actually fits.",
        },
        {
          title: "Predictive Analytics Solutions",
          desc: "Use predictive analytics to deliver valuable insights from historical and real-time data. We help businesses get a more accurate picture of trends, customer requirements, demand, and potential hazards.",
        },
        {
          title: "Machine Learning Algorithm Development",
          desc: "Our experts fine-tune and design machine learning algorithms for a specific task — a classification or clustering algorithm, a forecasting algorithm, a recommendation system, and more — by optimizing their performance.",
        },
        {
          title: "Data Preparation & Feature Engineering",
          desc: "Good data is the base for successful machine learning models. We clean it, organize it, and engineer the data features to boost model accuracy and overall efficiency.",
        },
        {
          title: "Natural Language Processing (NLP)",
          desc: "Use AI-powered language understanding with advanced NLP solutions. We develop systems for sentiment analysis, text classification, chatbots, document processing, and language automation.",
        },
        {
          title: "Deep Learning Solutions",
          desc: "We build deep learning models that can solve tricky problems like image recognition, speech processing, natural language understanding, and intelligent decision-making in the same flow.",
        },
        {
          title: "Computer Vision Solutions",
          desc: "Unlock visual intelligence with computer vision solutions. Our services cover object detection, image classification, facial recognition, video analytics, and quality-inspection systems — we help you see what matters, faster.",
        },
        {
          title: "Machine Learning Model Training & Optimization",
          desc: "We train, validate, and optimize machine learning models to push for higher accuracy and overall performance. Our approach keeps things scalable yet dependable for real-world use.",
        },
        {
          title: "AI & Machine Learning Integration",
          desc: "Seamlessly blend AI and machine-learning know-how into your existing apps, business systems, and day-to-day workflows. This helps drive efficiency, automation, and better customer experiences.",
        },
        {
          title: "MLOps & Model Deployment",
          desc: "Speed up how you ship and maintain machine learning models with solid MLOps practices and robust guardrails. We help with smooth integration, ongoing monitoring, and scalable production environments that don’t wobble when traffic changes.",
        },
        {
          title: "Fraud Detection Systems",
          desc: "Keep your business safe from monetary losses and security risks with an intelligent fraud-detection setup. Our machine learning models spot questionable behaviours and odd patterns — anomalies — in real time.",
        },
        {
          title: "Customer Behavior Analytics",
          desc: "Get more context on customer preferences and interactions using machine learning. We help organizations achieve stronger customer engagement, better retention, and marketing strategies that feel actually relevant.",
        },
        {
          title: "Anomaly Detection Solutions",
          desc: "Catch unusual patterns, operational hiccups, and possible threats before they start affecting your business. Our anomaly-detection solutions provide proactive monitoring and risk management — early-warning stuff.",
        },
        {
          title: "Real-Time Data Analytics",
          desc: "We process and analyse streaming data in real time, so teams can make faster decisions. With our machine learning-powered analytics, you get instant insights for shifting business environments — far more responsive than “wait and see”.",
        },
        {
          title: "Machine Learning Maintenance & Support",
          desc: "Keep long-term success on track with ongoing machine learning model monitoring, maintenance, and optimization. We keep improving model performance as new data comes in and as business requirements change.",
        },
        {
          title: "AI & ML Product Development",
          desc: "We build creative AI and machine learning-powered products that improve user experiences, automate processes, and create a real competitive edge for businesses across industries.",
        },
      ],
    },
    processIntro:
      "We follow a structured, end-to-end machine learning development process — from understanding your business goals to deploying and maintaining models in production — so every solution stays accurate, scalable, and tied to real outcomes.",
    processTitle: "Our Machine Learning Development Process",
    process: [
      {
        title: "Business Understanding & Requirement Analysis",
        desc: "We start by working out the goals, challenges, and needs your business faces. We align on what you really want, so it’s clear which type of machine learning we should use and what the goals are for the solution. It can feel fuzzy at first, but we make it more precise, step by step.",
      },
      {
        title: "Data Collection & Assessment",
        desc: "Next we collect and aggregate data from various sources to make sure it’s relevant, complete, and fit for purpose in the model-building process. High-quality data is key to accurate results — without it, the model tends to wander.",
      },
      {
        title: "Data Preparation & Feature Engineering",
        desc: "We tidy, reorder, and organize raw data to remove duplication and produce a usable format free of inconsistencies. Feature-creation processes are used to improve model performance and predictive accuracy.",
      },
      {
        title: "Model Selection & Development",
        desc: "Depending on the requirements of the project, we choose the most appropriate machine learning algorithms and create custom machine learning models for your needs.",
      },
      {
        title: "Model Training & Validation",
        desc: "The machine learning model is informed by historical data and strictly validated through a validation process. The model is continually evolved to be more reliable and more accurate.",
      },
      {
        title: "Performance Optimization",
        desc: "Our experts fine-tune model parameters and optimize algorithms to be as efficient, scalable, and accurate as possible while minimizing computational expense.",
      },
      {
        title: "Deployment & Integration",
        desc: "Upon successful validation, the machine learning solution is deployed to production environments and effortlessly integrated into your current applications, systems, or workflows.",
      },
      {
        title: "Monitoring & Continuous Improvement",
        desc: "Model performance is monitored continuously, and models are retrained with new data and improved as needed to provide ongoing effectiveness and business value.",
      },
      {
        title: "Ongoing Support & Maintenance",
        desc: "Our team provides technical support, updates, and maintenance so your machine learning solution continues to evolve and thrive with your business needs.",
      },
    ],
    whyChooseUs: {
      title: "Why Choose Us",
      points: [
        {
          title: "Expertise in AI & Machine Learning",
          desc: "We’ve got strong know-how in artificial intelligence and machine learning, so we can craft smart solutions that solve complex business problems efficiently. It’s more than just theory — it’s practical.",
        },
        {
          title: "Custom-Built Solutions",
          desc: "We’re not the one-size-fits-all type. Every machine learning model, and the solution around it, is tuned to your business goals, industry needs, and how your data environment actually looks.",
        },
        {
          title: "End-to-End Development",
          desc: "From strategy and data preparation, through model deployment, to ongoing support, we handle the whole machine learning development journey in one place.",
        },
        {
          title: "Advanced Machine Learning Algorithms",
          desc: "We tap into the latest machine learning algorithms, deep learning approaches, and AI capabilities to produce results that are both accurate and dependable.",
        },
        {
          title: "Scalable & Future-Ready Solutions",
          desc: "Our machine learning models are made to scale right along with your business — not only for today, but for the long run — supporting long-term performance, adaptability, and expansion as your data keeps changing over time.",
        },
        {
          title: "Data-Driven Decision Making",
          desc: "We help organizations reveal useful insights from their data, so leaders can make smarter decisions — and the result is often better operational efficiency in day-to-day workflows.",
        },
        {
          title: "Seamless Integration",
          desc: "Our machine learning solutions fit in smoothly with what you already have — applications, CRM systems, ERP platforms, websites, and the business workflows you rely on — with minimal disruption.",
        },
        {
          title: "Focus on Accuracy & Performance",
          desc: "We keep training, testing, and validating machine learning models until they hit solid accuracy and efficiency, then tune again as needed. We also make sure everything works well in the real world, not just inside a controlled test lab.",
        },
        {
          title: "Transparent Communication",
          desc: "We keep communication clear throughout the whole project, so you get steady updates, performance summaries, and full visibility into how the work is moving.",
        },
      ],
    },
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "What are machine learning services?",
        a: "Machine learning services help businesses use AI models and algorithms to automate processes, analyze data, and make intelligent predictions.",
      },
      {
        q: "How can machine learning benefit my business?",
        a: "Machine learning improves efficiency, reduces manual effort, enhances decision-making, and uncovers valuable insights from data.",
      },
      {
        q: "What industries can use machine learning solutions?",
        a: "Machine learning is widely used in healthcare, finance, retail, manufacturing, logistics, education, and many other industries.",
      },
      {
        q: "What is the difference between AI and machine learning?",
        a: "Artificial Intelligence (AI) is a broader concept, while machine learning is a subset of AI that enables systems to learn from data.",
      },
      {
        q: "How long does it take to develop a machine learning model?",
        a: "The timeline depends on project complexity, data availability, and business requirements — typically ranging from a few weeks to several months.",
      },
      {
        q: "Do I need large amounts of data for machine learning?",
        a: "While more quality data often improves results, many machine learning models can be developed effectively with moderate datasets.",
      },
      {
        q: "What types of machine learning models do you develop?",
        a: "We develop predictive models, recommendation engines, classification models, anomaly detection systems, NLP solutions, and computer vision applications.",
      },
      {
        q: "Can machine learning be integrated into existing systems?",
        a: "Yes, machine learning solutions can be seamlessly integrated into websites, mobile apps, CRM platforms, ERP systems, and business workflows.",
      },
      {
        q: "How accurate are machine learning models?",
        a: "Model accuracy depends on data quality, use case, and algorithm selection, but our team continuously optimizes models for the best possible performance.",
      },
      {
        q: "Do you provide support after deployment?",
        a: "Yes, we offer ongoing maintenance, monitoring, retraining, and optimization to ensure your machine learning models continue to perform effectively.",
      },
    ],
    cta: {
      title: "Ready to Transform Your Business with Machine Learning?",
      subtitle:
        "Collaborate with a reliable Machine Learning Services Bangalore provider and gain the utmost potential of your data through state-of-the-art AI and ML solutions.",
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
      "UI/UX Design Services in Bangalore That Enhance User Experience & Drive Conversions",
    heroSubline:
      "We are a leading UI/UX design company in Bangalore that transforms digital products into seamless, intuitive experiences. Whether you need a full product redesign or a first-time UI and UX design for your web or mobile app, our expert team delivers measurable outcomes — higher engagement, lower bounce rates, and stronger conversions.",
    benefitsTitle: "What makes our UI/UX design services different",
    benefits: [
      "Research-first methodology — every design decision is backed by user data",
      "End-to-end delivery — from wireframes and prototypes to final handoff",
      "Bangalore-based team with global delivery experience",
    ],
    painPoints: {
      title: "Your website looks good. But users are not taking action.",
      intro:
        "You may have a website, app, or landing page that looks visually attractive. But if visitors are confused, unable to find information, or not clicking the right buttons, your design is losing leads. It’s frustrating — and it’s fixable.",
      points: [
        {
          title: "Visitors leave without action",
          desc: "People visit your website or app but do not enquire, book, buy, or contact you. Poor user flow, unclear sections, and weak CTA placement can make users drop off before converting.",
        },
        {
          title: "Confusing user journey",
          desc: "If users don’t know where to click, what to read, or what step to take next, they may leave. Good UI/UX makes the journey simple, smooth, and conversion-focused.",
        },
        {
          title: "Design looks good but doesn’t convert",
          desc: "Attractive visuals alone are not enough. Your design needs proper structure, clear messaging, easy navigation, trust elements, and action-focused layouts to generate business results.",
        },
        {
          title: "No clarity on user behaviour",
          desc: "You don’t know where users are dropping off, which sections they ignore, or why they are not converting. UI/UX analysis helps identify friction points and improve performance.",
        },
      ],
    },
    offerings: {
      title: "Our UI/UX Design Services",
      subtitle:
        "Our comprehensive UI/UX design services cover every phase of the design lifecycle — from discovery and research through to final developer handoff. Here is a breakdown of what we offer:",
      points: [
        {
          title: "UX Research & Audit",
          desc: "User interviews, heuristic evaluations, competitor analysis, and usability audits to uncover friction points in your current product.",
        },
        {
          title: "User Journey Mapping",
          desc: "We map the complete customer journey to identify pain points and create seamless interactions across every touchpoint.",
        },
        {
          title: "Information Architecture",
          desc: "Developing and planning sitemaps, structuring content, and designing navigation to always help users locate what they are looking for.",
        },
        {
          title: "Wireframing & Low-Fi Prototypes",
          desc: "Structural layouts of the page and user flow — checked before visual treatment. We validate the logic before the pixels.",
        },
        {
          title: "UI Design & Visual Language",
          desc: "Expert, pixel-perfect interface design matching your brand. Our web-design practice gives the highest priority to desktop and mobile breakpoints in UI/UX web design.",
        },
        {
          title: "Interactive Prototyping",
          desc: "Clickable, animated prototypes of the actual experience for stakeholder review and user testing.",
        },
        {
          title: "Design Systems",
          desc: "A project-level, scalable component library with typography styles, colour palettes, and spacing for your dev team.",
        },
        {
          title: "Dashboard & Enterprise UI Design",
          desc: "Easy-to-use dashboards, CRM apps, ERP platforms, and business apps that streamline processes.",
        },
        {
          title: "Mobile App UI/UX Design",
          desc: "User-friendly Android and iOS app interfaces focused on usability, engagement, and customer satisfaction.",
        },
        {
          title: "E-commerce UI/UX Design",
          desc: "Optimize shopping experiences with intuitive navigation, product discovery, and streamlined checkout processes that increase conversions.",
        },
        {
          title: "Responsive Design",
          desc: "Responsive interfaces that deliver a seamless experience across desktops, tablets, and smartphones. We optimize layouts, navigation, and interactions to ensure usability, engagement, and consistency on every device.",
        },
        {
          title: "Interface Redesign",
          desc: "Update your website to current design standards, designing for ease of interaction, user experience, and conversions across all devices and platforms.",
        },
        {
          title: "Usability Testing",
          desc: "Real user sessions, both moderated and unmoderated. Before any development starts, all design decisions are validated.",
        },
      ],
    },
    processIntro:
      "All encounters are managed via a well-defined and transparent UI/UX design process. This is how we take a product from discovery to final handoff.",
    processTitle: "Our UI/UX Design Process — Six Steps to a Finished Product",
    process: [
      {
        title: "Discovery & Research",
        desc: "Stakeholder interviews, user research, competitor analysis, and a heuristic evaluation of the current product. We develop personas and current-state journey mapping.",
      },
      {
        title: "UX Strategy & Architecture",
        desc: "Information architecture, user flows, and sitemap. The structure of the product is defined before any visual work begins.",
      },
      {
        title: "Wireframing",
        desc: "Low-fidelity wireframes of all important pages and flows, reviewed and discussed with you before visual design.",
      },
      {
        title: "Visual UI Design",
        desc: "High-fidelity UI fully branded in your visual language, covering all breakpoints, states (hover, error, empty), and interactions.",
      },
      {
        title: "Prototyping & Testing",
        desc: "Interactive prototypes built in Figma and tested with real users via Maze. Results inform the final iteration round.",
      },
      {
        title: "Handoff & Support",
        desc: "Design tokens, component annotations, and developer specs delivered through Figma Dev Mode. We stay available during the dev build.",
      },
    ],
    whyChooseUs: {
      title: "Why Choose Us as Your UI/UX Design Company in Bangalore",
      points: [
        {
          title: "Results-Focused Design",
          desc: "Most agencies drop off files and go away. Our success is defined by what happens after we launch — engagement metrics, conversion rates, and user retention. From the outset, our UI/UX design process is tied directly to your business KPIs.",
        },
        {
          title: "End-to-End UI/UX Expertise",
          desc: "We don’t separate design from strategy. Our senior UI/UX designers combine user research, information architecture, visual design, and front-end thinking within a seamless process. No handoff gaps. No silos.",
        },
        {
          title: "Transparency at Every Step",
          desc: "Access to live Figma files, weekly syncs, and a dedicated project lead. No black-box agency experience — you’re part of the design, not just the end user.",
        },
        {
          title: "Industry-Leading Design Tools",
          desc: "We have deep experience with industry-leading UX and UI software: Figma (UI design), Adobe XD (UX design), and Miro (collaborative UX work).",
        },
        {
          title: "Local Presence, Global Experience",
          desc: "As a Bangalore-based UI/UX design firm, we offer the cost-effectiveness of a local design agency with the quality of a global one.",
        },
      ],
    },
    toolsTitle: "Tools we design with",
    tools: ["Figma", "Adobe XD", "Miro", "Maze"],
    // Dummy — replace with verified client testimonials.

    caseStudy: {
      industry: "D2C Skincare Brand, Bangalore",
      problem:
        "Rs 80K/month on Google Ads, near-zero organic traffic, and no content strategy in place.",
      whatWeDid:
        "A full technical audit, 40+ keyword-mapped blogs, category-page optimisation, and 60 quality backlinks over five months.",
      result:
        "Organic sessions grew from 900 to 11,400/month. Ad spend cut by 55% while revenue grew.",
    },
    testimonials: [
      {
        quote:
          "Working with their team was the best UI/UX design decision we made. The redesign of our SaaS dashboard reduced onboarding drop-off by 47%. Their UI/UX design process is structured, transparent, and genuinely collaborative. Highly recommend them as a UI/UX design company in Bangalore.",
        author: "Priya Menon",
        role: "CPO, FinTrack Technologies, Bangalore",
      },
      {
        quote:
          "We had tried two other agencies before finding them. The difference was night and day. Their UI/UX designers actually read our user research, challenged our assumptions, and delivered UI/UX design samples in week two that felt more polished than what we’d seen after months elsewhere.",
        author: "Karthik Rajan",
        role: "Founder, MedBook Health, Chennai",
      },
    ],
    faqTitle: "Frequently Asked Questions About UI/UX Design",
    faqs: [
      {
        q: "What are UI/UX design services in Bangalore?",
        a: "UI/UX design services in Bangalore help businesses create user-friendly, visually appealing websites and applications that improve customer experience and engagement.",
      },
      {
        q: "Why is UI/UX design important for a business website?",
        a: "UI/UX design improves usability, enhances user satisfaction, and helps increase conversions through intuitive navigation and better user experiences.",
      },
      {
        q: "How do I choose the best UI/UX design company in Bangalore?",
        a: "Look for a UI/UX design company in Bangalore with a strong portfolio, proven experience, client testimonials, and a structured UI/UX design process.",
      },
      {
        q: "What does a UI/UX designer do?",
        a: "A UI/UX designer researches user behavior, creates wireframes, designs interfaces, and optimizes digital experiences for websites and mobile apps.",
      },
      {
        q: "What is the difference between UI and UX design?",
        a: "UI design focuses on visual elements like colors, typography, and layouts, while UX design focuses on user journeys, usability, and overall experience.",
      },
      {
        q: "What is included in UI/UX design services?",
        a: "UI/UX design services typically include user research, wireframing, prototyping, UI design, usability testing, and design implementation support.",
      },
      {
        q: "What is the UI/UX design process?",
        a: "The UI/UX design process includes research, planning, wireframing, prototyping, visual design, testing, and continuous optimization.",
      },
      {
        q: "How much do UI/UX design services cost in Bangalore?",
        a: "The cost of UI/UX design services in Bangalore depends on project complexity, features, design requirements, and project timelines.",
      },
      {
        q: "Can you redesign an existing website with UI/UX web design?",
        a: "Yes, UI/UX web design services can improve the usability, performance, and visual appeal of an existing website.",
      },
      {
        q: "Why choose your UI/UX design services in Bangalore?",
        a: "Our UI/UX design services in Bangalore focus on creating intuitive, conversion-driven digital experiences tailored to your business goals.",
      },
    ],
    cta: {
      title: "Turn More Visitors Into Customers",
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
