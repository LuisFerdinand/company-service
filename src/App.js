"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./scenes/Navbar"
import Landing from "./scenes/Landing"
import DotGroup from "./scenes/DotGroup"
import WorkflowServices from "./scenes/WorkflowServices"
import AboutUs from "./scenes/AboutUs"
import Projects from "./scenes/Projects"
import ProjectsDetail from "./scenes/ProjectsDetail"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
import useMediaQuery from "./components/hooks/useMediaQuery"
import { useEffect, useState, useRef } from "react"
import Services from "./scenes/Services"

// Main Home Component
function Home() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 1060px)")

  // Refs for each section
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workflowRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for scroll-based navigation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setSelectedPage(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = [
      { ref: homeRef, id: "home" },
      { ref: aboutRef, id: "about" },
      { ref: workflowRef, id: "workflow" },
      { ref: servicesRef, id: "services" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ]

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id
        observer.observe(ref.current)
      }
    })

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      {/* Home Section */}
      <div ref={homeRef} className="xs:w-5/6 mx-auto">
        {isDesktop && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
        <Landing setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="xs:w-5/6 mx-auto">
        <AboutUs />
      </div>

      {/* Workflow Section */}
      <div ref={workflowRef} className="xs:w-5/6 mx-auto">
        <WorkflowServices />
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="xs:w-5/6 mx-auto">
        <Services />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="xs:w-5/6 mx-auto">
        <Projects />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="xs:w-5/6 mx-auto">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-detail" element={<ProjectsDetail />} />
      </Routes>
    </Router>
  )
}

export default App
