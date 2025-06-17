import { motion } from "framer-motion";
import { useState } from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { 
    Rocket, 
    Zap, 
    Target, 
    ShoppingCart, 
    Palette, 
    PenTool, 
    FileText, 
    Wrench, 
    TrendingUp,
    Clock,
    Users,
    CheckCircle,
    MessageCircle
} from "lucide-react";

const Services = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [hoveredPackage, setHoveredPackage] = useState(null);

    const packages = [
        {
            id: "starter",
            icon: Rocket,
            title: "Starter Package",
            subtitle: "Theme-Based Website",
            description: "Perfect for small businesses, portfolios, or personal blogs.",
            price: "Rp 2.000.000",
            duration: "3 – 7 days",
            bestFor: "Small businesses, students, portfolios",
            features: [
                "WordPress with premium theme",
                "Up to 5 pages",
                "Responsive design",
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
            icon: Zap,
            title: "Pro Package",
            subtitle: "Semi-Custom Website",
            description: "More control over design & functionality with custom elements.",
            price: "Rp 4.000.000",
            duration: "7 – 14 days",
            bestFor: "Medium-sized businesses",
            features: [
                "CMS with custom modifications",
                "Up to 10 pages",
                "Custom UI elements",
                "Basic animations",
                "Speed optimization",
                "Analytics setup",
                "WhatsApp integration"
            ],
            gradientColor: "from-purple-500 to-pink-500",
            buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500",
            popular: true
        },
        {
            id: "advanced",
            icon: Target,
            title: "Advanced Package",
            subtitle: "Fully Custom Website",
            description: "Custom-coded solution with tailored functionality and branding.",
            price: "Rp 9.000.000",
            duration: "2 – 4 weeks",
            bestFor: "Startups, serious businesses",
            features: [
                "Fully custom design",
                "Custom CMS or headless",
                "Up to 15 pages",
                "Admin dashboard",
                "E-commerce ready",
                "Advanced SEO",
                "1 month support"
            ],
            gradientColor: "from-orange-500 to-red-500",
            buttonColor: "bg-gradient-to-r from-orange-500 to-red-500",
            popular: false
        }
    ];

    const addOns = [
        {
            id: "ecommerce",
            name: "E-commerce",
            price: "+Rp 2.000.000+",
            icon: ShoppingCart,
            gradientColor: "from-emerald-500 to-teal-500"
        },
        {
            id: "logo",
            name: "Logo Design",
            price: "Rp 500.000",
            icon: Palette,
            gradientColor: "from-pink-500 to-rose-500"
        },
        {
            id: "content",
            name: "Content Creation",
            price: "Rp 500.000 – 1.000.000",
            icon: PenTool,
            gradientColor: "from-violet-500 to-purple-500"
        },
        {
            id: "pages",
            name: "Extra Pages",
            price: "Rp 200.000/page",
            icon: FileText,
            gradientColor: "from-amber-500 to-orange-500"
        },
        {
            id: "maintenance",
            name: "Maintenance",
            price: "Rp 300.000/month",
            icon: Wrench,
            gradientColor: "from-blue-500 to-indigo-500"
        },
        {
            id: "seo",
            name: "SEO Optimization",
            price: "Rp 1.500.000",
            icon: TrendingUp,
            gradientColor: "from-green-500 to-emerald-500"
        }
    ];

    const handleWhatsAppContact = (packageName) => {
        const message = `Hi! I'm interested in the ${packageName} for my website. Can we discuss the details?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "085248209388";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const renderPackageCard = (item, index) => {
        const IconComponent = item.icon;
        
        return (
            <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                onHoverStart={() => setHoveredPackage(item.id)}
                onHoverEnd={() => setHoveredPackage(null)}
                className={`relative bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group h-full flex flex-col ${
                    item.popular ? 'ring-2 ring-yellow/50 transform scale-105' : ''
                } ${hoveredPackage === item.id ? 'transform scale-105 shadow-xl' : ''}`}
            >
                {/* Popular Badge */}
                {item.popular && (
                    <div className="absolute top-2 right-2 bg-gradient-rainblue text-deep-blue px-2 py-1 text-xs font-semibold rounded-full z-10">
                        Popular
                    </div>
                )}

                {/* Card Header */}
                <div className="p-4 text-center">
                    <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r ${item.gradientColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="font-playfair font-bold text-xl text-white mb-1">
                        {item.title}
                    </h3>
                    <p className="text-grey text-sm mb-3">{item.subtitle}</p>

                    <div className="mb-3">
                        <p className="font-playfair font-bold text-2xl text-yellow">{item.price}</p>
                        <p className="text-white text-sm font-medium mt-1 flex items-center justify-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.duration}
                        </p>
                    </div>
                </div>

                {/* Card Content */}
                <div className="px-4 pb-4 flex-grow flex flex-col">
                    <p className="text-grey/80 mb-3 text-sm leading-relaxed">{item.description}</p>

                    {/* Best For */}
                    <div className="mb-3 p-2 bg-white/5 rounded-md border border-white/10">
                        <p className="text-xs font-medium text-white mb-1 flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            Perfect For:
                        </p>
                        <p className="text-xs text-grey/90">{item.bestFor}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-4 flex-grow">
                        <h4 className="font-opensans font-medium text-sm text-white mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                            {item.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-start text-xs">
                                    <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-grey/80">{feature}</span>
                                </li>
                            ))}
                            {item.features.length > 4 && (
                                <li className="text-xs text-grey/60 ml-5">+{item.features.length - 4} more...</li>
                            )}
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => handleWhatsAppContact(item.title)}
                        className={`w-full py-2 px-4 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm mt-auto flex items-center justify-center ${
                            item.popular
                                ? 'bg-gradient-rainblue text-deep-blue'
                                : `${item.buttonColor} text-white`
                        }`}
                    >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Get Started
                    </button>
                </div>
            </motion.div>
        );
    };

    const renderAddonCard = (addon, index) => {
        const IconComponent = addon.icon;
        
        return (
            <motion.div
                key={addon.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 p-3 group cursor-pointer"
                onClick={() => handleWhatsAppContact(addon.name)}
            >
                <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-r ${addon.gradientColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-grow">
                        <h4 className="font-medium text-white text-sm">{addon.name}</h4>
                        <p className="text-yellow text-xs font-medium">{addon.price}</p>
                    </div>
                    <MessageCircle className="w-4 h-4 text-grey/60 group-hover:text-white transition-colors" />
                </div>
            </motion.div>
        );
    };

    return (
        <section id="services" className="pt-36 pb-16 relative overflow-hidden min-h-screen flex flex-col">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex-grow flex flex-col">
                {/* Header - Center Aligned */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="mb-8 relative z-10 text-center"
                >
                    <div className="max-w-4xl mx-auto">
                        <p className="font-playfair font-semibold text-4xl mb-5">
                            Our <span className="text-red">SERVICES</span>
                        </p>
                        <div className="flex justify-center my-5">
                            <LineGradient width="w-1/4" />
                        </div>
                        <p className="mt-6 text-lg max-w-2xl mx-auto text-grey">
                            Choose the perfect package for your needs. From simple theme-based sites to fully custom solutions.
                        </p>
                    </div>
                </motion.div>

                {/* Service Packages Grid */}
                <div className="mb-8 max-w-6xl mx-auto px-4 flex-grow">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                        {packages.map((pkg, index) => renderPackageCard(pkg, index))}
                    </div>
                </div>

                {/* Add-ons Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-6xl mx-auto"
                >
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                            Add-Ons & <span className="bg-gradient-rainblue bg-clip-text text-transparent">Extras</span>
                        </h3>
                        <p className="text-sm text-grey max-w-xl mx-auto">
                            Enhance your website with additional features and services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                        {addOns.map((addon, index) => renderAddonCard(addon, index))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => handleWhatsAppContact("Add-on Services")}
                            className="bg-gradient-rainblue text-deep-blue font-medium px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm flex items-center mx-auto"
                        >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Discuss Add-ons
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services;