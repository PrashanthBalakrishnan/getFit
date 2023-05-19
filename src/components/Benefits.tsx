import HeadingText from '../utils/HeadingText'
import TrainingPrograms from '../assets/benefits/TrainingPrograms.webp'
import Facilities from '../assets/benefits/Facilities.jpg'
import FitnessClasses from '../assets/benefits/FitnessClasses.jpg'
import BenefitsPageGraphic from '../assets/benefits/BenefitPageGraphic.png'
import { motion } from 'framer-motion'

import BenfitItem from './BenfitItem'
import { SelectedPage } from '../utils/Types'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
}

const benefitData = [
    {
        id: 1,
        img: TrainingPrograms,
        title: 'Personalized Training Programs',
        description:
            "At GetFit, we understand that everyone has unique fitness goals and requirements. We offer personalized training programs tailored to your specific needs, whether you're a beginner looking to kickstart your fitness journey or an experienced athlete aiming to push your limits. Our expert trainers will assess your current fitness level, develop a customized workout plan, and provide ongoing guidance and support to help you achieve optimal results.",
    },
    {
        id: 2,
        img: Facilities,
        title: 'State-of-the-Art Facilities and Equipment',
        description:
            'GetFit gym is equipped with state-of-the-art facilities and cutting-edge exercise equipment to enhance your workout experience. From advanced cardio machines and strength training equipment to functional training areas and specialized studios, we provide everything you need to maximize your fitness potential. Our commitment to maintaining top-notch facilities ensures that you can enjoy a comfortable and motivating environment for your workouts.',
    },
    {
        id: 3,
        img: FitnessClasses,
        title: 'Diverse Fitness Classes',
        description:
            "We offer a wide range of fitness classes to cater to different interests and fitness levels. Whether you're into high-intensity interval training (HIIT), yoga, spinning, boxing, or dance workouts, we have a class for you. Led by experienced instructors, our diverse fitness classes provide both variety and challenge, helping you stay motivated and engaged in your fitness routine. With options for all ages and abilities, you can discover new workouts and find the ones that resonate with you, making your fitness journey enjoyable and sustainable.",
    },
]

type BenefitsProps = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits: React.FC<BenefitsProps> = ({ setSelectedPage }) => {
    return (
        <section id="benefits" className=" min-h-full  bg-gray-100 md:py-10">
            <motion.div
                className="mx-auto w-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <div className="text-center md:my-5 md:w-3/5 md:text-left">
                    <HeadingText>More than just a GYM.</HeadingText>
                </div>
                <div className="mt-5 justify-between gap-8 lg:flex">
                    {benefitData.map((benefit) => (
                        <BenfitItem
                            key={benefit.id}
                            img={benefit.img}
                            title={benefit.title}
                            desc={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>
                <div className="mt-16 md:mt-28">
                    <div className="w-full  justify-between lg:flex">
                        <img
                            className="justify-center grayscale lg:w-[50%]"
                            src={BenefitsPageGraphic}
                        />
                        <div className="mt-10 text-center">
                            <div>
                                <HeadingText>
                                    MILLION OF HAPPY MEMMBERS GETTING{' '}
                                    <span>FIT</span>
                                </HeadingText>
                                <p className="py-3 text-lg">
                                    Remember, joining our world-class gym not
                                    only offers these benefits but also provides
                                    a supportive community of like-minded
                                    individuals who share your passion for
                                    fitness. Together, we can push boundaries,
                                    achieve breakthroughs, and unlock your full
                                    fitness potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div></div>
        </section>
    )
}
export default Benefits
