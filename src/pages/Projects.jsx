import Navbar from "../scenes/Navbar"
import Footer from "../scenes/Footer"
import Projects from "../scenes/projects/Projects"
import ScrollToTop from "../components/ScrollToTop"
import Hero from "../scenes/projects/Hero"

const ProjectsPage = () => {
  return (
    <div className="app bg-deep-blue w-full">
      <Navbar />

      <div className="xs:w-5/6 mx-auto">
        <Hero />
      </div>

      <div className="xs:w-5/6 mx-auto">
        <Projects />
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default ProjectsPage
