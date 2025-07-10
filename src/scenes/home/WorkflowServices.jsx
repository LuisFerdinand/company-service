import { motion } from "framer-motion";
import {
    MessageCircle, ClipboardList, Palette, Eye, Rocket,
    CheckCircle, Code, Zap, Globe
} from "lucide-react";

const LineGradient = ({ width = "w-1/3" }) => (
    <div className={`h-0.5 ${width} bg-gradient-to-r from-blue to-purple`} />
);

const WorkflowServices = () => {
    const workflowSteps = [
        {
            number: "01",
            title: "Consultation",
            icon: MessageCircle,
            description: "Free consultation to understand your business needs and goals",
            color: "from-blue to-teal",
            highlights: ["Requirements Analysis", "Budget Planning", "Timeline Discussion"],
            duration: "1-2 Days"
        },
        {
            number: "02",
            title: "Planning",
            icon: ClipboardList,
            description: "Detailed project roadmap and strategic planning phase",
            color: "from-purple to-red",
            highlights: ["Project Blueprint", "User Experience Design", "Technical Architecture"],
            duration: "3-5 Days"
        },
        {
            number: "03",
            title: "Development",
            icon: Palette,
            description: "Building your digital solution with modern technologies",
            color: "from-orange to-red",
            highlights: ["Custom Development", "Responsive Design", "Quality Testing"],
            duration: "2-4 Weeks"
        },
        {
            number: "04",
            title: "Review",
            icon: Eye,
            description: "Testing, feedback, and refinement of your solution",
            color: "from-green to-teal",
            highlights: ["Performance Testing", "User Feedback", "Final Adjustments"],
            duration: "1-2 Weeks"
        },
        {
            number: "05",
            title: "Launch",
            icon: Rocket,
            description: "Going live with your new digital solution",
            color: "from-yellow to-orange",
            highlights: ["Deployment", "Training & Support", "Ongoing Maintenance"],
            duration: "2-3 Days"
        }
    ];

    // Simplified floating elements - only 6 instead of 24
    const floatingElements = [
        { icon: Code, x: "15%", y: "20%", delay: 0 },
        { icon: Zap, x: "85%", y: "30%", delay: 2 },
        { icon: Globe, x: "10%", y: "70%", delay: 4 },
        { icon: Code, x: "90%", y: "80%", delay: 6 },
        { icon: Zap, x: "25%", y: "15%", delay: 8 },
        { icon: Globe, x: "75%", y: "60%", delay: 10 }
    ];

    return (
        <section id="workflow" className="py-16 lg:py-20 relative overflow-hidden">
            {/* Simplified Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue to-purple rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-orange to-red rounded-full blur-3xl"></div>
            </div>

            {/* Minimal Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingElements.map((element, index) => {
                    const IconComponent = element.icon;
                    return (
                        <motion.div
                            key={index}
                            className="absolute text-blue opacity-20"
                            style={{ left: element.x, top: element.y }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                scale: [0.8, 1.2, 0.8],
                                y: [-10, 10, -10]
                            }}
                            transition={{
                                duration: 8,
                                delay: element.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <IconComponent size={24} />
                        </motion.div>
                    );
                })}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5 md:mb-8 lg:mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-1 font-inter">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple">Workflow</span>
                    </h2>
                    <LineGradient width="w-24 mx-auto" />
                    <p className="mt-2 sm:mt-6 text-[12px] xs:text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A streamlined 5-step process designed to transform your ideas into powerful digital solutions
                    </p>
                </motion.div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    {/* Enhanced Connecting Path */}
                    <div className="relative mb-8">
                        <svg className="absolute top-1/2 left-0 right-0 w-full h-32 transform -translate-y-1/2 z-0" viewBox="0 0 800 100">
                            <defs>
                                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#2CBCE9" />
                                    <stop offset="25%" stopColor="#8B5CF6" />
                                    <stop offset="50%" stopColor="#F97316" />
                                    <stop offset="75%" stopColor="#10B981" />
                                    <stop offset="100%" stopColor="#FDCC49" />
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
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto">
                        {workflowSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="text-center group relative z-10"
                                >
                                    {/* Icon */}
                                    <div className="relative mb-6 flex justify-center">
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent size={24} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300 h-64 flex flex-col justify-between items-center">
                                        <h3 className="text-base font-semibold text-white mb-2 font-inter">{step.title}</h3>
                                        <p className="text-[13px] text-gray-400 mb-2 leading-relaxed font-opensans">{step.description}</p>

                                        {/* Duration Badge */}
                                        <div className="inline-block bg-gradient-to-r from-blue to-purple text-white text-xs px-3 py-1 rounded-full mb-3 font-opensans">
                                            {step.duration}
                                        </div>

                                        {/* Highlights */}
                                        <div className="space-y-2">
                                            {step.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center text-xs text-white font-opensans">
                                                    <CheckCircle size={12} className="text-green mr-2 flex-shrink-0" />
                                                    {highlight}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden space-y-6">
                    {workflowSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                            >
                                {/* Icon & Number */}
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                            <IconComponent size={20} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-white font-inter">{step.title}</h3>
                                        <div className="inline-block bg-gradient-to-r from-blue to-purple text-white text-xs px-2 py-1 rounded-full mt-1 sm:mt-0 w-fit font-opensans">
                                            {step.duration}
                                        </div>
                                    </div>

                                    <p className="text-[13px] text-gray-400 mb-3 leading-relaxed font-opensans">{step.description}</p>

                                    {/* Highlights */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {step.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center text-[13px] text-white font-opensans">
                                                <CheckCircle size={12} className="text-green mr-2 flex-shrink-0" />
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16 hidden md:block"
                >
                    <p className="text-grey mb-6 text-lg font-opensans">
                        Ready to start your digital transformation?
                    </p>
                    <button className="bg-gradient-to-r from-blue to-purple hover:from-blue hover:to-red text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-opensans">
                        Get Started Today
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkflowServices;