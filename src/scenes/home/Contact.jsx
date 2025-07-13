import { useState } from "react"
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, Send, CheckCircle, Clock } from "lucide-react"
import axios from "axios"
/* eslint-disable */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgbdola"

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
    // Clear submission status when user starts typing again
    setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi"
    } else if (formData.name.length > 100) {
      newErrors.name = "Nama harus kurang dari 100 karakter"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Masukkan email yang valid"
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subjek wajib diisi"
    } else if (formData.subject.length > 150) {
      newErrors.subject = "Subjek harus kurang dari 150 karakter"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi"
    } else if (formData.message.length > 2000) {
      newErrors.message = "Pesan harus kurang dari 2000 karakter"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
      try {
        const response = await axios({
          method: "POST",
          url: FORMSPREE_ENDPOINT,
          data: formData,
          headers: {
            Accept: "application/json",
          },
        })
        handleServerResponse(true, "Terima kasih, pesan Anda telah terkirim.")
      } catch (error) {
        handleServerResponse(false, error.response?.data?.error || "Terjadi kesalahan yang tidak terduga.")
      }
    }
  }

  // Line Gradient custom
  const LineGradient = ({ width = "w-full" }) => (
    <div className={`h-0.5 ${width} bg-gradient-to-r from-orange via-yellow to-orange`} />
  )

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/digitalsolution", color: "hover:text-red", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/digitalsolution", color: "hover:text-blue", label: "Facebook" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/digitalsolution",
      color: "hover:text-blue",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/digitalsolution", color: "hover:text-teal", label: "Twitter" },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: "ferdinandluis88@gmail.com",
      label: "Alamat Email",
      subtext: "Kami merespon dengan cepat",
    },
    {
      icon: Phone,
      text: "+62 852-4820-9388",
      label: "Nomor Telepon",
      subtext: "Sen-Jum, 09:00-18:00 WIB",
    },
  ]

  const businessHours = [
    { day: "Senin - Jumat", hours: "09:00 - 18:00" },
    { day: "Sabtu", hours: "10:00 - 16:00" },
    { day: "Minggu", hours: "Tutup" },
  ]

  return (
    <section
      id="contact"
      className="py-8 md:py-16 lg:py-20 relative overflow-hidden min-h-screen flex items-center bg-deep-blue"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 md:top-20 left-4 md:left-10 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue/20 to-purple/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-32 md:top-40 right-4 md:right-20 w-12 md:w-20 h-12 md:h-20 bg-gradient-to-br from-yellow/15 to-orange/15 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 md:bottom-32 left-1/4 w-8 md:w-16 h-8 md:h-16 bg-gradient-to-br from-red/20 to-purple/20 rounded-full blur-lg"></div>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow to-orange">Hubungi Kami</span>
          </h2>
          <div className="flex justify-center">
            <LineGradient width="w-24 md:w-32" />
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Punya proyek dalam pikiran? Mari diskusikan bagaimana kami bisa membantu.
          </p>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form Column */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Kirim pesan kepada kami</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">Ceritakan tentang proyek Anda.</p>
              </div>
              {status.submitted ? (
                <div className="text-center py-12 flex-grow flex flex-col justify-center">
                  <CheckCircle className="w-16 h-16 text-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-400">Terima kasih telah menghubungi kami. Kami akan merespon dalam 24 jam.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                  <div className="space-y-6 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium placeholder-gray-400 text-white p-4 focus:outline-none focus:ring-yellow/50 focus:border-yellow/50 transition-all duration-300 hover:bg-white/15"
                          placeholder="Nama Lengkap *"
                        />
                        {errors.name && <p className="text-red-400 mt-2 text-xs font-medium">{errors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium placeholder-gray-400 text-white p-4 focus:outline-none focus:ring-yellow/50 focus:border-yellow/50 transition-all duration-300 hover:bg-white/15"
                          placeholder="Alamat Email *"
                        />
                        {errors.email && <p className="text-red-400 mt-2 text-xs font-medium">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium placeholder-gray-400 text-white p-4 focus:outline-none focus:ring-yellow/50 focus:border-yellow/50 transition-all duration-300 hover:bg-white/15"
                        placeholder="Subjek Proyek *"
                      />
                      {errors.subject && <p className="text-red-400 mt-2 text-xs font-medium">{errors.subject}</p>}
                    </div>
                    <div className="flex-grow">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-full min-h-[160px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium placeholder-gray-400 text-white p-4 focus:outline-none focus:ring-yellow/50 focus:border-yellow/50 transition-all duration-300 resize-none hover:bg-white/15"
                        placeholder="Ceritakan tentang kebutuhan proyek, timeline, dan budget Anda..."
                      />
                      {errors.message && <p className="text-red-400 mt-2 text-xs font-medium">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full p-4 bg-gradient-to-r from-yellow to-orange font-bold text-gray-900 rounded-xl hover:from-orange hover:to-red transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status.submitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          MENGIRIM...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          KIRIM PESAN
                        </>
                      )}
                    </button>
                    {status.info.error && (
                      <p className="text-red-400 mt-2 text-xs font-medium text-center">Error: {status.info.msg}</p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
          {/* Info Column */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl h-full flex flex-col">
              {/* Contact Information */}
              <div className="mb-8 flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="p-3 bg-gradient-to-r from-yellow/20 to-orange/20 rounded-xl group-hover:from-yellow/30 group-hover:to-orange/30 transition-all duration-300 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-yellow" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm md:text-base">{item.label}</p>
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-1">{item.text}</p>
                        <p className="text-gray-500 text-xs">{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Business Hours */}
              <div className="mb-8 p-4 bg-gradient-to-r from-yellow/10 to-orange/10 rounded-xl border border-yellow/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-yellow/20 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Jam Operasional</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Kapan Anda bisa menghubungi kami</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300 text-xs sm:text-sm">{schedule.day}</span>
                      <span className="text-gray-400 text-xs sm:text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Social Media */}
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Terhubung Dengan Kami</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-white/10 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20 group transform hover:scale-110 hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  Ikuti kami untuk update dan insight terbaru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
