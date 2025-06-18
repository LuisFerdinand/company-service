import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { getAllProjects, getTechIcon } from "../assets/projectsData";
import { useState, useEffect } from "react"; // Fixed: Added useEffect import

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, y: 30 },
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
            className="bg-deep-blue/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden hover:shadow-blue/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full border-2 border-blue/30 hover:border-blue/60 group"
        >
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {/* Project Image - Reduced height for wider appearance */}
                <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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

                    {/* Click to preview text */}
                    <div className="absolute bottom-1 left-1 right-1">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-xs font-medium text-center">
                                Click to Live Preview
                            </p>
                        </div>
                    </div>
                </div>

                {/* Project Content - Reduced padding for more compact layout */}
                <div className="p-2 sm:p-3">
                    {/* Highlighted Title */}
                    <div className="mb-1 sm:mb-2">
                        <h3 className="text-base sm:text-lg lg:text-xl font-playfair font-bold text-white mb-1 group-hover:text-blue transition-colors duration-300 bg-gradient-to-r from-white to-blue bg-clip-text text-transparent group-hover:from-blue group-hover:to-white">
                            {title}
                        </h3>
                        <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-gradient-to-r from-blue to-transparent rounded-full"></div>
                    </div>

                    <p className="text-grey text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 leading-relaxed">
                        {subtitle}
                    </p>

                    {/* Technologies with Icons Only and Tooltips - Smaller icons */}
                    {technologies && (
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {technologies.slice(0, 8).map((tech, index) => (
                                <div
                                    key={index}
                                    className="relative group/tech"
                                    title={tech}
                                >
                                    <div className="flex items-center justify-center bg-opaque-black backdrop-blur-sm w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg border border-blue/20 hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 cursor-pointer">
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
                                <div className="flex items-center justify-center bg-opaque-black backdrop-blur-sm w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg border border-blue/20">
                                    <span className="text-grey text-xs font-medium">
                                        +{technologies.length - 8}
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
    const [currentPage, setCurrentPage] = useState(0);

    // Dynamic projects per page based on screen size
    const getProjectsPerPage = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 4; // lg: 4 projects (2x2)
            if (window.innerWidth >= 640) return 2;  // sm: 2 projects (1x2)
            return 1; // mobile: 1 project
        }
        return 4; // default
    };

    // Line Gradient custom
    const LineGradient = ({ width = "w-full" }) => (
        <div className={`h-0.5 ${width} bg-gradient-to-r from-blue via-teal to-blue`} />
    );

    const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage());
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Handle window resize
    useEffect(() => { // Fixed: Changed from React.useEffect to useEffect
        const handleResize = () => {
            const newProjectsPerPage = getProjectsPerPage();
            if (newProjectsPerPage !== projectsPerPage) {
                setProjectsPerPage(newProjectsPerPage);
                setCurrentPage(0); // Reset to first page when layout changes
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [projectsPerPage]);

    // Get current projects to display
    const getCurrentProjects = () => {
        const startIndex = currentPage * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        return projects.slice(startIndex, endIndex);
    };

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToPage = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handlePortfolioClick = () => {
        // Future: Navigate to full portfolio page
        console.log('Navigate to full portfolio page');
        alert('Full portfolio page - Coming Soon!');
    };

    return (
        <section id="projects" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-deep-blue via-deep-blue to-deep-blue/95 relative overflow-hidden sm:min-h-screen flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                    }}
                ></div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating Circles */}
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-20 left-10 w-8 h-8 sm:w-12 sm:h-12 bg-blue/10 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants2}
                    animate="animate"
                    className="absolute top-40 right-20 w-6 h-6 sm:w-10 sm:h-10 bg-blue/15 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants3}
                    animate="animate"
                    className="absolute bottom-32 left-20 w-10 h-10 sm:w-16 sm:h-16 bg-blue/8 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute bottom-20 right-10 w-8 h-8 sm:w-12 sm:h-12 bg-blue/12 rounded-full blur-sm"
                />

                {/* Floating Geometric Shapes */}
                <motion.div
                    variants={floatingVariants2}
                    animate="animate"
                    className="absolute top-60 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-blue/10 transform rotate-45 blur-sm"
                />
                <motion.div
                    variants={floatingVariants3}
                    animate="animate"
                    className="absolute top-80 right-1/4 w-3 h-3 sm:w-5 sm:h-5 bg-blue/15 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute bottom-60 left-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-blue/8 transform rotate-12 blur-sm"
                />

                {/* Additional floating elements for larger screens */}
                <motion.div
                    variants={floatingVariants2}
                    animate="animate"
                    className="hidden lg:block absolute top-1/4 left-1/2 w-10 h-10 bg-blue/6 rounded-full blur-sm"
                />
                <motion.div
                    variants={floatingVariants3}
                    animate="animate"
                    className="hidden lg:block absolute bottom-1/4 right-1/3 w-8 h-8 bg-blue/10 transform rotate-45 blur-sm"
                />
            </div>

            <div className="flex-1 flex flex-col justify-center">
                {/* Header Section - Reduced margins */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto text-center px-4 sm:px-6 relative z-10 mb-4 sm:mb-6"
                >
                    <div>
                        <p className="font-playfair font-semibold text-lg sm:text-2xl lg:text-3xl mb-2 sm:mb-3 text-white">
                            FEATURED <span className="bg-gradient-to-r from-blue to-teal bg-clip-text text-transparent">PRO</span>JECTS
                        </p>
                        <div className="flex justify-center mt-2 sm:mt-3">
                            <LineGradient width="w-1/4 sm:w-1/3" />
                        </div>
                    </div>

                    <p className="mt-3 sm:mt-4 mb-4 sm:mb-6 text-grey max-w-2xl mx-auto text-sm sm:text-base">
                        Showcasing our best work with modern web technologies and creative solutions.
                    </p>
                </motion.div>

                {/* Projects Grid - Responsive layout */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 sm:flex-1 flex flex-col justify-start sm:justify-center">
                    <motion.div
                        key={currentPage}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={container}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mx-auto"
                    >
                        {getCurrentProjects().map((project, index) => (
                            <Project
                                key={`${project.id}-${currentPage}`}
                                title={project.title}
                                subtitle={project.subtitle}
                                image={project.image}
                                technologies={project.technologies}
                                href={project.href || `#project-${project.id}`}
                            />
                        ))}
                    </motion.div>

                    {/* Pagination Controls - Reduced margins */}
                    {totalPages > 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex justify-center items-center mt-4 sm:mt-6 space-x-3 sm:space-x-4"
                        >
                            {/* Previous Button */}
                            <button
                                onClick={prevPage}
                                className="p-2 bg-opaque-black backdrop-blur-sm rounded-lg border border-blue/30 hover:border-blue/60 text-white hover:text-blue transition-all duration-300 disabled:opacity-50"
                                disabled={totalPages <= 1}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Page Indicators */}
                            <div className="flex space-x-1.5 sm:space-x-2">
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToPage(index)}
                                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentPage
                                            ? 'bg-blue scale-125'
                                            : 'bg-grey/50 hover:bg-grey'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextPage}
                                className="p-2 bg-opaque-black backdrop-blur-sm rounded-lg border border-blue/30 hover:border-blue/60 text-white hover:text-blue transition-all duration-300 disabled:opacity-50"
                                disabled={totalPages <= 1}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* View All Portfolio Button - Reduced margins */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-center mt-4 sm:mt-6 relative z-10 px-4"
                >
                    <button
                        onClick={handlePortfolioClick}
                        className="inline-block bg-gradient-to-r from-blue to-blue/80 hover:from-blue/80 hover:to-blue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue/25 text-sm sm:text-base border-2 border-blue/30 hover:border-blue/60 backdrop-blur-sm"
                    >
                        <span className="flex items-center space-x-2">
                            <span>View Full Portfolio</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                    <p className="text-grey mt-2 sm:mt-3 text-xs sm:text-sm">
                        Explore all our projects and case studies
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;