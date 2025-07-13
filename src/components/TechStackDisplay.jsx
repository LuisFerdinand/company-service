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
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10 border border-gray-700"
            >
                {content}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </motion.div>
        )}
    </div>
)

const TechStackDisplay = () => {
    const [hoveredTech, setHoveredTech] = useState(null)

    const techStackContent = {
        description: "Kami menggunakan teknologi web terkini untuk memastikan website Anda cepat, aman, dan modern.",
        frontend: [
            { icon: <FaReact className="text-blue text-xl" />, name: "React" },
            { icon: <SiNextdotjs className="text-white text-xl" />, name: "Next.js" },
            { icon: <SiTailwindcss className="text-cyan text-xl" />, name: "Tailwind" },
            { icon: <SiTypescript className="text-blue text-xl" />, name: "TypeScript" },
            { icon: <FaJsSquare className="text-yellow text-xl" />, name: "JavaScript" },
            { icon: <FaHtml5 className="text-orange text-xl" />, name: "HTML5" },
            { icon: <FaCss3 className="text-blue text-xl" />, name: "CSS3" },
            { icon: <SiVuedotjs className="text-green text-xl" />, name: "Vue.js" },
            { icon: <SiAngular className="text-red text-xl" />, name: "Angular" },
        ],
        backend: [
            { icon: <FaNodeJs className="text-green text-xl" />, name: "Node.js" },
            { icon: <SiMongodb className="text-green text-xl" />, name: "MongoDB" },
            { icon: <SiPostgresql className="text-blue text-xl" />, name: "PostgreSQL" },
            { icon: <SiMysql className="text-orange text-xl" />, name: "MySQL" },
            { icon: <FaPython className="text-blue text-xl" />, name: "Python" },
            { icon: <SiDjango className="text-green text-xl" />, name: "Django" },
            { icon: <FaPhp className="text-purple text-xl" />, name: "PHP" },
            { icon: <SiLaravel className="text-red text-xl" />, name: "Laravel" },
            { icon: <SiRedis className="text-red text-xl" />, name: "Redis" },
            { icon: <SiGraphql className="text-pink-400 text-xl" />, name: "GraphQL" },
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

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {techStackContent.frontend.map((tool, index) => (
                            <Tooltip key={`frontend-${index}`} content={tool.name} show={hoveredTech === `frontend-${index}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                    }}
                                    onMouseEnter={() => setHoveredTech(`frontend-${index}`)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                    className="group relative bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-blue/30 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-10 h-10 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {tool.icon}
                                        </div>
                                        <span className="text-xs font-medium text-white group-hover:text-blue transition-colors">
                                            {tool.name}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {techStackContent.backend.map((tool, index) => (
                            <Tooltip key={`backend-${index}`} content={tool.name} show={hoveredTech === `backend-${index}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                    }}
                                    onMouseEnter={() => setHoveredTech(`backend-${index}`)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                    className="group relative bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-green/30 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-10 h-10 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {tool.icon}
                                        </div>
                                        <span className="text-xs font-medium text-white group-hover:text-green transition-colors">
                                            {tool.name}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-teal/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            </Tooltip>
                        ))}
                    </div>
                </div>

                {/* Tech Stats */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-blue text-xl font-bold">15+</div>
                        <div className="text-xs text-gray-400">Teknologi</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-green text-xl font-bold">99%</div>
                        <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-purple text-xl font-bold">24/7</div>
                        <div className="text-xs text-gray-400">Support</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-yellow text-xl font-bold">Fast</div>
                        <div className="text-xs text-gray-400">Delivery</div>
                    </div>
                </div> */}
            </div>
        </motion.div>
    )
}

export default TechStackDisplay
