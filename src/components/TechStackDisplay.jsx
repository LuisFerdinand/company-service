"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaPhp, FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa"
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiVuedotjs,
    SiAngular,
    SiDjango,
    SiLaravel,
    SiGraphql,
    SiRedis,
} from "react-icons/si"
import { Code, Database } from "lucide-react"

const Tooltip = ({ children, content, show }) => (
    <div className="relative">
        {children}
        {show && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10 border border-gray-700"
            >
                {content}
                <div className="absolute top-full transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </motion.div>
        )}
    </div>
)

const TechStackDisplay = () => {
    const [hoveredTech, setHoveredTech] = useState(null)

    const techStackContent = {
        description: "Kami menggunakan teknologi web terkini untuk memastikan website Anda cepat, aman, dan modern.",
        frontend: [
            { icon: <FaReact className="text-blue text-lg" />, name: "React" },
            { icon: <SiNextdotjs className="text-white text-lg" />, name: "Next.js" },
            { icon: <SiTailwindcss className="text-cyan-400 text-lg" />, name: "Tailwind" },
            { icon: <SiTypescript className="text-blue text-lg" />, name: "TypeScript" },
            { icon: <FaJsSquare className="text-yellow text-lg" />, name: "JavaScript" },
            { icon: <FaHtml5 className="text-orange text-lg" />, name: "HTML5" },
            { icon: <FaCss3 className="text-blue text-lg" />, name: "CSS3" },
            { icon: <SiVuedotjs className="text-green text-lg" />, name: "Vue.js" },
            { icon: <SiAngular className="text-red text-lg" />, name: "Angular" },
        ],
        backend: [
            { icon: <FaNodeJs className="text-green text-lg" />, name: "Node.js" },
            { icon: <SiMongodb className="text-green text-lg" />, name: "MongoDB" },
            { icon: <SiPostgresql className="text-blue text-lg" />, name: "PostgreSQL" },
            { icon: <SiMysql className="text-orange text-lg" />, name: "MySQL" },
            { icon: <FaPython className="text-blue text-lg" />, name: "Python" },
            { icon: <SiDjango className="text-green text-lg" />, name: "Django" },
            { icon: <FaPhp className="text-purple text-lg" />, name: "PHP" },
            { icon: <SiLaravel className="text-red text-lg" />, name: "Laravel" },
            { icon: <SiRedis className="text-red text-lg" />, name: "Redis" },
            { icon: <SiGraphql className="text-pink-400 text-lg" />, name: "GraphQL" },
        ],
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
        >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center lg:text-left">Teknologi Modern</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 text-center lg:text-left leading-relaxed">
                {techStackContent.description}
            </p>

            <div className="space-y-6">
                {/* Frontend Technologies */}
                <div className="bg-gradient-to-r from-blue/5 to-purple/5 rounded-lg p-4 border border-blue/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center">
                            <Code className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-white">Frontend Development</h4>
                            <p className="text-xs text-gray-400">User Interface & Experience</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2">
                        {techStackContent.frontend.map((tool, index) => (
                            <Tooltip key={`frontend-${index}`} content={tool.name} show={hoveredTech === `frontend-${index}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    onMouseEnter={() => setHoveredTech(`frontend-${index}`)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                    className="group relative bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10 hover:border-blue/30 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            {tool.icon}
                                        </div>
                                    </div>
                                    <div className="absolute inset-1 bg-gradient-to-r from-blue/10 to-purple/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            </Tooltip>
                        ))}
                    </div>
                </div>

                {/* Backend Technologies */}
                <div className="bg-gradient-to-r from-green/5 to-teal/5 rounded-lg p-4 border border-green/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green to-teal rounded-lg flex items-center justify-center">
                            <Database className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-white">Backend Development</h4>
                            <p className="text-xs text-gray-400">Server & Database Management</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2">
                        {techStackContent.backend.map((tool, index) => (
                            <Tooltip key={`backend-${index}`} content={tool.name} show={hoveredTech === `backend-${index}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    onMouseEnter={() => setHoveredTech(`backend-${index}`)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                    className="group relative bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10 hover:border-green-400/30 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            {tool.icon}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-teal/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TechStackDisplay