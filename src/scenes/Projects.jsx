import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { getAllProjects } from "../assets/projectsData";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 }
};

const Project = ({ title, subtitle, image, technologies }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    return (
        <motion.div
            variants={projectVariant}
            className="relative"
        >
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {subtitle}
                </p>
                {technologies && (
                    <div className="mt-4">
                        <div className="flex flex-wrap justify-center gap-2">
                            {technologies.map((tech, index) => (
                                <span 
                                    key={index}
                                    className="bg-deep-blue text-white px-2 py-1 rounded text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
};

const Projects = () => {
    // Get all projects data from the assets file
    const projects = getAllProjects();

    return (
        <section id="projects" className="pt-48 pb-48">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="md:w-1/2 mx-auto text-center"
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-blue">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>

                <p className="mt-10 mb-10">
                    Showcasing a diverse range of projects that demonstrate my skills 
                    in web development, user experience design, and modern technologies.
                </p>
            </motion.div>

            {/* Projects */}
            <div className="flex justify-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                    className="sm:grid sm:grid-cols-3"
                >
                    {/* ROW 1 */}
                    <div className="flex justify-center items-center text-center p-10 bg-red max-w-[400px] max-h-[400px] font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project 
                        title={projects[0].title}
                        subtitle={projects[0].subtitle}
                        image={projects[0].image}
                        technologies={projects[0].technologies}
                    />
                    <Project 
                        title={projects[1].title}
                        subtitle={projects[1].subtitle}
                        image={projects[1].image}
                        technologies={projects[1].technologies}
                    />

                    {/* ROW 2 */}
                    <Project 
                        title={projects[2].title}
                        subtitle={projects[2].subtitle}
                        image={projects[2].image}
                        technologies={projects[2].technologies}
                    />
                    <Project 
                        title={projects[3].title}
                        subtitle={projects[3].subtitle}
                        image={projects[3].image}
                        technologies={projects[3].technologies}
                    />
                    <Project 
                        title={projects[4].title}
                        subtitle={projects[4].subtitle}
                        image={projects[4].image}
                        technologies={projects[4].technologies}
                    />

                    {/* ROW 3 */}
                    <Project 
                        title={projects[5].title}
                        subtitle={projects[5].subtitle}
                        image={projects[5].image}
                        technologies={projects[5].technologies}
                    />
                    <Project 
                        title={projects[6].title}
                        subtitle={projects[6].subtitle}
                        image={projects[6].image}
                        technologies={projects[6].technologies}
                    />
                    <div className="flex justify-center items-center text-center p-10 bg-blue max-w-[400px] max-h-[400px] font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;