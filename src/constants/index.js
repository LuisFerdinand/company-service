import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets/assets";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiPython,
  SiTensorflow,
  SiD3Dotjs,
  SiPostgresql,
  SiJsonwebtokens,
  SiNextdotjs,
  SiGraphql,
  SiRedis,
  SiTailwindcss,
  SiVite,
  SiTypescript,
  SiSanity,
  SiAppwrite,
  SiNeovim,
  SiTrpc,
  SiDrizzle,
} from "react-icons/si";
import { FaAws, FaCube, FaServer, FaUserLock } from "react-icons/fa";

// Tech icon mapping function
export const getTechIcon = (tech) => {
  const icons = {
    "React.js": <SiReact className="text-cyan-400" />,
    "React Native": <SiReact className="text-cyan-300" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Stripe: <SiStripe className="text-purple-500" />,
    Python: <SiPython className="text-yellow-400" />,
    TensorFlow: <SiTensorflow className="text-orange-500" />,
    "D3.js": <SiD3Dotjs className="text-orange-400" />,
    PostgreSQL: <SiPostgresql className="text-blue-600" />,
    JWT: <SiJsonwebtokens className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    GraphQL: <SiGraphql className="text-pink-500" />,
    Redis: <SiRedis className="text-red-500" />,
    AWS: <FaAws className="text-orange-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
    Vite: <SiVite className="text-purple-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    Sanity: <SiSanity className="text-red-500" />,
    Appwrite: <SiAppwrite className="text-pink-600" />,
    Neon: <SiNeovim className="text-green-400" />,
    Clerk: <FaUserLock className="text-purple-400" />,
    Hono: <FaServer className="text-orange-400" />,
    tRPC: <SiTrpc className="text-blue-500" />,
    Drizzle: <SiDrizzle className="text-green-500" />,
  };

  return (
    icons[tech] || (
      <FaCube className="text-gray-400" title={tech} aria-label={tech} />
    )
  );
};

export const projects = [
  {
    id: 1,
    title: "Brainwave UI/UX Website",
    subtitle:
      "A visually striking and modern UI/UX showcase built with React and Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React.js", "Vite", "Tailwind CSS"],
    category: "Web App",
    industry: "UI/UX",
    year: 2024,
    clientType: "Internal Project",
    description:
      "Brainwave is a cutting-edge UI/UX web application built with React.js and Tailwind CSS. Designed to demonstrate the latest trends in modern web design, it features a sleek layout, interactive animations, and highly reusable components. This project serves as a design and development reference for building engaging, responsive user interfaces.",
    features: [
      "Polished multi-section layout including hero, features, roadmap, pricing, and footer",
      "Parallax animation effects triggered by scroll and cursor movement",
      "Fully responsive design for seamless performance on all devices",
      "Utilizes contemporary UI styles such as bento grids and glassmorphism",
      "Built with scalable and reusable component architecture for clean development",
    ],
    href: "https://brain-wave-lyart.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Nike Shoe Store Landing Page",
    subtitle:
      "A responsive and modern e-commerce landing page inspired by leading retail brands",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    category: "Web App",
    industry: "E-commerce",
    year: 2024,
    clientType: "Concept Project",
    description:
      "A sleek, mobile-first landing page designed for a fictional Nike-branded shoe store. Built with React, Tailwind CSS, and Vite, this project showcases a clean layout, conversion-focused sections, and responsive design. It serves as a strong front-end development example and a visual asset for e-commerce portfolios.",
    features: [
      "Eye-catching hero section with call-to-action",
      "Dynamic popular product listings",
      "Customer statistics and social proof elements",
      "Product benefits and feature highlights",
      "Testimonial carousel for trust-building",
      "Newsletter subscription section",
      "Fully responsive layout for all devices",
    ],
    href: "https://nike-one-vert.vercel.app",
  },
  {
    id: 3,
    title: "Vetra SaaS Website",
    subtitle:
      "High-performance React landing page for a creative video platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React.js", "Vite", "Tailwind CSS"],
    category: "Web App",
    industry: "SaaS",
    year: 2024,
    clientType: "Internal Project",
    description:
      "Vetra is a modern SaaS landing page for a content creation platform that simplifies video editing workflows. Built with React.js and Tailwind CSS, the site features a sleek, responsive UI/UX, smooth animations, and high performance. It serves as a polished reference site for SaaS product teams and front-end developers.",
    features: [
      "Complete multi-section layout: Hero, Features, Pricing (monthly/yearly), Testimonials, FAQ",
      "Smooth transitions and micro-interactions using CSS animations",
      "Custom visual styling with layered gradients and pseudo-elements",
      "Responsive design optimized for all screen sizes",
      "Fast loading performance and clean codebase",
      "Pixel-perfect layout and mobile-first architecture",
    ],
    href: "https://vetra-rose.vercel.app",
  },
  {
    id: 4,
    title: "Startup Pitch Platform",
    subtitle:
      "A modern Next.js 15 platform for submitting and browsing startup ideas",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: [
      "Next.js",
      "React.js",
      "Sanity",
      "Tailwind CSS",
      "TypeScript",
    ],
    category: "Web App",
    industry: "Startup / Community",
    year: 2024,
    clientType: "Tutorial Project",
    description:
      "An interactive platform built with the latest web technologies where entrepreneurs can submit and explore startup ideas. Designed with a minimalist UI and powered by Sanity CMS, it provides a clean and intuitive user experience. Created as part of a hands-on tutorial to teach beginners how to build real-world full-stack applications using modern tools.",
    features: [
      "Live content feed powered by Sanity Content API to display the latest pitches",
      "GitHub authentication for quick and secure user login",
      "Startup submission form including title, category, media links, and description",
      "Detailed pitch view pages with multimedia support",
      "Filtering and search functionality for browsing pitches",
      "Personal profile page displaying all submitted ideas",
      "Editor Picks: Admins can feature standout pitches via Sanity Studio",
      "Built-in view counter to track idea popularity",
      "Clean, minimal UI built with TailwindCSS and ShadCN components",
      "Latest React 19 and Next.js 15 features with scalable architecture",
    ],
    href: "https://yc-directory-seven-sage.vercel.app",
  },
  {
    id: 5,
    title: "FileFlow – Cloud Storage & Sharing Platform",
    subtitle:
      "A sleek file storage and sharing solution built with Appwrite and Next.js 15",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: [
      "React.js",
      "Next.js",
      "Appwrite",
      "Tailwind CSS",
      "TypeScript",
    ],
    category: "Web App",
    industry: "Cloud Storage",
    year: 2024,
    clientType: "Internal Project",
    description:
      "FileFlow is a modern web-based platform for managing and sharing files with ease. Built using Next.js 15 and Appwrite, it features seamless file uploads, user authentication, intuitive organization, and real-time dashboard insights. Designed with a minimalist UI, it ensures fast, secure, and responsive file management for all users.",
    features: [
      "Secure authentication using Appwrite for signup, login, and logout",
      "Support for uploading documents, images, videos, and audio files",
      "Intuitive file viewer with rename, delete, and open-in-tab capabilities",
      "Download functionality for easy local access to stored files",
      "Built-in sharing tools for collaborative file access",
      "Interactive dashboard displaying storage stats and recent activity",
      "Full-text global search to locate files instantly",
      "Custom sorting by name, date, or file size",
      "Minimalist and responsive design across all devices",
    ],
    href: "https://store-it-lime-one.vercel.app/",
    featured: true,
  },
  {
    id: 6,
    title: "Cardora – Trello Clone",
    subtitle: "A modern, kanban-style task management application",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon",
      "Clerk",
    ],
    category: "Web App",
    industry: "Productivity",
    year: 2024,
    clientType: "Personal Project",
    description:
      "Cardora is a powerful kanban board application inspired by Trello, designed for seamless task and project management. Built with modern web technologies like Next.js and Prisma, it offers real-time drag-and-drop interactions, authentication with Clerk, and efficient data handling via Neon database. Ideal for teams and individuals looking to manage workflows intuitively.",
    features: [
      "User authentication and session management via Clerk",
      "Create and manage multiple boards, columns, and cards",
      "Drag-and-drop reordering for cards and columns (kanban-style)",
      "Persistent backend using Prisma ORM and Neon database",
      "Fully responsive interface using Tailwind CSS",
      "Real-time updates and clean UI interactions using modern React hooks",
      "Optimized performance using Next.js App Router architecture",
    ],
    href: "https://cardora.vercel.app/",
  },
  {
    id: 7,
    title: "TaskNexus – Jira Clone",
    subtitle: "Agile project management platform for teams and enterprises",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "Appwrite",
    ],
    category: "Web App",
    industry: "Productivity",
    year: 2024,
    clientType: "Internal Tool",
    description:
      "TaskNexus is a Jira-inspired project management tool that empowers teams to plan, track, and release software more efficiently. Built using Next.js and styled with Tailwind CSS, the platform leverages Appwrite for backend functionality and Hono for serverless routing and API logic. With features like issue tracking, sprint planning, user assignment, and real-time updates, TaskNexus is ideal for agile development environments.",
    features: [
      "User authentication and role-based access powered by Appwrite",
      "Create and manage multiple projects, issues, epics, and sprints",
      "Drag-and-drop kanban board with dynamic column and status support",
      "Collaborator and assignee features for issue tracking",
      "Sprint planning and backlogs with start/end date configuration",
      "Real-time updates using efficient API routes via Hono",
      "Clean, responsive UI optimized with Tailwind CSS and component architecture",
    ],
    href: "https://task-nexus-tau.vercel.app/",
    featured: true,
  },
  {
    id: 8,
    title: "VibeTube – YouTube Clone",
    subtitle:
      "A high-performance video sharing platform with modern tech stack",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle",
      "Neon",
      "tRPC",
      "Clerk",
    ],
    category: "Web App",
    industry: "Media & Entertainment",
    year: 2024,
    clientType: "Startup",
    description:
      "VibeTube is a full-featured YouTube-inspired video platform built using the latest technologies including Next.js, Drizzle ORM, and tRPC. It supports seamless video streaming, user authentication, and modern UI components. This project emphasizes scalable architecture, real-time updates, and a user-friendly experience for creators and viewers alike.",
    features: [
      "User authentication and profile management with Clerk",
      "Video upload, streaming, and preview with responsive layout",
      "Browse, search, and filter videos by category and popularity",
      "Like, comment, and subscribe functionality",
      "Built using type-safe APIs with tRPC and Drizzle ORM for data handling",
      "Database powered by Neon for scalable Postgres integration",
      "Minimalist and intuitive UI styled with Tailwind CSS",
      "High performance and SEO-optimized with Next.js 14+ App Router",
    ],
    href: "https://vibe-tube-alpha.vercel.app/",
    featured: true,
  },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Projects Delivered",
    value: "120+",
  },
  {
    id: "stats-2",
    title: "Clients Worldwide",
    value: "45+",
  },
  {
    id: "stats-3",
    title: "Tech Stack Expertise",
    value: "30+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const CATEGORY_OPTIONS = ["Web App", "Mobile App", "Internal Tool"];

export const TECHNOLOGY_OPTIONS = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Appwrite",
  "Sanity",
  "tRPC",
  "Prisma",
  "Vite",
  "Neon",
  "Drizzle",
  "Hono",
  "Flutter",
  "Node.js",
  "Python",
  "GraphQL",
];

export const INDUSTRY_OPTIONS = [
  "E-commerce",
  "Finance",
  "Healthcare",
  "Social",
  "Data Analytics",
  "SaaS",
  "Productivity",
  "UI/UX",
  "Cloud Storage",
  "Media & Entertainment",
  "Startup / Community",
];

export const FEATURED_OPTIONS = ["Featured Only", "Non-Featured"];
