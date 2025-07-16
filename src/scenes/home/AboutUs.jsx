import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaChevronDown,
  FaEye,
  FaBullseye,
  FaCompass,
} from "react-icons/fa";
import TechStackDisplay from "../../components/TechStackDisplay"; 
import person_1 from "../../assets/profile_img/Person_1.png";
import person_2 from "../../assets/profile_img/Person_2.png";
import person_3 from "../../assets/profile_img/Person_3.png";


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
        name: "Luis Ferdinand",
        role: "Lead Developer",
        image: person_1,
      },
      {
        name: "Vincent",
        role: "Developer",
        image: person_2,
      },
      {
        name: "Valentino Wiyoto",
        role: "Marketing",
        image: person_3,
      },
    ],

    mission: {
      title: "Misi & Visi Kami",
      mission:
        "Membantu bisnis Indonesia berkembang melalui solusi digital yang inovatif, terjangkau, dan berkualitas tinggi.",
      vision: "Menjadi partner terpercaya dalam transformasi digital untuk UMKM dan perusahaan di seluruh Indonesia.",
    },

    // achievements: [
    //   {
    //     icon: <FaAward className="text-yellow text-xl" />,
    //     title: "50+ Proyek Sukses",
    //     description: "Telah menyelesaikan berbagai proyek dari startup hingga enterprise",
    //   },
    //   {
    //     icon: <FaStar className="text-yellow text-xl" />,
    //     title: "Rating 4.9/5",
    //     description: "Kepuasan klien yang tinggi berdasarkan review dan testimoni",
    //   },
    //   {
    //     icon: <Shield className="text-blue text-xl" />,
    //     title: "Garansi Kualitas",
    //     description: "Jaminan kualitas dan support berkelanjutan untuk setiap proyek",
    //   },
    //   {
    //     icon: <Clock className="text-green text-xl" />,
    //     title: "Delivery Tepat Waktu",
    //     description: "98% proyek diselesaikan sesuai timeline yang disepakati",
    //   },
    // ],

    // process: [
    //   {
    //     step: "01",
    //     title: "Konsultasi",
    //     description: "Diskusi mendalam tentang kebutuhan dan tujuan bisnis Anda",
    //     icon: <Target className="text-blue" />,
    //   },
    //   {
    //     step: "02",
    //     title: "Perencanaan",
    //     description: "Merancang strategi dan roadmap pengembangan yang optimal",
    //     icon: <FaLightbulb className="text-yellow" />,
    //   },
    //   {
    //     step: "03",
    //     title: "Pengembangan",
    //     description: "Implementasi dengan teknologi terkini dan best practices",
    //     icon: <Zap className="text-purple" />,
    //   },
    //   {
    //     step: "04",
    //     title: "Peluncuran",
    //     description: "Testing, deployment, dan training untuk tim Anda",
    //     icon: <FaRocket className="text-green" />,
    //   },
    // ],

    // testimonials: [
    //   {
    //     name: "Andi Pratama",
    //     role: "CEO, TechStart Indonesia",
    //     content:
    //       "DigitalSolution membantu kami mengembangkan platform yang user-friendly dan scalable. Tim yang sangat profesional!",
    //     rating: 5,
    //   },
    //   {
    //     name: "Sari Dewi",
    //     role: "Owner, Boutique Fashion",
    //     content: "Website toko online kami meningkatkan penjualan 300% dalam 3 bulan. Terima kasih DigitalSolution!",
    //     rating: 5,
    //   },
    // ],
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
              <p className="text-gray-400 text-[12px] xs:text-sm sm:text-base leading-relaxed">{aboutContent.hero.additionalText}</p>
            </motion.div>

            {/* Enhanced Mission & Vision - Now Prominently Placed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow/5 to-orange/5 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                {/* Section Title with Enhanced Styling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                    <FaBullseye className="text-yellow" />
                    <span className="bg-gradient-to-r from-yellow to-orange bg-clip-text text-transparent">
                      {aboutContent.mission.title}
                    </span>
                  </h2>
                  <LineGradient width="mx-auto w-20 sm:w-32" />
                </motion.div>

                <div className="space-y-6">
                  {/* Mission Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-gradient-to-r from-blue/20 to-teal/20 backdrop-blur-sm rounded-xl p-6 border border-blue/30 shadow-lg group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <FaCompass className="text-white text-xl" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-3 flex items-center gap-2">
                          <span className="text-blue">MISI</span>
                          <div className="h-px bg-gradient-to-r from-blue to-transparent flex-1"></div>
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                          {aboutContent.mission.mission}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Vision Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-gradient-to-r from-yellow/20 to-orange/20 backdrop-blur-sm rounded-xl p-6 border border-yellow/30 shadow-lg group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow to-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <FaEye className="text-deep-blue text-xl" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-3 flex items-center gap-2">
                          <span className="text-yellow">VISI</span>
                          <div className="h-px bg-gradient-to-r from-yellow to-transparent flex-1"></div>
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                          {aboutContent.mission.vision}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-blue via-yellow to-orange rounded-full mt-8"
                ></motion.div>
              </div>
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
                    <div className="text-white text-[12px] xs:text-sm sm:text-base md:text-base font-medium group-hover:text-yellow transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
                      <div className="px-4 sm:px-6 pb-3 sm:py-4">
                        <p className="text-gray-400 text-[12px] xs:text-sm sm:text-base leading-relaxed pl-8 sm:pl-9">
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
                    <p className="text-yellow text-[12px] xs:text-sm sm:text-base font-medium">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack - Now a separate component */}
            <TechStackDisplay />
          </div>
        </div>
        {/* CTA Section - Positioned at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6"
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
    </section>
  )
}

export default AboutUs