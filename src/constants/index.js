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

// Import all project thumbnail images
import project1 from "../assets/projects-thumbnail/1.png";
import project2 from "../assets/projects-thumbnail/2.png";
import project3 from "../assets/projects-thumbnail/3.png";
import project4 from "../assets/projects-thumbnail/4.png";
import project5 from "../assets/projects-thumbnail/5.png";
import project6 from "../assets/projects-thumbnail/6.png";
import project7 from "../assets/projects-thumbnail/7.png";
import project8 from "../assets/projects-thumbnail/8.png";

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
    title: "Situs Web UI/UX Brainwave",
    subtitle:
      "Showcase UI/UX yang menawan dan modern dibangun dengan React dan Tailwind CSS",
    image: project1,
    technologies: ["React.js", "Vite", "Tailwind CSS"],
    category: "Aplikasi Web",
    industry: "UI/UX",
    year: 2024,
    clientType: "Proyek Internal",
    description:
      "Brainwave adalah aplikasi web UI/UX mutakhir yang dibangun dengan React.js dan Tailwind CSS. Dirancang untuk mendemonstrasikan tren terbaru dalam desain web modern, aplikasi ini menampilkan tata letak yang elegan, animasi interaktif, dan komponen yang sangat dapat digunakan kembali. Proyek ini berfungsi sebagai referensi desain dan pengembangan untuk membangun antarmuka pengguna yang menarik dan responsif.",
    features: [
      "Tata letak multi-bagian yang dipoles termasuk hero, fitur, roadmap, harga, dan footer",
      "Efek animasi parallax yang dipicu oleh scroll dan gerakan kursor",
      "Desain sepenuhnya responsif untuk performa yang mulus di semua perangkat",
      "Memanfaatkan gaya UI kontemporer seperti bento grid dan glassmorphism",
      "Dibangun dengan arsitektur komponen yang skalabel dan dapat digunakan kembali untuk pengembangan yang bersih",
    ],
    href: "https://brain-wave-lyart.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Landing Page Toko Sepatu Nike",
    subtitle:
      "Landing page e-commerce yang responsif dan modern terinspirasi dari brand retail terkemuka",
    image: project2,
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    category: "Aplikasi Web",
    industry: "E-commerce",
    year: 2024,
    clientType: "Proyek Konsep",
    description:
      "Landing page yang elegan dan mobile-first yang dirancang untuk toko sepatu bermerek Nike fiktif. Dibangun dengan React, Tailwind CSS, dan Vite, proyek ini menampilkan tata letak yang bersih, bagian yang berfokus pada konversi, dan desain responsif. Proyek ini berfungsi sebagai contoh pengembangan front-end yang kuat dan aset visual untuk portofolio e-commerce.",
    features: [
      "Bagian hero yang menarik perhatian dengan call-to-action",
      "Daftar produk populer yang dinamis",
      "Statistik pelanggan dan elemen bukti sosial",
      "Manfaat produk dan sorotan fitur",
      "Carousel testimoni untuk membangun kepercayaan",
      "Bagian berlangganan newsletter",
      "Tata letak sepenuhnya responsif untuk semua perangkat",
    ],
    href: "https://nike-one-vert.vercel.app",
  },
  {
    id: 3,
    title: "Situs Web SaaS Vetra",
    subtitle:
      "Landing page React berperforma tinggi untuk platform video kreatif",
    image: project3,
    technologies: ["React.js", "Vite", "Tailwind CSS"],
    category: "Aplikasi Web",
    industry: "SaaS",
    year: 2024,
    clientType: "Proyek Internal",
    description:
      "Vetra adalah landing page SaaS modern untuk platform pembuatan konten yang menyederhanakan alur kerja pengeditan video. Dibangun dengan React.js dan Tailwind CSS, situs ini menampilkan UI/UX yang elegan dan responsif, animasi yang halus, dan performa tinggi. Situs ini berfungsi sebagai situs referensi yang dipoles untuk tim produk SaaS dan pengembang front-end.",
    features: [
      "Tata letak multi-bagian lengkap: Hero, Fitur, Harga (bulanan/tahunan), Testimoni, FAQ",
      "Transisi halus dan mikro-interaksi menggunakan animasi CSS",
      "Gaya visual kustom dengan gradien berlapis dan pseudo-element",
      "Desain responsif yang dioptimalkan untuk semua ukuran layar",
      "Performa loading cepat dan codebase yang bersih",
      "Tata letak pixel-perfect dan arsitektur mobile-first",
    ],
    href: "https://vetra-rose.vercel.app",
  },
  {
    id: 4,
    title: "Platform Pitch Startup",
    subtitle:
      "Platform Next.js 15 modern untuk mengirimkan dan menjelajahi ide startup",
    image: project4,
    technologies: [
      "Next.js",
      "React.js",
      "Sanity",
      "Tailwind CSS",
      "TypeScript",
    ],
    category: "Aplikasi Web",
    industry: "Startup / Komunitas",
    year: 2024,
    clientType: "Proyek Tutorial",
    description:
      "Platform interaktif yang dibangun dengan teknologi web terbaru di mana pengusaha dapat mengirimkan dan menjelajahi ide startup. Dirancang dengan UI minimalis dan didukung oleh Sanity CMS, platform ini memberikan pengalaman pengguna yang bersih dan intuitif. Dibuat sebagai bagian dari tutorial praktik langsung untuk mengajarkan pemula cara membangun aplikasi full-stack dunia nyata menggunakan alat modern.",
    features: [
      "Feed konten langsung didukung oleh Sanity Content API untuk menampilkan pitch terbaru",
      "Autentikasi GitHub untuk login pengguna yang cepat dan aman",
      "Form pengiriman startup termasuk judul, kategori, tautan media, dan deskripsi",
      "Halaman tampilan pitch detail dengan dukungan multimedia",
      "Fungsionalitas filtering dan pencarian untuk menjelajahi pitch",
      "Halaman profil pribadi yang menampilkan semua ide yang dikirimkan",
      "Editor Picks: Admin dapat menampilkan pitch unggulan via Sanity Studio",
      "Penghitung tampilan built-in untuk melacak popularitas ide",
      "UI yang bersih dan minimal dibangun dengan TailwindCSS dan komponen ShadCN",
      "Fitur React 19 dan Next.js 15 terbaru dengan arsitektur yang skalabel",
    ],
    href: "https://yc-directory-seven-sage.vercel.app",
  },
  {
    id: 5,
    title: "FileFlow – Platform Penyimpanan & Berbagi Cloud",
    subtitle:
      "Solusi penyimpanan dan berbagi file yang elegan dibangun dengan Appwrite dan Next.js 15",
    image: project5,
    technologies: [
      "React.js",
      "Next.js",
      "Appwrite",
      "Tailwind CSS",
      "TypeScript",
    ],
    category: "Aplikasi Web",
    industry: "Penyimpanan Cloud",
    year: 2024,
    clientType: "Proyek Internal",
    description:
      "FileFlow adalah platform berbasis web modern untuk mengelola dan berbagi file dengan mudah. Dibangun menggunakan Next.js 15 dan Appwrite, platform ini menampilkan upload file yang mulus, autentikasi pengguna, organisasi yang intuitif, dan wawasan dashboard real-time. Dirancang dengan UI minimalis, platform ini memastikan manajemen file yang cepat, aman, dan responsif untuk semua pengguna.",
    features: [
      "Autentikasi aman menggunakan Appwrite untuk signup, login, dan logout",
      "Dukungan untuk upload dokumen, gambar, video, dan file audio",
      "Penampil file intuitif dengan kemampuan rename, hapus, dan buka-di-tab",
      "Fungsionalitas download untuk akses lokal yang mudah ke file tersimpan",
      "Alat berbagi built-in untuk akses file kolaboratif",
      "Dashboard interaktif yang menampilkan statistik penyimpanan dan aktivitas terbaru",
      "Pencarian global full-text untuk menemukan file secara instan",
      "Pengurutan kustom berdasarkan nama, tanggal, atau ukuran file",
      "Desain minimalis dan responsif di semua perangkat",
    ],
    href: "https://store-it-lime-one.vercel.app/",
    featured: true,
  },
  {
    id: 6,
    title: "Cardora – Klon Trello",
    subtitle: "Aplikasi manajemen tugas bergaya kanban yang modern",
    image: project6,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon",
      "Clerk",
    ],
    category: "Aplikasi Web",
    industry: "Produktivitas",
    year: 2024,
    clientType: "Proyek Pribadi",
    description:
      "Cardora adalah aplikasi papan kanban yang powerful terinspirasi dari Trello, dirancang untuk manajemen tugas dan proyek yang mulus. Dibangun dengan teknologi web modern seperti Next.js dan Prisma, aplikasi ini menawarkan interaksi drag-and-drop real-time, autentikasi dengan Clerk, dan penanganan data yang efisien melalui database Neon. Ideal untuk tim dan individu yang ingin mengelola alur kerja secara intuitif.",
    features: [
      "Autentikasi pengguna dan manajemen sesi melalui Clerk",
      "Membuat dan mengelola beberapa board, kolom, dan kartu",
      "Pengurutan ulang drag-and-drop untuk kartu dan kolom (gaya kanban)",
      "Backend persisten menggunakan Prisma ORM dan database Neon",
      "Antarmuka sepenuhnya responsif menggunakan Tailwind CSS",
      "Update real-time dan interaksi UI yang bersih menggunakan React hooks modern",
      "Performa dioptimalkan menggunakan arsitektur Next.js App Router",
    ],
    href: "https://cardora.vercel.app/",
  },
  {
    id: 7,
    title: "TaskNexus – Klon Jira",
    subtitle: "Platform manajemen proyek Agile untuk tim dan enterprise",
    image: project7,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "Appwrite",
    ],
    category: "Aplikasi Web",
    industry: "Produktivitas",
    year: 2024,
    clientType: "Alat Internal",
    description:
      "TaskNexus adalah alat manajemen proyek terinspirasi Jira yang memberdayakan tim untuk merencanakan, melacak, dan merilis perangkat lunak dengan lebih efisien. Dibangun menggunakan Next.js dan ditata dengan Tailwind CSS, platform ini memanfaatkan Appwrite untuk fungsionalitas backend dan Hono untuk routing serverless dan logika API. Dengan fitur seperti pelacakan issue, perencanaan sprint, penugasan pengguna, dan update real-time, TaskNexus ideal untuk lingkungan pengembangan agile.",
    features: [
      "Autentikasi pengguna dan akses berbasis peran didukung oleh Appwrite",
      "Membuat dan mengelola beberapa proyek, issue, epic, dan sprint",
      "Papan kanban drag-and-drop dengan dukungan kolom dan status dinamis",
      "Fitur kolaborator dan penerima tugas untuk pelacakan issue",
      "Perencanaan sprint dan backlog dengan konfigurasi tanggal mulai/berakhir",
      "Update real-time menggunakan rute API yang efisien melalui Hono",
      "UI yang bersih dan responsif dioptimalkan dengan Tailwind CSS dan arsitektur komponen",
    ],
    href: "https://task-nexus-tau.vercel.app/",
    featured: true,
  },
  {
    id: 8,
    title: "VibeTube – Klon YouTube",
    subtitle:
      "Platform berbagi video berperforma tinggi dengan tech stack modern",
    image: project8,
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
    category: "Aplikasi Web",
    industry: "Media & Hiburan",
    year: 2024,
    clientType: "Startup",
    description:
      "VibeTube adalah platform video berfitur lengkap terinspirasi YouTube yang dibangun menggunakan teknologi terbaru termasuk Next.js, Drizzle ORM, dan tRPC. Platform ini mendukung streaming video yang mulus, autentikasi pengguna, dan komponen UI modern. Proyek ini menekankan arsitektur yang skalabel, update real-time, dan pengalaman yang user-friendly untuk kreator dan penonton.",
    features: [
      "Autentikasi pengguna dan manajemen profil dengan Clerk",
      "Upload video, streaming, dan preview dengan tata letak responsif",
      "Jelajahi, cari, dan filter video berdasarkan kategori dan popularitas",
      "Fungsionalitas like, komentar, dan subscribe",
      "Dibangun menggunakan API type-safe dengan tRPC dan Drizzle ORM untuk penanganan data",
      "Database didukung oleh Neon untuk integrasi Postgres yang skalabel",
      "UI minimalis dan intuitif ditata dengan Tailwind CSS",
      "Performa tinggi dan dioptimalkan SEO dengan Next.js 14+ App Router",
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

export const stats = [
  {
    number: "50+",
    label: "Proyek Selesai",
  },
  {
    number: "3+",
    label: "Tahun Pengalaman",
  },
  {
    number: "24/7",
    label: "Dukungan",
  },
  {
    number: "99.9%",
    label: "Uptime",
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
