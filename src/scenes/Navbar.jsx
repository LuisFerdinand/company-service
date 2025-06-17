import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { HiMenu, HiX, HiCode, HiLightningBolt, HiGlobe } from "react-icons/hi";

const Link = ({ page, selectedPage, setSelectedPage, onClick, isMobile = false }) => {
    const lowerCasePage = page.toLowerCase();
    
    // Icon mapping for digital solutions theme
    const getIcon = (pageName) => {
        const iconMap = {
            home: <HiGlobe className="w-4 h-4" />,
            about: <HiCode className="w-4 h-4" />,
            workflow: <HiLightningBolt className="w-4 h-4" />,
            services: <HiCode className="w-4 h-4" />,
            projects: <HiGlobe className="w-4 h-4" />,
            contact: <HiLightningBolt className="w-4 h-4" />
        };
        return iconMap[pageName.toLowerCase()] || null;
    };

    return (
        <AnchorLink
            className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl font-opensans text-sm font-medium transition-all duration-300 ${
                selectedPage === lowerCasePage 
                    ? "text-blue bg-blue/10 shadow-lg shadow-blue/20" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
            } ${isMobile ? 'w-full justify-start' : 'justify-center'}`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage);
                if (onClick) onClick();
            }}
        >
            {/* Icon for mobile or selected state */}
            {(isMobile || selectedPage === lowerCasePage) && getIcon(page)}
            
            {/* Page name */}
            <span className="relative">
                {page}
                {/* Animated underline for desktop */}
                {!isMobile && (
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue to-purple transition-all duration-300 ${
                        selectedPage === lowerCasePage ? 'w-full' : 'w-0 group-hover:w-full'
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
    const isDesktop = useMediaQuery("(min-width: 768px)");

    // Enhanced scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Dynamic navbar styling - removed backdrop-blur to prevent mobile menu issues
    const navbarStyle = scrolled
    ? "bg-deep-blue/95 border-b border-white/10 shadow-2xl shadow-black/20"
    : "bg-transparent";

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
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    
                    {/* Logo Section - Enhanced with digital elements */}
                    <div className="flex items-center gap-3">
                        {/* Animated logo container */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue via-purple to-yellow rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative bg-deep-blue rounded-lg p-2 border border-white/10">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue to-purple rounded flex items-center justify-center">
                                    <HiCode className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Company name */}
                        <div className="flex flex-col">
                            <h1 className="font-playfair text-xl lg:text-2xl font-bold text-white tracking-tight">
                                Digital
                            </h1>
                            <span className="font-opensans text-xs text-blue font-medium tracking-widest uppercase">
                                Solutions
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    {isDesktop && (
                        <div className="hidden sm:flex items-center space-x-1 lg:space-x-2">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item}
                                    page={item}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            ))}
                            
                            {/* CTA Button */}
                            <div className="ml-4">
                                <button className="relative group px-6 py-2 bg-gradient-to-r from-blue to-purple rounded-xl font-opensans text-sm font-semibold text-white shadow-lg shadow-blue/25 hover:shadow-blue/40 transition-all duration-300 hover:scale-105">
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple to-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    {!isDesktop && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative group p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                {isMenuOpen ? (
                                    <HiX className="w-5 h-5 text-white transition-transform duration-300 rotate-90" />
                                ) : (
                                    <HiMenu className="w-5 h-5 text-white transition-transform duration-300" />
                                )}
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {!isDesktop && (
                <>
                    {/* Backdrop */}
                    <div className={`z-30 fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`} onClick={() => setIsMenuOpen(false)} />
                    
                    {/* Menu Panel - Added backdrop-blur here only for mobile menu */}
                    <div className={`z-40 fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-deep-blue/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        {/* Menu Header */}
                        <div className="p-6 border-b border-white/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue to-purple rounded-xl flex items-center justify-center">
                                        <HiCode className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="font-playfair text-lg font-bold text-white">Digital</h2>
                                        <span className="font-opensans text-xs text-blue font-medium tracking-widest uppercase">Solutions</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                >
                                    <HiX className="w-5 h-5 text-white/60" />
                                </button>
                            </div>
                        </div>
                        
                        {/* Navigation Links */}
                        <div className="p-6 space-y-2">
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
                        <div className="p-6 border-t border-white/10 mt-auto">
                            <button className="w-full py-3 bg-gradient-to-r from-blue to-purple rounded-xl font-opensans text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                Get Started Today
                            </button>
                        </div>
                        
                        {/* Digital decoration */}
                        <div className="absolute top-1/2 -left-1 w-1 h-32 bg-gradient-to-b from-blue via-purple to-yellow rounded-r-full opacity-50"></div>
                    </div>
                </>
            )}
            
            {/* Animated bottom border */}
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue via-purple to-yellow transition-all duration-1000 ${
                scrolled ? 'w-full opacity-50' : 'w-0 opacity-0'
            }`} />
        </nav>
    );
};

export default Navbar;