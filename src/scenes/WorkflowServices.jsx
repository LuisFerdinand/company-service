import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Palette, Eye, Rocket, Sparkles, Code, Zap, Globe, Star, Heart, Coffee, 
         ArrowRight, CheckCircle, Users, Target, Lightbulb, Database, Shield, Layers, Cpu, Settings, 
         Briefcase, PenTool, Monitor, Smartphone, Tablet, Cloud, Lock, Search, TrendingUp, Award } from "lucide-react";

const WorkflowServices = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const workflowSteps = [
        {
            number: "01",
            title: "Consult",
            icon: MessageCircle,
            description: "Free consultation to understand your needs",
            color: "from-blue-500 to-cyan-500",
            shadowColor: "shadow-blue-500/50",
            details: ["Requirements analysis", "Budget discussion", "Timeline planning", "Technology selection"],
            duration: "1-2 days",
            deliverables: ["Project brief", "Initial mockups", "Cost estimate"]
        },
        {
            number: "02",
            title: "Plan",
            icon: ClipboardList,
            description: "Create proposal and timeline",
            color: "from-purple-500 to-pink-500",
            shadowColor: "shadow-purple-500/50",
            details: ["Wireframe creation", "User flow mapping", "Feature prioritization", "Resource allocation"],
            duration: "3-5 days",
            deliverables: ["Detailed proposal", "Project roadmap", "Design system"]
        },
        {
            number: "03",
            title: "Design",
            icon: Palette,
            description: "Custom design and development",
            color: "from-orange-500 to-red-500",
            shadowColor: "shadow-orange-500/50",
            details: ["UI/UX design", "Frontend development", "Backend integration", "Database setup"],
            duration: "2-4 weeks",
            deliverables: ["Design files", "Responsive layouts", "Functional prototype"]
        },
        {
            number: "04",
            title: "Review",
            icon: Eye,
            description: "Feedback and revisions",
            color: "from-green-500 to-teal-500",
            shadowColor: "shadow-green-500/50",
            details: ["User testing", "Performance optimization", "Security audit", "Cross-browser testing"],
            duration: "1-2 weeks",
            deliverables: ["Test reports", "Revision notes", "Performance metrics"]
        },
        {
            number: "05",
            title: "Launch",
            icon: Rocket,
            description: "Go live with your new site",
            color: "from-yellow-500 to-orange-500",
            shadowColor: "shadow-yellow-500/50",
            details: ["Domain setup", "SSL certificate", "SEO optimization", "Analytics integration"],
            duration: "2-3 days",
            deliverables: ["Live website", "Admin panel", "Documentation", "Training materials"]
        }
    ];

    const floatingElements = [
        { icon: Sparkles, delay: 0, duration: 8, x: "10%", y: "15%", color: "text-blue-400" },
        { icon: Code, delay: 1, duration: 12, x: "85%", y: "25%", color: "text-purple-400" },
        { icon: Zap, delay: 2, duration: 10, x: "20%", y: "70%", color: "text-yellow-400" },
        { icon: Globe, delay: 3, duration: 14, x: "75%", y: "80%", color: "text-green-400" },
        { icon: Star, delay: 4, duration: 9, x: "15%", y: "40%", color: "text-pink-400" },
        { icon: Heart, delay: 5, duration: 11, x: "90%", y: "55%", color: "text-red-400" },
        { icon: Coffee, delay: 6, duration: 13, x: "5%", y: "85%", color: "text-orange-400" },
        { icon: Sparkles, delay: 7, duration: 15, x: "95%", y: "10%", color: "text-cyan-400" },
        { icon: Code, delay: 8, duration: 7, x: "35%", y: "90%", color: "text-indigo-400" },
        { icon: Zap, delay: 9, duration: 16, x: "65%", y: "35%", color: "text-emerald-400" },
        { icon: Globe, delay: 10, duration: 6, x: "50%", y: "5%", color: "text-violet-400" },
        { icon: Star, delay: 11, duration: 18, x: "25%", y: "25%", color: "text-rose-400" },
        { icon: Database, delay: 12, duration: 11, x: "12%", y: "60%", color: "text-teal-400" },
        { icon: Shield, delay: 13, duration: 9, x: "88%", y: "45%", color: "text-green-400" },
        { icon: Layers, delay: 14, duration: 13, x: "42%", y: "15%", color: "text-blue-400" },
        { icon: Cpu, delay: 15, duration: 14, x: "78%", y: "65%", color: "text-purple-400" },
        { icon: Settings, delay: 16, duration: 10, x: "8%", y: "35%", color: "text-gray-400" },
        { icon: Monitor, delay: 17, duration: 12, x: "92%", y: "75%", color: "text-indigo-400" },
        { icon: Smartphone, delay: 18, duration: 8, x: "28%", y: "78%", color: "text-pink-400" },
        { icon: Cloud, delay: 19, duration: 15, x: "58%", y: "12%", color: "text-sky-400" },
        { icon: Lock, delay: 20, duration: 11, x: "18%", y: "92%", color: "text-red-400" },
        { icon: Search, delay: 21, duration: 13, x: "82%", y: "8%", color: "text-yellow-400" },
        { icon: TrendingUp, delay: 22, duration: 9, x: "38%", y: "45%", color: "text-emerald-400" },
        { icon: Award, delay: 23, duration: 16, x: "68%", y: "88%", color: "text-orange-400" }
    ];

    const techStack = [
        { name: "React", color: "from-blue-400 to-blue-600" },
        { name: "Node.js", color: "from-green-400 to-green-600" },
        { name: "MongoDB", color: "from-emerald-400 to-emerald-600" },
        { name: "AWS", color: "from-orange-400 to-orange-600" },
        { name: "TypeScript", color: "from-blue-500 to-purple-600" },
        { name: "Tailwind", color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", color: "from-gray-700 to-gray-900" },
        { name: "GraphQL", color: "from-pink-400 to-pink-600" }
    ];

    const features = [
        { icon: Users, text: "Team Collaboration", color: "text-blue-400" },
        { icon: Target, text: "Goal-Oriented", color: "text-green-400" },
        { icon: Lightbulb, text: "Creative Solutions", color: "text-yellow-400" },
        { icon: Shield, text: "Secure & Reliable", color: "text-red-400" },
        { icon: TrendingUp, text: "Performance Focus", color: "text-purple-400" },
        { icon: Award, text: "Quality Assured", color: "text-orange-400" }
    ];

    return (
        <section id="workflow" className="py-20 relative overflow-hidden min-h-screen flex flex-col">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-8">
                {/* Original gradient blobs */}
                <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                {/* Additional gradient blobs */}
                <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full blur-3xl animate-pulse delay-3000"></div>
                <div className="absolute top-1/5 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-3xl animate-pulse delay-4000"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl animate-pulse delay-5000"></div>
                <div className="absolute top-2/3 left-1/6 w-52 h-52 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-6000"></div>
                <div className="absolute bottom-2/3 right-1/6 w-44 h-44 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-3xl animate-pulse delay-7000"></div>
                
                {/* Geometric shapes */}
                <div className="absolute top-20 right-20 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rotate-45 blur-xl animate-spin slow-spin"></div>
                <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rotate-12 blur-lg animate-bounce"></div>
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-yellow-400/15 rounded-full blur-2xl animate-pulse delay-6000"></div>
                <div className="absolute top-1/4 left-3/4 w-24 h-24 bg-gradient-to-br from-red-400/20 to-pink-400/20 rotate-45 blur-lg animate-spin slow-spin delay-3000"></div>
                <div className="absolute bottom-1/4 right-1/2 w-36 h-36 bg-gradient-to-br from-violet-400/15 to-purple-400/15 rounded-full blur-xl animate-pulse delay-8000"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingElements.map((element, index) => {
                    const IconComponent = element.icon;
                    return (
                        <motion.div
                            key={index}
                            className={`absolute ${element.color} opacity-20`}
                            style={{ left: element.x, top: element.y }}
                            initial={{ opacity: 0, scale: 0, rotate: 0 }}
                            animate={{ 
                                opacity: [0.1, 0.3, 0.1], 
                                scale: [0.8, 1.2, 0.8],
                                rotate: [0, 360],
                                y: [-10, 10, -10]
                            }}
                            transition={{
                                duration: element.duration,
                                delay: element.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <IconComponent size={20} />
                        </motion.div>
                    );
                })}
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
                className="text-center mt-8 mb-6 relative z-10"
            >
                <p className="font-playfair font-semibold text-3xl mb-3">
                    Our <span className="text-blue">WORKFLOW</span>
                </p>
                <LineGradient width="w-1/4 mx-auto" />
                <p className="mt-4 text-base max-w-2xl mx-auto text-grey">
                    A comprehensive 5-step process to bring your vision to life
                </p>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-wrap justify-center gap-2 mb-6 px-4 relative z-10"
            >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className={`bg-gradient-to-r ${tech.color} text-white text-xs px-3 py-1 rounded-full shadow-lg backdrop-blur-sm border border-white/20`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {tech.name}
                    </motion.div>
                ))}
            </motion.div>

            {/* Features Row */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-wrap justify-center gap-4 mb-8 px-4 relative z-10"
            >
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <motion.div
                            key={feature.text}
                            className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10"
                            whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.1)" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <IconComponent size={16} className={feature.color} />
                            <span className="text-white text-sm">{feature.text}</span>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Visual Workflow - Desktop */}
            {isAboveMediumScreens ? (
                <div className="relative max-w-7xl mx-auto px-4 flex-1 flex flex-col justify-center">
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
                    <div className="flex justify-between items-center relative z-10 -top-10">
                        {workflowSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
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
                                    className="flex flex-col items-center group cursor-pointer relative max-w-[200px]"
                                >
                                    {/* Floating Background Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150`}></div>

                                    {/* Icon Circle with Pulse Effect */}
                                    <div className="relative mb-2">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full animate-ping opacity-20`}></div>
                                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl ${step.shadowColor} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white/20 backdrop-blur-sm relative z-10`}>
                                            <IconComponent size={28} className="text-white drop-shadow-lg" />
                                        </div>
                                    </div>

                                    {/* Step Number with Glow */}
                                    <motion.div
                                        className="bg-white/90 backdrop-blur-sm text-deep-blue font-bold text-xs px-3 py-1 rounded-full mb-2 shadow-lg border border-white/50"
                                        whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 group-hover:bg-white/10 transition-all duration-300 w-full"
                                        whileHover={{ y: -5 }}
                                    >
                                        <h3 className="font-playfair font-semibold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-grey text-xs leading-relaxed mb-3">
                                            {step.description}
                                        </p>
                                        
                                        {/* Duration */}
                                        <div className="flex items-center justify-center gap-1 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                            <span className="text-white text-xs font-medium">{step.duration}</span>
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-1 mb-2">
                                            {step.details.slice(0, 2).map((detail, idx) => (
                                                <div key={idx} className="flex items-center justify-center gap-1">
                                                    <CheckCircle size={10} className="text-green-400" />
                                                    <span className="text-grey text-xs">{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Deliverables */}
                                        <div className="text-xs text-grey opacity-80">
                                            <span className="font-medium text-white">Deliverables:</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {step.deliverables.map((item, idx) => (
                                                    <span key={idx} className="bg-white/10 rounded px-2 py-0.5 text-xs">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Connection Indicator */}
                                    {index < workflowSteps.length - 1 && (
                                        <motion.div
                                            className="absolute top-10 -right-12 w-6 h-6 text-white/50"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 + 0.5 }}
                                        >
                                            <ArrowRight size={20} />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                /* Enhanced Mobile Workflow */
                <div className="max-w-sm mx-auto relative flex-1 px-4 py-4">
                    {/* Vertical connecting line */}
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 via-green-500 to-yellow-500 rounded-full opacity-30"></div>

                    {workflowSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
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
                                className="flex items-start mb-8 group relative"
                            >
                                {/* Icon Circle with Enhanced Styling */}
                                <div className="relative flex-shrink-0">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.shadowColor} border-2 border-white/30 backdrop-blur-sm relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent size={20} className="text-white" />
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full animate-ping opacity-20`}></div>
                                </div>

                                {/* Content with Card Design */}
                                <div className="ml-4 flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 group-hover:bg-white/10 transition-all duration-300 group-hover:transform group-hover:translate-x-1">
                                    <div className="flex items-center mb-2">
                                        <span className="bg-white/90 backdrop-blur-sm text-deep-blue font-bold text-xs px-2 py-1 rounded-full mr-2 shadow-lg">
                                            {step.number}
                                        </span>
                                        <h3 className="font-playfair font-semibold text-base text-white">
                                            {step.title}
                                        </h3>
                                        <div className="ml-auto text-xs text-grey bg-white/10 rounded px-2 py-1">
                                            {step.duration}
                                        </div>
                                    </div>
                                    <p className="text-grey text-sm leading-relaxed mb-2">
                                        {step.description}
                                    </p>
                                    
                                    {/* Details */}
                                    <div className="space-y-1 mb-2">
                                        {step.details.slice(0, 3).map((detail, idx) => (
                                            <div key={idx} className="flex items-center gap-1">
                                                <CheckCircle size={12} className="text-green-400 flex-shrink-0" />
                                                <span className="text-grey text-xs">{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Deliverables */}
                                    <div className="flex flex-wrap gap-1">
                                        {step.deliverables.slice(0, 3).map((item, idx) => (
                                            <span key={idx} className="bg-white/10 rounded text-xs px-2 py-0.5 text-grey">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* Custom CSS for animations */}
            <style jsx>{`
                .slow-spin {
                    animation: spin 20s linear infinite;
                }
            `}</style>
        </section>
    )
}

export default WorkflowServices