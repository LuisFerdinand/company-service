import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink, Maximize2 } from 'lucide-react';

// Mock project data - replace with your actual data
const mockProjects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        subtitle: "A modern, responsive e-commerce solution with advanced features",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        description: "Built a comprehensive e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Features include real-time notifications, advanced search, and mobile-responsive design.",
        href: "#"
    },
    {
        id: 2,
        title: "AI Dashboard",
        subtitle: "Interactive analytics dashboard powered by machine learning",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["Python", "TensorFlow", "React", "D3.js"],
        description: "Developed an AI-powered analytics dashboard that processes large datasets and provides predictive insights. Includes data visualization, machine learning models, and real-time data processing capabilities.",
        href: "#"
    },
    {
        id: 3,
        title: "Mobile Banking App",
        subtitle: "Secure and intuitive mobile banking solution",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
        description: "Created a secure mobile banking application with biometric authentication, transaction history, bill payments, and budget tracking. Implemented end-to-end encryption and fraud detection systems.",
        href: "#"
    },
    {
        id: 4,
        title: "Social Media Platform",
        subtitle: "Next-generation social networking experience",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        technologies: ["Next.js", "GraphQL", "Redis", "AWS"],
        description: "Built a scalable social media platform with real-time messaging, content sharing, and advanced privacy controls. Features include AI-powered content moderation and personalized feeds.",
        href: "#"
    }
];

const getTechIcon = (tech) => {
    const icons = {
        "React": "⚛️",
        "Node.js": "🟢",
        "MongoDB": "🍃",
        "Stripe": "💳",
        "Python": "🐍",
        "TensorFlow": "🧠",
        "D3.js": "📊",
        "React Native": "📱",
        "PostgreSQL": "🐘",
        "JWT": "🔑",
        "Next.js": "▲",
        "GraphQL": "🔗",
        "Redis": "🔴",
        "AWS": "☁️"
    };
    return icons[tech] || "💻";
};

const FullScreenProjects = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isFullscreen) return;

            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'Escape') {
                setIsFullscreen(false);
            }
        };

        if (isFullscreen) {
            document.addEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [isFullscreen, currentSlide]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % mockProjects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + mockProjects.length) % mockProjects.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

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

    if (isFullscreen) {
        return (
            <div className="fixed inset-0 bg-black z-50 flex flex-col">
                {/* Header Controls */}
                <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsFullscreen(false)}
                                className="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                            >
                                <X size={24} />
                            </button>
                            <div className="text-white">
                                <span className="text-sm opacity-80">Project</span>
                                <span className="mx-2 text-blue-400">{currentSlide + 1}</span>
                                <span className="text-sm opacity-80">of {mockProjects.length}</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            {mockProjects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-blue-500 w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Slide Area */}
                <div className="flex-1 relative overflow-hidden">
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
                            className="absolute inset-0 flex items-center justify-center p-8"
                        >
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                                {/* Project Image */}
                                <motion.div
                                    className="relative group"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                        <img
                                            src={mockProjects[currentSlide].image}
                                            alt={mockProjects[currentSlide].title}
                                            className="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                        {/* Floating Tech Icons */}
                                        <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                                            {mockProjects[currentSlide].technologies.slice(0, 4).map((tech, index) => (
                                                <motion.div
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                                                >
                                                    <span>{getTechIcon(tech)}</span>
                                                    <span>{tech}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Project Details */}
                                <motion.div
                                    className="text-white space-y-6"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div>
                                        <motion.h1
                                            className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {mockProjects[currentSlide].title}
                                        </motion.h1>

                                        <motion.p
                                            className="text-xl text-gray-300 mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {mockProjects[currentSlide].subtitle}
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <h3 className="text-lg font-semibold mb-3 text-blue-300">Project Overview</h3>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {mockProjects[currentSlide].description}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <h3 className="text-lg font-semibold mb-4 text-blue-300">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {mockProjects[currentSlide].technologies.map((tech, index) => (
                                                <motion.div
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.8 + index * 0.05 }}
                                                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
                                                >
                                                    <span className="text-xl">{getTechIcon(tech)}</span>
                                                    <span className="font-medium">{tech}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 }}
                                        className="flex space-x-4 pt-4"
                                    >
                                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                                            <ExternalLink size={20} />
                                            <span>View Live Project</span>
                                        </button>
                                        <button className="border border-gray-500 hover:border-gray-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/5">
                                            View Code
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex justify-center space-x-4">
                        {mockProjects.map((project, index) => (
                            <motion.button
                                key={project.id}
                                onClick={() => goToSlide(index)}
                                variants={thumbnailVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.1 }}
                                className={`relative group ${index === currentSlide ? 'ring-2 ring-blue-500' : ''
                                    }`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-20 h-14 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                                />
                                <div className={`absolute inset-0 bg-black/50 rounded-lg transition-opacity duration-300 ${index === currentSlide ? 'opacity-0' : 'opacity-60 group-hover:opacity-30'
                                    }`} />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Regular project grid view
    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our latest work through an immersive presentation experience
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {mockProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => {
                                setCurrentSlide(index);
                                setIsFullscreen(true);
                            }}
                        >
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                            <Maximize2 size={24} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                        {project.subtitle}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex space-x-1">
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">
                                                    {getTechIcon(tech)}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="text-xs bg-gray-600/50 text-gray-300 px-2 py-1 rounded">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300">
                                            View Details →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
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
                        onClick={() => setIsFullscreen(true)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto"
                    >
                        <Maximize2 size={24} />
                        <span>Launch Full Presentation</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FullScreenProjects;