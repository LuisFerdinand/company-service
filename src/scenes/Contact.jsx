"use client"

import { useState } from "react"
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Users,
  Award,
  Clock,
  MessageSquare,
} from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

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
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be under 100 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.length > 150) {
      newErrors.subject = "Subject must be under 150 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message must be under 2000 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setIsSubmitted(false), 3000)
      }, 500)
    }
  }

  // Line Gradient custom
  const LineGradient = ({ width = "w-full" }) => (
    <div className={`h-0.5 ${width} bg-gradient-to-r from-orange via-yellow to-orange`} />
  )

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/yourcompany", color: "hover:text-red", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/yourcompany", color: "hover:text-blue", label: "Facebook" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/yourcompany",
      color: "hover:text-blue",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/yourcompany", color: "hover:text-teal", label: "Twitter" },
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: "1234 Innovation Drive, Suite 200, San Francisco, CA 94107",
      label: "Office Address",
      subtext: "Visit us during business hours",
    },
    {
      icon: Mail,
      text: "contact@innovatetech.com",
      label: "Email Address",
      subtext: "We respond within 24 hours",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      label: "Phone Number",
      subtext: "Mon-Fri, 9AM-6PM PST",
    },
    {
      icon: MessageSquare,
      text: "Live Chat Available",
      label: "Instant Support",
      subtext: "Chat with our team online",
    },
  ]

  const stats = [
    { icon: Users, number: "1,200+", label: "Satisfied Clients" },
    { icon: Award, number: "150+", label: "Projects Delivered" },
    { icon: Clock, number: "24/7", label: "Customer Support" },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow to-orange">Get In Touch</span>
          </h2>
          <div className="flex justify-center">
            <LineGradient width="w-24 md:w-32" />
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Have a project in mind? We'd love to discuss how we can help bring your ideas to life. Reach out to us and
            let's start building something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form Column */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Send us a message</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  Tell us about your project and we'll get back to you with a detailed proposal.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 flex-grow flex flex-col justify-center">
                  <CheckCircle className="w-16 h-16 text-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. Our team will review your message and respond within 24 hours.
                  </p>
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
                          placeholder="Full Name *"
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
                          placeholder="Email Address *"
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
                        placeholder="Project Subject *"
                      />
                      {errors.subject && <p className="text-red-400 mt-2 text-xs font-medium">{errors.subject}</p>}
                    </div>

                    <div className="flex-grow">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-full min-h-[160px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium placeholder-gray-400 text-white p-4 focus:outline-none focus:ring-yellow/50 focus:border-yellow/50 transition-all duration-300 resize-none hover:bg-white/15"
                        placeholder="Tell us about your project requirements, timeline, and budget..."
                      />
                      {errors.message && <p className="text-red-400 mt-2 text-xs font-medium">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full p-4 bg-gradient-to-r from-yellow to-orange font-bold text-gray-900 rounded-xl hover:from-orange hover:to-red transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              )}

              {/* Stats Section in Form Column */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="p-3 bg-gradient-to-r from-yellow/20 to-orange/20 rounded-lg w-fit mx-auto mb-2">
                        <stat.icon className="w-5 h-5 text-yellow" />
                      </div>
                      <p className="text-white font-bold text-lg">{stat.number}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl h-full flex flex-col">
              {/* Contact Information */}
              <div className="mb-8 flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Contact Information</h3>
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
                    <p className="text-white font-medium text-sm md:text-base">Business Hours</p>
                    <p className="text-gray-400 text-xs sm:text-sm">When you can reach us</p>
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Connect With Us</h3>
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
                  Follow us for the latest updates, industry insights, and behind-the-scenes content from our team.
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
