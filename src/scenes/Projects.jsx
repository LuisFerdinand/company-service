import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectCardDetail from '../components/ProjectCardDetail';

// Mock project data - replace with your actual data
const mockProjects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        subtitle: "A modern, responsive e-commerce solution with advanced features",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        description: "Built a comprehensive e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Features include real-time notifications, advanced search, and mobile-responsive design.",
        href: "#"
    },
    {
        id: 2,
        title: "AI Dashboard",
        subtitle: "Interactive analytics dashboard powered by machine learning",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["Python", "TensorFlow", "React", "D3.js"],
        description: "Developed an AI-powered analytics dashboard that processes large datasets and provides predictive insights. Includes data visualization, machine learning models, and real-time data processing capabilities.",
        href: "#"
    },
    {
        id: 3,
        title: "Mobile Banking App",
        subtitle: "Secure and intuitive mobile banking solution",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
        description: "Created a secure mobile banking application with biometric authentication, transaction history, bill payments, and budget tracking. Implemented end-to-end encryption and fraud detection systems.",
        href: "#"
    },
    {
        id: 4,
        title: "Social Media Platform",
        subtitle: "Next-generation social networking experience",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        technologies: ["Next.js", "GraphQL", "Redis", "AWS"],
        description: "Built a scalable social media platform with real-time messaging, content sharing, and advanced privacy controls. Features include AI-powered content moderation and personalized feeds.",
        href: "#"
    }
];
const LineGradient = ({ width = "w-full" }) => (
    <div className={`h-0.5 ${width} bg-gradient-to-r from-blue to-purple`} />
  );

const Projects = () => {
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
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col jsutify-center items-center mb-12"
                >
                    <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-grey mb-1">
                        Featured <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">Projects</span>
                    </h2>
                        <LineGradient width="w-16 sm:w-24" />
                    <p className="text-gray-400 text-[12px] xs:text-sm sm:text-base max-w-2xl mx-auto mt-4">
                        Explore our latest work through an immersive presentation experience
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {mockProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={handleProjectClick}
                        />
                    ))}
                </div>

                {/* Launch Presentation Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <button
                        onClick={handleLaunchPresentation}
                        className="bg-gradient-to-r from-blue to-purple hover:scale-105 text-grey px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-blue/25 transition-all duration-300 flex items-center space-x-3 mx-auto"
                    >
                        <Maximize2 size={24} />
                        <span>Launch Full Presentation</span>
                    </button>
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            <ProjectCardDetail
                projects={mockProjects}
                initialSlide={selectedProject}
                isOpen={isDetailOpen}
                onClose={handleCloseDetail}
            />
        </section>
    );
};

export default Projects;