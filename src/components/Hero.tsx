import ActionButton from '../utils/ActionButton'
import { SelectedPage } from '../utils/Types'
import HeroImage from '../assets/homePageGraphics.png'
import { motion } from 'framer-motion'

type HeroProps = {
    setSelectedPage: (value: SelectedPage) => void
}

const Hero: React.FC<HeroProps> = ({ setSelectedPage }) => {
    return (
        <section
            id="home"
            className="mt-24 gap-16 bg-gray-100  md:mt-0 md:h-[80vh] md:py-10 md:pb-0"
        >
            {/* Image and main header */}
            <motion.div
                className="mx-auto mt-10 w-5/6 items-center justify-around md:flex md:h-5/6 "
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* heading */}
                <motion.div
                    className="md:basis-2/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center md:block">
                        <h2
                            className="text-center text-4xl font-bold tracking-tight text-gray-900 md:mt-0 md:text-left md:text-5xl
                        lg:text-6xl"
                        >
                            GET<span className="text-accent100">FIT</span>
                        </h2>
                        <p className="my-6 text-center text-lg text-gray-500 sm:text-left lg:text-xl ">
                            Welcome to Unrivaled Gym, where we offer
                            unparalleled training and fitness classes that will
                            help you achieve the body of your dreams. Our
                            world-class studios are designed to shape your body
                            and bring your fitness goals to reality. Don't wait
                            any longer, start working towards your dream body
                            today.
                        </p>
                        <motion.div
                            className="my-8 flex items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className="py-10 md:h-[100%] md:max-w-[90%] "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img
                        className="h-full w-full object-cover"
                        src={HeroImage}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Hero
