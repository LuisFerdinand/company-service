import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Rocket,
    Zap,
    Target,
    ShoppingCart,
    Palette,
    PenTool,
    Wrench,
    Clock,
    Users,
    CheckCircle,
    MessageCircle,
    ChevronLeft,
    ChevronRight,
    Code,
    Smartphone,
    Globe,
    Sparkles
} from "lucide-react";

// LineGradient component
const LineGradient = ({ width = "w-full" }) => (
    <div className={`h-0.5 ${width} bg-gradient-to-r from-yellow via-red to-yellow`} />
);

// Floating Components
const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div
        className={`absolute animate-float ${className}`}
        style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${delay}s`
        }}
    >
        {children}
    </div>
);

// Custom Arrow Components for React Slick
const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-300"
    >
        <ChevronLeft className="w-4 h-4 text-white" />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-300"
    >
        <ChevronRight className="w-4 h-4 text-white" />
    </button>
);

const Services = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    const packages = [
        {
            id: "starter",
            icon: Rocket,
            title: "Starter Package",
            subtitle: "Theme-Based Website",
            description: "Perfect launch pad for your digital presence",
            price: "Rp 2.000.000",
            duration: "3 - 7 days",
            bestFor: "Small businesses, portfolios",
            highlight: "Quick Launch",
            features: [
                "WordPress with premium theme",
                "Up to 5 pages",
                "Mobile responsive design",
                "Basic SEO setup",
                "Contact form integration"
            ],
            gradientColor: "from-blue to-cyan",
            popular: false
        },
        {
            id: "pro",
            icon: Zap,
            title: "Pro Package",
            subtitle: "Semi-Custom Website",
            description: "Perfect balance of customization and efficiency",
            price: "Rp 4.000.000",
            duration: "7 - 14 days",
            bestFor: "Growing businesses",
            highlight: "Most Popular",
            features: [
                "Custom design elements",
                "Up to 10 pages",
                "Performance optimization",
                "Analytics integration",
                "WhatsApp business setup"
            ],
            gradientColor: "from-purple to-pink",
            popular: true
        },
        {
            id: "advanced",
            icon: Target,
            title: "Advanced Package",
            subtitle: "Fully Custom Website",
            description: "Enterprise-grade solution tailored to your vision",
            price: "Rp 9.000.000",
            duration: "2 - 4 weeks",
            bestFor: "Serious businesses, startups",
            highlight: "Premium Solution",
            features: [
                "100% custom design & code",
                "Admin dashboard",
                "E-commerce ready",
                "Advanced SEO optimization",
                "1 month premium support"
            ],
            gradientColor: "from-orange to-red",
            popular: false
        }
    ];

    const addOns = [
        { id: "ecommerce", name: "E-commerce", price: "+Rp 2.000.000+", icon: ShoppingCart },
        { id: "logo", name: "Logo Design", price: "Rp 500.000", icon: Palette },
        { id: "content", name: "Content Creation", price: "Rp 500K - 1M", icon: PenTool },
        { id: "maintenance", name: "Maintenance", price: "Rp 300K/month", icon: Wrench }
    ];

    useEffect(() => {
        const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleWhatsAppContact = (packageName) => {
        const message = `Hi! I'm interested in the ${packageName}. Can we discuss the details?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "085248209388";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const PackageCard = ({ item }) => {
        const IconComponent = item.icon;

        return (
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group h-full flex flex-col mx-2 ${item.popular ? 'ring-1 ring-yellow/60 shadow-lg' : ''
                }`}>

                {/* Highlight Badge */}
                <div className="relative p-3 pb-0">
                    <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${item.popular
                        ? 'bg-gradient-to-r from-yellow to-red text-white'
                        : `bg-gradient-to-r ${item.gradientColor} text-white`
                        }`}>
                        <Sparkles className="w-2.5 h-2.5 mr-1" />
                        {item.highlight}
                    </div>

                    {/* Icon & Title */}
                    <div className="text-center">
                        <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r ${item.gradientColor} flex items-center justify-center transition-transform duration-300 shadow-md`}>
                            <IconComponent className="w-5 h-5 text-white" />
                        </div>

                        <h3 className="font-bold text-lg text-white mb-1">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs mb-2">{item.subtitle}</p>
                    </div>
                </div>

                {/* Pricing */}
                <div className="px-3 pb-2 text-center">
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="font-bold text-xl bg-gradient-to-r from-yellow to-red bg-clip-text text-transparent">
                            {item.price}
                        </p>
                        <p className="text-white text-xs font-medium mt-0.5 flex items-center justify-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.duration}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex-grow flex flex-col">
                    {/* Best For */}
                    <div className="mb-2 p-2 bg-gradient-to-r from-white/5 to-white/10 rounded-md border border-white/10">
                        <p className="text-xs font-medium text-white mb-0.5 flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            Perfect For:
                        </p>
                        <p className="text-xs text-gray-400">{item.bestFor}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-3 flex-grow">
                        <h4 className="font-medium text-white mb-1.5 flex items-center text-xs">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                            Key Features:
                        </h4>
                        <ul className="space-y-1">
                            {item.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-xs">
                                    <div className="w-1 h-1 bg-gradient-to-r from-yellow to-red rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                    <span className="text-gray-400">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => handleWhatsAppContact(item.title)}
                        className={`w-full py-2 px-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center text-xs mt-auto ${item.popular
                            ? 'bg-gradient-to-r from-yellow to-red text-white'
                            : `bg-gradient-to-r ${item.gradientColor} text-white`
                            }`}
                    >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Get Started Now
                    </button>
                </div>
            </div>
        );
    };

    // Slider settings
    const sliderSettings = {
        dots: !isDesktop,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: !isDesktop,
        draggable: !isDesktop,
        swipe: !isDesktop,
        touchMove: !isDesktop,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    draggable: true,
                    swipe: true,
                    touchMove: true,
                    infinite: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    draggable: true,
                    swipe: true,
                    touchMove: true,
                    infinite: false
                }
            }
        ]
    };

    return (
        <section id="services" className="pt-16 pb-8 relative overflow-hidden min-h-screen">
            {/* Floating Elements - Smaller */}
            <FloatingElement delay={0} className="top-10 left-5 text-blue-400/20">
                <Code className="w-5 h-5" />
            </FloatingElement>
            <FloatingElement delay={2} className="top-20 right-10 text-purple-400/20">
                <Smartphone className="w-4 h-4" />
            </FloatingElement>
            <FloatingElement delay={4} className="bottom-20 left-10 text-cyan-400/20">
                <Globe className="w-6 h-6" />
            </FloatingElement>
            <FloatingElement delay={1} className="top-32 right-5 text-pink-400/30">
                <Sparkles className="w-5 h-5" />
            </FloatingElement>

            {/* Background Gradients - Smaller */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-3">
                {/* Header - Compact */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Our <span className="bg-gradient-to-r from-yellow to-red bg-clip-text text-transparent">Services</span>
                    </h2>
                    <div className="flex justify-center my-3">
                        <LineGradient width="w-16" />
                    </div>
                    <p className="text-[12px] xs:text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Transform your business with our comprehensive web development packages.
                        From rapid deployment to custom enterprise solutions.
                    </p>
                </div>

                {/* Packages Slider */}
                <div className="mb-16">
                    <Slider {...sliderSettings}>
                        {packages.map((pkg) => (
                            <div key={pkg.id} className="px-2">
                                <PackageCard item={pkg} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Add-ons Section - Compact */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                    <div className="text-center mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            Enhance Your <span className="bg-gradient-to-r from-yellow to-red bg-clip-text text-transparent">Package</span>
                        </h3>
                        <p className="text-gray-300 max-w-xl mx-auto text-sm">
                            Supercharge your website with these professional add-ons
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {addOns.map((addon, index) => {
                            const IconComponent = addon.icon;
                            return (
                                <div
                                    key={addon.id}
                                    className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 p-3 group cursor-pointer hover:transform"
                                    onClick={() => handleWhatsAppContact(addon.name)}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <h4 className="font-medium text-white text-xs truncate">{addon.name}</h4>
                                            <p className="text-yellow text-xs font-medium">{addon.price}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => handleWhatsAppContact("Custom Package Discussion")}
                            className="bg-gradient-to-r from-yellow to-red text-white font-medium px-6 py-2.5 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto text-sm"
                        >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Let's Build Something Amazing
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                /* Custom Slick Slider Styles */
                .slick-dots {
                    bottom: -40px;
                }
                
                .slick-dots li button:before {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 8px;
                }
                
                .slick-dots li.slick-active button:before {
                    background: linear-gradient(to right, #fbbf24, #ef4444);
                    color: transparent;
                    border-radius: 50%;
                }
            `}</style>
        </section>
    );
};

export default Services;