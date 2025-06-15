import { motion } from "framer-motion";
import { useState } from "react";

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
            icon: "🌐",
            color: "from-blue-500 to-teal-500"
        },
        {
            id: 2,
            title: "E-Commerce Solutions",
            description: "Complete online stores with payment integration and inventory management",
            icon: "🛒",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "Digital Marketing",
            description: "SEO optimization, social media management, and online advertising",
            icon: "📈",
            color: "from-orange-500 to-red-500"
        },
        {
            id: 4,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and deployment services",
            icon: "☁️",
            color: "from-green-500 to-blue-500"
        }
    ];

    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "150+", label: "Happy Clients" },
        { number: "24/7", label: "Support Available" },
        { number: "99.9%", label: "Uptime Guarantee" }
    ];

    return (
        <section id="home" className="min-h-screen overflow-hidden flex items-center pt-20 pb-8">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue to-teal rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple to-pink rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                {/* Hero Section */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                            <span className="bg-gradient-rainblue bg-clip-text text-transparent">
                                Digital
                            </span>
                            <br />
                            <span className="text-white">Solutions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-grey max-w-2xl mx-auto mb-6 leading-relaxed">
                            Transforming businesses through innovative web technologies,
                            custom development, and strategic digital solutions
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                    >
                        <button
                            onClick={() => handleNavigation("servicespackages")}
                            className="bg-gradient-rainblue text-deep-blue px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Explore Services
                        </button>
                        <button
                            onClick={() => handleNavigation("contact")}
                            className="border-2 border-blue text-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue hover:text-deep-blue transition-all duration-300"
                        >
                            Get Quote
                        </button>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                {stat.number}
                            </div>
                            <div className="text-grey text-xs md:text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Services Preview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <h2 className="text-2xl md:text-3xl font-playfair text-center text-white mb-6">
                        Our <span className="bg-gradient-rainblue bg-clip-text text-transparent">Services</span>
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                onHoverStart={() => setHoveredService(service.id)}
                                onHoverEnd={() => setHoveredService(null)}
                                className="relative group cursor-pointer"
                            >
                                <div className={`
                                    bg-white/10 backdrop-blur-sm rounded-lg p-4 h-full
                                    border border-white/20 hover:border-white/40
                                    transition-all duration-300
                                    ${hoveredService === service.id ? 'scale-105 shadow-xl' : ''}
                                `}>
                                    <div className={`
                                        w-10 h-10 rounded-lg bg-gradient-to-r ${service.color}
                                        flex items-center justify-center text-lg mb-3
                                        group-hover:scale-110 transition-transform duration-300
                                    `}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold text-white mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-grey text-xs leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                    <h3 className="text-xl md:text-2xl font-playfair text-white mb-3">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="text-grey text-sm mb-4 max-w-xl mx-auto">
                        Let's discuss how our web services can help you achieve your digital goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => handleNavigation("contact")}
                            className="bg-gradient-rainblue text-deep-blue px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Start Your Project
                        </button>
                        <button
                            onClick={() => handleNavigation("projects")}
                            className="text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-blue transition-all duration-300"
                        >
                            View Our Work
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple rounded-full opacity-40 animate-bounce delay-500"></div>
            <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-teal rounded-full opacity-50 animate-bounce delay-1000"></div>
        </section>
    );
};

export default WebServicesLanding;