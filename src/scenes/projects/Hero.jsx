import { motion } from "framer-motion";
import {
  Target,
  Award,
  ArrowRight,
  Sparkles,
  Code,
  Database,
  Smartphone,
  Globe,
  Clock,
  CheckCircle,
} from "lucide-react";
import { stats } from "../../constants";

const Hero = () => {
  // Memetakan stats dari constants untuk menyertakan ikon
  const statsWithIcons = stats.map((stat, index) => {
    const iconMap = [
      { icon: CheckCircle }, // Proyek Selesai
      { icon: Award }, // Tahun Pengalaman
      { icon: Clock }, // Dukungan
      { icon: Sparkles }, // Uptime
    ]

    return {
      ...stat,
      icon: iconMap[index]?.icon || Target,
    }
  })

  const highlights = [
    {
      icon: Code,
      text: "Pengembangan Full-Stack",
      color: "text-blue",
    },
    {
      icon: Smartphone,
      text: "Responsif Mobile",
      color: "text-purple",
    },
    {
      icon: Database,
      text: "Integrasi Database",
      color: "text-teal",
    },
    {
      icon: Globe,
      text: "Teknologi Modern",
      color: "text-green",
    },
  ]

  const handleContactUs = () => {
    window.open("https://wa.me/085248209388", "_blank")
  }

  return (
    <section id="projects" className="min-h-screen overflow-hidden flex items-center py-20">
      {/* Elemen Latar Belakang */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 w-32 h-32 xs:w-48 xs:h-48 sm:w-72 sm:h-72 md:top-20 md:left-20 bg-gradient-to-r from-blue to-teal rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-40 h-40 xs:w-56 xs:h-56 sm:w-96 sm:h-96 md:bottom-20 md:right-20 bg-gradient-to-r from-purple to-red rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Elemen Teknologi Mengambang */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-blue opacity-30"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Code className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/3 text-purple opacity-25"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Database className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/5 text-teal opacity-20"
          animate={{
            y: [-8, 8, -8],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Smartphone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/4 text-green opacity-25"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Globe className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9" />
        </motion.div>
      </div>

      <div className="mx-auto px-4 xs:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Sisi Kiri - Konten */}
          <div className="text-center lg:text-left">
            {/* Judul Utama */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-white block mb-2">Menampilkan</span>
                <div className="bg-gradient-rainblue bg-clip-text text-transparent">Kesuksesan Klien</div>
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
                  Proyek Nyata, Dampak Nyata
                </span>
              </h1>
            </motion.div>

            {/* Deskripsi */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-[12px] xs:text-sm sm:text-base mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Dari aplikasi mobile hingga platform enterprise, kami telah membangun solusi untuk startup, bisnis, dan
              brand global. Jelajahi karya terbaik kami di berbagai industri termasuk fintech, healthcare, pendidikan,
              dan lainnya.
            </motion.p>

            {/* Sorotan Fitur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              {highlights.map((highlight, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start gap-2">
                  <highlight.icon className={`w-5 h-5 ${highlight.color}`} />
                  <span className="text-grey text-xs sm:text-sm text-center lg:text-left">{highlight.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Tombol CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactUs}
                className="bg-gradient-rainblue text-deep-blue px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Hubungi Kami
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Sisi Kanan - Grid Statistik */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {statsWithIcons.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-yellow text-2xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-white text-sm md:text-base font-medium group-hover:text-yellow transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero