import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from 'lucide-react';
import { getTechIcon } from '../assets/projectsData';

const ProjectCardDetail = ({ projects, initialSlide = 0, isOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const [direction, setDirection] = useState(0);

    // Update current slide when initialSlide changes
    useEffect(() => {
        setCurrentSlide(initialSlide);
    }, [initialSlide]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isOpen) return;

            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, nextSlide, prevSlide, onClose]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    const thumbnailVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (!isOpen) return null;

    const currentProject = projects[currentSlide];

    return (
        <div className="fixed inset-0 bg-gradient-to-b from-slate-900 to-black min-h-screen z-50 flex flex-col py-12">
            {/* Header Controls - Mobile Optimized */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={onClose}
                            className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                        >
                            <X size={20} className="sm:w-6 sm:h-6" />
                        </button>
                        <div className="text-white">
                            <span className="text-xs sm:text-sm opacity-80">Project</span>
                            <span className="mx-1 sm:mx-2 text-blue-500 text-sm sm:text-base font-medium">{currentSlide + 1}</span>
                            <span className="text-xs sm:text-sm opacity-80">of {projects.length}</span>
                        </div>
                    </div>

                    {/* Desktop dots - hidden on mobile */}
                    <div className="hidden sm:flex items-center space-x-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 hover:bg-gray-400 ${
                                    index === currentSlide
                                        ? 'bg-gradient-to-r from-blue to-purple w-8'
                                        : 'bg-gray-500 w-2'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Mobile dots - smaller and fewer visible */}
                    <div className="flex sm:hidden items-center space-x-1">
                        {projects.slice(Math.max(0, currentSlide - 1), currentSlide + 2).map((_, relativeIndex) => {
                            const actualIndex = Math.max(0, currentSlide - 1) + relativeIndex;
                            return (
                                <button
                                    key={actualIndex}
                                    onClick={() => goToSlide(actualIndex)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        actualIndex === currentSlide
                                            ? 'bg-gradient-to-r from-blue to-purple w-6'
                                            : 'bg-gray-500 w-1.5'
                                    }`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Slide Area - Mobile Optimized */}
            <div className="flex-1 relative overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-24">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.4 }
                        }}
                        className="absolute inset-0 flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto sm:overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:items-center h-full w-full">
                            {/* Project Image - Mobile Optimized */}
                            <motion.div
                                className="relative group order-1 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                                    <img
                                        src={projects[currentSlide].image}
                                        alt={projects[currentSlide].title}
                                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Floating Tech Icons - Mobile Optimized */}
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-wrap gap-1 sm:gap-2 max-w-[60%]">
                                        {projects[currentSlide].technologies.slice(0, 3).map((tech, index) => (
                                            <motion.div
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                                className="bg-black/70 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2"
                                            >
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center flex-shrink-0">
                                                    {getTechIcon(tech)}
                                                </div>
                                                <span className="hidden sm:inline">{tech}</span>
                                                <span className="sm:hidden">{tech.slice(0, 3)}</span>
                                            </motion.div>
                                        ))}
                                        {projects[currentSlide].technologies.length > 3 && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.7 }}
                                                className="bg-black/70 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                                            >
                                                +{projects[currentSlide].technologies.length - 3}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Details - Mobile Optimized */}
                            <motion.div
                                className="text-white space-y-4 sm:space-y-6 order-2 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div>
                                    <motion.h1
                                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent leading-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {projects[currentSlide].title}
                                    </motion.h1>

                                    <motion.p
                                        className="text-base sm:text-lg lg:text-xl text-gray-400 mb-4 sm:mb-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        {projects[currentSlide].subtitle}
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Project Overview</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">
                                        {projects[currentSlide].description}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {projects[currentSlide].technologies.map((tech, index) => (
                                            <motion.div
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.8 + index * 0.05 }}
                                                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                                            >
                                                <div className="w-3 h-3 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0">
                                                    {getTechIcon(tech)}
                                                </div>
                                                <span className="font-medium text-xs sm:text-sm lg:text-base">{tech}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2 sm:pt-4"
                                >
                                    <a
                                        href={projects[currentSlide].liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-blue to-purple px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-white hover:scale-105 text-sm sm:text-base"
                                    >
                                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                                        <span>View Live Project</span>
                                    </a>
                                    <a
                                        href={projects[currentSlide].codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-gray-600 hover:border-gray-400 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/5 text-white flex items-center justify-center space-x-2 hover:scale-105 text-sm sm:text-base"
                                    >
                                        <Github size={16} className="sm:w-5 sm:h-5" />
                                        <span>View Code</span>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Mobile Optimized */}
                <button
                    onClick={prevSlide}
                    disabled={projects.length <= 1}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
                >
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={projects.length <= 1}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
                >
                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
            </div>

            {/* Bottom Navigation Thumbnails - Mobile Optimized */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-6">
                <div className="flex justify-center space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide">
                    {projects.map((project, index) => (
                        <motion.button
                            key={project.id}
                            onClick={() => goToSlide(index)}
                            variants={thumbnailVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1 }}
                            className={`relative group flex-shrink-0 transition-all duration-300 z-10 ${
                                index === currentSlide 
                                    ? 'ring-2 ring-blue-500 scale-110' 
                                    : 'hover:scale-105'
                            }`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-12 h-8 sm:w-20 sm:h-14 object-cover rounded-md sm:rounded-lg transition-all duration-300"
                            />
                            <div className={`absolute inset-0 bg-black/50 rounded-md sm:rounded-lg transition-opacity duration-300 ${
                                index === currentSlide 
                                    ? 'opacity-0' 
                                    : 'opacity-60 group-hover:opacity-30'
                            }`} />
                            
                            {/* Title overlay for active thumbnail - hidden on small mobile */}
                            {index === currentSlide && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="hidden sm:block absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                                >
                                    {project.title}
                                </motion.div>
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCardDetail;