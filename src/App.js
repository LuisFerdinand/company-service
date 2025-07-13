import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectsPage from "./pages/Projects"
import ScrollToTopOnMount from "./components/ScrollToTopOnMount"
// import ProjectDetailPage from "./scenes/ProjectDetailPage";

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
