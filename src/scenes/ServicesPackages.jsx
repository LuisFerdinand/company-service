import { motion } from "framer-motion";
import { useState } from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

// Updated ServicesPackages component with smaller cards and fixed button gradients

const ServicesPackages = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [hoveredPackage, setHoveredPackage] = useState(null);

    const packages = [
        {
            id: "starter",
            emoji: "🚀",
            title: "Starter Package",
            subtitle: "Theme-Based Website",
            description: "Perfect for small businesses, portfolios, or personal blogs.",
            price: "Rp 1.500.000 – Rp 2.500.000",
            duration: "3 – 7 days",
            bestFor: "Small businesses, students, portfolios, basic blogs",
            features: [
                "WordPress or similar CMS with free/premium theme",
                "Up to 5 pages (Home, About, Services, Blog, Contact)",
                "Responsive design (mobile-friendly)",
                "Basic SEO setup",
                "Contact form",
                "Social media integration"
            ],
            gradientColor: "from-blue-500 to-cyan-500",
            buttonColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
            popular: false
        },
        {
            id: "pro",
            emoji: "⚡",
            title: "Pro Package",
            subtitle: "Semi-Custom Website",
            description: "More control over design & functionality, using themes with custom elements.",
            price: "Rp 3.000.000 – Rp 5.000.000",
            duration: "7 – 14 days",
            bestFor: "Medium-sized businesses, online presence upgrade",
            features: [
                "CMS (WordPress or Elementor)",
                "Up to 10 pages",
                "Custom UI modifications to a base theme",
                "Basic animation/interactions",
                "Blog setup",
                "Speed optimization",
                "Google Analytics & Search Console setup",
                "WhatsApp button & custom forms"
            ],
            gradientColor: "from-purple-500 to-pink-500",
            buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500",
            popular: true
        },
        {
            id: "advanced",
            emoji: "🎯",
            title: "Advanced Package",
            subtitle: "Fully Custom Website",
            description: "Custom-coded or headless CMS, tailored functionality and branding.",
            price: "Rp 6.000.000 – Rp 12.000.000",
            duration: "2 – 4 weeks",
            bestFor: "Startups, serious business websites, agencies",
            features: [
                "Fully custom design (Figma > Code)",
                "Custom CMS (WordPress, Webflow, or Next.js/React/HTML)",
                "Up to 15 pages",
                "Admin dashboard or dynamic content",
                "E-commerce-ready (extra cost)",
                "Advanced SEO, speed, and mobile optimization",
                "Support for 1 month post-launch"
            ],
            gradientColor: "from-orange-500 to-red-500",
            buttonColor: "bg-gradient-to-r from-orange-500 to-red-500",
            popular: false
        }
    ];

    const addOns = [
        {
            name: "E-commerce Integration",
            description: "Shop setup with payment gateway",
            price: "+Rp 2.000.000+",
            icon: "🛒"
        },
        {
            name: "Logo Design",
            description: "Professional brand identity",
            price: "Rp 500.000",
            icon: "🎨"
        },
        {
            name: "Content Creation",
            description: "Copywriting and content help",
            price: "Rp 500.000 – Rp 1.000.000",
            icon: "✍️"
        },
        {
            name: "Extra Pages",
            description: "Additional custom pages",
            price: "Rp 200.000/page",
            icon: "📄"
        },
        {
            name: "Maintenance Package",
            description: "Ongoing support and updates",
            price: "Rp 300.000/month",
            icon: "🔧"
        },
        {
            name: "SEO Optimization",
            description: "Advanced search engine optimization",
            price: "Rp 1.500.000",
            icon: "📈"
        }
    ];

    const handleWhatsAppContact = (packageName) => {
        const message = `Hi! I'm interested in the ${packageName} for my website. Can we discuss the details?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your actual WhatsApp number
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="services" className="pt-10 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-center mt-32 mb-20 relative z-10"
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        Our <span className="text-red">SERVICES</span>
                    </p>
                    <LineGradient width="w-1/4 mx-auto" />
                    <p className="mt-10 text-lg max-w-2xl mx-auto text-grey">
                        Choose the perfect package for your needs. From simple theme-based sites to fully custom solutions.
                    </p>
                </motion.div>

                {/* Service Packages Grid - Made Smaller */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto px-4">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            onHoverStart={() => setHoveredPackage(pkg.id)}
                            onHoverEnd={() => setHoveredPackage(null)}
                            className={`relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group ${pkg.popular ? 'ring-2 ring-yellow/50 transform scale-105' : ''
                                } ${hoveredPackage === pkg.id ? 'transform scale-105 shadow-2xl' : ''}`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-3 right-3 bg-gradient-rainblue text-deep-blue px-2 py-1 text-xs font-semibold rounded-full z-10">
                                    Most Popular
                                </div>
                            )}

                            {/* Package Header - Reduced Padding */}
                            <div className="relative p-6 text-center">
                                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${pkg.gradientColor} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                    {pkg.emoji}
                                </div>
                                <h3 className="font-playfair font-bold text-xl text-white mb-2">
                                    {pkg.title}
                                </h3>
                                <p className="text-grey text-base mb-3">{pkg.subtitle}</p>
                                <div className="mb-3">
                                    <p className="font-playfair font-bold text-lg text-white">{pkg.price}</p>
                                    <p className="text-grey text-xs mt-1">⏱️ {pkg.duration}</p>
                                </div>
                            </div>

                            {/* Package Content - Reduced Padding */}
                            <div className="px-6 pb-6">
                                <p className="text-grey mb-4 leading-relaxed text-sm">{pkg.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-playfair font-semibold text-base text-white mb-3">✨ What's Included:</h4>
                                    <ul className="space-y-2">
                                        {pkg.features.slice(0, 4).map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-green-400 mr-2 mt-1 flex-shrink-0 text-sm">✓</span>
                                                <span className="text-xs text-grey leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                        {pkg.features.length > 4 && (
                                            <li className="text-xs text-grey opacity-70">
                                                +{pkg.features.length - 4} more features...
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="mb-4 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                                    <p className="text-xs font-semibold text-white mb-1">🎯 Perfect For:</p>
                                    <p className="text-xs text-grey">{pkg.bestFor}</p>
                                </div>

                                {/* CTA Button - Fixed Gradient */}
                                <button
                                    onClick={() => handleWhatsAppContact(pkg.title)}
                                    className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm ${pkg.popular
                                        ? 'bg-gradient-rainblue text-deep-blue'
                                        : `${pkg.buttonColor} text-white`
                                        }`}
                                >
                                    Get Started - WhatsApp 💬
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-6xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                            🔧 Add-Ons & <span className="bg-gradient-rainblue bg-clip-text text-transparent">Extras</span>
                        </h3>
                        <p className="text-lg text-grey max-w-2xl mx-auto">
                            Enhance your website with additional features and services to make it truly exceptional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {addOns.map((addon, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {addon.icon}
                                </div>
                                <h4 className="font-semibold text-white mb-2">{addon.name}</h4>
                                <p className="text-grey text-sm mb-3 leading-relaxed">{addon.description}</p>
                                <p className="font-playfair font-bold text-yellow">{addon.price}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => handleWhatsAppContact("Add-on Services")}
                            className="bg-gradient-rainblue text-deep-blue font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Discuss Add-ons via WhatsApp 💬
                        </button>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple rounded-full opacity-40 animate-bounce delay-500"></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-teal rounded-full opacity-50 animate-bounce delay-1000"></div>
                <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-yellow rounded-full opacity-30 animate-bounce delay-700"></div>
            </div>
        </section>
    )
}

export default ServicesPackages