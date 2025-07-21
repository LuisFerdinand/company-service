import { useState } from "react"
import { motion } from "framer-motion"
import { projects as allProjects } from "../../constants"
import ProjectCard from "../../components/ProjectCard"
import FilterBar from "../../components/FilterBar"
import ProjectCardDetail from "../../components/ProjectCardDetail"
import { ExternalLink, Filter, Grid, List } from "lucide-react"

const Projects = () => {
  const [filters, setFilters] = useState({
    category: "",
    tech: "",
    industry: "",
  })
  const [visibleCount, setVisibleCount] = useState(6)
  const [viewMode, setViewMode] = useState("grid") // grid or list

  const filtered = allProjects.filter((project) => {
    const matchCategory = !filters.category || project.category === filters.category
    const matchTechnology = !filters.technology || project.technologies.includes(filters.technology)
    const matchIndustry = !filters.industry || project.industry === filters.industry
    const matchFeatured =
      filters.featured === "Featured Only"
        ? project.featured === true
        : filters.featured === "Non-Featured"
          ? project.featured !== true
          : true

    return matchCategory && matchTechnology && matchIndustry && matchFeatured
  })

  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  const handleProjectClick = (index) => {
    setSelectedProject(index)
    setIsDetailOpen(true)
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false)
  }

  const LineGradient = ({ width = "w-full" }) => (
    <div className={`h-0.5 ${width} bg-gradient-to-r from-blue to-purple`} />
  )

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue to-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-orange to-red rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Portfolio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple">Lengkap</span>
          </h2>
          <LineGradient width="w-24 mx-auto" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
            Jelajahi koleksi lengkap proyek kami dengan berbagai teknologi dan industri
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <FilterBar filters={filters} setFilters={setFilters} />
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 text-sm">
              Menampilkan {Math.min(visibleCount, filtered.length)} dari {filtered.length} proyek
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-blue text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-blue text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`grid gap-6 lg:gap-8 mb-12 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {filtered.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProjectCard project={project} index={index} onClick={handleProjectClick} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filtered.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-gradient-to-r from-blue to-purple hover:from-purple hover:to-red text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Muat Lebih Banyak
            </button>
          </motion.div>
        )}

        {/* No Results */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Tidak Ada Proyek Ditemukan</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Coba sesuaikan filter Anda atau reset untuk melihat semua proyek yang tersedia.
            </p>
            <button
              onClick={() =>
                setFilters({
                  category: "",
                  tech: "",
                  industry: "",
                  featured: "",
                })
              }
              className="bg-gradient-to-r from-blue to-purple text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Reset Filter
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectCardDetail
        projects={filtered}
        initialSlide={selectedProject}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </section>
  )
}

export default Projects
