import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import contactImg from "../assets/contact-image.jpeg"

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }
    
    return (
        <section id='contact' className="py-48">
            {/* Heading */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-end w-full"
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                    <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
            </motion.div>

            {/* Form and Image */}
            <div className="md:flex md:justify-between gap-1 mt-5">
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
                    <img src={contactImg} alt="contact-image" />
                </motion.div>

                {/* Form section right */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay: 0.2, duration: 0.5 }}
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
                    >
                            <input 
                                type="text"
                                className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true, 
                                    maxLength: 100,
                                })}
                            />
                                {errors.name && (
                                    <p className="text-red mt-1 font-semibold">
                                        {errors.name.type === 'required' && "This field is required"}
                                        {errors.name.type === 'maxLength' && "The max length is 100 characters"}
                                    </p>
                                )}

                            <input 
                                type="email"
                                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true, 
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                                {errors.email && (
                                    <p className="text-red mt-1 font-semibold">
                                        {errors.email.type === 'required' && "This field is required"}
                                        {errors.email.type === 'pattern' && "Invalid email address"}
                                    </p>
                                )}

                            <textarea 
                                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                                placeholder="MESSAGE"
                                rows="4"
                                cols="50"
                                {...register("message", {
                                    required: true, 
                                    maxLength: 2000,
                                })}
                            />
                                {errors.message && (
                                    <p className="text-red mt-1 font-semibold">
                                        {errors.message.type === 'required' && "This field is required"}
                                        {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                                    </p>
                                )}

                            <button
                                className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
                                type="submit"
                            >
                                SEND ME A MESSAGE
                            </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact