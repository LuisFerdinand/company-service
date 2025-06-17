import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import LineGradient from "./components/LineGradient";
import WorkflowServices from "./scenes/WorkflowServices";
import AboutUs from "./scenes/AboutUs"; // Add this import
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
// import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";
import Services from "./scenes/Services";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      </div>

      {/* Add About Us Section */}
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <AboutUs />
      </div>

      <LineGradient />
      <div className="mx-auto md:h-full">
        <WorkflowServices />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Services />
      </div>


      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      {/* <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div> */}

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;