import { motion } from "framer-motion";
import { useState } from "react";
import { Globe, ShoppingCart, TrendingUp, Cloud, ArrowRight, Sparkles, Code, Database, Smartphone, Wifi } from "lucide-react";

const WebServicesLanding = ({ setSelectedPage, selectedPage }) => {
    const [hoveredService, setHoveredService] = useState(null);

    // Function to handle navigation with smooth scrolling
    const handleNavigation = (page) => {
        setSelectedPage(page);
        const element = document.getElementById(page);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies",
            icon: Globe,
            color: "from-blue to-teal"
        },
        {
            id: 2,
            title: "E-Commerce Solutions",
            description: "Complete online stores with payment integration and inventory management",
            icon: ShoppingCart,
            color: "from-purple to-red"
        },
        {
            id: 3,
            title: "Digital Marketing",
            description: "SEO optimization, social media management, and online advertising",
            icon: TrendingUp,
            color: "from-orange to-yellow"
        },
        {
            id: 4,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and deployment services",
            icon: Cloud,
            color: "from-green to-blue"
        }
    ];

    const highlights = [
        { 
            icon: Sparkles, 
            text: "Cutting-edge Technologies",
            color: "text-blue"
        },
        { 
            icon: ArrowRight, 
            text: "Fast Development Cycle",
            color: "text-purple"
        },
        { 
            icon: Globe, 
            text: "Global Standards",
            color: "text-teal"
        }
    ];

    return (
        <section id="home" className="min-h-screen overflow-hidden flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-5 w-32 h-32 xs:w-48 xs:h-48 sm:w-72 sm:h-72 md:top-20 md:left-20 bg-gradient-to-r from-blue to-teal rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-5 w-40 h-40 xs:w-56 xs:h-56 sm:w-96 sm:h-96 md:bottom-20 md:right-20 bg-gradient-to-r from-purple to-red rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Code brackets */}
                <motion.div
                    className="absolute top-1/4 left-1/4 text-blue opacity-30"
                    animate={{ 
                        y: [-10, 10, -10],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Code className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                </motion.div>

                {/* Database icon */}
                <motion.div
                    className="absolute top-1/3 right-1/3 text-purple opacity-25"
                    animate={{ 
                        y: [10, -10, 10],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                >
                    <Database className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
                </motion.div>

                {/* Smartphone icon */}
                <motion.div
                    className="absolute bottom-1/3 left-1/5 text-teal opacity-20"
                    animate={{ 
                        y: [-8, 8, -8],
                        x: [-5, 5, -5]
                    }}
                    transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                >
                    <Smartphone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7" />
                </motion.div>

                {/* Wifi icon */}
                <motion.div
                    className="absolute top-2/3 right-1/4 text-green opacity-25"
                    animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                >
                    <Wifi className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9" />
                </motion.div>

                {/* Globe icon */}
                <motion.div
                    className="absolute bottom-1/4 right-1/5 text-yellow opacity-30"
                    animate={{ 
                        rotate: [0, 360]
                    }}
                    transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <Globe className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                </motion.div>

                {/* Cloud icon */}
                <motion.div
                    className="absolute top-1/2 left-1/6 text-orange opacity-20"
                    animate={{ 
                        y: [-15, 15, -15],
                        x: [0, 10, 0]
                    }}
                    transition={{ 
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                >
                    <Cloud className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                </motion.div>
            </div>

            <div className="mx-auto px-4 xs:px-6 relative z-10 h-full flex flex-col justify-center py-20 sm:py-24">
                {/* Hero Section */}
                <div className="text-center mb-6 xs:mb-8 sm:mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-playfair font-bold mb-4 xs:mb-6">
                            <span className="bg-gradient-rainblue bg-clip-text text-transparent">
                                Digital
                            </span>
                            <br />
                            <span className="text-white">Solutions</span>
                        </h1>
                        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-grey max-w-3xl mx-auto mb-6 xs:mb-8 leading-relaxed px-2">
                            Transforming businesses through innovative web technologies and strategic digital solutions
                        </p>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8"
                    >
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center justify-center xs:justify-start gap-2">
                                <highlight.icon className={`w-4 h-4 xs:w-5 xs:h-5 ${highlight.color}`} />
                                <span className="text-grey text-xs xs:text-sm">{highlight.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center items-center mb-6 xs:mb-8 px-2"
                    >
                        <button
                            onClick={() => handleNavigation("servicespackages")}
                            className="w-full xs:w-auto bg-gradient-rainblue text-deep-blue px-6 xs:px-8 py-3 xs:py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm xs:text-base"
                        >
                            Explore Services
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleNavigation("contact")}
                            className="w-full xs:w-auto border-2 border-blue text-blue px-6 xs:px-8 py-3 xs:py-4 rounded-xl font-semibold hover:bg-blue hover:text-deep-blue transition-all duration-300 text-sm xs:text-base"
                        >
                            Get Quote
                        </button>
                    </motion.div>
                </div>

                {/* Services Preview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex-1 flex flex-col justify-center"
                >
                    <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-playfair font-bold text-center text-white mb-6 xs:mb-8">
                        Our <span className="bg-gradient-rainblue bg-clip-text text-transparent">Services</span>
                    </h2>

                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 max-w-6xl mx-auto">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    onHoverStart={() => setHoveredService(service.id)}
                                    onHoverEnd={() => setHoveredService(null)}
                                    className="relative group cursor-pointer"
                                    onClick={() => handleNavigation("servicespackages")}
                                >
                                    <div className={`
                                        bg-white/10 backdrop-blur-sm rounded-xl p-4 xs:p-6 h-full
                                        border border-white/20 hover:border-white/40
                                        transition-all duration-300
                                        ${hoveredService === service.id ? 'scale-105 shadow-xl' : ''}
                                    `}>
                                        <div className={`
                                            w-10 h-10 xs:w-12 xs:h-12 rounded-xl bg-gradient-to-r ${service.color}
                                            flex items-center justify-center mb-3 xs:mb-4
                                            group-hover:scale-110 transition-transform duration-300
                                        `}>
                                            <IconComponent className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                                        </div>
                                        <h3 className="text-base xs:text-lg font-semibold text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-grey text-xs xs:text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center mt-8 xs:mt-12 px-2"
                >
                    <button
                        onClick={() => handleNavigation("contact")}
                        className="w-full xs:w-auto bg-gradient-to-r from-purple to-red text-white px-6 xs:px-8 py-3 xs:py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 text-sm xs:text-base"
                    >
                        <Sparkles className="w-4 h-4 xs:w-5 xs:h-5" />
                        Start Your Project
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>

            {/* Simple Floating Elements */}
            <div className="absolute top-1/4 left-4 xs:left-10 w-3 h-3 xs:w-4 xs:h-4 bg-blue rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-1/3 right-8 xs:right-20 w-4 h-4 xs:w-6 xs:h-6 bg-purple rounded-full opacity-40 animate-bounce delay-500"></div>
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 xs:w-3 xs:h-3 bg-teal rounded-full opacity-50 animate-bounce delay-1000"></div>
        </section>
    );
};

export default WebServicesLanding;