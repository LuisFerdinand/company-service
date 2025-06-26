import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaChevronDown
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';

const AboutUs = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Keep first item open by default
  const [hoveredTech, setHoveredTech] = useState(null);

  const aboutContent = {
    hero: {
      title: "About",
      subtitle: "Us",
      description: "DigitalSolution adalah tim profesional yang mengembangkan website berkualitas tinggi untuk berbagai jenis bisnis.",
      additionalText: "Dengan pengalaman bertahun-tahun di industri teknologi, kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Tim kami terdiri dari developer berpengalaman yang passionate dalam menciptakan solusi digital yang tidak hanya menarik secara visual, tetapi juga fungsional dan menguntungkan bagi bisnis Anda."
    },

    stats: [
      {
        number: "50+",
        label: "Proyek Selesai"
      },
      {
        number: "3+",
        label: "Tahun Pengalaman"
      },
      {
        number: "24/7",
        label: "Dukungan"
      },
      {
        number: "99.9%",
        label: "Uptime"
      }
    ],

    values: [
      {
        icon: <FaRocket className="text-xl" />,
        title: "Pengerjaan Cepat",
        description: "Proyek diselesaikan dalam 1-2 minggu dengan kualitas terjamin dan proses yang efisien."
      },
      {
        icon: <FaHandshake className="text-xl" />,
        title: "Komunikasi Fleksibel",
        description: "WhatsApp, email, video call - kami menyesuaikan dengan preferensi komunikasi Anda untuk memastikan kolaborasi yang lancar."
      },
      {
        icon: <FaUsers className="text-xl" />,
        title: "Fokus Bisnis",
        description: "Kami memahami kebutuhan bisnis dan memberikan solusi yang tepat sasaran untuk mencapai tujuan Anda."
      },
      {
        icon: <FaLightbulb className="text-xl" />,
        title: "Solusi Sederhana",
        description: "Tanpa jargon teknis yang membingungkan. Kami menjelaskan semuanya dengan bahasa yang mudah dipahami."
      }
    ],

    techStack: {
      description: "Kami menggunakan teknologi web terkini untuk memastikan website Anda cepat, aman, dan modern.",
      frontend: [
        { icon: <FaReact className="text-blue-400 text-xl" />, name: "React" },
        { icon: <SiNextdotjs className="text-white text-xl" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-cyan-400 text-xl" />, name: "Tailwind CSS" },
        { icon: <SiTypescript className="text-blue-400 text-xl" />, name: "TypeScript" }
      ],
      backend: [
        { icon: <FaNodeJs className="text-green-400 text-xl" />, name: "Node.js" },
        { icon: <SiMongodb className="text-green-400 text-xl" />, name: "MongoDB" }
      ]
    },

    team: [
      {
        name: "Ahmad Rizki",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Sarah Wijaya",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1494790108755-2616b12a9c0b?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Budi Santoso",
        role: "Backend Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      }
    ]
  };

  const LineGradient = ({ width = "w-full" }) => (
    <div className={`h-0.5 ${width} bg-yellow`} />
  );

  const Tooltip = ({ children, content, show }) => (
    <div className="relative">
      {children}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10 border border-gray-700"
        >
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </motion.div>
      )}
    </div>
  );

  return (
    <section id="about" className="py-8 sm:py-16 relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-8 sm:w-16 h-8 sm:h-16 bg-gradient-to-br from-blue/10 to-teal/10 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 sm:bottom-32 right-4 sm:right-20 w-6 sm:w-12 h-6 sm:h-12 bg-gradient-to-br from-yellow/10 to-orange/10 rounded-full blur-sm"
        />
      </div>

      <div className="">
        {/* Hero Section - Mobile/Tablet Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:hidden"
        >
          <h1 className="font-inter font-semibold text-2xl sm:text-3xl md:text-4xl mb-1">
            <span className="text-yellow">{aboutContent.hero.title}</span> {aboutContent.hero.subtitle}
          </h1>
          <LineGradient width="mx-auto w-16 sm:w-24" />
        </motion.div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column */}
          <div className="space-y-4">
            {/* Hero Section - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <h1 className="font-inter font-semibold text-3xl md:text-4xl lg:text-5xl mb-4">
                <span className="text-yellow">{aboutContent.hero.title}</span> {aboutContent.hero.subtitle}
              </h1>
              <LineGradient width="w-16 sm:w-24" />
              <p className="text-gray-400 text-[12px] xs:text-sm sm:text-base mt-6 leading-relaxed">
                {aboutContent.hero.description}
              </p>
              <p className="text-gray-400 text-[12px] xs:text-sm sm:text-base mt-4 leading-relaxed">
                {aboutContent.hero.additionalText}
              </p>
            </motion.div>

            {/* Additional Text for Mobile/Tablet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:hidden text-center"
            >
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {aboutContent.hero.additionalText}
              </p>
            </motion.div>

            {/* Stats Section with Boxes */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Pencapaian Kami
              </motion.h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {aboutContent.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 hover:border-yellow/50 transition-all duration-300 group text-center"
                  >
                    <div className="text-yellow text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-white text-xs sm:text-sm md:text-base font-medium group-hover:text-yellow transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack - Compact Section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center lg:text-left">Teknologi Modern</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 text-center lg:text-left leading-relaxed">
                  {aboutContent.techStack.description}
                </p>

                <div className="space-y-4">
                  {/* Frontend */}
                  <div>
                    <h4 className="text-sm font-semibold text-yellow mb-2 text-center lg:text-left">Frontend</h4>
                    <div className="flex justify-center lg:justify-start gap-2 sm:gap-3">
                      {aboutContent.techStack.frontend.map((tool, index) => (
                        <Tooltip key={index} content={tool.name} show={hoveredTech === `frontend-${index}`}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                              scale: 1.15,
                              boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                            }}
                            onMouseEnter={() => setHoveredTech(`frontend-${index}`)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center cursor-pointer group"
                          >
                            <div className="group-hover:scale-110 transition-transform">
                              {tool.icon}
                            </div>
                          </motion.div>
                        </Tooltip>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-sm font-semibold text-yellow mb-2 text-center lg:text-left">Backend</h4>
                    <div className="flex justify-center lg:justify-start gap-2 sm:gap-3">
                      {aboutContent.techStack.backend.map((tool, index) => (
                        <Tooltip key={`backend-${index}`} content={tool.name} show={hoveredTech === `backend-${index}`}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 4) * 0.1 }}
                            whileHover={{
                              scale: 1.15,
                              boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                            }}
                            onMouseEnter={() => setHoveredTech(`backend-${index}`)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center cursor-pointer group"
                          >
                            <div className="group-hover:scale-110 transition-transform">
                              {tool.icon}
                            </div>
                          </motion.div>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Values Section - Accordion */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Mengapa Memilih Kami
              </motion.h2>
              <div className="space-y-3">
                {aboutContent.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-yellow group-hover:scale-110 transition-transform">
                          {value.icon}
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-white">{value.title}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <FaChevronDown className="text-yellow text-sm" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: activeAccordion === index ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-8 sm:pl-9">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Tim Profesional Kami
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {aboutContent.team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow/30 transition-all duration-300 text-center group"
                  >
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto border-2 border-yellow/20 group-hover:border-yellow/50 transition-colors object-cover"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{member.name}</h3>
                    <p className="text-yellow text-xs sm:text-sm font-medium">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section - Positioned at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-yellow/10 to-orange/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-yellow/20">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Siap Mengembangkan Bisnis Anda?
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
                  Mari buat website yang menarik pelanggan dan mengembangkan bisnis Anda dengan teknologi terdepan.
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(253, 204, 73, 0.4)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow to-orange text-deep-blue font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
                >
                  Lihat Proyek Kami
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaRocket className="text-sm sm:text-base" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;