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
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", // TODO: replace with a real photo of you (e.g. /images/profile.jpg)
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
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
      ],
      tags: ["AI/RAG", "Architecture", "0-to-1"],
      details: "Owned major product surfaces end-to-end — user interface, APIs, data layer, AI workflows, and supporting infrastructure — plus significant portions of SHU's public web presence, including pricing and signup integrations, major site redesigns, production releases, and SEO."
    },
    {
      id: 2,
      title: "Everi Digital — Innovations Team",
      description: "Led the cross-functional Innovations Team in creating HTML5 iGaming slot titles with non-traditional features, including a reel-less design.",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      tags: ["Leadership", "HTML5", "iGaming"],
      details: "Shipped 15 titles including Stellar Bounties, nominated for the EKG Slot Awards Most Innovative Online Game of 2024. Interfaced daily with stakeholders, creative, QA, and compliance to keep design features aligned with internal, customer, and regulatory requirements, while refining the team's workflow and release process."
    },
    {
      id: 3,
      title: "Everi Digital — Digital Table Games",
      description: "Organized the creation of brand-new micro-services to bring Everi's first-ever digital table games into the existing remote gaming server.",
      images: [
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      tags: ["Microservices", "Game Engine", "Leadership"],
      details: "Guided the creation of 4 titles, including Jinzi Roulette — nominated for the EKG Slot Awards Top Performing New Online Table Game of 2025. Also partnered with third-party firms to bring their concepts to life within our own game engine, aligning on features, design, and schedule with internal and external stakeholders."
    },
    {
      id: 4,
      title: "Jacquie Lawson Interactive Products",
      description: "Manager and technical lead for American Greetings' suite of Unity and web-based interactive products under the Jacquie Lawson brand.",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop"
      ],
      tags: ["Unity", "Pixi.js", "Interactive"],
      details: "Released the Jacquie Lawson Nordic, Country Cottage, London, and Sussex Advent Calendars in Unity, and served as technical lead on the Pixi.js/TypeScript Curio Collection. Translated business requirements into prioritized engineering work, delegated across developers, and architected core application components — including a yearlong effort converting 300+ Flash e-cards to HTML5."
    }
  ],

  // AI Projects
  aiProjects: [
    {
      id: 1,
      title: "Personal Knowledge Base & RAG Platform",
      description: "Architected and delivered SHU's Personal Knowledge Base platform from 0-to-1, enabling users to create private knowledge and attach it directly to AI conversations.",
      images: [
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
      ],
      tags: ["RAG", "LLM", "Architecture"],
      details: "The platform lets users persist knowledge across sessions, prevent duplicate ingestion, preview and manage documents, and convert conversations into reusable knowledge — with persistent knowledge attachments and session-context visibility woven into the chat experience."
    },
    {
      id: 2,
      title: "AI Usage & Cost-Observability Platform",
      description: "Built SHU's AI usage and cost-observability platform with both customer and administrator experiences for tracking spend across models and providers.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      tags: ["LLM Ops", "Observability", "Stripe"],
      details: "Tracks credits, tokens, requests, model usage, and plan consumption, with per-user and per-model cost drilldowns, integrating provider-sourced LLM pricing to give teams a clear view of where AI spend is going."
    },
    {
      id: 3,
      title: "Resilient RAG & LLM Streaming",
      description: "Improved scalability and reliability across SHU's core AI/RAG workflows by rethinking how streaming, retrieval, and external calls handle failure.",
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop"
      ],
      tags: ["RAG", "Streaming", "Reliability"],
      details: "Eliminated long-lived database transactions around LLM streaming, embeddings, RAG retrieval, Stripe, and external service calls; strengthened chat-stream lifecycle handling, provider fallback behavior, streaming cancellation, durable handling of disconnected clients, and production failure recovery."
    }
  ],

  // Gallery Images
  // TODO: These are stock placeholder photos. Replace the url/alt/caption with your own images
  // (add files to public/images/ and reference them like "/images/talk.jpg").
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      alt: "Team collaboration",
      caption: "Engineering team workshop"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      alt: "Conference speaking",
      caption: "Speaking at a tech event"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      alt: "Pair programming",
      caption: "Pair programming session"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Team meeting",
      caption: "Sprint planning"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      alt: "Whiteboard session",
      caption: "Architecture design session"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      alt: "Office workspace",
      caption: "Engineering workspace"
    }
  ]
};
