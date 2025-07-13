import Navbar from "../scenes/Navbar"
import Footer from "../scenes/Footer"
import Projects from "../scenes/projects/Projects"
import ScrollToTop from "../components/ScrollToTop"

import Hero from "../scenes/projects/Hero"
import Stats from "../scenes/projects/Stats"

const ProjectsPage = () => {
  return (
    <div className="app bg-deep-blue w-full">
      <Navbar />

      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero></Hero>
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full ">
          <Stats></Stats>
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Projects />
        </div>
      </div>
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default ProjectsPage
