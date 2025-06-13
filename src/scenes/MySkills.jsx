import { div, img } from "framer-motion/client";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

// Media
import skillImg from "../assets/skills-image.png"

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* Header and Image section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, x: -50 },
                        visible: {opacity: 1, x: 0}
                    }}
                    className="md:w-1/3"
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        My <span className="text-red">SKIILS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sit vitae provident veniam quibusdam eos?</p>
                </motion.div>

                {/*  */}
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img 
                                src={skillImg} 
                                alt="skills"
                                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src={skillImg}
                        />
                    )}
                </div>
            </div>
            
                {/* Skills */}
                <div className="md:flex md:justify-between mt-16 gap-32">
                    {/* Experiances */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, y: -50 },
                            visible: {opacity: 1, y: 0}
                        }}
                        className="md:w-1/3 mt-10"
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl ">01</p>
                                <p className="font-playfair font-semibold text-3xl mt-3 ">Experiance</p>
                            </div>
                            <div 
                                className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]">
                            </div>
                        </div>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque, earum tenetur obcaecati eum fugit eos suscipit</p>
                    </motion.div>

                    {/* Innovative*/}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, y: -50 },
                            visible: {opacity: 1, y: 0}
                        }}
                        className="md:w-1/3 mt-10"
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl ">02</p>
                                <p className="font-playfair font-semibold text-3xl mt-3 ">Innovative</p>
                            </div>
                            <div 
                                className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]">
                            </div>
                        </div>
                        <p className="mt-5">Architecto doloribus molestias cupiditate?</p>
                    </motion.div>

                    {/* Imaginative */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, y: -50 },
                            visible: {opacity: 1, y: 0}
                        }}
                        className="md:w-1/3 mt-10"
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl ">03</p>
                                <p className="font-playfair font-semibold text-3xl mt-3 ">Imaginative</p>
                            </div>
                            <div 
                                className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]">
                            </div>
                        </div>
                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum architecto sequi. Libero provident eaque magni, vero id earum praesentium sapiente. Repellendus dolorem ratione doloremque.</p>
                    </motion.div>
                </div>
        </section>
    )
}

export default MySkills