import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../components/hooks/useMediaQuery";
import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { HiMenu, HiX, HiCode, HiLightningBolt, HiHome, HiUser, HiCog, HiBriefcase, HiMail } from "react-icons/hi";

const Link = ({ page, selectedPage, setSelectedPage, onClick, isMobile = false }) => {
    const lowerCasePage = page.toLowerCase();

        const navigate = useNavigate();
    
        const handleViewAllProjects = () => {
            navigate("/projects-detail")
        };

    // Updated icon mapping to match DotGroup
    const getIcon = (pageName) => {
        const iconMap = {
            home: <HiHome className="w-4 h-4" />,
            about: <HiUser className="w-4 h-4" />,
            workflow: <HiLightningBolt className="w-4 h-4" />,
            services: <HiCog className="w-4 h-4" />,
            projects: <HiBriefcase className="w-4 h-4" />,
            contact: <HiMail className="w-4 h-4" />
        };
        return iconMap[pageName.toLowerCase()] || null;
    };

    const handleClick = () => {
        setSelectedPage(lowerCasePage);
        if (onClick) onClick();
    };

    return (
        <AnchorLink
            className={`group relative flex items-center gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-xl font-opensans text-xs sm:text-sm font-medium transition-all duration-300 ${selectedPage === lowerCasePage
                ? "text-white bg-blue/10 shadow-lg shadow-blue/20"
                : "text-white/80 hover:text-white hover:bg-white/5"
                } ${isMobile ? 'w-full justify-start' : 'justify-center'}`}
            href={`#${lowerCasePage}`}
            onClick={handleClick}
            offset={80}
        >
            {/* Icon for mobile or selected state */}
            {(isMobile || selectedPage === lowerCasePage) && getIcon(page)}

            {/* Page name */}
            <span className="relative whitespace-nowrap">
                {page}
                {/* Animated underline for desktop */}
                {!isMobile && (
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue to-purple transition-all duration-300 ${selectedPage === lowerCasePage ? 'w-full' : 'w-0 group-hover:w-full'
                        }`} />
                )}
            </span>

            {/* Hover effect for desktop */}
            {!isMobile && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            )}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Updated media queries - mobile menu now shows from md screens down
    const showMobileMenu = useMediaQuery("(max-width: 1023px)"); // lg breakpoint is 1024px
    const isLargeScreen = useMediaQuery("(min-width: 1280px)");

    // Enhanced scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigate = useNavigate();
    
        const handleViewAllProjects = () => {
            navigate("/projects-detail")
        };

    // Close mobile menu when switching to larger screens
    useEffect(() => {
        if (!showMobileMenu) {
            setIsMenuOpen(false);
        }
    }, [showMobileMenu]);

    // Dynamic navbar styling
    const navbarStyle = scrolled
        ? "bg-deep-blue/95 border-b border-white/10 shadow-2xl shadow-black/20"
        : "bg-transparent";

    // Synchronized navigation items - matches DotGroup exactly
    const navigationItems = [
        "Home",
        "About",
        "Workflow",
        "Services",
        "Projects",
        "Contact"
    ];

    return (
        <nav className={`${navbarStyle} fixed top-0 w-full z-20 transition-all duration-500`}>
            <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

                    {/* Logo Section - More compact on smaller screens */}
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        {/* Animated logo container */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue via-purple to-yellow rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative bg-deep-blue rounded-lg p-1 sm:p-1.5 md:p-2 border border-white/10">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue to-purple rounded flex items-center justify-center">
                                    <HiCode className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Company name - Hide text on mobile, show shortened version on small screens */}
                        <div className="hidden xs:flex sm:flex flex-col">
                            <h1 className="font-inter text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight">
                                {/* Show "DS" on small screens, "Digital" on medium+ */}
                                <span className="sm:hidden">DS</span>
                                <span className="hidden sm:inline">Digital</span>
                            </h1>
                            <span className="font-opensans text-xs text-blue font-medium tracking-widest uppercase">
                                {/* Show "Sol" on small screens, "Solutions" on medium+ */}
                                <span className="sm:hidden">Sol</span>
                                <span className="hidden sm:inline">Solutions</span>
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation - Only show on large screens (lg+) */}
                    <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-4">
                        <div className="flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item}
                                    page={item}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            ))}
                        </div>
                    </div>

                    {/* CTA Button - Only show on large screens */}
                    <div className="hidden lg:flex items-center flex-shrink-0">
                        <AnchorLink href="#services" offset={80}>
                            <button 
                                onClick={handleViewAllProjects}
                                className="relative group px-3 md:px-4 lg:px-6 py-2 bg-gradient-to-r from-blue to-purple rounded-xl font-opensans text-xs md:text-sm font-semibold text-white shadow-lg shadow-blue/25 hover:shadow-blue/40 transition-all duration-300 hover:scale-105">
                                <span className="relative z-10 whitespace-nowrap">
                                    View Full Portfolio
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple to-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </AnchorLink>
                    </div>

                    {/* Mobile Menu Button - Show from md screens down (below lg) */}
                    {showMobileMenu && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative group p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                            aria-label="Toggle mobile menu"
                        >
                            <div className="w-5 h-5 flex items-center justify-center">
                                {isMenuOpen ? (
                                    <HiX className="w-4 h-4 text-white transition-transform duration-300 rotate-90" />
                                ) : (
                                    <HiMenu className="w-4 h-4 text-white transition-transform duration-300" />
                                )}
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu - Show for md screens and below */}
            {showMobileMenu && (
                <>
                    {/* Backdrop */}
                    <div
                        className={`z-30 fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Menu Panel - Responsive width */}
                    <div className={`z-40 fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-deep-blue/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                        {/* Menu Header */}
                        <div className="p-4 sm:p-6 border-b border-white/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue to-purple rounded-xl flex items-center justify-center">
                                        <HiCode className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="font-inter text-base sm:text-lg font-bold text-white">Digital</h2>
                                        <span className="font-opensans text-xs text-blue font-medium tracking-widest uppercase">Solutions</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                    aria-label="Close mobile menu"
                                >
                                    <HiX className="w-4 h-4 text-white/60" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="p-4 sm:p-6 space-y-2 flex-1 overflow-y-auto">
                            {navigationItems.map((item, index) => (
                                <div
                                    key={item}
                                    className="animate-in slide-in-from-right duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <Link
                                        page={item}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        onClick={() => setIsMenuOpen(false)}
                                        isMobile={true}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="p-4 sm:p-6 border-t border-white/10 mt-auto">
                            <AnchorLink href="#services" offset={80}>
                                <button
                                    onClick={handleViewAllProjects}
                                    className="w-full py-3 bg-gradient-to-r from-blue to-purple rounded-xl font-opensans text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                    View Full Portfolio
                                </button>
                            </AnchorLink>
                        </div>

                        {/* Digital decoration */}
                        <div className="absolute top-1/2 -left-1 w-1 h-32 bg-gradient-to-b from-blue via-purple to-yellow rounded-r-full opacity-50"></div>
                    </div>
                </>
            )}

            {/* Animated bottom border */}
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue via-purple to-yellow transition-all duration-1000 ${scrolled ? 'w-full opacity-50' : 'w-0 opacity-0'
                }`} />
        </nav>
    );
};

export default Navbar;