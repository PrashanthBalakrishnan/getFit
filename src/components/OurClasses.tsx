import HIIT from '../assets/classes/HIIT.jpg'
import Yoga from '../assets/classes/Yoga.jpg'
import Cycling from '../assets/classes/Cycling.jpg'
import Strength from '../assets/classes/Strength.jpg'
import Dance from '../assets/classes/Dance.jpg'
import Meditation from '../assets/classes/Meditation.jpg'
import Boxing from '../assets/classes/Boxing.jpeg'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import HeadingText from '../utils/HeadingText'
import { SelectedPage } from '../utils/Types'
import { motion } from 'framer-motion'

const classData = [
    {
        img: HIIT,
        title: 'HIIT',
        alt: 'People doing High Intensity Interval Training',
        desc: 'These classes focus on short bursts of intense exercise followed by periods of active recovery, designed to maximize calorie burn, increase endurance, and improve overall fitness.',
    },
    {
        img: Yoga,
        title: 'Yoga and Pilates',
        alt: 'People doing yoga',
        desc: 'These classes focus on improving flexibility, strength, and balance through a series of controlled movements, poses, and breathing exercises. They promote relaxation, mindfulness, and mind-body connection.',
    },
    {
        img: Cycling,
        title: 'Cycling',
        alt: 'group of people indoor cycling',
        desc: 'These classes simulate outdoor cycling using stationary bikes. Led by an instructor, they provide a challenging cardio workout that strengthens the legs, improves endurance, and burns calories.',
    },
    {
        img: Dance,
        title: 'Dance',
        alt: 'People dancing',
        desc: 'These classes combine dance moves with aerobic exercises to create an energetic and fun workout. They provide cardiovascular benefits, improve coordination, and help burn calories.',
    },
    {
        img: Strength,
        title: 'Strength Training',
        alt: 'People doing strength training',
        desc: 'These classes focus on building strength and muscle tone using a variety of resistance exercises such as weightlifting, bodyweight exercises, and functional training. They help improve overall body composition and increase metabolism.',
    },
    {
        img: Boxing,
        title: 'Boxing/Kickboxing',
        alt: 'People doing boxing',
        desc: 'These classes incorporate boxing or kickboxing techniques, such as punches, kicks, and combinations, to improve cardiovascular fitness, build strength, and enhance self-defense skills.',
    },

    {
        img: Meditation,
        title: 'Meditation',
        alt: 'People meditating',
        desc: 'These classes focus on relaxation, stress reduction, and mental well-being. They typically include guided meditation, breathing exercises, and techniques to promote mindfulness and inner peace.',
    },
]

type OurClassesProps = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses: React.FC<OurClassesProps> = ({ setSelectedPage }) => {
    const [activeItem, setActiveItem] = useState(4)
    const wrapperRef = useRef<HTMLUListElement | null>(null)
    const timeOutRef = useRef<number | null>(null)

    useEffect(() => {
        if (!wrapperRef.current) return
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }
        wrapperRef.current.style.setProperty(
            '--transition',
            '600ms cubic-bezier(0.22,0.61,0.36,1'
        )
        timeOutRef.current = setTimeout(() => {
            wrapperRef.current?.style.removeProperty('--transition')
        }, 900)

        return () => {
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current)
            }
        }
    }, [activeItem])

    return (
        <section id="ourclasses" className="bg-gray-200 py-10">
            <motion.div
                className="mx-auto h-full w-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <HeadingText>Classes</HeadingText>
                <div className=" flex justify-center py-10 ">
                    <div className="w-[1200px] max-w-full">
                        <ul
                            ref={wrapperRef}
                            className="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]"
                        >
                            {classData.map((item, idx) => (
                                <li
                                    onClick={() => setActiveItem(idx)}
                                    key={item.title}
                                    aria-current={activeItem === idx}
                                    className={classNames(
                                        "relative md:w-[8%]   md:first:w-[1%] md:last:w-[1%]  md:[&[aria-current='true']]:w-[48%]",
                                        'md:[transition:width_var(--transition,200ms_ease-in)]',
                                        'before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-gray-100 md:before:absolute md:before:block',
                                        'md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[12%]',

                                        "[&[aria-current='false']]:grayscale"
                                    )}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-gray-300">
                                        <img
                                            className="absolute right-0   h-full w-24 max-w-none object-cover opacity-80  md:left-1/2 md:top-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2 md:-translate-y-1/2"
                                            src={item.img}
                                            alt={item.alt}
                                        />
                                        <div
                                            className={classNames(
                                                'right-8 top-8 p-4 transition-[transform,opacity] md:absolute md:p-0',
                                                activeItem === idx
                                                    ? 'md:translate-x-0 md:opacity-100'
                                                    : 'md:translate-x-3 md:opacity-0'
                                            )}
                                        >
                                            <div className="m-2 rounded-xl p-2 md:bg-gray-100  md:text-black md:outline-double md:outline-accent100">
                                                <p className="font-bold uppercase md:text-2xl">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
export default OurClasses
