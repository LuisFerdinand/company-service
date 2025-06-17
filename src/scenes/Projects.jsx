import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { getAllProjects, getTechIcon } from "../assets/projectsData";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

// Floating elements animation variants
const floatingVariants = {
    animate: {
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const floatingVariants2 = {
    animate: {
        y: [20, -20, 20],
        x: [10, -10, 10],
        rotate: [360, 180, 0],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const floatingVariants3 = {
    animate: {
        y: [-15, 15, -15],
        x: [-5, 5, -5],
        scale: [1, 1.1, 1],
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Project = ({ title, subtitle, image, technologies, href }) => {
    return (
        <motion.div
            variants={projectVariant}
            className="bg-deep-blue/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden hover:shadow-blue/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full mx-auto border-2 border-blue/30 hover:border-blue/60"
        >
            <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/20 to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Project Content */}
                <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-playfair font-semibold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue transition-colors duration-300">
                        {title}
                    </h3>
                    
                    <p className="text-grey text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                        {subtitle}
                    </p>
                    
                    {/* Technologies with Icons */}
                    {technologies && (
                        <div className="flex flex-wrap gap-2">
                            {technologies.slice(0, 4).map((tech, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-1 sm:gap-2 bg-opaque-black backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-blue/20 hover:border-blue/50 transition-colors duration-300"
                                    title={tech}
                                >
                                    <span className="text-sm sm:text-lg">
                                        {getTechIcon(tech)}
                                    </span>
                                    <span className="text-grey text-xs font-medium hidden sm:inline">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                            {technologies.length > 4 && (
                                <div className="flex items-center justify-center bg-opaque-black backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-blue/20">
                                    <span className="text-grey text-xs font-medium">
                                        +{technologies.length - 4}
                                    </span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </a>
        </motion.div>
    );
};

const Projects = () => {
    // Get all projects data from the assets file
    const projects = getAllProjects();

    return (
        <section id="projects" className="pt-32 sm:pt-48 pb-32 sm:pb-48 bg-gradient-to-b from-deep-blue via-deep-blue to-deep-blue/95 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>
            
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating Circles */}
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue/10 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants2}
                    animate="animate"
                    className="absolute top-40 right-20 w-12 h-12 sm:w-16 sm:h-16 bg-blue/15 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants3}
                    animate="animate"
                    className="absolute bottom-32 left-20 w-20 h-20 sm:w-24 sm:h-24 bg-blue/8 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute bottom-20 right-10 w-14 h-14 sm:w-18 sm:h-18 bg-blue/12 rounded-full blur-sm"
                />
                
                {/* Floating Geometric Shapes */}
                <motion.div
                    variants={floatingVariants2}
                    animate="animate"
                    className="absolute top-60 left-1/4 w-8 h-8 sm:w-10 sm:h-10 bg-blue/10 transform rotate-45 blur-sm"
                />
                <motion.div
                    variants={floatingVariants3}
                    animate="animate"
                    className="absolute top-80 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-blue/15 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute bottom-60 left-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-blue/8 transform rotate-12 blur-sm"
                />
                
                {/* Additional floating elements for larger screens */}
                <motion.div
                    variants={floatingVariants2}
                    animate="animate"
                    className="hidden lg:block absolute top-1/4 left-1/2 w-16 h-16 bg-blue/6 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants3}
                    animate="animate"
                    className="hidden lg:block absolute bottom-1/4 right-1/3 w-14 h-14 bg-blue/10 transform rotate-45 blur-sm"
                />
            </div>
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="w-full sm:w-5/6 lg:w-2/3 mx-auto text-center px-4 sm:px-6 relative z-10"
            >
                <div>
                    <p className="font-playfair font-semibold text-2xl sm:text-4xl mb-5 text-white">
                        OUR <span className="text-blue">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

                <p className="mt-6 sm:mt-10 mb-12 sm:mb-16 text-grey max-w-2xl mx-auto text-sm sm:text-base">
                    Diverse projects showcasing modern web development and creative solutions.
                </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {projects.map((project, index) => (
                        <Project 
                            key={project.id}
                            title={project.title}
                            subtitle={project.subtitle}
                            image={project.image}
                            technologies={project.technologies}
                            href={project.href || `#project-${project.id}`}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="text-center mt-12 sm:mt-16 relative z-10 px-4"
            >
                <p className="text-grey mb-6 text-sm sm:text-base">
                    Interested in working together?
                </p>
                <a 
                    href="#contact" 
                    className="inline-block bg-gradient-rainbow text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue/25 text-sm sm:text-base"
                >
                    Let's Connect
                </a>
            </motion.div>
        </section>
    );
};

export default Projects;