/* eslint-disable */
import { useState, useEffect } from "react"
import useMediaQuery from "../components/hooks/useMediaQuery"
import { useNavigate } from "react-router-dom"
import { HiMenu, HiX, HiCode, HiLightningBolt, HiHome, HiUser, HiCog, HiBriefcase, HiMail } from "react-icons/hi"
import { ChevronDown } from "lucide-react"

const Link = ({ page, selectedPage, setSelectedPage, onClick, isMobile = false, subMenu = false }) => {
  const lowerCasePage = page.toLowerCase()
  const navigate = useNavigate()
  const location = window.location.pathname

  const getIcon = (pageName) => {
    const iconMap = {
      beranda: <HiHome className="w-4 h-4" />,
      tentang: <HiUser className="w-4 h-4" />,
      alur: <HiLightningBolt className="w-4 h-4" />,
      layanan: <HiCog className="w-4 h-4" />,
      proyek: <HiBriefcase className="w-4 h-4" />,
      kontak: <HiMail className="w-4 h-4" />,
    }
    return iconMap[pageName] || null
  }

  // Map Bahasa names to English routes
  const getRoute = (pageName) => {
    const routeMap = {
      beranda: 'home',
      tentang: 'about',
      alur: 'workflow',
      layanan: 'services',
      proyek: 'projects',
      kontak: 'contact'
    }
    return routeMap[pageName] || pageName
  }

  const handleClick = () => {
    const route = getRoute(lowerCasePage)
    navigate(`/#${route}`)
    if (onClick) onClick()
  }

  // Enhanced active state logic for Projects
  const isActive = () => {
    if (lowerCasePage === 'proyek') {
      // Projects is active if:
      // 1. selectedPage is 'projects' (home page #projects section)
      // 2. current location is '/projects' (projects page)
      return selectedPage === 'projects' || location === '/projects'
    }
    // For other pages, map to English route for comparison
    const route = getRoute(lowerCasePage)
    return selectedPage === route || location === `/${route}`
  }

  return (
    <button
      onClick={handleClick}
      className={`group relative flex items-center gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-xl font-opensans text-xs sm:text-sm font-medium transition-all duration-300 ${isActive()
        ? "text-white bg-blue/10 shadow-lg shadow-blue/20"
        : "text-white/80 hover:text-white hover:bg-white/5"
        } ${isMobile ? "w-full justify-start" : "justify-center"}`}
    >
      {isMobile && getIcon(lowerCasePage)}
      <span className="relative flex whitespace-nowrap justify-between w-full">
        {page}
        {subMenu && <ChevronDown className="w-4 h-4" />}
        {!isMobile && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue to-purple transition-all duration-300 ${isActive() ? "w-full" : "w-0 group-hover:w-full"
              }`}
          />
        )}
      </span>
      {!isMobile && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      )}
    </button>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false) // Add dropdown state
  const location = window.location.pathname
  const navigate = useNavigate()

  // Updated media queries - mobile menu now shows from md screens down
  const showMobileMenu = useMediaQuery("(max-width: 1023px)") // lg breakpoint is 1024px
  const isLargeScreen = useMediaQuery("(min-width: 1280px)")

  // Enhanced scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleViewAllProjects = () => {
    navigate("/projects")
  }

  // Handle logo click to navigate home - with null check
  const handleLogoClick = () => {
    navigate("/#home")
    // Only call setSelectedPage if it exists (for backward compatibility)
    if (setSelectedPage && typeof setSelectedPage === 'function') {
      setSelectedPage("home")
    }
  }

  // Close mobile menu when switching to larger screens
  useEffect(() => {
    if (!showMobileMenu) {
      setIsMenuOpen(false)
    }
  }, [showMobileMenu])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest(".dropdown-container")) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen])

  // Dynamic navbar styling
  const navbarStyle = scrolled
    ? "bg-deep-blue/95 border-b border-white/10 shadow-2xl shadow-black/20"
    : "bg-transparent"

  // Updated navigation items - Bahasa names with English hrefs
  const navigationItems = [
    { name: "Beranda", href: "/#home" },
    { name: "Tentang", href: "/#about" },
    { name: "Alur", href: "/#workflow" },
    { name: "Layanan", href: "/#services" },
    {
      name: "Proyek",
      submenu: [
        { label: "Portofolio", href: "/#projects" },
        { label: "Semua Proyek", href: "/projects" },
      ],
    },
    { name: "Kontak", href: "/#contact" },
  ]

  return (
    <nav className={`${navbarStyle} fixed top-0 w-full z-20 transition-all duration-500`}>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo Section - Wrapped with navigation to home */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group cursor-pointer"
            aria-label="Navigate to home"
          >
            {/* Animated logo container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue via-purple to-yellow rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-deep-blue rounded-lg p-1 sm:p-1.5 md:p-2 border border-white/10">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue to-purple rounded flex items-center justify-center">
                  <img
                    src="/logo.ico"
                    alt="Digital Solutions Logo"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5"
                  />
                </div>
              </div>
            </div>
            {/* Company name - Hide text on mobile, show shortened version on small screens */}
            <div className="hidden xs:flex sm:flex flex-col">
              <h1 className="font-inter text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-blue transition-colors duration-300">
                {/* Show "DS" on small screens, "Digital" on medium+ */}
                <span className="sm:hidden">DS</span>
                <span className="hidden sm:inline">Digital</span>
              </h1>
              <span className="font-opensans text-xs text-blue font-medium tracking-widest uppercase group-hover:text-purple transition-colors duration-300">
                {/* Show "Sol" on small screens, "Solutions" on medium+ */}
                <span className="sm:hidden">Sol</span>
                <span className="hidden sm:inline">Solutions</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation - Only show on large screens (lg+) */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-4xl mx-4">
            <div className="flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              {navigationItems.map((item) =>
                item.submenu ? (
                  <NavDropdown
                    key={item.name}
                    items={item.submenu}
                    name={item.name}
                    isMobile={false}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    dropdownOpen={dropdownOpen}
                    setDropdownOpen={setDropdownOpen}
                  />
                ) : (
                  <Link
                    key={item.name}
                    page={item.name}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ),
              )}
            </div>
          </div>

          {/* CTA Button - Only show on large screens */}
          {location !== "/projects" && (
            <div className="hidden md:flex items-center flex-shrink-0">
              <button
                onClick={handleViewAllProjects}
                className="relative group px-3 md:px-4 lg:px-6 py-2 bg-gradient-to-r from-blue to-purple rounded-xl font-opensans text-xs md:text-sm font-semibold text-white shadow-lg shadow-blue/25 hover:shadow-blue/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 whitespace-nowrap">Semua Proyek</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple to-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          )}

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
            className={`z-30 fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu Panel - Responsive width */}
          <div
            className={`z-40 fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-deep-blue/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* Menu Header - Also clickable for navigation */}
            <div className="p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    handleLogoClick()
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center gap-3 group"
                  aria-label="Navigate to home"
                >
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue to-purple rounded-xl flex items-center justify-center">
                    <HiCode className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-inter text-base sm:text-lg font-bold text-white group-hover:text-blue transition-colors duration-300">Digital</h2>
                    <span className="font-opensans text-xs text-blue font-medium tracking-widest uppercase group-hover:text-purple transition-colors duration-300">
                      Solutions
                    </span>
                  </div>
                </button>
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
            <div className="p-4 sm:p-6 space-y-2 flex-1">
              {navigationItems.map((item, index) =>
                item.name === "Proyek" ? (
                  <NavDropdown
                    key="projects-dropdown"
                    name={item.name}
                    items={item.submenu}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isMobile={true}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ) : (
                  <div
                    key={item.name}
                    className="animate-in slide-in-from-right duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      page={item.name}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      isMobile={true}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                ),
              )}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 sm:p-6 border-t border-white/10 mt-auto">
              <button
                onClick={() => {
                  handleViewAllProjects()
                  setIsMenuOpen(false)
                }}
                className="w-full py-3 bg-gradient-to-r from-blue to-purple rounded-xl font-opensans text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Semua Proyek
              </button>
            </div>

            {/* Digital decoration */}
            <div className="absolute top-1/2 -left-1 w-1 h-32 bg-gradient-to-b from-blue via-purple to-yellow rounded-r-full opacity-50"></div>
          </div>
        </>
      )}

      {/* Animated bottom border */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue via-purple to-yellow transition-all duration-1000 ${scrolled ? "w-full opacity-50" : "w-0 opacity-0"
          }`}
      />
    </nav>
  )
}

const NavDropdown = ({
  isMobile = false,
  onClick,
  name,
  selectedPage,
  setSelectedPage,
  items,
  dropdownOpen,
  setDropdownOpen,
}) => {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = window.location.pathname

  const handleNavigate = (href) => {
    if (onClick) onClick()
    if (href.startsWith("/#")) {
      // Extract the section from href (e.g., "/#projects" -> "projects")
      const section = href.replace("/#", "")
      navigate(`/#${section}`)
      // Only call setSelectedPage if it exists
      if (setSelectedPage && typeof setSelectedPage === 'function') {
        setSelectedPage(section)
      }
    } else {
      navigate(href)
    }
    // Close dropdowns after navigation
    if (setDropdownOpen) setDropdownOpen(false)
    setMobileDropdownOpen(false)
  }

  const handleDropdownToggle = (e) => {
    e.stopPropagation()
    if (isMobile) {
      setMobileDropdownOpen(!mobileDropdownOpen)
    } else {
      if (setDropdownOpen) setDropdownOpen(!dropdownOpen)
    }
  }

  // Enhanced active state for dropdown button
  const isDropdownActive = () => {
    if (name.toLowerCase() === 'proyek') {
      return selectedPage === 'projects' || location === '/projects'
    }
    return selectedPage === name.toLowerCase() || location === `/${name.toLowerCase()}`
  }

  const isOpen = isMobile ? mobileDropdownOpen : dropdownOpen

  if (isMobile) {
    return (
      <div className="space-y-2">
        <button
          onClick={handleDropdownToggle}
          className={`group relative flex items-center gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-xl font-opensans text-xs sm:text-sm font-medium transition-all duration-300 w-full justify-between ${isDropdownActive()
            ? "text-white bg-blue/10 shadow-lg shadow-blue/20"
            : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
        >
          <div className="flex items-center gap-2">
            <HiBriefcase className="w-4 h-4" />
            <span>{name}</span>
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Mobile Submenu */}
        <div
          className={`ml-6 space-y-1 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          {items.map((sub, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(sub.href)}
              className="block w-full text-left px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {sub.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Desktop dropdown
  return (
    <div className="relative dropdown-container">
      <button
        onClick={handleDropdownToggle}
        className={`group relative flex items-center gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-xl font-opensans text-xs sm:text-sm font-medium transition-all duration-300 ${isDropdownActive()
          ? "text-white bg-blue/10 shadow-lg shadow-blue/20"
          : "text-white/80 hover:text-white hover:bg-white/5"
          }`}
      >
        <span className="relative flex whitespace-nowrap items-center justify-between w-full">
          {name}
          <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue to-purple transition-all duration-300 ${isDropdownActive() ? "w-full" : "w-0 group-hover:w-full"
              }`}
          />
        </span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </button>

      {/* Desktop Dropdown Menu */}
      <div
        className={`absolute top-full mt-2 w-48 bg-deep-blue border border-white/10 rounded-xl shadow-lg transition-all duration-200 z-20 ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        {items.map((sub, index) => (
          <button
            key={index}
            onClick={() => handleNavigate(sub.href)}
            className="cursor-pointer block px-4 py-2 text-sm text-white hover:bg-white/10 transition w-full text-left first:rounded-t-xl last:rounded-b-xl"
          >
            {sub.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar;