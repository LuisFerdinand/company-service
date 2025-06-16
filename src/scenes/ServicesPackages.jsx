import { motion } from "framer-motion";
import { useState } from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

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
            price: "Rp 2.000.000",
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
            price: "Rp 4.000.000",
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
            price: "Rp 9.000.000",
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
            id: "ecommerce",
            name: "E-commerce Integration",
            subtitle: "Shop setup with payment gateway",
            description: "Complete online store setup with payment processing, inventory management, and order tracking.",
            price: "+Rp 2.000.000+",
            icon: "🛒",
            gradientColor: "from-emerald-500 to-teal-500",
            buttonColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
            features: [
                "Payment gateway integration",
                "Product catalog management",
                "Order processing system",
                "Inventory tracking",
                "Customer accounts",
                "Shopping cart functionality"
            ]
        },
        {
            id: "logo",
            name: "Logo Design",
            subtitle: "Professional brand identity",
            description: "Custom logo design with multiple variations and brand guidelines for consistent identity.",
            price: "Rp 500.000",
            icon: "🎨",
            gradientColor: "from-pink-500 to-rose-500",
            buttonColor: "bg-gradient-to-r from-pink-500 to-rose-500",
            features: [
                "3 logo concepts",
                "Unlimited revisions",
                "Vector files (AI, EPS, SVG)",
                "PNG/JPG in various sizes",
                "Brand color palette",
                "Usage guidelines"
            ]
        },
        {
            id: "content",
            name: "Content Creation",
            subtitle: "Copywriting and content help",
            description: "Professional content writing services to engage your audience and improve conversions.",
            price: "Rp 500.000 – Rp 1.000.000",
            icon: "✍️",
            gradientColor: "from-violet-500 to-purple-500",
            buttonColor: "bg-gradient-to-r from-violet-500 to-purple-500",
            features: [
                "Website copywriting",
                "Blog post creation",
                "Product descriptions",
                "About us content",
                "Service descriptions",
                "Call-to-action optimization"
            ]
        },
        {
            id: "pages",
            name: "Extra Pages",
            subtitle: "Additional custom pages",
            description: "Add more pages to your website with custom design and functionality tailored to your needs.",
            price: "Rp 200.000/page",
            icon: "📄",
            gradientColor: "from-amber-500 to-orange-500",
            buttonColor: "bg-gradient-to-r from-amber-500 to-orange-500",
            features: [
                "Custom page design",
                "Responsive layout",
                "Content integration",
                "SEO optimization",
                "Mobile-friendly",
                "Fast loading speed"
            ]
        },
        {
            id: "maintenance",
            name: "Maintenance Package",
            subtitle: "Ongoing support and updates",
            description: "Keep your website running smoothly with regular updates, backups, and technical support.",
            price: "Rp 300.000/month",
            icon: "🔧",
            gradientColor: "from-blue-500 to-indigo-500",
            buttonColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
            features: [
                "Regular security updates",
                "Daily backups",
                "Performance monitoring",
                "Technical support",
                "Content updates",
                "Plugin/theme updates"
            ]
        },
        {
            id: "seo",
            name: "SEO Optimization",
            subtitle: "Advanced search engine optimization",
            description: "Boost your website's visibility with comprehensive SEO optimization and ongoing monitoring.",
            price: "Rp 1.500.000",
            icon: "📈",
            gradientColor: "from-green-500 to-emerald-500",
            buttonColor: "bg-gradient-to-r from-green-500 to-emerald-500",
            features: [
                "Keyword research & analysis",
                "On-page SEO optimization",
                "Meta tags optimization",
                "Site speed optimization",
                "Google Search Console setup",
                "Monthly SEO reports"
            ]
        }
    ];

    const handleWhatsAppContact = (packageName) => {
        const message = `Hi! I'm interested in the ${packageName} for my website. Can we discuss the details?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your actual WhatsApp number
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const renderCard = (item, index, isAddon = false) => {
        const cardData = isAddon ? {
            id: item.id,
            emoji: item.icon,
            title: item.name,
            subtitle: item.subtitle,
            description: item.description,
            price: item.price,
            duration: null,
            bestFor: null,
            features: item.features,
            gradientColor: item.gradientColor,
            buttonColor: item.buttonColor,
            popular: false
        } : item;

        return (
            <motion.div
                key={cardData.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                onHoverStart={() => setHoveredPackage(cardData.id)}
                onHoverEnd={() => setHoveredPackage(null)}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group h-full flex flex-col ${cardData.popular ? 'ring-2 ring-yellow/50 transform scale-105' : ''
                    } ${hoveredPackage === cardData.id ? 'transform scale-105 shadow-2xl' : ''}`}
            >
                {/* Popular Badge */}
                {cardData.popular && (
                    <div className="absolute top-3 right-3 bg-gradient-rainblue text-deep-blue px-3 py-1 text-xs font-semibold rounded-full z-10">
                        Most Popular
                    </div>
                )}

                {/* Card Header */}
                <div className="relative p-6 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${cardData.gradientColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {cardData.emoji}
                    </div>
                    
                    <h3 className="font-playfair font-bold text-2xl text-white mb-2">
                        {cardData.title}
                    </h3>
                    <p className="text-grey text-base mb-4">{cardData.subtitle}</p>
                    
                    <div className="mb-4">
                        <p className="font-playfair font-bold text-3xl text-yellow">{cardData.price}</p>
                        {cardData.duration && (
                            <p className="text-white text-base font-medium mt-1">⏱️ {cardData.duration}</p>
                        )}
                    </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6 flex-grow flex flex-col">
                    <p className="text-grey/90 mb-4 leading-relaxed text-base">{cardData.description}</p>

                    {/* Features */}
                    <div className="mb-6 flex-grow">
                        <h4 className="font-opensans font-semibold text-base text-white mb-3">✨ What's Included:</h4>
                        <ul className="space-y-2">
                            {cardData.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-green-400 mr-3 mt-1 flex-shrink-0 text-sm">✓</span>
                                    <span className="text-sm text-grey/80 leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Best For - Only for packages */}
                    {cardData.bestFor && (
                        <div className="mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                            <p className="text-sm font-medium text-white mb-2">🎯 Perfect For:</p>
                            <p className="text-sm text-grey/90">{cardData.bestFor}</p>
                        </div>
                    )}

                    {/* CTA Button */}
                    <button
                        onClick={() => handleWhatsAppContact(cardData.title)}
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base mt-auto ${cardData.popular
                            ? 'bg-gradient-rainblue text-deep-blue'
                            : `${cardData.buttonColor} text-white`
                            }`}
                    >
                        Get Started 💬
                    </button>
                </div>
            </motion.div>
        );
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
                {/* Header - Right Aligned */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="mt-32 mb-20 relative z-10 text-right"
                >
                    <div className="flex justify-end">
                        <div>
                            <p className="font-playfair font-semibold text-4xl mb-5">
                                Our <span className="text-red">SERVICES</span>
                            </p>
                            <div className="flex justify-end my-5">
                                <LineGradient width="w-1/4" />
                            </div>
                            <p className="mt-10 text-lg max-w-2xl text-grey">
                                Choose the perfect package for your needs. From simple theme-based sites to fully custom solutions.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Service Packages Grid - Wider Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto px-4">
                    {packages.map((pkg, index) => renderCard(pkg, index, false))}
                </div>

                {/* Add-ons Section
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-7xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                            🔧 Add-Ons & <span className="bg-gradient-rainblue bg-clip-text text-transparent">Extras</span>
                        </h3>
                        <p className="text-lg text-grey max-w-2xl mx-auto">
                            Enhance your website with additional features and services to make it truly exceptional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
                        {addOns.map((addon, index) => renderCard(addon, index, true))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => handleWhatsAppContact("Add-on Services")}
                            className="bg-gradient-rainblue text-deep-blue font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Discuss Add-ons via WhatsApp 💬
                        </button>
                    </div>
                </motion.div> */}

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