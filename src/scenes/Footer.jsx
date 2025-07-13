import SocialMediaIcons from "../components/SocialMediaIcons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Sparkles,
  Zap,
  Globe,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Workflow", href: "#workflow" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Mobile Apps",
    "SEO Optimization",
    "Digital Marketing",
  ];

  const floatingIcons = [
    { icon: Code, delay: 0, x: "15%", y: "20%" },
    { icon: Sparkles, delay: 1, x: "85%", y: "30%" },
    { icon: Zap, delay: 2, x: "25%", y: "70%" },
    { icon: Globe, delay: 3, x: "75%", y: "60%" },
    { icon: Heart, delay: 4, x: "50%", y: "85%" },
  ];

  // eslint-disable-next-line
  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to know more about your website services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your actual WhatsApp number
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:your-email@domain.com";
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Smaller on mobile */}
        <div className="absolute top-5 left-5 w-20 h-20 md:top-20 md:left-20 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-24 h-24 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-64 md:h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Animated Waves - Smaller on mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-8 md:h-32 opacity-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <motion.path
              d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Floating Icons - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingIcons.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <motion.div
              key={index}
              className="absolute text-white/10"
              style={{ left: element.x, top: element.y }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 360],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 8,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IconComponent className="w-8 h-8" />
            </motion.div>
          );
        })}
      </div>

      {/* Reduced padding for mobile */}
      <div className="relative z-10 pt-6 md:pt-12 lg:pt-20 pb-3 md:pb-6 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Main Footer Content - Reduced spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8 lg:mb-16">
            {/* Brand Section - Compact on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-1 md:col-span-2 lg:col-span-2"
            >
              <div className="mb-2 md:mb-4 lg:mb-6">
                <h3 className="font-playfair font-bold text-2xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-0.5 md:mb-1 lg:mb-2 drop-shadow-lg">
                  JANE ESPER
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-medium tracking-wider">
                  PROFESSIONAL WEB DEVELOPMENT SERVICES
                </p>
              </div>
              <p className="text-white/80 mb-3 md:mb-6 lg:mb-8 leading-relaxed text-sm md:text-base lg:text-lg max-w-md">
                Creating exceptional digital experiences that drive results.
                From concept to launch, we deliver professional web solutions
                tailored to your business needs.
              </p>
              <div className="mb-3 md:mb-6 lg:mb-8">
                <SocialMediaIcons />
              </div>

              {/* Contact Info - Compact spacing */}
              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <motion.div
                  className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={handleEmailContact}
                >
                  <div className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm">Email</p>
                    <p className="text-white font-medium text-sm md:text-base">
                      your-email@domain.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm">Phone</p>
                    <p className="text-white font-medium text-sm md:text-base">
                      +62 xxx-xxxx-xxxx
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm">Location</p>
                    <p className="text-white font-medium text-sm md:text-base">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1"
            >
              <h4 className="font-playfair font-semibold text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2 md:mb-4 lg:mb-8">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-1 md:gap-2 lg:gap-3">
                {footerLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <AnchorLink
                      href={link.href}
                      className="text-white/80 hover:text-yellow-400 transition-all duration-300 block py-0.5 md:py-1 lg:py-2 text-sm md:text-base lg:text-lg hover:font-medium relative group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </AnchorLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-1 hidden md:block"
            >
              <h4 className="font-playfair font-semibold text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2 md:mb-4 lg:mb-8">
                Services
              </h4>
              <div className="grid grid-cols-1 gap-1 md:gap-2 lg:gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white/80 hover:text-yellow-400 transition-all duration-300 block py-0.5 md:py-1 lg:py-2 text-sm md:text-base lg:text-lg hover:font-medium cursor-pointer relative group"
                  >
                    <span className="relative z-10">{service}</span>
                    <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Divider */}
          <div className="relative mb-2 md:mb-4 lg:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 w-6 md:w-12 lg:w-16 h-px"></div>
          </div>

          {/* Bottom Section - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col lg:flex-row justify-between items-center space-y-2 md:space-y-3 lg:space-y-0 pb-12 pt-6"
          >
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-sm md:text-base lg:text-lg mb-0.5 md:mb-1 lg:mb-2">
                ©{currentYear} DS. All Rights Reserved.
              </p>
              <p className="text-white/60 text-xs md:text-sm flex items-center justify-center lg:justify-start">
                Made with <Heart size={12} className="mx-1 text-red-500" /> in
                Jakarta, Indonesia
              </p>
            </div>
          </motion.div>

          {/* Enhanced Back to Top Button - Smaller on mobile */}
          {/* <motion.div
            className="text-center mt-4 md:mt-6 lg:mt-12"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AnchorLink
              href="#home"
              className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border-2 border-white/20 group"
            >
              <ArrowUp className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </AnchorLink>
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
