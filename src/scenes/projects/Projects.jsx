/* eslint-disable */
import { useState } from "react";
import { projects as allProjects } from "../../constants";
import ProjectCard from "../../components/ProjectCard";
import FilterBar from "../../components/FilterBar";
import { useNavigate } from "react-router-dom";
import ProjectCardDetail from "../../components/ProjectCardDetail";

const Projects = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    tech: "",
    industry: "",
  });
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = allProjects.filter((project) => {
    const matchCategory =
      !filters.category || project.category === filters.category;

    const matchTechnology =
      !filters.technology || project.technologies.includes(filters.technology);

    const matchIndustry =
      !filters.industry || project.industry === filters.industry;

    const matchFeatured =
      filters.featured === "Featured Only"
        ? project.featured === true
        : filters.featured === "Non-Featured"
          ? project.featured !== true
          : true;

    return matchCategory && matchTechnology && matchIndustry && matchFeatured;
  });

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  const handleLaunchPresentation = () => {
    setSelectedProject(0);
    setIsDetailOpen(true);
  };

  return (
    <section className="px-6 sm:px-16 py-10">
      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.slice(0, visibleCount).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={handleProjectClick}
          />
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-white transition-all duration-300 ease-out rounded-full group bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:from-purple-600 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative font-semibold tracking-wide">
              Load More
            </span>
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M12 21a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
          <h2 className="text-xl font-semibold mb-2">No Projects Found</h2>
          <p className="text-gray-400 mb-6">
            Try adjusting your filters or resetting them to see all available
            projects.
          </p>
          <button
            onClick={() =>
              setFilters({
                category: "",
                tech: "",
                industry: "",
                featured: "",
              })
            }
            className="px-5 py-2 text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Reset Filters
          </button>
        </div>
      )}

      <ProjectCardDetail
        projects={filtered}
        initialSlide={selectedProject}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </section>
  );
};

export default Projects;
