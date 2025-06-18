import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import contactImg from "../assets/contact-image.jpeg"

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    // Line Gradient custom
    const LineGradient = ({ width = "w-full" }) => (
        <div className={`h-0.5 ${width} bg-gradient-to-r from-orange via-yellow to-orange`} />
    );

    return (
        <section id='contact' className="py-48 relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue/20 to-purple/20 rounded-full blur-sm"
                />
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-yellow/15 to-orange/15 rounded-full blur-sm"
                />
                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-red/20 to-purple/20 rounded-full blur-sm"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -15, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-br from-teal/15 to-green/15 rounded-full blur-sm"
                />
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 8, 0]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                    className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-blue/25 to-yellow/25 rounded-full blur-sm"
                />
            </div>

            {/* Contact Header - Right Aligned */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-end w-full relative z-10"
            >
                <div className="text-right">
                    <h2 className="font-playfair font-semibold text-4xl text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow to-orange">Contact Me</span> To Get Started
                    </h2>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                    <p className="mt-6 text-lg text-grey max-w-2xl leading-relaxed font-opensans">
                        Ready to bring your vision to life? Let's discuss your next project
                    </p>
                </div>
            </motion.div>

            {/* Form and Image */}
            <div className="md:flex md:justify-between gap-16 mt-5 relative z-10">
                {/* Image section left */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 flex justify-center"
                >
                    <img src={contactImg} alt="contact-image" className="rounded-lg shadow-lg" />
                </motion.div>

                {/* Form section right */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/ferdinandluis88@gmail.com"
                        method="POST"
                        className="space-y-6"
                    >
                        <div>
                            <input
                                type="text"
                                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold placeholder-grey text-white p-4 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-transparent transition-all duration-300"
                                placeholder="Your Name"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="text-red mt-2 text-sm font-medium">
                                    {errors.name.type === 'required' && "This field is required"}
                                    {errors.name.type === 'maxLength' && "The max length is 100 characters"}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold placeholder-grey text-white p-4 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-transparent transition-all duration-300"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="text-red mt-2 text-sm font-medium">
                                    {errors.email.type === 'required' && "This field is required"}
                                    {errors.email.type === 'pattern' && "Invalid email address"}
                                </p>
                            )}
                        </div>

                        <div>
                            <textarea
                                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold placeholder-grey text-white p-4 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-transparent transition-all duration-300 resize-none"
                                placeholder="Your Message"
                                rows="5"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="text-red mt-2 text-sm font-medium">
                                    {errors.message.type === 'required' && "This field is required"}
                                    {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                                </p>
                            )}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full p-4 bg-gradient-to-r from-yellow to-orange font-bold text-deep-blue rounded-lg hover:from-orange hover:to-red transition-all duration-300 shadow-lg hover:shadow-xl"
                            type="submit"
                        >
                            SEND MESSAGE
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact