"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Mock project data - same as your Projects component
const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "A modern, responsive e-commerce solution with advanced features",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "Built a comprehensive e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Features include real-time notifications, advanced search, and mobile-responsive design.",
    href: "#",
    duration: "3 months",
    team: "4 developers",
    year: "2024",
    challenges: "Implementing real-time inventory updates and handling high-traffic scenarios during flash sales.",
    solution:
      "Used Redis for caching and WebSocket connections for real-time updates. Implemented queue-based processing for order handling.",
    results:
      "Achieved 99.9% uptime, 40% increase in conversion rates, and successfully handled 10,000+ concurrent users.",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    title: "AI Dashboard",
    subtitle: "Interactive analytics dashboard powered by machine learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    description:
      "Developed an AI-powered analytics dashboard that processes large datasets and provides predictive insights. Includes data visualization, machine learning models, and real-time data processing capabilities.",
    href: "#",
    duration: "4 months",
    team: "6 developers",
    year: "2024",
    challenges: "Processing large datasets in real-time while maintaining responsive UI performance.",
    solution:
      "Implemented data streaming with Apache Kafka and used WebWorkers for heavy computations on the frontend.",
    results: "Reduced data processing time by 60% and improved prediction accuracy to 94%.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Mobile Banking App",
    subtitle: "Secure and intuitive mobile banking solution",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
    description:
      "Created a secure mobile banking application with biometric authentication, transaction history, bill payments, and budget tracking. Implemented end-to-end encryption and fraud detection systems.",
    href: "#",
    duration: "6 months",
    team: "8 developers",
    year: "2023",
    challenges: "Ensuring bank-level security while maintaining user-friendly experience across different devices.",
    solution:
      "Implemented multi-layer security with biometric authentication, device fingerprinting, and AI-based fraud detection.",
    results: "Achieved 99.99% security compliance, 4.8/5 user rating, and processed $10M+ in transactions safely.",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Social Media Platform",
    subtitle: "Next-generation social networking experience",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: ["Next.js", "GraphQL", "Redis", "AWS"],
    description:
      "Built a scalable social media platform with real-time messaging, content sharing, and advanced privacy controls. Features include AI-powered content moderation and personalized feeds.",
    href: "#",
    duration: "8 months",
    team: "12 developers",
    year: "2023",
    challenges: "Scaling to handle millions of users while maintaining real-time interactions and content quality.",
    solution: "Used microservices architecture with GraphQL federation and implemented AI-powered content moderation.",
    results: "Successfully scaled to 2M+ active users with 99.9% uptime and 95% user satisfaction rate.",
    gallery: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    ],
  },
]

const LineGradient = ({ width = "w-full" }) => <div className={`h-0.5 ${width} bg-gradient-to-r from-blue to-purple`} />

const ProjectsDetail = () => {
  const navigate = useNavigate()
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const handleBack = () => {
    navigate("/")
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % mockProjects.length)
    setCurrentImage(0)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + mockProjects.length) % mockProjects.length)
    setCurrentImage(0)
  }

  const project = mockProjects[currentProject]

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      {/* Header */}
      <div className="sticky top-0 bg-deep-blue/90 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">
                {currentProject + 1} of {mockProjects.length}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={prevProject}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  ←
                </button>
                <button
                  onClick={nextProject}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Header */}
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-4">{project.subtitle}</p>
              <LineGradient width="w-24" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue to-purple px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2">
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </button>
              <button className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center space-x-2">
                <Github size={20} />
                <span>View Code</span>
              </button>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="text-blue" size={24} />
                <span className="text-gray-400">Duration</span>
              </div>
              <p className="text-xl font-semibold">{project.duration}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="text-purple" size={24} />
                <span className="text-gray-400">Team Size</span>
              </div>
              <p className="text-xl font-semibold">{project.team}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-2">
                <Code className="text-yellow" size={24} />
                <span className="text-gray-400">Year</span>
              </div>
              <p className="text-xl font-semibold">{project.year}</p>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            <img
              src={project.gallery[currentImage] || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImage ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue/20 to-purple/20 border border-blue/30 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow">Challenges</h3>
              <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange">Solution</h3>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-green">Results</h3>
              <p className="text-gray-300 leading-relaxed">{project.results}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-teal">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue rounded-full"></div>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Real-time Updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span>Advanced Security</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Scalable Architecture</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-between items-center mt-16 pt-8 border-t border-white/10"
        >
          <button
            onClick={prevProject}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span>← Previous Project</span>
          </button>
          <button
            onClick={nextProject}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span>Next Project →</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsDetail
