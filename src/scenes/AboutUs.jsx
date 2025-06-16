import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaDatabase,
  FaServer,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaCog
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiFramer
} from 'react-icons/si';

const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      id: 1,
      category: "Frontend Development",
      icon: <FaLaptopCode className="text-4xl" />,
      color: "from-blue to-teal",
      tools: [
        { name: "React", proficiency: 95, icon: <FaReact className="text-blue" /> },
        { name: "Next.js", proficiency: 90, icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", proficiency: 88, icon: <SiTypescript className="text-blue" /> },
        { name: "JavaScript", proficiency: 92, icon: <FaJs className="text-yellow" /> },
        { name: "Tailwind CSS", proficiency: 90, icon: <SiTailwindcss className="text-teal" /> },
        { name: "HTML5", proficiency: 95, icon: <FaHtml5 className="text-orange" /> },
        { name: "CSS3", proficiency: 88, icon: <FaCss3Alt className="text-blue" /> },
        { name: "Framer Motion", proficiency: 85, icon: <SiFramer className="text-purple" /> }
      ]
    },
    {
      id: 2,
      category: "Backend Development",
      icon: <FaServer className="text-4xl" />,
      color: "from-purple to-red",
      tools: [
        { name: "Node.js", proficiency: 90, icon: <FaNodeJs className="text-green" /> },
        { name: "Python", proficiency: 85, icon: <FaPython className="text-yellow" /> },
        { name: "Express.js", proficiency: 88, icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", proficiency: 82, icon: <SiMongodb className="text-green" /> },
        { name: "PostgreSQL", proficiency: 80, icon: <SiPostgresql className="text-blue" /> },
        { name: "REST APIs", proficiency: 90, icon: <FaCog className="text-grey" /> },
        { name: "Database Design", proficiency: 85, icon: <FaDatabase className="text-teal" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue/10 to-teal/10 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-yellow/10 to-orange/10 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-5 w-8 h-8 bg-gradient-to-br from-purple/15 to-red/15 rounded-full blur-sm"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Side - Heading and Description */}
        <div className="lg:w-2/5 relative z-10">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-center md:text-left"
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              <span className="text-yellow">ABOUT</span> US
            </p>
            <LineGradient width="mx-auto md:mx-0 w-2/5" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-10 space-y-6"
          >
            <p className="text-grey text-lg leading-relaxed">
              We are a passionate team of developers who craft exceptional digital experiences. 
              Our expertise spans across modern web technologies, ensuring we deliver cutting-edge 
              solutions that bring your vision to life.
            </p>
            
            <p className="text-grey leading-relaxed">
              With years of experience in both frontend and backend development, we create 
              scalable, performant, and beautiful applications that drive business growth 
              and provide outstanding user experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <div className="text-yellow text-2xl font-bold">50+</div>
                <div className="text-grey text-sm">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <div className="text-yellow text-2xl font-bold">3+</div>
                <div className="text-grey text-sm">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <div className="text-yellow text-2xl font-bold">24/7</div>
                <div className="text-grey text-sm">Support Available</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <div className="text-yellow text-2xl font-bold">99.9%</div>
                <div className="text-grey text-sm">Uptime Guarantee</div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(253, 204, 73, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow to-orange text-deep-blue font-bold py-3 px-6 rounded-lg text-sm transition-all duration-300 hover:shadow-xl mt-6"
            >
              <span className="flex items-center gap-2">
                Let's Work Together <FaRocket />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side - Skills Cards */}
        <div className="lg:w-3/5 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="relative group"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-opaque-black to-transparent backdrop-blur-sm border border-grey/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Category Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-white">
                        {category.icon}
                      </div>
                      <h3 className="font-playfair font-bold text-xl text-white">
                        {category.category}
                      </h3>
                    </div>
                    <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>

                  {/* Tools Grid */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.tools.map((tool, index) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.05 }}
                        className="flex items-center justify-between group/tool p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg group-hover/tool:scale-110 transition-transform duration-200">
                            {tool.icon}
                          </span>
                          <span className="text-grey font-medium group-hover/tool:text-white transition-colors duration-200 text-sm">
                            {tool.name}
                          </span>
                        </div>
                        
                        {/* Proficiency Bar */}
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-dark-grey rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tool.proficiency}%` }}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.05 }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            ></motion.div>
                          </div>
                          <span className="text-xs text-grey font-semibold min-w-[2rem]">
                            {tool.proficiency}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Particles Effect */}
                  {hoveredCard === category.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.random() * 200 - 100,
                            y: Math.random() * 200 - 100
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                          className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;