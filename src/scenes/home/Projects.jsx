import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "../../components/ProjectCard"
import ProjectCardDetail from "../../components/ProjectCardDetail"
import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { projects } from "../../constants";


// Mock project data with Indonesian content
const mockProjects = projects.slice(0, 4);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
