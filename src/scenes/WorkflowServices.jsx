import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const WorkflowServices = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const workflowSteps = [
        {
            number: "01",
            title: "Consult",
            icon: "💬",
            description: "Free consultation to understand your needs",
            color: "from-blue-500 to-cyan-500",
            shadowColor: "shadow-blue-500/50"
        },
        {
            number: "02",
            title: "Plan",
            icon: "📋",
            description: "Create proposal and timeline",
            color: "from-purple-500 to-pink-500",
            shadowColor: "shadow-purple-500/50"
        },
        {
            number: "03",
            title: "Design",
            icon: "🎨",
            description: "Custom design and development",
            color: "from-orange-500 to-red-500",
            shadowColor: "shadow-orange-500/50"
        },
        {
            number: "04",
            title: "Review",
            icon: "👀",
            description: "Feedback and revisions",
            color: "from-green-500 to-teal-500",
            shadowColor: "shadow-green-500/50"
        },
        {
            number: "05",
            title: "Launch",
            icon: "🚀",
            description: "Go live with your new site",
            color: "from-yellow-500 to-orange-500",
            shadowColor: "shadow-yellow-500/50"
        }
    ];

    return (
        <section id="workflow" className="pt-10 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="text-center mt-32 mb-20 relative z-10"
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    Our <span className="text-red">WORKFLOW</span>
                </p>
                <LineGradient width="w-1/4 mx-auto" />
                <p className="mt-10 text-lg max-w-2xl mx-auto text-grey">
                    A simple 5-step process to bring your vision to life
                </p>
            </motion.div>

            {/* Visual Workflow - Desktop */}
            {isAboveMediumScreens ? (
                <div className="relative max-w-7xl mx-auto px-8">
                    {/* Enhanced Connecting Path */}
                    <svg className="absolute top-1/2 left-0 right-0 w-full h-32 transform -translate-y-1/2 z-0" viewBox="0 0 800 100">
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="25%" stopColor="#8B5CF6" />
                                <stop offset="50%" stopColor="#F97316" />
                                <stop offset="75%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#F59E0B" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <motion.path
                            d="M50 50 Q200 20 350 50 T650 50 T750 50"
                            stroke="url(#pathGradient)"
                            strokeWidth="3"
                            fill="none"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Animated dots along the path */}
                        <motion.circle
                            r="4"
                            fill="#ffffff"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{ offsetPath: "path('M50 50 Q200 20 350 50 T650 50 T750 50')" }}
                        />
                    </svg>

                    {/* Steps */}
                    <div className="flex justify-between items-center relative z-10">
                        {workflowSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                variants={{
                                    hidden: { opacity: 0, y: 80, scale: 0.5 },
                                    visible: { opacity: 1, y: 0, scale: 1 }
                                }}
                                className="flex flex-col items-center group cursor-pointer relative"
                            >
                                {/* Floating Background Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150`}></div>

                                {/* Icon Circle with Pulse Effect */}
                                <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full animate-ping opacity-20`}></div>
                                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl shadow-2xl ${step.shadowColor} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white/20 backdrop-blur-sm relative z-10`}>
                                        <span className="drop-shadow-lg">{step.icon}</span>
                                    </div>
                                </div>

                                {/* Step Number with Glow */}
                                <motion.div
                                    className="bg-white/90 backdrop-blur-sm text-deep-blue font-bold text-sm px-4 py-2 rounded-full mt-4 shadow-lg border border-white/50"
                                    whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
                                >
                                    {step.number}
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    className="text-center mt-6 max-w-[180px] bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className="font-playfair font-semibold text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-grey text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Connection Indicator */}
                                {index < workflowSteps.length - 1 && (
                                    <motion.div
                                        className="absolute top-14 -right-16 w-8 h-8 text-white/50"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 + 0.5 }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                                        </svg>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Enhanced Mobile Workflow */
                <div className="max-w-sm mx-auto relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 via-green-500 to-yellow-500 rounded-full opacity-30"></div>

                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            variants={{
                                hidden: { opacity: 0, x: -50, scale: 0.8 },
                                visible: { opacity: 1, x: 0, scale: 1 }
                            }}
                            className="flex items-start mb-12 group relative"
                        >
                            {/* Icon Circle with Enhanced Styling */}
                            <div className="relative flex-shrink-0">
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-xl ${step.shadowColor} border-3 border-white/30 backdrop-blur-sm relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                    {step.icon}
                                </div>
                                {/* Pulse ring */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full animate-ping opacity-20`}></div>
                            </div>

                            {/* Content with Card Design */}
                            <div className="ml-6 flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300 group-hover:transform group-hover:translate-x-2">
                                <div className="flex items-center mb-3">
                                    <span className="bg-white/90 backdrop-blur-sm text-deep-blue font-bold text-xs px-3 py-1 rounded-full mr-3 shadow-lg">
                                        {step.number}
                                    </span>
                                    <h3 className="font-playfair font-semibold text-lg text-white">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-grey text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default WorkflowServices