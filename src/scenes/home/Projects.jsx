import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "../../components/ProjectCard"
import ProjectCardDetail from "../../components/ProjectCardDetail"
import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Mock project data with Indonesian content
const mockProjects = [
  {
    id: 1,
    title: "Platform E-Commerce",
    subtitle: "Solusi e-commerce modern dan responsif dengan fitur canggih",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "Membangun platform e-commerce komprehensif dengan autentikasi pengguna, pemrosesan pembayaran, manajemen inventori, dan dashboard admin. Fitur termasuk notifikasi real-time, pencarian canggih, dan desain responsif mobile.",
    href: "#",
  },
  {
    id: 2,
    title: "Dashboard AI",
    subtitle: "Dashboard analitik interaktif yang didukung machine learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    description:
      "Mengembangkan dashboard analitik bertenaga AI yang memproses dataset besar dan memberikan wawasan prediktif. Termasuk visualisasi data, model machine learning, dan kemampuan pemrosesan data real-time.",
    href: "#",
  },
  {
    id: 3,
    title: "Aplikasi Mobile Banking",
    subtitle: "Solusi mobile banking yang aman dan intuitif",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
    description:
      "Menciptakan aplikasi mobile banking yang aman dengan autentikasi biometrik, riwayat transaksi, pembayaran tagihan, dan pelacakan anggaran. Mengimplementasikan enkripsi end-to-end dan sistem deteksi penipuan.",
    href: "#",
  },
  {
    id: 4,
    title: "Platform Media Sosial",
    subtitle: "Pengalaman jejaring sosial generasi berikutnya",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: ["Next.js", "GraphQL", "Redis", "AWS"],
    description:
      "Membangun platform media sosial yang dapat diskalakan dengan pesan real-time, berbagi konten, dan kontrol privasi canggih. Fitur termasuk moderasi konten bertenaga AI dan feed yang dipersonalisasi.",
    href: "#",
  },
  {
    id: 5,
    title: "Sistem Manajemen Sekolah",
    subtitle: "Platform pendidikan digital terintegrasi",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
    description:
      "Sistem manajemen sekolah lengkap dengan portal siswa, guru, dan orang tua. Fitur absensi digital, nilai online, jadwal pelajaran, dan komunikasi real-time.",
    href: "#",
  },
  {
    id: 6,
    title: "Aplikasi Delivery Food",
    subtitle: "Platform pemesanan makanan dengan tracking real-time",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    description:
      "Aplikasi delivery makanan dengan fitur pencarian restoran, pemesanan online, tracking pengiriman real-time, dan sistem rating. Terintegrasi dengan payment gateway dan notifikasi push.",
    href: "#",
  },
]

const LineGradient = ({ width = "w-full" }) => <div className={`h-0.5 ${width} bg-gradient-to-r from-blue to-purple`} />

const Projects = () => {
  const navigate = useNavigate()

  const handleViewAllProjects = () => {
    navigate("/projects")
  }

  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  const handleProjectClick = (index) => {
    setSelectedProject(index)
    setIsDetailOpen(true)
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grey mb-1">
            Proyek <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">Unggulan</span>
          </h2>
          <LineGradient width="w-16 sm:w-24" />
          <p className="text-gray-400 text-[12px] xs:text-sm sm:text-base max-w-2xl mx-auto mt-4">
            Jelajahi karya terbaru kami melalui pengalaman presentasi yang imersif
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {mockProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={handleProjectClick} />
          ))}
        </div>

        {/* Launch Presentation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleViewAllProjects}
            className="bg-gradient-to-r from-blue to-purple hover:scale-105 text-grey px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-blue/25 transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <ExternalLink size={24} />
            <span>Lihat Semua Proyek</span>
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectCardDetail
        projects={mockProjects}
        initialSlide={selectedProject}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </section>
  )
}

export default Projects
