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
    slug: "search-engine-optimization",
    name: "Proven SEO",
    seo: {
      metaTitle: "SEO Services for Ranking, Traffic & Leads | SkyUp",
      metaDescription:
        "SkyUp helps businesses improve Google rankings with technical SEO, keyword research, content, backlinks, local SEO and transparent reporting.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "Search Engine Optimization",
              item: "https://www.skyupdigitalsolutions.com/service/seo",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why is SEO important for businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO marketing helps businesses increase online visibility, attract qualified traffic, and generate long-term organic leads. One of the biggest advantages of SEO is that it continues delivering traffic even after content is published — unlike paid ads that stop the moment your budget runs out.",
              },
            },
            {
              "@type": "Question",
              name: "How long does SEO take to show results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most websites begin seeing early SEO ranking improvements within 6–12 weeks. Competitive industries may take longer, but SEO creates sustainable long-term growth.",
              },
            },
            {
              "@type": "Question",
              name: "What are the different types of SEO?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The main types are On-Page SEO, Technical SEO, Off-Page SEO, Local SEO, and E-Commerce SEO. Each plays a role in improving search visibility and website performance.",
              },
            },
            {
              "@type": "Question",
              name: "What is included in an SEO audit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "An SEO audit checks your website's technical health, page structure, keyword optimization, backlinks, speed, mobile performance, and indexing issues. Professional SEO audit tools help identify what's limiting your rankings.",
              },
            },
            {
              "@type": "Question",
              name: "What are SEO backlinks?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO backlinks are links from other websites pointing to yours. High-quality backlinks are a core part of off-page SEO and help improve your website's authority and search engine rankings.",
              },
            },
            {
              "@type": "Question",
              name: "What is SEO keyword research?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO keyword research is the process of finding the exact words and phrases your target audience searches on Google. Proper keyword research underpins both on-page SEO and content strategy to attract relevant traffic.",
              },
            },
            {
              "@type": "Question",
              name: "What makes Skyup a trusted SEO company in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "As a dedicated SEO agency in Bangalore, Skyup focuses on transparent reporting, ROI-driven strategies, technical SEO expertise, and long-term organic growth—without lock-in contracts.",
              },
            },
            {
              "@type": "Question",
              name: "What are the benefits of SEO compared to paid ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Unlike paid ads, SEO continues generating traffic without paying for every click. The benefits of SEO include better brand visibility, consistent leads, improved trust, and lower long-term acquisition costs.",
              },
            },
            {
              "@type": "Question",
              name: "What is SEO optimization?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO optimization is the process of improving website pages, content, and technical performance to help them rank higher in search engines and attract more relevant visitors.",
              },
            },
            {
              "@type": "Question",
              name: "Do small businesses need SEO marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. SEO marketing helps small businesses compete with larger brands by targeting niche keywords, local searches, and high-intent customer queries—making it one of the most cost-effective channels available.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "SEO: Rank Higher. Get Found. Grow organically.",
          url: "https://www.skyupdigitalsolutions.com/service/seo",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "Search Engine Optimisation",
                url: "https://www.skyupdigitalsolutions.com/service/seo",
                description:
                  "SkyUp helps businesses improve Google rankings with technical SEO, keyword research, content, backlinks, local SEO and transparent reporting.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "Search Engine Optimisation",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.skyupdigitalsolutions.com/#organization",
          name: "SkyUp Digital Solutions LLP",
          url: "https://www.skyupdigitalsolutions.com/",
          logo: "https://www.skyupdigitalsolutions.com/images/rbd-logo.webp",
          description:
            "SkyUp Digital Solutions LLP is a digital marketing and technology company offering SEO, performance marketing, social media marketing, web development, graphic design, UI/UX design, machine learning, AI automation and CRM solutions.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "8867867775",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Kannada", "Hindi"],
          },
          sameAs: [
            "https://www.facebook.com/people/SKYUP-Digital-Solutions/61584820941998/",
            "https://www.instagram.com/skyupdigitalsolutions/",
            "https://www.youtube.com/@SKYUPDigitalSolutionsBengaluru",
          ],
        },
      ],
    },
    Icon: Search,
    href: "/service/search-engine-optimization",
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
    seo: {
      metaTitle: "Social Media Marketing Services | SkyUp Digital Solutions",
      metaDescription:
        "SkyUp helps brands grow on Instagram, Facebook, LinkedIn, YouTube and more with content, engagement and lead-focused reporting.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "Social Media Marketing",
              item: "https://www.skyupdigitalsolutions.com/service/social-media-marketing",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is social media marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Social media marketing is the process of promoting your business through platforms like Facebook, Instagram, LinkedIn, and X to increase brand awareness, engagement, and sales.",
              },
            },
            {
              "@type": "Question",
              name: "Why is social media marketing important?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It helps businesses reach their target audience, build trust, generate leads, and improve customer relationships.",
              },
            },
            {
              "@type": "Question",
              name: "Which social media platforms are best for my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The right platform depends on your audience and goals. Facebook, Instagram, LinkedIn, and YouTube are among the most effective options.",
              },
            },
            {
              "@type": "Question",
              name: "How often should I post on social media?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most businesses benefit from posting 3–5 times per week with consistent engagement and content updates.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to see results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Organic growth typically takes a few months, while paid campaigns can generate visibility and leads much faster.",
              },
            },
            {
              "@type": "Question",
              name: "Can social media marketing generate leads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, a well-planned social media strategy can attract qualified leads and increase conversions.",
              },
            },
            {
              "@type": "Question",
              name: "What type of content performs best on social media?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Videos, reels, carousels, customer testimonials, educational posts, and behind-the-scenes content often perform well.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need paid advertising on social media?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Paid ads are not mandatory, but they can significantly improve reach, traffic, and lead generation.",
              },
            },
            {
              "@type": "Question",
              name: "How do you measure social media success?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Success is measured through engagement, reach, follower growth, website traffic, leads, and conversions.",
              },
            },
            {
              "@type": "Question",
              name: "Why should I hire a social media marketing agency?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "An agency helps create strategies, manage campaigns, produce content, and optimize performance for better results.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Grow Faster with Professional Social Media Marketing Services in Bangalore",
          url: "https://www.skyupdigitalsolutions.com/service/social-media-marketing",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "Social Media Marketing",
                url: "https://www.skyupdigitalsolutions.com/service/social-media-marketing",
                description:
                  "SkyUp helps brands grow on Instagram, Facebook, LinkedIn, YouTube and more with content, engagement and lead-focused reporting.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "Social Media Marketing",
              },
            },
          ],
        },
      ],
    },
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
    seo: {
      metaTitle:
        "Performance Marketing Agency in Bangalore — Google, Meta & LinkedIn Ads | SkyUp Digital Solutions",
      metaDescription:
        "SkyUp helps businesses grow with Google Ads, Meta Ads and LinkedIn Ads campaigns focused on quality leads, lower CPL, stronger ROAS and revenue.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "Performance Marketing",
              item: "https://www.skyupdigitalsolutions.com/service/performance-marketing",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are Google Ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Google Ads are paid advertisements that appear on Google Search, YouTube, Display Network, and partner websites to generate leads, traffic, and sales.",
              },
            },
            {
              "@type": "Question",
              name: "How much budget is needed for Google Ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Google Ads budgets depend on your industry, competition, and goals. Most businesses start with a scalable monthly ad budget based on target CPL or ROI.",
              },
            },
            {
              "@type": "Question",
              name: "How long does Google Ads take to show results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Google Ads can start generating traffic and leads within days, while optimized conversion performance usually improves within 30–90 days.",
              },
            },
            {
              "@type": "Question",
              name: "What are Meta Ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Meta Ads are paid campaigns run across Facebook and Instagram to increase brand awareness, website traffic, leads, and online sales.",
              },
            },
            {
              "@type": "Question",
              name: "Are Meta Ads good for lead generation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Meta Ads are highly effective for lead generation using advanced audience targeting, retargeting, and conversion-focused creatives.",
              },
            },
            {
              "@type": "Question",
              name: "Which businesses benefit most from Meta Ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "E-commerce brands, real estate companies, coaches, local businesses, and D2C brands benefit significantly from Facebook and Instagram advertising.",
              },
            },
            {
              "@type": "Question",
              name: "What are LinkedIn Ads used for?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "LinkedIn Ads are mainly used for B2B marketing, lead generation, recruitment, brand awareness, and targeting decision-makers professionally.",
              },
            },
            {
              "@type": "Question",
              name: "Are LinkedIn Ads better for B2B marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. LinkedIn Ads provide precise targeting based on job title, industry, company size, and professional interests, making them ideal for B2B campaigns.",
              },
            },
            {
              "@type": "Question",
              name: "How expensive are LinkedIn Ads compared to Google or Meta Ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "LinkedIn Ads usually have a higher CPC, but they often generate higher-quality B2B leads and better decision-maker targeting.",
              },
            },
            {
              "@type": "Question",
              name: "What is performance marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Performance marketing is a digital marketing strategy where campaigns are optimized based on measurable results such as leads, conversions, sales, and ROI.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Performance Marketing That Turns Ad Spend Into Measurable Revenue",
          url: "https://www.skyupdigitalsolutions.com/service/performance-marketing",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "Performance Marketing",
                url: "https://www.skyupdigitalsolutions.com/service/performance-marketing",
                description:
                  "Generate consistent leads and maximize ROI with our performance-driven Google Ads and PPC campaigns.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "Performance Marketing",
              },
            },
          ],
        },
      ],
    },
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
    seo: {
      metaTitle:
        "Email Marketing Services in Bangalore | Expert Email Marketing Agency",
      metaDescription:
        "Drive real revenue with proven email marketing services in Bangalore. Strategy, automation, design & analytics — all under one roof. Get your free audit today.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "Email Marketing",
              item: "https://www.skyupdigitalsolutions.com/service/email-marketing",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is email marketing and how does it help businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Email marketing is a digital marketing strategy that helps businesses nurture leads, increase customer retention, and drive sales through targeted email campaigns and automation.",
              },
            },
            {
              "@type": "Question",
              name: "Why is email marketing important for business growth?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Email marketing delivers one of the highest ROIs in digital marketing by helping businesses build customer relationships, increase repeat purchases, and generate consistent revenue.",
              },
            },
            {
              "@type": "Question",
              name: "How much ROI can email marketing generate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "On average, email marketing can generate up to 36x ROI, making it one of the most cost-effective digital marketing channels for lead generation and customer retention.",
              },
            },
            {
              "@type": "Question",
              name: "What services are included in your email marketing solutions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our email marketing services include email strategy, campaign management, automation setup, drip sequences, list segmentation, template design, A/B testing, reporting, and ESP migration.",
              },
            },
            {
              "@type": "Question",
              name: "What are email automation and drip campaigns?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Email automation and drip campaigns are pre-scheduled email sequences triggered by user behavior, helping businesses nurture leads, recover abandoned carts, and improve conversions automatically.",
              },
            },
            {
              "@type": "Question",
              name: "Which email marketing platforms do you work with?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We work with leading email marketing platforms, including Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo, Shopify Email, and other CRM-integrated ESPs.",
              },
            },
            {
              "@type": "Question",
              name: "How do you improve email open rates and click-through rates?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We improve email performance using audience segmentation, personalised content, A/B testing, optimized subject lines, mobile-responsive design, and deliverability best practices.",
              },
            },
            {
              "@type": "Question",
              name: "Can email marketing help increase e-commerce sales?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Email marketing for e-commerce helps recover abandoned carts, increase repeat purchases, promote products, and improve customer lifetime value through automated workflows.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide email marketing services for B2B companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We create B2B email marketing campaigns focused on lead nurturing, sales funnel automation, onboarding sequences, and improving conversion rates across longer sales cycles.",
              },
            },
            {
              "@type": "Question",
              name: "Why choose your email marketing agency in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "As a results-driven email marketing agency in Bangalore, we focus on ROI, transparent reporting, automation-led growth, and personalized strategies tailored to your business goals.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Email Marketing That Converts — Not Just Communicates",
          url: "https://www.skyupdigitalsolutions.com/service/email-marketing",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "Email Marketing",
                url: "https://www.skyupdigitalsolutions.com/service/email-marketing",
                description:
                  "Drive real revenue with proven email marketing services in Bangalore. Strategy, automation, design & analytics — all under one roof. Get your free audit today.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "Email Marketing",
              },
            },
          ],
        },
      ],
    },
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
      title:
        "Ready to Work With a Results-Driven Email Marketing Agency in Bangalore?",
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
    seo: {
      metaTitle: "AI Automation Services for Business Growth | SkyUp",
      metaDescription:
        "SkyUp automates business workflows with AI chatbots, CRM automation, WhatsApp automation, voice AI, document processing, support and reporting.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "AI Automation",
              item: "https://www.skyupdigitalsolutions.com/service/ai-automation",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are AI automation services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI automation services use artificial intelligence to handle repetitive business tasks automatically — saving time, reducing errors and helping your business scale faster without hiring more staff.",
              },
            },
            {
              "@type": "Question",
              name: "How does an AI automation company in Bangalore help my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A local AI automation company in Bangalore understands your market, tools and business environment. Skyup eliminates manual work across sales, marketing and operations — so your team focuses on growth while AI handles the routine tasks 24/7, with support just a call away.",
              },
            },
            {
              "@type": "Question",
              name: "What is AI workflow automation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI workflow automation connects your tools and systems so data moves and tasks trigger automatically — no manual copy-pasting, follow-ups or reporting needed.",
              },
            },
            {
              "@type": "Question",
              name: "What is AI marketing automation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI marketing automation runs your email campaigns, lead nurturing, social posting and reporting on autopilot — delivering personalised communication to your audience at scale.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need technical knowledge to use AI automation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Skyup Digital Solution LLP handles everything — design, build, testing and training. You get the results without touching any code.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to go live?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most clients are live within 2 to 4 weeks of their first strategy call, depending on the complexity of the workflows involved.",
              },
            },
            {
              "@type": "Question",
              name: "What is AI in automation testing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI in automation testing uses machine learning to automatically generate and run software test cases — reducing QA time by up to 70% and catching bugs faster.",
              },
            },
            {
              "@type": "Question",
              name: "Which industries do you serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We deliver AI automation services across all industries — e-commerce, real estate, healthcare, SaaS, professional services, education and manufacturing.",
              },
            },
            {
              "@type": "Question",
              name: "How much do AI automation services cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pricing depends on the scope and workflows involved. We offer a free AI audit first so you know exactly what's needed before any investment is made.",
              },
            },
            {
              "@type": "Question",
              name: "Why choose Skyup Digital Solution LLP as my AI automation company in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We are a proven, Bangalore-based AI automation company in Bangalore with deep expertise in artificial intelligence automation — delivering real, measurable results for 50+ businesses through a transparent, no-obligation process. We know Bangalore's business landscape and we speak your language.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Stop Doing It Manually. Start Scaling with AI Automation Services in Bangalore.",
          url: "https://www.skyupdigitalsolutions.com/service/ai-automation",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "AI Automation",
                url: "https://www.skyupdigitalsolutions.com/service/ai-automation",
                description:
                  "SkyUp automates business workflows with AI chatbots, CRM automation, WhatsApp automation, voice AI, document processing, support and reporting.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "AI Automation",
              },
            },
          ],
        },
      ],
    },
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
      title: "Is Your Team Stuck Doing Work That AI Can Handle in Seconds?",
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
      },
    ],
    whyChooseUs: {
      title: "Why Brands Choose SkyUp for AI Automation",
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
          label: "saved per team member per week with AI workflow automation",
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
      primaryLabel: "Book My Free AI Automation Audit",
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
    seo: {
      metaTitle: "Machine Learning Services for Business Growth | Skyup",
      metaDescription:
        "SkyUp delivers machine learning consulting, custom ML models, predictive analytics, NLP, computer vision, MLOps, maintenance and business-ready AI integration.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "Machine Learning",
              item: "https://www.skyupdigitalsolutions.com/service/machine-learning",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are machine learning services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Machine learning services help businesses use AI models and algorithms to automate processes, analyze data, and make intelligent predictions.",
              },
            },
            {
              "@type": "Question",
              name: "How can machine learning benefit my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Machine learning improves efficiency, reduces manual effort, enhances decision-making, and uncovers valuable insights from data.",
              },
            },
            {
              "@type": "Question",
              name: "What industries can use machine learning solutions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Machine learning is widely used in healthcare, finance, retail, manufacturing, logistics, education, and many other industries.",
              },
            },
            {
              "@type": "Question",
              name: "What is the difference between AI and machine learning?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Artificial Intelligence (AI) is a broader concept, while machine learning is a subset of AI that enables systems to learn from data.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to develop a machine learning model?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The timeline depends on project complexity, data availability, and business requirements — typically ranging from a few weeks to several months.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need large amounts of data for machine learning?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "While more quality data often improves results, many machine learning models can be developed effectively with moderate datasets.",
              },
            },
            {
              "@type": "Question",
              name: "What types of machine learning models do you develop?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We develop predictive models, recommendation engines, classification models, anomaly detection systems, NLP solutions, and computer vision applications.",
              },
            },
            {
              "@type": "Question",
              name: "Can machine learning be integrated into existing systems?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, machine learning solutions can be seamlessly integrated into websites, mobile apps, CRM platforms, ERP systems, and business workflows.",
              },
            },
            {
              "@type": "Question",
              name: "How accurate are machine learning models?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Model accuracy depends on data quality, use case, and algorithm selection, but our team continuously optimizes models for the best possible performance.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide support after deployment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer ongoing maintenance, monitoring, retraining, and optimization to ensure your machine learning models continue to perform effectively.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Machine Learning Services in Bangalore for Smarter Business Growth",
          url: "https://www.skyupdigitalsolutions.com/service/machine-learning",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "Machine Learning",
                url: "https://www.skyupdigitalsolutions.com/service/machine-learning",
                description:
                  "SkyUp delivers machine learning consulting, custom ML models, predictive analytics, NLP, computer vision, MLOps, maintenance and business-ready AI integration.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "Machine Learning",
              },
            },
          ],
        },
      ],
    },
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
      "Turn your business data into something useful, not just numbers — with our machine learning services in Bangalore. We help teams use Artificial Intelligence and Machine Learning to automate, optimise, forecast, and reimagine day-to-day processes for better decision-making — and to spot new growth avenues, quietly but effectively.",
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
    seo: {
      metaTitle: "UI/UX Design for Better User Experience | SkyUp",
      metaDescription:
        "SkyUp helps brands improve websites and apps with UX audits, user journeys, information architecture, wireframes, prototypes, UI design and testing.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "UI/UX Design",
              item: "https://www.skyupdigitalsolutions.com/service/ui-ux-design",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are UI/UX design services in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "UI/UX design services in Bangalore help businesses create user-friendly, visually appealing websites and applications that improve customer experience and engagement.",
              },
            },
            {
              "@type": "Question",
              name: "Why is UI/UX design important for a business website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "UI/UX design improves usability, enhances user satisfaction, and helps increase conversions through intuitive navigation and better user experiences.",
              },
            },
            {
              "@type": "Question",
              name: "How do I choose the best UI/UX design company in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Look for a UI/UX design company in Bangalore with a strong portfolio, proven experience, client testimonials, and a structured UI/UX design process.",
              },
            },
            {
              "@type": "Question",
              name: "What does a UI/UX designer do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A UI/UX designer researches user behavior, creates wireframes, designs interfaces, and optimizes digital experiences for websites and mobile apps.",
              },
            },
            {
              "@type": "Question",
              name: "What is the difference between UI and UX design?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "UI design focuses on visual elements like colors, typography, and layouts, while UX design focuses on user journeys, usability, and overall experience.",
              },
            },
            {
              "@type": "Question",
              name: "What is included in UI/UX design services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "UI/UX design services typically include user research, wireframing, prototyping, UI design, usability testing, and design implementation support.",
              },
            },
            {
              "@type": "Question",
              name: "What is the UI/UX design process?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The UI/UX design process includes research, planning, wireframing, prototyping, visual design, testing, and continuous optimization.",
              },
            },
            {
              "@type": "Question",
              name: "How much do UI/UX design services cost in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The cost of UI/UX design services in Bangalore depends on project complexity, features, design requirements, and project timelines.",
              },
            },
            {
              "@type": "Question",
              name: "Can you redesign an existing website with UI/UX web design?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, UI/UX web design services can improve the usability, performance, and visual appeal of an existing website.",
              },
            },
            {
              "@type": "Question",
              name: "Why choose your UI/UX design services in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our UI/UX design services in Bangalore focus on creating intuitive, conversion-driven digital experiences tailored to your business goals.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "UI/UX Design Services in Bangalore That Enhance User Experience & Drive Conversions",
          url: "https://www.skyupdigitalsolutions.com/service/ui-ux-design",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "UI/UX Design",
                url: "https://www.skyupdigitalsolutions.com/service/ui-ux-design",
                description:
                  "SkyUp helps brands improve websites and apps with UX audits, user journeys, information architecture, wireframes, prototypes, UI design and testing.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "UI/UX Design",
              },
            },
          ],
        },
      ],
    },
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
    seo: {
      metaTitle: "Logo, Branding & Graphic Design Services | SkyUp",
      metaDescription:
        "SkyUp creates logo design, branding, social media creatives, ad designs, brochures, company profiles, infographics and pitch decks for businesses.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "Graphic Design",
              item: "https://www.skyupdigitalsolutions.com/service/graphic-design",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much do graphic design services cost in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Graphic design costs vary based on project scope, complexity, turnaround time, and deliverables. At Skyup Digital Solutions, we provide customised quotes based on your business needs.",
              },
            },
            {
              "@type": "Question",
              name: "Why is graphic design important for business growth?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Graphic design builds credibility, strengthens brand recognition, improves communication, and helps increase conversions through professional visual presentation.",
              },
            },
            {
              "@type": "Question",
              name: "How do I choose the right graphic design agency?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Choose an agency with a strong portfolio, relevant experience, clear communication, a structured process, and an understanding of your business goals.",
              },
            },
            {
              "@type": "Question",
              name: "What is the difference between graphic design and branding?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Graphic design creates visual assets, while branding includes strategy, messaging, positioning, and overall brand identity. Design is one part of branding.",
              },
            },
            {
              "@type": "Question",
              name: "Can graphic design improve social media engagement?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. High-quality designs make content more engaging, visually appealing, and effective at capturing audience attention.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to design a logo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A professional logo typically takes one to three weeks, depending on complexity, feedback, and revision requirements.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need brand guidelines for my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Brand guidelines ensure consistency in logos, colours, typography, and visual elements across all marketing channels.",
              },
            },
            {
              "@type": "Question",
              name: "What files should I receive after a design project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You should receive editable source files and formats such as AI, PSD, SVG, PDF, PNG, and JPG for print and digital use.",
              },
            },
            {
              "@type": "Question",
              name: "What makes a good logo design?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A good logo is simple, memorable, scalable, versatile, and relevant to the brand across all platforms and applications.",
              },
            },
            {
              "@type": "Question",
              name: "Can graphic design increase conversion rates?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Effective graphic design improves user experience, message clarity, engagement, and overall conversion performance.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Graphic Design Services in Bangalore That Finally Look Like Your Business Deserves Them",
          url: "https://www.skyupdigitalsolutions.com/service/graphic-design",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "Graphic Design",
                url: "https://www.skyupdigitalsolutions.com/service/graphic-design",
                description:
                  "SkyUp creates logo design, branding, social media creatives, ad designs, brochures, company profiles, infographics and pitch decks for businesses.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "Graphic Design",
              },
            },
          ],
        },
      ],
    },
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
      "Graphic Design Services in Bangalore That Finally Look Like Your Business Deserves Them",
    heroSubline:
      "You’ve outgrown Canva templates and sketchy freelancers. But who do you trust with something this big? Skyup Digital Solutions produces visual identities and design systems that tell where your brand is going, not just where it’s been.",
    painPoints: {
      title: "If Any of This Sounds Familiar, You're in the Right Place",
      intro:
        "Bad design doesn't announce itself — it just quietly costs you customers, credibility, and conversions. These are the problems we solve every week for brands in Bangalore and beyond.",
      points: [
        {
          title: "Our brand looks different everywhere it shows up",
          desc: "No brand guidelines. No design system. Every designer, every platform, every campaign produces something slightly different — and the cumulative effect is a brand that feels amateur, even when the product isn't.",
        },
        {
          title:
            "We've briefed three agencies and still don't have a logo we like",
          desc: "Generic concepts. Stock-photo thinking. Designers who present options instead of recommendations. If you've been through multiple rounds with multiple agencies and still feel unheard, the problem isn't your brief — it's the process.",
        },
        {
          title: "Our content goes out, but nothing stops the scroll",
          desc: "A busy feed is the default. Thumb-stopping graphic design is earned — through platform-native thinking, visual hierarchy, and creative that's built to perform, not just to exist.",
        },
        {
          title: "We got the files but can't actually use half of them",
          desc: "A ZIP folder full of unlabelled PSDs and an AI file that won't open on your laptop is not a deliverable. Professional graphic design services end with a handover, not a file dump.",
        },
      ],
    },
    whyChooseUs: {
      title:
        "What Makes Skyup Different From Every Other Graphic Design Company in Bangalore",
      points: [
        {
          title: "Strategy Before Software",
          desc: "Every project starts with a discovery session, not a blank artboard. We understand your market, your audience, and what your competitors look like — so the design we produce has a reason behind every decision.",
        },
        {
          title: "48-Hour Turnaround on Core Deliverables",
          desc: "Tight campaign deadlines are a reality. Most projects move from approved brief to first concept in two business days — without sacrificing quality for speed.",
        },
        {
          title: "You Own Everything, Always",
          desc: "Source files, IP, usage rights — they transfer to you completely on final payment. No licensing traps.",
        },
      ],
    },
    offerings: {
      title: "Graphic Design Services Built Around What Brands Actually Need",
      subtitle:
        "Whether you're searching for a graphic designer near you in Bangalore or working with an agency remotely for the first time, our services cover every visual touchpoint your brand needs — from the logo on your letterhead to the ad creative running on Meta right now.",
      points: [
        {
          title: "Logo & Branding Design",
          desc: "We design complete visual identities — logo suites, colour palettes, typography, and brand guidelines — that hold together from a 16px favicon to a 16-foot hoarding. Every identity is tested across real-world applications before delivery, so nothing breaks in production.",
        },
        {
          title: "Social Media Creative Design",
          desc: "We design social media creatives for Instagram, LinkedIn, and Facebook — built with the right dimensions, visual hierarchy, and consistency to earn attention rather than just fill a content calendar. The result is a brand presence that compounds over time, not one that resets with every campaign.",
        },
        {
          title: "Ad Creative Design — Google, Meta & LinkedIn",
          desc: "Ad creative is a performance lever, not just a visual — every design decision affects whether someone stops or scrolls past. We deliver format variations for every placement across Google Display, Meta, and LinkedIn, built around what actually converts.",
        },
        {
          title: "Brochure Design",
          desc: "We design brochures that communicate your offering clearly, reflect your brand's quality, and survive the print process without colour shifts or alignment issues. Every brochure is delivered press-ready as standard — what you approve on screen is what comes off the press.",
        },
        {
          title: "Company Profile Design",
          desc: "Your company profile is often the first detailed document a prospect, investor, or partner reads — and it does a job a website can't. We design profiles structured for scan-reading, built to establish credibility, and formatted for both digital distribution and print.",
        },
        {
          title: "Infographic Design",
          desc: "Complex data and multi-step processes lose people when presented as text — a well-designed infographic turns the same information into something people actually finish reading. We design infographics for comprehension first, shareability second, consistent with your brand across social, reports, and presentations.",
        },
        {
          title: "Presentation & Pitch Deck Design",
          desc: "Investors form a view in the first four slides — a presentation that looks unpolished communicates something before a word is spoken. We design pitch decks and business presentations that structure your story visually and make your data land with the impact it deserves.",
        },
      ],
    },
    // Dummy — replace with verified portfolio results.
    caseStudies: [
      {
        title: "Fintech Brand Identity Overhaul — Bengaluru NBFC",
        industry: "Lending platform",
        result:
          "Rebuilt the complete visual identity for a lending platform ahead of a retail banking partnership — 34% increase in app store ratings within 90 days, driven in part by improved first-impression trust signals at onboarding.",
      },
      {
        title: "D2C Skincare — Social Media Design System",
        industry: "FMCG skincare",
        result:
          "Replaced ad-hoc social templates with a cohesive graphic design system for an FMCG skincare brand — 42% uplift in Instagram engagement rate and a 2.1× improvement in paid ad CTR in the following quarter.",
      },
    ],
    processIntro:
      "Giving creative control to an outside team is a real act of trust. Our five-step process focuses on the anxieties our clients bring to us — unclear timelines, endless revisions, files that don’t work — and anticipates them before they become problems.",
    processTitle: "A Process That Eliminates the Usual Agency Frustrations",
    process: [
      {
        title: "Brief & Discovery",
        desc: "We ask what your last agency never did. Before anything is designed, we run a structured discovery covering your positioning, target audience, competitive landscape, and what success actually looks like to your team. This session typically surfaces decisions that have been delaying the project for months.",
      },
      {
        title: "Concept & Moodboard",
        desc: "A low-cost decision point, not a blind commitment. We present two or three distinct creative directions as moodboards before any finished artwork is produced. You redirect based on instinct at the earliest possible moment in the project — before execution, not after.",
      },
      {
        title: "Design & Iteration",
        desc: "The craft, with full context. You get a working file or presentation deck, not just flat images, so you can test the design in context, not in isolation.",
      },
      {
        title: "Review & Revisions",
        desc: "Structured feedback, not a 47-message WhatsApp chain. Each revision cycle uses a single consolidated feedback document. You get a comment-ready file, we get clear input — which means faster turnarounds and fewer iterations overall. Revision rounds are agreed and capped upfront in every proposal.",
      },
      {
        title: "Final Delivery",
        desc: "A handover, not a file dump. Deliverables are packaged by use case, including source files. Every project closes with a handover document that tells you what each file is for.",
      },
    ],
    toolsTitle: "The Tools Behind the Work — and Why They Matter",
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "After Effects",
      "Canva Pro",
    ],
    toolsNote:
      "Tool choice is a craft decision, not a preference. A logo built in Photoshop cannot scale to a billboard without quality loss. A social template built outside a shared Figma workspace becomes a maintenance problem the moment your team needs to update a colour. Every file format and every piece of graphic design software we choose is selected for what the output has to do in the real world — not for what's fastest to produce. Final delivery formats include PNG, SVG, PDF, AI, PSD, and MP4 for motion assets, matched to your specific use case.",
    // Dummy — replace with a verified testimonial.
    testimonial: {
      quote:
        "We'd gone through two agencies before Skyup and kept getting work that looked fine but didn't feel like us. The discovery session in week one surfaced things about our brand positioning that we hadn't been able to articulate ourselves. The final identity was the first one our entire founding team agreed on — no arguments, no compromises.",
      author: "Priya Nambiar",
      role: "Co-Founder & CEO, Nestara Health",
    },
    faqTitle: "Questions Clients Ask Before They Brief Us",
    faqs: [
      {
        q: "How much do graphic design services cost in Bangalore?",
        a: "Graphic design costs vary based on project scope, complexity, turnaround time, and deliverables. At Skyup Digital Solutions, we provide customised quotes based on your business needs.",
      },
      {
        q: "Why is graphic design important for business growth?",
        a: "Graphic design builds credibility, strengthens brand recognition, improves communication, and helps increase conversions through professional visual presentation.",
      },
      {
        q: "How do I choose the right graphic design agency?",
        a: "Choose an agency with a strong portfolio, relevant experience, clear communication, a structured process, and an understanding of your business goals.",
      },
      {
        q: "What is the difference between graphic design and branding?",
        a: "Graphic design creates visual assets, while branding includes strategy, messaging, positioning, and overall brand identity. Design is one part of branding.",
      },
      {
        q: "Can graphic design improve social media engagement?",
        a: "Yes. High-quality designs make content more engaging, visually appealing, and effective at capturing audience attention.",
      },
      {
        q: "How long does it take to design a logo?",
        a: "A professional logo typically takes one to three weeks, depending on complexity, feedback, and revision requirements.",
      },
      {
        q: "Do I need brand guidelines for my business?",
        a: "Yes. Brand guidelines ensure consistency in logos, colours, typography, and visual elements across all marketing channels.",
      },
      {
        q: "What files should I receive after a design project?",
        a: "You should receive editable source files and formats such as AI, PSD, SVG, PDF, PNG, and JPG for print and digital use.",
      },
      {
        q: "What makes a good logo design?",
        a: "A good logo is simple, memorable, scalable, versatile, and relevant to the brand across all platforms and applications.",
      },
      {
        q: "Can graphic design increase conversion rates?",
        a: "Yes. Effective graphic design improves user experience, message clarity, engagement, and overall conversion performance.",
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
    seo: {
      metaTitle: "Web Design & Development Services | SkyUp",
      metaDescription:
        "SkyUp builds fast, responsive websites, e-commerce stores, web apps, ERP, LMS, dashboards, PWAs and CMS platforms that convert visitors.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "Web Development",
              item: "https://www.skyupdigitalsolutions.com/service/web-development",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are web development services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Web development services include designing, developing, and maintaining websites to help businesses establish a strong online presence.",
              },
            },
            {
              "@type": "Question",
              name: "How much does website development cost in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website development costs vary based on features, design complexity, and functionality. Contact us for a customized quote.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to develop a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A standard business website typically takes 2–6 weeks, depending on project requirements and revisions.",
              },
            },
            {
              "@type": "Question",
              name: "Why is web development important for businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A professionally developed website helps attract visitors, generate leads, improve credibility, and support business growth.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide custom web development services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer custom web development solutions tailored to your business goals, industry, and customer needs.",
              },
            },
            {
              "@type": "Question",
              name: "Will my website be mobile-friendly?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All our websites are fully responsive and optimized for desktops, tablets, and mobile devices.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer CMS web development services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we build websites on CMS platforms like WordPress, allowing you to easily manage and update content.",
              },
            },
            {
              "@type": "Question",
              name: "Is SEO included in web development services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we follow SEO best practices, including optimized site structure, fast loading speeds, and mobile responsiveness.",
              },
            },
            {
              "@type": "Question",
              name: "Can you redesign my existing website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we can modernize your existing website to improve performance, user experience, and conversions.",
              },
            },
            {
              "@type": "Question",
              name: "Why choose your web development company in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We build SEO-friendly, conversion-focused websites that combine great design, performance, and business strategy.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Web Development Services in Bangalore That Drive Real Business Results",
          url: "https://www.skyupdigitalsolutions.com/service/web-development",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "Web Development",
                url: "https://www.skyupdigitalsolutions.com/service/web-development",
                description:
                  "SkyUp builds fast, responsive websites, e-commerce stores, web apps, ERP, LMS, dashboards, PWAs and CMS platforms that convert visitors.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "Web Development",
              },
            },
          ],
        },
      ],
    },
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
      "Web Development Services in Bangalore That Drive Real Business Results",
    heroSubline:
      "Skyup Digital Solution offers a complete solution for Web Development Services in Bangalore — custom website creation, CMS platforms, and enterprise web apps. Our certified developers have years of hands-on experience on successful projects, building digital products that perform, scale, and convert.",
    painPoints: {
      title: "Your website is online. But is it helping your business grow?",
      intro:
        "You may already have a website, but if it loads slowly, looks outdated, is not mobile-friendly, or does not generate enquiries, it is not doing its job. A good website should build trust, explain your services clearly, and convert visitors into customers. It’s frustrating — and it’s fixable.",
      points: [
        {
          title: "Website visitors are not converting",
          desc: "People may visit your website but leave without calling, filling a form, booking a demo, or sending an enquiry. Poor layout, weak CTA placement, unclear messaging, and missing trust elements can reduce conversions.",
        },
        {
          title: "Website looks outdated",
          desc: "An old or unprofessional website can make customers doubt your brand. Modern web development helps your business look credible, updated, and trustworthy.",
        },
        {
          title: "Slow loading speed",
          desc: "If your website takes too long to open, visitors may leave before seeing your services. Speed optimization improves user experience, engagement, and conversion chances.",
        },
        {
          title: "Not mobile-friendly",
          desc: "Most customers browse from mobile phones. If text is too small, buttons are hard to click, or the layout breaks on mobile, you may lose serious leads.",
        },
      ],
    },
    benefitsTitle: "Why Your Business Needs Professional Web Development",
    benefits: [
      "Generate qualified leads",
      "Improve search engine rankings",
      "Increase customer trust",
      "Enhance user experience",
      "Improve conversion rates",
      "Automate business processes",
      "Provide longer-term business growth assistance",
    ],
    offerings: {
      title: "Our Web Development Services in Bangalore",
      subtitle:
        "We offer end-to-end website development and web app development services, and we do it all in-house — we don't outsource it.",
      points: [
        {
          title: "Custom Website Service",
          desc: "We build bespoke websites that really reflect your business aims, audience, and brand personality. Our websites are fast, responsive, SEO-friendly, and built to give you an outstanding user experience and to bring in more leads and conversions.",
        },
        {
          title: "Corporate Website Service",
          desc: "Your company's credibility and expertise should be evident through your website. Our corporate web services create that type of website and establish a reliable online presence for you — easy to use, secure, and scalable, so your company can easily showcase its services to potential clients.",
        },
        {
          title: "E-Commerce Website Service",
          desc: "If you're looking for a service to help you sell goods online, we're the e-commerce service for you. We design secure, functional online storefronts built to increase conversions — from payment-gateway integration to product management — giving your customers a smooth shopping experience that translates directly to increased sales.",
        },
        {
          title: "Web Application Service",
          desc: "Would you like to enhance your current operations? We build web applications to help you achieve that — CRM, ERP, customer portals, or dashboards that automate workflows and increase productivity. Our solutions are secure and continue to grow as your business grows.",
        },
        {
          title: "ERP Development Solutions",
          desc: "We build ERP systems that centralize and automate core business operations such as HR, inventory, accounting, and procurement. Our ERP solutions improve operational efficiency, reduce manual work, and provide real-time business insights.",
        },
        {
          title: "Learning Management Systems (LMS)",
          desc: "Our LMS development services enable organizations to deliver, manage, and track online learning programs effectively. We create intuitive platforms with course management, assessments, progress tracking, and certification capabilities.",
        },
        {
          title: "Admin Panels & Business Dashboards",
          desc: "We develop custom admin panels and business dashboards that provide complete control over data, users, and business processes. These solutions offer real-time analytics, reporting, and workflow management to support informed decision-making.",
        },
        {
          title: "Website Redesign Services",
          desc: "Transform your outdated website into a modern, visually appealing, and high-performing digital platform. Our website redesign services focus on improving user experience, SEO performance, loading speed, and conversion rates.",
        },
        {
          title: "Progressive Web App (PWA) Development",
          desc: "We develop Progressive Web Apps that combine the best features of websites and mobile applications. PWAs offer fast performance, offline access, push notifications, and a seamless user experience across all devices.",
        },
        {
          title: "Website Maintenance & Support",
          desc: "Keep your website secure, updated, and performing at its best with our maintenance and support services. We provide regular updates, security monitoring, bug fixes, backups, and performance optimization to ensure smooth operations.",
        },
      ],
    },
    processIntro:
      "A defined and refined 6-step process spanning projects ensures your website is delivered — on time, on budget, and on brief.",
    processTitle: "Our Web Development Process",
    process: [
      {
        title: "Discovery & Requirements",
        desc: "We start with a deep-dive workshop to learn what your business is all about, who will be using it, and what technical needs it has. Deliverable: a project scope and technology recommendation document.",
      },
      {
        title: "Strategy & Architecture",
        desc: "Our architects create the sitemap, information architecture, and technology stack. We define and set benchmarks for integration, performance, and scalability even prior to coding.",
      },
      {
        title: "UX Design & Prototyping",
        desc: "Wireframes are created in Figma and sent to you for feedback. We keep refining the UX flows until all interactions are intuitive, then move to high-fidelity visual design aligned with your brand.",
      },
      {
        title: "Development & Integration",
        desc: "Front-end and back-end development are done in concurrent sprints. You get a staging environment from day one, which you can monitor and give feedback on as you go.",
      },
      {
        title: "QA, Testing & Optimisation",
        desc: "Prior to any launch, we test across browsers and devices, plus security, accessibility, and performance. Bugs are fixed. PageSpeed is optimised.",
      },
      {
        title: "Launch & Ongoing Support",
        desc: "Controlled, safe deployment with rollback procedures. After your site launches, we monitor it for uptime, performance, and security, and offer maintenance retainers at various tiers to keep your site running at its best.",
      },
    ],
    whyChooseUs: {
      title: "Why Choose Us for Web Development Services in Bangalore",
      points: [
        {
          title: "Websites Built for Business Growth",
          desc: "We're not just developing websites — we're developing digital assets that support your marketing goals, increase conversions, and generate leads. Every website is created for user experience, performance, and business results.",
        },
        {
          title: "Custom Web Development Solutions",
          desc: "As a trusted web development company in Bangalore, we serve you with a solution that matches your brand, industry, and business requirements rather than a one-size-fits-all template.",
        },
        {
          title: "SEO-Ready Website Development",
          desc: "We're SEO-friendly from the very beginning of our web development process — optimized for search engines, with a well-structured site architecture, clean code, fast loading times, and mobile responsiveness.",
        },
        {
          title: "Mobile-First & Responsive Design",
          desc: "As most of your users are on mobile devices, we make sure your website works perfectly on every device — desktop, tablet, and smartphone — helping you boost engagement and convert better.",
        },
        {
          title: "Easy Content Management & CMS",
          desc: "You'll have complete control of your website. With our CMS web development services, your team can update images, pages, blogs, and content without any technical expertise.",
        },
        {
          title: "Transparent Process & On-Time Delivery",
          desc: "We follow a structured development process with clear communication, milestone tracking, and on-time project delivery to ensure a smooth experience from start to finish.",
        },
        {
          title: "Dedicated Support & Maintenance",
          desc: "Our relationship doesn't end after launch. We provide ongoing support, website maintenance, performance monitoring, and updates to keep your website running at its best.",
        },
        {
          title: "Experienced Web Development Team",
          desc: "We have designers, developers, SEO experts, and digital marketers all in the same team, working together to deliver the best web development experience — combining creativity, technology, and business strategy.",
        },
      ],
    },
    // Dummy — replace with verified client testimonials.
    testimonials: [
      {
        quote:
          "Skyup is the best web development company in Bangalore we have worked with. They built our SaaS portal on time, on budget, and the code quality is exceptional. Our engineering team continues to work with their codebase with zero friction.",
        author: "Rohan Mehta",
        role: "CTO, FinStack Technologies, Bangalore",
      },
      {
        quote:
          "Our old website was killing our conversion rates. Their team redesigned and rebuilt our store in 8 weeks. The mobile experience is night and day. We saw a 58% lift in sales within the first quarter post-launch.",
        author: "Priya Nair",
        role: "Founder, StyleVault (E-Commerce)",
      },
    ],
    faqTitle:
      "Frequently Asked Questions About Web Development Services in Bangalore",
    faqs: [
      {
        q: "What are web development services?",
        a: "Web development services include designing, developing, and maintaining websites to help businesses establish a strong online presence.",
      },
      {
        q: "How much does website development cost in Bangalore?",
        a: "Website development costs vary based on features, design complexity, and functionality. Contact us for a customized quote.",
      },
      {
        q: "How long does it take to develop a website?",
        a: "A standard business website typically takes 2–6 weeks, depending on project requirements and revisions.",
      },
      {
        q: "Why is web development important for businesses?",
        a: "A professionally developed website helps attract visitors, generate leads, improve credibility, and support business growth.",
      },
      {
        q: "Do you provide custom web development services?",
        a: "Yes, we offer custom web development solutions tailored to your business goals, industry, and customer needs.",
      },
      {
        q: "Will my website be mobile-friendly?",
        a: "Absolutely. All our websites are fully responsive and optimized for desktops, tablets, and mobile devices.",
      },
      {
        q: "Do you offer CMS web development services?",
        a: "Yes, we build websites on CMS platforms like WordPress, allowing you to easily manage and update content.",
      },
      {
        q: "Is SEO included in web development services?",
        a: "Yes, we follow SEO best practices, including optimized site structure, fast loading speeds, and mobile responsiveness.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes, we can modernize your existing website to improve performance, user experience, and conversions.",
      },
      {
        q: "Why choose your web development company in Bangalore?",
        a: "We build SEO-friendly, conversion-focused websites that combine great design, performance, and business strategy.",
      },
    ],
    cta: {
      title: "Ready to Build Something Great?",
      subtitle:
        "Looking for Web Development Services in Bangalore? Get a free consultation and a no-charge estimate based on your business goals.",
      primaryLabel: "Start Your Project",
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
    seo: {
      metaTitle: "SkyUp CRM Software for Sales & Lead Tracking",
      metaDescription:
        "Manage leads from Meta Ads, Google Ads, website forms, and calls with auto assignment, follow-ups, call tracking and AI summaries.",
      schema: [
        {
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              name: "Skyup Digital Solutions",
              item: "https://www.skyupdigitalsolutions.com/",
            },
            {
              "@type": "ListItem",
              position: "2",
              name: "Services Page",
              item: "https://www.skyupdigitalsolutions.com/service",
            },
            {
              "@type": "ListItem",
              position: "3",
              name: "CRM",
              item: "https://www.skyupdigitalsolutions.com/service/crm",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is SkyUp CRM?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SkyUp CRM is a lead management CRM software that helps businesses capture leads, assign them to sales teams, track calls, automate follow-ups, manage attendance, and monitor sales performance from one platform.",
              },
            },
            {
              "@type": "Question",
              name: "Who can use SkyUp CRM?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SkyUp CRM is suitable for real estate businesses, education companies, financial services, agencies, field sales teams, and any business that depends on enquiries, calls, follow-ups, and lead conversion.",
              },
            },
            {
              "@type": "Question",
              name: "Can SkyUp CRM capture leads from Meta Ads and Google Ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. SkyUp CRM can capture leads from Meta Ads, Google Ads, website forms, and manual entries, helping your team manage all enquiries in one place.",
              },
            },
            {
              "@type": "Question",
              name: "Does SkyUp CRM help prevent duplicate leads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. SkyUp CRM checks phone numbers and helps prevent duplicate lead entries, reducing repeated calls, confusion among sales executives, and poor customer experience.",
              },
            },
            {
              "@type": "Question",
              name: "Can SkyUp CRM automatically assign leads to sales executives?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. New leads can be automatically assigned to sales executives based on round robin, helping your team respond faster and avoid manual lead allocation delays.",
              },
            },
            {
              "@type": "Question",
              name: "Does SkyUp CRM support WhatsApp, SMS, and email automation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. SkyUp CRM supports WhatsApp, SMS, and email communication for instant replies, follow-up messages, reminders, and customer updates.",
              },
            },
            {
              "@type": "Question",
              name: "Can managers track sales team performance in SkyUp CRM?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Managers can track lead status, call activity, call remarks, follow-ups, attendance, location updates, and performance reports from the CRM dashboard.",
              },
            },
            {
              "@type": "Question",
              name: "Does SkyUp CRM have call tracking features?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. SkyUp CRM helps track incoming calls, outgoing calls, missed calls, call duration, call remarks, and call recordings, giving managers better visibility into sales activity.",
              },
            },
            {
              "@type": "Question",
              name: "Does SkyUp CRM have AI features?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. SkyUp CRM includes AI-powered features such as call transcription, call summaries, and lead insights to help teams understand customer conversations faster.",
              },
            },
            {
              "@type": "Question",
              name: "Does SkyUp CRM have a mobile app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. SkyUp CRM has a mobile app for sales executives to manage leads, calls, follow-ups, meetings, attendance, and field sales activities on the go.",
              },
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Skyup CRM",
          url: "https://www.skyupdigitalsolutions.com/service/crm",
          itemListElement: [
            {
              "@type": "ListItem",
              item: {
                "@type": "Service",
                name: "CRM",
                url: "https://www.skyupdigitalsolutions.com/service/crm",
                description:
                  "SkyUp provides CRM solutions to manage leads, automate follow-ups, track sales activity, improve customer communication and increase business conversions.",
                provider: {
                  "@type": "Organization",
                  name: "SkyUp Digital Solutions LLP",
                  url: "https://www.skyupdigitalsolutions.com/",
                },
                areaServed: { "@type": "City", name: "Bangalore" },
                serviceType: "CRM",
              },
            },
          ],
        },
      ],
    },
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
    heroHeadline: "SkyUp CRM: Close More Deals with AI-Powered Lead Management",
    heroSubline:
      "Built for sales-driven teams who are tired of losing leads in spreadsheets and missed follow-ups. SkyUp CRM gives your team one unified platform to capture leads from Facebook, Google & your website; assign them to agents in seconds; and track them.",
    painPoints: {
      title: "Your leads are coming in. But are they converting?",
      intro:
        "Most businesses spend money on marketing but lose potential customers because their lead management process is weak. It's not always on quality of the lead. It's delayed follow-up, poor tracking, duplicate entries, and lack of team accountability.",
      points: [
        {
          title: "Leads are scattered everywhere",
          desc: "Your leads are coming in from your website, ads, forms, WhatsApp, calls and referrals, but your team doesn't have a single system to manage them correctly.",
        },
        {
          title: "Follow-ups are getting missed",
          desc: "When your sales team does not call or follow up on time, interested customers quickly move to your competitors.",
        },
        {
          title: "Duplicate leads waste time",
          desc: "The same customer gets added multiple times, different executives call the same person, and the customer experience becomes poor.",
        },
        {
          title: "No clear sales team tracking",
          desc: "Managers cannot easily know who called, what was discussed, which leads are pending, and which executives are actually performing.",
        },
      ],
    },
    offerings: {
      title: "CRM Features That Solve Real Sales Problems",
      subtitle:"SkyUp CRM is more than just a lead storage solution. It is a full sales CRM tool that enhances reactivity, decreases manual tasks, keeps an eye on employees' activity and boosts lead conversion.",
      points: [
        {
          title: "Lead Capture from Multiple Sources",
          desc: "Collect leads directly from Meta Ads, Google Ads, website forms and manually entered leads into one CRM dashboard.",
        },
        {
          title: "Smart Auto Lead Assignment",
          desc: "New leads are allocated on a round robin basis to sales executives, thus enabling your team to respond quickly without having to manually allocate a new lead.",
        },
        {
          title: "Duplicate Lead Prevention",
          desc: "To avoid duplicate entries of leads and prevent repeated calls, SkyUp CRM validates phone numbers.",
        },
        {
          title: "Follow-up & Status Tracking",
          desc: "Monitor all leads, call notes, meeting updates, next steps and other activities in one place.",
        },
        {
          title: "WhatsApp, SMS & Email Automation",
          desc: "Immediately respond, remind, inform customers and send campaign messages via WhatsApp, SMS and email.",
        },
        {
          title: "Call Logs, Recordings & Reports",
          desc: "Monitor incoming calls, outgoing calls, missed calls, call time, notes and recordings, for better accountability of the sales team.",
        },
        {
          title: "AI Call Transcription & Summary",
          desc: "Transform sales calls into transcripts and summaries, enabling managers to quickly catch up on what clients are saying without having to listen to all sales calls.",
        },
        {
          title: "Attendance & Field Team Tracking",
          desc: "Attendance Management, Clock-in/Clock-out, Break Management, GPS based location tracking, Field visits, Live Team status.",
        },
      ],
    },
    processTitle:"Our Proven CRM Setup Process — Step by Step",
    processIntro:
      "We don't simply install CRM software. We know your business process, set up the correct workflow, integrate your lead sources, onboard your team and support you in your use of the CRM for higher conversions.",
    process: [
      {
        title: "CRM Requirement Audit",
        desc: "We learn your sales process, where your leads are coming from, your team makeup, how you follow-up, what you are using, and what conversions you are struggling with.",
      },
      {
        title: "Lead Source Integration",
        desc: "We integrate your CRM with Meta Ads, Google Ads, website forms, WhatsApp and other tools where your business gets inquiries.",
      },
      {
        title: "Team, Role & Access Setup",
        desc: "The team structure dictates who can have permissions, lead visibility, access to reporting, etc, and it is configured as the admin.",
      },
      {
        title: "Sales Pipeline & Automation Setup",
        desc: "Lead stages, follow up reminders, auto messages, status workflows, call remarks and notifications are customized for your business.",
      },
      {
        title: "Mobile App & Call Tracking Setup",
        desc: "Your sales team gets trained on how to handle leads, calls, meetings, attendance and follow up via the CRM mobile app.",
      },
      {
        title: "Reports & Performance Optimization",
        desc: "Lead response time, employee activity, campaign performance, missed follow-up and conversion reports are reviewed to get better sales results.",
      },
    ],
    whyChooseUs: {
      title: "Why Businesses Choose SkyUp CRM",
      points: [
        {
          title: "Built for Indian sales teams",
          desc: "SkyUp CRM is ideal for companies that have calls, WhatsApp and field visits as part of their daily sales activities, along with fast follow-up actions.",
        },
        {
          title: "More than a basic CRM",
          desc: "It's not only for customer information. It is helpful when it comes to capturing leads, assigning them, preventing lead duplication, tracking calls, follow up automations, and performance monitoring.",
        },
        {
          title: "Better control over every lead",
          desc: "Managers will be able to view the status of each lead, who it is being followed up by, when it was last called, and what the next step should be.",
        },
        {
          title: "Stronger sales accountability",
          desc: "Your sales process becomes transparent and measurable with call logs, recording, attendance, location tracking and reports.",
        },
        {
          title: "AI-powered CRM intelligence",
          desc: "Your team knows what customers are looking to achieve quicker with AI call summaries, transcriptions, and lead insights and can then follow up accordingly.",
        },
         {
          title: "CRM Impact Highlight",
          desc: "With SkyUp CRM, businesses can decrease missed follow-ups, shorten lead response time, avoid duplicate leads, monitor the efforts of sales executives and turn more marketing leads into actual sales prospects.",
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
    faqTitle: "Honest Answers to Your Questions",
    faqs: [
      {
        q: "What is SkyUp CRM?",
        a: "SkyUp CRM is a lead management CRM software that helps businesses capture leads, assign them to sales teams, track calls, automate follow-ups, manage attendance, and monitor sales performance from one platform.",
      },
      {
        q: "Who can use SkyUp CRM?",
        a: "SkyUp CRM is suitable for real estate businesses, education companies, financial services, agencies, field sales teams, and any business that depends on enquiries, calls, follow-ups, and lead conversion.",
      },
      {
        q: "Can SkyUp CRM capture leads from Meta Ads and Google Ads?",
        a: "Yes. SkyUp CRM can capture leads from Meta Ads, Google Ads, website forms, and manual entries, helping your team manage all enquiries in one place.",
      },
      {
        q: "Does SkyUp CRM help prevent duplicate leads?",
        a: "Yes. SkyUp CRM checks phone numbers and helps prevent duplicate lead entries, reducing repeated calls, confusion among sales executives, and poor customer experience.",
      },
      {
        q: "Can SkyUp CRM automatically assign leads to sales executives?",
        a: "Yes. New leads can be automatically assigned to sales executives based on round robin, helping your team respond faster and avoid manual lead allocation delays.",
      },
      {
        q: "Does SkyUp CRM support WhatsApp, SMS, and email automation?",
        a: "Yes. SkyUp CRM supports WhatsApp, SMS, and email communication for instant replies, follow-up messages, reminders, and customer updates.",
      },
      {
        q: "Can managers track sales team performance in SkyUp CRM?",
        a: "Yes. Managers can track lead status, call activity, call remarks, follow-ups, attendance, location updates, and performance reports from the CRM dashboard.",
      },
      {
        q: "Does SkyUp CRM have call tracking features?",
        a: "Yes. SkyUp CRM helps track incoming calls, outgoing calls, missed calls, call duration, call remarks, and call recordings, giving managers better visibility into sales activity.",
      },
      {
        q: "Does SkyUp CRM have AI features?",
        a: "Yes. SkyUp CRM includes AI-powered features such as call transcription, call summaries, and lead insights to help teams understand customer conversations faster.",
      },
      {
        q: "Does SkyUp CRM have a mobile app?",
        a: "Yes. SkyUp CRM has a mobile app for sales executives to manage leads, calls, follow-ups, meetings, attendance, and field sales activities on the go.",
      },
    ],
    cta: {
      title: "Desperate to prevent losing leads after they enquire?",
      subtitle:
        "Get a CRM that collects all leads, assigns leads instantly, keeps track of all calls, automates follow-up, monitors your sales team and helps you convert faster.",
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
];
