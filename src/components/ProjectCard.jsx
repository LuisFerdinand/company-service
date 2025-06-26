import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { getTechIcon } from '../assets/projectsData';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onClick(index)}
        >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                            <Maximize2 size={24} className="text-white" />
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="text-white font-semibold text-lg mb-2 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {project.subtitle}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                                <div 
                                    key={i} 
                                    className="relative group/tech text-xs bg-gray-500/10 px-2 py-1 rounded flex items-center justify-center"
                                    title={tech}
                                >
                                    <div className="w-4 h-4 flex items-center justify-center">
                                        {getTechIcon(tech)}
                                    </div>
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                                        {tech}
                                    </div>
                                </div>
                            ))}
                            {project.technologies.length > 3 && (
                                <span className="text-xs bg-gray-600/50 text-gray-300 px-2 py-1 rounded">
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </div>

                        <span className="text-blue-400 text-[12px] font-medium">
                            View Details →
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;