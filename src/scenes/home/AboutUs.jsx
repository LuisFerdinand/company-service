"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaChevronDown,
  FaAward,
  FaEye,
  FaHeart,
  FaStar,
} from "react-icons/fa"
import { Shield, Clock, Target, Zap } from "lucide-react"
import TechStackDisplay from "../../components/TechStackDisplay" // Import the new component

const AboutUs = () => {
  const [activeAccordion, setActiveAccordion] = useState(0)

  const aboutContent = {
    hero: {
      title: "Tentang",
      subtitle: "Kami",
      description:
        "DigitalSolution adalah tim profesional yang mengembangkan website berkualitas tinggi untuk berbagai jenis bisnis.",
      additionalText:
        "Dengan pengalaman bertahun-tahun di industri teknologi, kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Tim kami terdiri dari developer berpengalaman yang passionate dalam menciptakan solusi digital yang tidak hanya menarik secara visual, tetapi juga fungsional dan menguntungkan bagi bisnis Anda.",
    },

    stats: [
      {
        number: "50+",
        label: "Proyek Selesai",
      },
      {
        number: "3+",
        label: "Tahun Pengalaman",
      },
      {
        number: "24/7",
        label: "Dukungan",
      },
      {
        number: "99.9%",
        label: "Uptime",
      },
    ],

    values: [
      {
        icon: <FaRocket className="text-xl" />,
        title: "Pengerjaan Cepat",
        description: "Proyek diselesaikan dalam 1-2 minggu dengan kualitas terjamin dan proses yang efisien.",
      },
      {
        icon: <FaHandshake className="text-xl" />,
        title: "Komunikasi Fleksibel",
        description:
          "WhatsApp, email, video call - kami menyesuaikan dengan preferensi komunikasi Anda untuk memastikan kolaborasi yang lancar.",
      },
      {
        icon: <FaUsers className="text-xl" />,
        title: "Fokus Bisnis",
        description:
          "Kami memahami kebutuhan bisnis dan memberikan solusi yang tepat sasaran untuk mencapai tujuan Anda.",
      },
      {
        icon: <FaLightbulb className="text-xl" />,
        title: "Solusi Sederhana",
        description:
          "Tanpa jargon teknis yang membingungkan. Kami menjelaskan semuanya dengan bahasa yang mudah dipahami.",
      },
    ],

    team: [
      {
        name: "Ahmad Rizki",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Sarah Wijaya",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1494790108755-2616b12a9c0b?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Budi Santoso",
        role: "Backend Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
    ],

    mission: {
      title: "Misi & Visi Kami",
      mission:
        "Membantu bisnis Indonesia berkembang melalui solusi digital yang inovatif, terjangkau, dan berkualitas tinggi.",
      vision: "Menjadi partner terpercaya dalam transformasi digital untuk UMKM dan perusahaan di seluruh Indonesia.",
    },

    achievements: [
      {
        icon: <FaAward className="text-yellow text-xl" />,
        title: "50+ Proyek Sukses",
        description: "Telah menyelesaikan berbagai proyek dari startup hingga enterprise",
      },
      {
        icon: <FaStar className="text-yellow text-xl" />,
        title: "Rating 4.9/5",
        description: "Kepuasan klien yang tinggi berdasarkan review dan testimoni",
      },
      {
        icon: <Shield className="text-blue text-xl" />,
        title: "Garansi Kualitas",
        description: "Jaminan kualitas dan support berkelanjutan untuk setiap proyek",
      },
      {
        icon: <Clock className="text-green text-xl" />,
        title: "Delivery Tepat Waktu",
        description: "98% proyek diselesaikan sesuai timeline yang disepakati",
      },
    ],

    process: [
      {
        step: "01",
        title: "Konsultasi",
        description: "Diskusi mendalam tentang kebutuhan dan tujuan bisnis Anda",
        icon: <Target className="text-blue" />,
      },
      {
        step: "02",
        title: "Perencanaan",
        description: "Merancang strategi dan roadmap pengembangan yang optimal",
        icon: <FaLightbulb className="text-yellow" />,
      },
      {
        step: "03",
        title: "Pengembangan",
        description: "Implementasi dengan teknologi terkini dan best practices",
        icon: <Zap className="text-purple" />,
      },
      {
        step: "04",
        title: "Peluncuran",
        description: "Testing, deployment, dan training untuk tim Anda",
        icon: <FaRocket className="text-green" />,
      },
    ],

    testimonials: [
      {
        name: "Andi Pratama",
        role: "CEO, TechStart Indonesia",
        content:
          "DigitalSolution membantu kami mengembangkan platform yang user-friendly dan scalable. Tim yang sangat profesional!",
        rating: 5,
      },
      {
        name: "Sari Dewi",
        role: "Owner, Boutique Fashion",
        content: "Website toko online kami meningkatkan penjualan 300% dalam 3 bulan. Terima kasih DigitalSolution!",
        rating: 5,
      },
    ],
  }

  const LineGradient = ({ width = "w-full" }) => <div className={`h-0.5 ${width} bg-yellow`} />

  return (
    <section id="about" className="py-8 sm:py-16 relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-8 sm:w-16 h-8 sm:h-16 bg-gradient-to-br from-blue/10 to-teal/10 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-4 lg:sticky lg:top-8">
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
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{aboutContent.hero.additionalText}</p>
            </motion.div>

            {/* Stats Section with Boxes */}
            <div>
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

            {/* Tech Stack - Now a separate component */}
            <TechStackDisplay />
          </div>

          {/* Right Column */}
          <div className="space-y-8 min-h-0">
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
                        <div className="text-yellow group-hover:scale-110 transition-transform">{value.icon}</div>
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

            {/* Mission & Vision */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                {aboutContent.mission.title}
              </motion.h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FaEye className="text-blue text-lg" />
                    <h4 className="text-white font-semibold">Misi</h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{aboutContent.mission.mission}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FaHeart className="text-red text-lg" />
                    <h4 className="text-white font-semibold">Visi</h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{aboutContent.mission.vision}</p>
                </motion.div>
              </div>
            </div>

            {/* Achievements */}
            {/* <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Pencapaian Kami
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutContent.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-yellow/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="group-hover:scale-110 transition-transform">{achievement.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">{achievement.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Process Overview */}
            {/* <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Proses Kerja Kami
              </motion.h3>
              <div className="space-y-3">
                {aboutContent.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-yellow/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow to-orange rounded-full flex items-center justify-center text-deep-blue font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                      </div>
                      <div className="group-hover:scale-110 transition-transform">{step.icon}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Testimonials */}
            {/* <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Kata Klien Kami
              </motion.h3>
              <div className="space-y-4">
                {aboutContent.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <FaQuoteLeft className="text-yellow text-lg flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">"{testimonial.content}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                            <p className="text-gray-500 text-xs">{testimonial.role}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <FaStar key={i} className="text-yellow text-xs" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Team Section */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Tim Kami
              </motion.h3>
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
                        src={member.image || "/placeholder.svg"}
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
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById("projects")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="bg-gradient-to-r from-yellow to-orange text-deep-blue font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
                >
                  Lihat Proyek Kami
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
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
  )
}

export default AboutUs
