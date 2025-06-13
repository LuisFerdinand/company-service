// Import all project images
import project1 from './project-1.jpeg';
import project2 from './project-2.jpeg';
import project3 from './project-3.jpeg';
import project4 from './project-4.jpeg';
import project5 from './project-5.jpeg';
import project6 from './project-6.jpeg';
import project7 from './project-7.jpeg';

// Projects data with images, titles, and subtitles
export const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        subtitle: "Modern online shopping experience with secure payment integration and user-friendly interface",
        image: project1,
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "Social Media Dashboard",
        subtitle: "Real-time analytics dashboard for social media management with interactive charts and data visualization",
        image: project2,
        technologies: ["React", "D3.js", "Express"]
    },
    {
        id: 3,
        title: "Task Management App",
        subtitle: "Collaborative project management tool with drag-and-drop functionality and team communication features",
        image: project3,
        technologies: ["React", "Firebase", "Material-UI"]
    },
    {
        id: 4,
        title: "Weather Forecast App",
        subtitle: "Beautiful weather application with geolocation support and 7-day forecast with stunning animations",
        image: project4,
        technologies: ["React", "Weather API", "CSS3"]
    },
    {
        id: 5,
        title: "Portfolio Website",
        subtitle: "Responsive personal portfolio showcasing projects with smooth animations and modern design principles",
        image: project5,
        technologies: ["React", "Framer Motion", "Tailwind CSS"]
    },
    {
        id: 6,
        title: "Blog Platform",
        subtitle: "Full-stack blogging platform with rich text editor, user authentication, and comment system",
        image: project6,
        technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
        id: 7,
        title: "Fitness Tracker",
        subtitle: "Health and fitness tracking application with workout plans, progress monitoring, and nutrition tracking",
        image: project7,
        technologies: ["React Native", "Redux", "Chart.js"]
    }
];

// Function to get all projects
export const getAllProjects = () => {
    return projectsData;
};

// Function to get a specific project by id
export const getProjectById = (id) => {
    return projectsData.find(project => project.id === id);
};

// Function to get projects by technology
export const getProjectsByTechnology = (tech) => {
    return projectsData.filter(project => 
        project.technologies.some(technology => 
            technology.toLowerCase().includes(tech.toLowerCase())
        )
    );
};

// Function to add a new project (for future use)
export const addNewProject = (newProject) => {
    const project = {
        id: projectsData.length + 1,
        ...newProject
    };
    projectsData.push(project);
    return project;
};

export default projectsData;