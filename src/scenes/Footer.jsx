import SocialMediaIcons from "../components/SocialMediaIcons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "Home", href: "#home" },
        { name: "Workflow", href: "#workflow" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
    ];

    const handleWhatsAppContact = () => {
        const message = "Hi! I'd like to know more about your website services.";
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your actual WhatsApp number
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <footer className="relative bg-gradient-to-br from-deep-blue via-blue to-deep-blue overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-red rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl opacity-5"></div>
            </div>

            <div className="relative z-10 pt-16 pb-8">
                <div className="w-10/12 mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                        {/* Brand Section */}
                        <div className="text-center md:text-left">
                            <h3 className="font-playfair font-bold text-4xl text-white mb-4 drop-shadow-lg">
                                JE
                            </h3>
                            <p className="text-white/80 mb-6 leading-relaxed">
                                Creating exceptional websites that drive results. From concept to launch,
                                we deliver professional web solutions tailored to your business needs.
                            </p>
                            <div className="mb-6">
                                <SocialMediaIcons />
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h4 className="font-playfair font-semibold text-xl text-yellow mb-6">
                                Quick Links
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {footerLinks.map((link, index) => (
                                    <AnchorLink
                                        key={index}
                                        href={link.href}
                                        className="text-white/80 hover:text-yellow transition duration-300 hover:translate-x-1 transform block py-1"
                                    >
                                        {link.name}
                                    </AnchorLink>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center md:text-left">
                            <h4 className="font-playfair font-semibold text-xl text-yellow mb-6">
                                Get In Touch
                            </h4>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-yellow text-sm">📧</span>
                                    </div>
                                    <span className="text-white/80">your-email@domain.com</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-yellow text-sm">📱</span>
                                    </div>
                                    <span className="text-white/80">+62 xxx-xxxx-xxxx</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-yellow text-sm">📍</span>
                                    </div>
                                    <span className="text-white/80">Jakarta, Indonesia</span>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <button
                                onClick={handleWhatsAppContact}
                                className="bg-green hover:bg-green/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center md:justify-start space-x-2 mx-auto md:mx-0"
                            >
                                <span>💬</span>
                                <span>WhatsApp Us</span>
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/20 pt-8">
                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-center md:text-left">
                                <p className="font-playfair font-semibold text-2xl text-yellow mb-2">
                                    JANE ESPER
                                </p>
                                <p className="text-white/70 text-sm">
                                    Professional Web Development Services
                                </p>
                            </div>

                            <div className="text-center md:text-right">
                                <p className="font-playfair text-white/80 mb-2">
                                    ©{currentYear} ESPER. All Rights Reserved.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-white/60">
                                    <a href="#" className="hover:text-yellow transition duration-300">Privacy Policy</a>
                                    <span>•</span>
                                    <a href="#" className="hover:text-yellow transition duration-300">Terms of Service</a>
                                    <span>•</span>
                                    <a href="#" className="hover:text-yellow transition duration-300">Cookie Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back to Top Button */}
                    <div className="text-center mt-8">
                        <AnchorLink
                            href="#home"
                            className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-1 border border-white/20"
                        >
                            <span className="text-yellow text-xl">↑</span>
                        </AnchorLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;