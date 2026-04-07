export const siteConfig = {
  name: "Eric Longville",
  title: "Software Engineering Manager & Leader",
  description: "Building high-performing teams and scalable systems",
  
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
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    email: "your.email@example.com",
  },

  // Home Page Content
  home: {
    logo: "logo/LongvilleLogo.png", // Your initials or logo text
    heading: "Engineering Leader",
    subheading: "Building the Future of Technology",
    missionStatement: "I lead high-performing engineering teams to build scalable, innovative solutions that drive business impact. With a focus on technical excellence, team growth, and strategic vision, I transform complex challenges into elegant systems that serve millions of users.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
  },

  // About Page Content
  about: {
    introduction: "I'm a passionate software engineering leader with over 10 years of experience building and scaling engineering teams. My approach combines technical depth with people-first leadership, fostering environments where engineers thrive and innovation flourishes.",
    
    workExperience: [
      {
        company: "Tech Company",
        position: "VP of Engineering",
        period: "2020 - Present",
        description: "Leading 50+ engineers across multiple teams. Scaled infrastructure to support 10M+ users. Implemented agile practices that increased delivery velocity by 40%.",
        achievements: [
          "Built engineering culture from ground up",
          "Reduced time-to-market by 35%",
          "Mentored 15+ senior engineers"
        ]
      },
      {
        company: "Startup Inc",
        position: "Engineering Manager",
        period: "2018 - 2020",
        description: "Managed cross-functional teams of 20 engineers. Led migration from monolith to microservices architecture. Established DevOps practices and CI/CD pipelines.",
        achievements: [
          "Improved deployment frequency by 10x",
          "Reduced production incidents by 60%",
          "Grew team from 8 to 20 engineers"
        ]
      },
      {
        company: "Software Solutions",
        position: "Senior Software Engineer",
        period: "2015 - 2018",
        description: "Full-stack development and technical leadership. Architected core platform features serving enterprise clients. Mentored junior developers and conducted technical interviews.",
        achievements: [
          "Designed scalable API architecture",
          "Improved system performance by 3x",
          "Led adoption of modern tech stack"
        ]
      }
    ],

    technicalSkills: {
      leadership: ["Team Building", "Agile/Scrum", "Technical Strategy", "Mentoring", "Stakeholder Management"],
      architecture: ["Microservices", "Cloud Architecture", "System Design", "API Design", "DevOps"],
      technologies: ["React", "Node.js", "Python", "TypeScript", "Go", "Kubernetes", "AWS", "PostgreSQL"],
      practices: ["CI/CD", "Code Review", "Technical Writing", "Architecture Reviews", "Performance Optimization"]
    }
  },

  // Work Projects
  workProjects: [
    {
      id: 1,
      title: "Enterprise Platform Modernization",
      description: "Led the complete overhaul of a legacy monolithic system serving 5M users, migrating to a scalable microservices architecture with zero downtime.",
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
      ],
      tags: ["Architecture", "Leadership", "Cloud"],
      details: "This multi-year initiative involved coordinating 6 engineering teams, establishing new DevOps practices, and implementing a phased migration strategy. The new architecture reduced infrastructure costs by 40% while improving system reliability to 99.99% uptime."
    },
    {
      id: 2,
      title: "Real-Time Analytics Dashboard",
      description: "Built a comprehensive real-time analytics platform processing 100K events per second, providing actionable insights to business stakeholders.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=600&fit=crop"
      ],
      tags: ["Data Engineering", "React", "Real-time"],
      details: "Designed and implemented a stream processing pipeline using Apache Kafka and built an intuitive dashboard that became the primary decision-making tool for executives. The system handles billions of events monthly with sub-second latency."
    },
    {
      id: 3,
      title: "Mobile-First E-commerce Platform",
      description: "Architected and launched a mobile-first e-commerce platform that achieved $10M in revenue within the first year.",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop"
      ],
      tags: ["Mobile", "Product", "Growth"],
      details: "Led a team of 15 engineers to build a performant, conversion-optimized platform. Implemented advanced caching strategies, progressive web app features, and A/B testing framework that drove continuous optimization."
    }
  ],

  // AI Projects
  aiProjects: [
    {
      id: 1,
      title: "Automated Code Review Assistant",
      description: "Developing an AI-powered code review tool that analyzes pull requests and provides intelligent feedback on code quality, security, and best practices.",
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
      ],
      tags: ["LLM", "DevOps", "Automation"],
      details: "This experiment uses GPT-4 to analyze code changes, identify potential issues, and suggest improvements. Early results show 30% reduction in review cycle time while maintaining code quality standards."
    },
    {
      id: 2,
      title: "Team Productivity Insights",
      description: "Building an ML model to predict team capacity and identify bottlenecks in the development process using historical data and sentiment analysis.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      tags: ["Machine Learning", "Analytics", "Leadership"],
      details: "Combining project management data, git analytics, and team surveys to create predictive models for sprint planning. The system provides actionable recommendations for resource allocation and risk mitigation."
    },
    {
      id: 3,
      title: "Intelligent Documentation Generator",
      description: "Experimenting with AI to automatically generate and maintain technical documentation from code comments and system architecture.",
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop"
      ],
      tags: ["NLP", "Documentation", "Developer Experience"],
      details: "Using a combination of static analysis and LLMs to keep documentation in sync with code changes. The tool generates architecture diagrams, API documentation, and onboarding guides automatically."
    }
  ],

  // Gallery Images
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
      caption: "Speaking at tech conference"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      alt: "Code review session",
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
