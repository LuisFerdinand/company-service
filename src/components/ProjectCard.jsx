import { motion } from "framer-motion";
import { getTechIcon } from "../assets/projectsData";
import { FaPaperPlane } from "react-icons/fa6";

const projectVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const ProjectCard = ({ title, subtitle, image, technologies, href }) => {
    return (
        <motion.div
            variants={projectVariant}
            className="bg-deep-blue/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden hover:shadow-blue/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full border-2 border-blue/30 hover:border-blue/60 group h-full"
        >
            <a href={href} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
                {/* Project Image - Reduced height for wider appearance */}
                <div className="relative h-[15rem] sm:h-60 md:h-48 overflow-hidden flex-shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full p-3 rounded-3xl object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/20 to-transparent"></div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Project Content - Reduced padding for more compact layout */}
                <div className="p-2 sm:p-3 flex-grow flex flex-col">
                    {/* Highlighted Title */}
                    <div className="mb-1 sm:mb-2">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-blue transition-colors duration-300 bg-gradient-to-r from-white to-blue bg-clip-text text-transparent group-hover:from-blue group-hover:to-white">
                            {title}
                        </h3>
                        <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-gradient-to-r from-blue to-transparent rounded-full"></div>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 leading-relaxed flex-grow">
                        {subtitle}
                    </p>

                    <div className="flex justify-between mt-auto">
                        {/* Technologies with Icons Only and Tooltips - Smaller icons */}
                        <div className="flex items-center">
                            {technologies.slice(0, 8).map((tech, index) => (
                                <div
                                    key={index}
                                    className={`relative group/tech ${index !== 0 ? '-ml-2 sm:-ml-2.5' : ''}`}
                                    title={tech}
                                >
                                    <div className="flex items-center justify-center bg-opaque-black backdrop-blur-sm w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-blue/20 hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 cursor-pointer">
                                        <span className="text-xs sm:text-sm">
                                            {getTechIcon(tech)}
                                        </span>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                                        {tech}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
                                    </div>
                                </div>
                            ))}

                            {technologies.length > 8 && (
                                <div className="-ml-2 sm:-ml-2.5 flex items-center justify-center bg-opaque-black backdrop-blur-sm w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg border border-blue/20 z-10">
                                    <span className="text-grey text-xs font-medium">
                                        +{technologies.length - 8}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-center gap-1">
                            <p className="text-sm text-gray-400">See Live</p>
                            <FaPaperPlane className="text-gray-400 w-3 h-3" />
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default ProjectCard;