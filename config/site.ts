export const siteConfig = {
  name: "Eric Longville",
  title: "Engineering Leader | AI & Product Development",
  description: "Engineering leader with 14+ years building AI, web, and interactive-entertainment products — and the teams behind them.",

  // Navigation
  nav: {
    home: { label: "Home", href: "/" },
    about: { label: "About", href: "/about" },
    work: { label: "Work", href: "/work" },
    aiProjects: { label: "AI Projects", href: "/ai-projects" },
    gallery: { label: "Gallery", href: "/gallery" },
  },

  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/ericlongville",
    github: "https://github.com/yourprofile", // TODO: add your GitHub (resume has none) or remove this button
    email: "eric.longville@gmail.com",
  },

  // Home Page Content
  home: {
    logo: "logo/LongvilleLogo.png", // Your initials or logo text
    heading: "Engineering Leader",
    subheading: "AI & Product Development",
    missionStatement: "Engineering leader with 14+ years building products, teams, and scalable systems across AI, web, and interactive entertainment. I pair hands-on technical depth with people leadership, architecture, and cross-functional execution — turning ambitious ideas into production-ready products. Most recently focused on private AI infrastructure, RAG, and LLM-powered applications.",
    // Hero slideshow — always starts on the headshot, then rotates at random.
    heroImages: [
      "/images/gallery/slide_08_professional_headshot_4x5.jpg",
      "/images/gallery/slide_06_baseball_action_4x5.jpg",
      "/images/gallery/slide_04_baseball_portrait_4x5.jpg",
      "/images/gallery/slide_02_puppy_4x5.jpg",
      "/images/gallery/slide_01_large_dog_4x5.jpg",
      "/images/gallery/slide_05_selfie_with_dog_4x5.jpg",
      "/images/gallery/slide_03_couple_4x5.jpg",
      "/images/gallery/slide_07_cornfield_4x5.jpg",
    ],
  },

  // About Page Content
  about: {
    introduction: "I'm an engineering leader with 14+ years of experience building products, teams, and scalable systems across AI, web, and interactive entertainment. My approach combines hands-on technical depth with people-first leadership — architecture, hiring, and cross-functional execution — with a track record of turning ambitious ideas into production-ready products. Most recently I've been focused on private AI infrastructure, RAG, and LLM-powered applications.",

    workExperience: [
      {
        company: "SHU.ai",
        position: "Principal Software Engineering Manager",
        period: "Apr 2026 - Aug 2026",
        description: "Founding member of SHU.ai, an early-stage private AI infrastructure startup. Helped build the product from the ground up across frontend, backend, AI/RAG workflows, customer onboarding, billing, and production infrastructure — owning major product surfaces end-to-end.",
        achievements: [
          "Owned the architecture and 0-to-1 delivery of the Personal Knowledge Base platform, letting users attach private, persistent knowledge directly to AI conversations",
          "Architected the AI usage and cost-observability platform, tracking credits, tokens, model usage, and per-user/model cost drilldowns with provider-sourced LLM pricing",
          "Hardened core AI/RAG workflows by eliminating long-lived DB transactions around LLM streaming, embeddings, retrieval, and Stripe, improving scalability and failure recovery"
        ]
      },
      {
        company: "Everi Holdings Inc.",
        position: "Manager, Software Development - Principal",
        period: "Sep 2022 - Nov 2025",
        description: "Led the cross-functional Innovations Team within Everi Digital, building HTML5 iGaming titles — including non-traditional formats such as a reel-less slot design — while working daily with creative, QA, compliance, and third-party stakeholders.",
        achievements: [
          "Shipped 15 titles, including Stellar Bounties — nominated for the EKG Slot Awards Most Innovative Online Game of 2024",
          "Stood up new micro-services for Everi's first-ever digital table games and guided 4 titles, including Jinzi Roulette (EKG Slot Awards nominee, 2025)",
          "Owned hiring for a growing engineering team and refined the team's workflow and release process to increase output while upholding quality"
        ]
      },
      {
        company: "American Greetings",
        position: "Software Engineering Manager - Interactive Products",
        period: "May 2016 - Sep 2022",
        description: "Manager and technical lead for the company's entire suite of Unity projects and web-based interactive products under the Jacquie Lawson brand, owning planning and technical delivery across Creative, UI, and QA.",
        achievements: [
          "Released the Jacquie Lawson Nordic, Country Cottage, London, and Sussex Advent Calendars (Unity)",
          "Served as technical lead on the Jacquie Lawson Curio Collection, built with Pixi.js and TypeScript",
          "Led a yearlong effort converting 300+ Flash-based e-cards into an HTML5-friendly format"
        ]
      },
      {
        company: "SEGA Networks Inc.",
        position: "Game Engineer",
        period: "Mar 2015 - Mar 2016",
        description: "Assisted in porting and reskinning a popular Japanese mobile app, retooling it for launch in America.",
        achievements: [
          "Converted in-game scenes to new assets and added new functionality",
          "Heavily tested all features ahead of the U.S. launch"
        ]
      },
      {
        company: "KIXEYE",
        position: "Quality Engineer / Software Engineer",
        period: "Sep 2012 - Jan 2015",
        description: "Head QA analyst and quality engineer for an unreleased project built in Unreal Engine 4.",
        achievements: [
          "Wrote a suite of functional, performance, and regression tests that ran daily"
        ]
      }
    ],

    technicalSkills: {
      leadership: ["Team Leadership", "Mentorship (Player-Coach)", "Hiring & Recruitment", "Global Team Coordination", "Stakeholder Management", "Executive Reporting"],
      architecture: ["System Design", "LLM Application Development", "RAG & Embeddings", "AI Agents", "API Integrations", "Cloud Infrastructure (AWS)", "Scalability & Web Performance"],
      technologies: ["Python", "FastAPI", "PostgreSQL", "TypeScript", "Node.js", "React", "Next.js", "C#", "C++", "Java", "Unity", "Unreal Engine", "Pixi.js"],
      practices: ["Prompt Engineering", "Agile (Scrum/Kanban)", "CI/CD", "Git", "Jenkins", "Workflow Automation", "Release Management", "SDLC Management"]
    }
  },

  // Work Projects
  workProjects: [
    {
      id: 1,
      title: "SHU.ai — Private AI Platform (0-to-1)",
      description: "As a founding member, helped build SHU's private, enterprise-focused AI platform from the ground up — spanning frontend, backend, AI/RAG workflows, onboarding, billing, and production infrastructure.",
      images: [
        "/images/SHU/SHU_Banner.png",
        "/images/SHU/SHU_WelcomeScreen.png",
        "/images/SHU/SHU_website.png",
        "/images/SHU/SHU_PK.png"
      ],
      tags: ["AI/RAG", "Architecture", "0-to-1"],
      href: "/showcase/shu",
      cta: "Explore the build",
      details: "Owned major product surfaces end-to-end — user interface, APIs, data layer, AI workflows, and supporting infrastructure — plus significant portions of SHU's public web presence, including pricing and signup integrations, major site redesigns, production releases, and SEO."
    },
    {
      id: 2,
      title: "Everi Digital — Innovations Team",
      description: "Led the cross-functional Innovations Team in creating HTML5 iGaming slot titles with non-traditional features, including a reel-less design.",
      images: [
        "/images/Everi/StellarBounties.png",
        "/images/Everi/FireFury.png",
        "/images/Everi/FiestaPop.png",
        "/images/Everi/GOFH.png"
      ],
      tags: ["Leadership", "HTML5", "iGaming"],
      href: "/showcase/everi",
      cta: "View shipped titles",
      details: "Shipped 15 titles including Stellar Bounties, nominated for the EKG Slot Awards Most Innovative Online Game of 2024. Interfaced daily with stakeholders, creative, QA, and compliance to keep design features aligned with internal, customer, and regulatory requirements, while refining the team's workflow and release process."
    },
    {
      id: 3,
      title: "Everi Digital — Digital Table Games",
      description: "Organized the creation of brand-new micro-services to bring Everi's first-ever digital table games into the existing remote gaming server.",
      images: [
        "/images/Everi/JinziRoulette.png",
        "/images/Everi/Blackjack.png"
      ],
      tags: ["Microservices", "Game Engine", "Leadership"],
      href: "/showcase/everi",
      cta: "View shipped titles",
      details: "Guided the creation of 4 titles, including Jinzi Roulette — nominated for the EKG Slot Awards Top Performing New Online Table Game of 2025. Also partnered with third-party firms to bring their concepts to life within our own game engine, aligning on features, design, and schedule with internal and external stakeholders."
    },
    {
      id: 4,
      title: "American Greetings — Jacquie Lawson",
      description: "Manager and technical lead for American Greetings' suite of Unity and web-based interactive products under the beloved Jacquie Lawson brand.",
      images: [
        "/images/AmericanGreetings/JL_NordicAdvent.png",
        "/images/AmericanGreetings/JL_MainAdvent_1280x720.png",
        "/images/AmericanGreetings/JL_SussexMainScene_1280x720.png"
      ],
      tags: ["Unity", "Pixi.js", "Interactive"],
      href: "/showcase/american-greetings",
      cta: "View titles",
      details: "Released the Nordic, Paris, London, and Sussex Advent Calendars and the Country Cottage decorating game in Unity, and served as technical lead on the Pixi.js/TypeScript Curio Collection. Translated business requirements into prioritized engineering work, delegated across developers, and architected core application components — including a yearlong effort converting 300+ Flash e-cards to HTML5."
    }
  ],

  // AI Projects — personal AI experiments (in progress + planned). Separate from
  // professional work (SHU lives under Work → /showcase/shu). Add entries like:
  //   {
  //     title: "My experiment",
  //     status: "In Progress",           // "In Progress" | "Planned" | "Exploring"
  //     description: "What it is / what I'm exploring.",
  //     tags: ["LLM", "Agents"],         // optional
  //     href: "https://github.com/...",  // optional (repo / demo / write-up)
  //     image: "/images/experiments/foo.png", // optional (16:9)
  //   }
  aiProjects: [] as {
    title: string;
    status: string;
    description: string;
    tags?: string[];
    href?: string;
    image?: string;
  }[],

  // Gallery Images — local photos in public/images/gallery (4:5 crops).
  gallery: [
    {
      id: 1,
      url: "/images/gallery/slide_08_professional_headshot_4x5.jpg",
      alt: "Eric Longville, professional headshot",
      caption: "Eric Longville"
    },
    {
      id: 2,
      url: "/images/gallery/slide_06_baseball_action_4x5.jpg",
      alt: "Eric mid-swing in a vintage base ball game",
      caption: "Vintage base ball — the swing"
    },
    {
      id: 3,
      url: "/images/gallery/slide_04_baseball_portrait_4x5.jpg",
      alt: "Eric in a vintage baseball uniform",
      caption: "Suited up for the game"
    },
    {
      id: 4,
      url: "/images/gallery/slide_07_cornfield_4x5.jpg",
      alt: "Eric with a bat standing in a cornfield",
      caption: "Field of dreams"
    },
    {
      id: 5,
      url: "/images/gallery/slide_02_puppy_4x5.jpg",
      alt: "Eric with his golden retriever puppy",
      caption: "The early days"
    },
    {
      id: 6,
      url: "/images/gallery/slide_01_large_dog_4x5.jpg",
      alt: "Eric holding his golden retriever",
      caption: "All grown up"
    },
    {
      id: 7,
      url: "/images/gallery/slide_05_selfie_with_dog_4x5.jpg",
      alt: "Eric and his golden retriever",
      caption: "Best buds"
    },
    {
      id: 8,
      url: "/images/gallery/slide_03_couple_4x5.jpg",
      alt: "Eric with his partner outdoors",
      caption: "Off the clock"
    }
  ],

  // Project showcases — dedicated case-study pages at /showcase/<slug>.
  // Add a company by dropping art in public/images/<Folder>/ and appending an
  // entry here; the /showcase/[slug] route renders it automatically.
  showcases: [
    {
      slug: "everi",
      company: "Everi Holdings",
      role: "Manager, Software Development – Principal",
      period: "2022 – 2025",
      layout: "grid",
      intro: "Leading the cross-functional Innovations Team within Everi Digital, I shipped HTML5 iGaming titles across slots, instant-win, and table games — including Everi's first-ever digital table game. These are the titles I brought to real-money players.",
      items: [
        {
          image: "/images/Everi/StellarBounties.png",
          title: "Stellar Bounties",
          badge: "EKG Awards Nominee · 2024",
          description: "A perceived-skill game where players pilot a spacecraft to shoot down enemy ships for bounties. Built on SpinFusion — a new technology that runs multiple spins across multiple math models to generate several wins per play, which translate into loot. Nominated for the 2024 EKG Slot Awards Most Innovative Online Game."
        },
        {
          image: "/images/Everi/GOFH.png",
          title: "Off the Hook: Good Ol' Fishin' Hole",
          description: "An instant-win game where players cast a line into their favorite fishin' hole to pull up prizes. Built on the proven math from Everi's popular Cash Machine line of games."
        },
        {
          image: "/images/Everi/FireFury.png",
          title: "Fire Fury",
          description: "A fast, high-energy instant-win title in the Lightning ZAP family — quick rounds engineered for snappy, exciting gameplay."
        },
        {
          image: "/images/Everi/FiestaPop.png",
          title: "Fiesta Pop",
          description: "A celebration-themed instant-win title in the Lightning ZAP family, delivering the same fast, exciting gameplay with a festive spin."
        },
        {
          image: "/images/Everi/JinziRoulette.png",
          title: "Jinzi Roulette",
          badge: "EKG Awards Nominee · 2025",
          description: "Everi's first and only digital table game. I was instrumental in the cross-functional effort to bring the game and its supporting services into our Remote Gaming Server (RGS), and worked with compliance and the Pennsylvania Gaming Board to codify the rules for mini roulette. Nominated for the EKG Slot Awards Top Performing New Online Table Game of 2025."
        },
        {
          image: "/images/Everi/Blackjack.png",
          title: "Blackjack Bonus Aces Jackpot",
          description: "Everi's first Blackjack title, featuring a progressive side bet that pays on the Aces dealt during the initial deal."
        }
      ],
      extra: {
        heading: "Also shipped & regulator-approved",
        note: "Additional titles I delivered that cleared regulatory approval, awaiting release:",
        entries: [
          { title: "Quackdraw", description: "An instant-win game where players take on the role of a duck sheriff, gunslinging with outlaws." },
          { title: "Lucky Fireworks", description: "An instant-win game where players shoot fireworks into the night sky for prizes. I was instrumental in building a custom math model to drive the gameplay." },
          { title: "Sic Bo & Mini Baccarat", description: "Two more titles rounding out the digital Table Games lineup." },
          { title: "Cash Machine, Double Black Diamond & Hoop Dynasty — Match 3", description: "Pick games developed in tandem with a third-party provider: match three to win prizes or advance a prize ladder, deciding whether to risk your progress or take the prize." },
          { title: "Hi-Lo Fired Up", description: "A video-poker-style card game built with a third party. Players call \"High\" or \"Low\" against a presented set of cards, earning prizes based on the streaks they achieve." }
        ]
      }
    },
    {
      slug: "shu",
      company: "SHU.ai",
      role: "Principal Software Engineering Manager",
      period: "2026",
      layout: "feature",
      intro: "As a founding member of SHU.ai — an early-stage private AI infrastructure startup — I helped build the product from the ground up: frontend, backend, AI/RAG workflows, customer onboarding, billing, and production infrastructure. A look at what I built.",
      items: [
        {
          image: "/images/SHU/SHU_website.png",
          title: "Public web presence",
          description: "Owned significant portions of shu.ai — implementing pricing and signup integrations, executing major site redesigns, preparing production releases, and adding search-engine optimization."
        },
        {
          image: "/images/SHU/SHU_WelcomeScreen.png",
          title: "Production chat experience",
          description: "Built the core chat surface — configurable assistant branding, model selection, contextual onboarding, streaming with cancellation, and durable handling of disconnected clients."
        },
        {
          image: "/images/SHU/SHU_Signup.png",
          title: "Onboarding & billing",
          description: "Implemented customer onboarding and signup flows with billing integration, moving new users from landing page to a working private AI workspace."
        },
        {
          image: "/images/SHU/SHU_PK.png",
          title: "Personal Knowledge Base",
          description: "Owned the architecture and 0-to-1 delivery of the Personal Knowledge Base — letting users create private knowledge, attach it directly to AI conversations, persist it across sessions, prevent duplicate ingestion, and turn conversations into reusable knowledge."
        },
        {
          image: "/images/SHU/SHU_Context.png",
          title: "Knowledge in context",
          description: "Made a user's private knowledge visible and controllable inside the conversation — persistent attachments and session-context visibility that ground answers in their own documents."
        }
      ],
      extra: {
        heading: "Under the hood",
        note: "Beyond the surfaces above, I owned foundational platform work:",
        entries: [
          { title: "AI usage & cost observability", description: "Architected customer and administrator experiences for tracking credits, tokens, requests, model usage, and plan consumption — with per-user/model cost drilldowns and provider-sourced LLM pricing." },
          { title: "Resilient RAG & streaming", description: "Improved scalability and reliability across core AI/RAG workflows by eliminating long-lived database transactions around LLM streaming, embeddings, retrieval, Stripe, and external calls; strengthened chat-stream lifecycle handling, provider fallback, and production failure recovery." }
        ]
      }
    },
    {
      slug: "american-greetings",
      company: "American Greetings",
      role: "Software Engineering Manager – Interactive Products",
      period: "2016 – 2022",
      layout: "grid",
      intro: "As Manager and Technical Lead for American Greetings' entire suite of Unity projects, I owned planning and technical delivery across Creative, UI, and QA for the beloved Jacquie Lawson brand — translating business requirements into prioritized engineering work, delegating across developers, and architecting core application components. A look at the titles I helped ship.",
      items: [
        {
          image: "/images/AmericanGreetings/JL_NordicAdvent.png",
          title: "Nordic Advent Calendar",
          description: "A Scandinavian-themed advent calendar — a snowy Nordic village to explore across the 24 days of December, each door opening onto a hand-illustrated scene, animation, or activity. Built in Unity."
        },
        {
          image: "/images/AmericanGreetings/JL_MainAdvent_1280x720.png",
          title: "Paris Advent Calendar",
          description: "A Parisian advent calendar set among a snow-dusted Louvre, Sacré-Cœur, and Haussmann rooftops — a new interactive scene waiting behind each of the 24 doors. Built in Unity."
        },
        {
          image: "/images/AmericanGreetings/JL_SussexMainScene_1280x720.png",
          title: "Sussex Advent Calendar",
          description: "An English-village advent calendar set on a snowy Sussex high street — 24 doors of festive shops, homes, and hidden surprises to discover. Built in Unity."
        },
        {
          image: "/images/AmericanGreetings/JL_CountryCottage_1280x720.png",
          title: "Country Cottage",
          description: "A cozy decorating experience — design and decorate your own English country cottage, earning rewards through games to spend on furniture, upholstery, and décor, with expansion packs like Summer Garden and Kitchen. Built in Unity."
        },
        {
          image: "/images/AmericanGreetings/JL_Curio.png",
          title: "Curio Collection",
          description: "A web-based collection of puzzles and activities — word searches, hidden-object scenes, and more — that I served as Technical Lead on, programmed in Pixi.js and TypeScript."
        }
      ],
      extra: {
        heading: "Also shipped",
        note: "More work under the Jacquie Lawson brand:",
        entries: [
          { title: "London Advent Calendar", description: "Another Unity advent calendar in the Jacquie Lawson series, delivered to the brand's audience of holiday fans." },
          { title: "300+ e-cards, Flash → HTML5", description: "Led a yearlong initiative converting 300+ legacy Flash e-cards into an HTML5-friendly format for the Jacquie Lawson website — keeping a beloved catalog alive as Flash was sunset." }
        ]
      }
    }
  ]
};
