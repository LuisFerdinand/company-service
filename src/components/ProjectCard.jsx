import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { getTechIcon } from "../constants";

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onClick(index)}
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {project.featured && (
            <div className="absolute top-2 left-2 z-10">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 text-white text-[11px] font-semibold shadow-lg backdrop-blur-sm ring-1 ring-white/10">
                <svg
                  className="size-5 text-[#facc15] animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.37 2.452a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.538 1.118l-3.37-2.452a1 1 0 00-1.175 0l-3.37 2.452c-.783.57-1.838-.197-1.538-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.064 9.377c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.95-.69l1.286-3.95z" />
                </svg>
                <span className="text-base">Featured</span>
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
              <Maximize2 size={24} className="text-white" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between min-h-[180px]">
          <div>
            <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
              {/* {project.featured ? "⭐ " : ""} */}
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-2 line-clamp-2">
              {project.subtitle}
            </p>
          </div>

          {/* Footer Section */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex space-x-1">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <div
                  key={i}
                  className="relative group/tech text-xs bg-gray-500/10 px-2 py-1 rounded flex items-center justify-center"
                  title={tech}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    {getTechIcon(tech)}
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                    {tech}
                  </div>
                </div>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs bg-gray-600/50 text-gray-300 px-2 py-1 rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <span className="text-blue-400 text-[12px] font-medium">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
