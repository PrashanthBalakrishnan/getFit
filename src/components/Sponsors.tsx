import Redbull from '../assets/sponsors/Redbull.png'
import Forbes from '../assets/sponsors/Forbes.png'
import Gymshark from '../assets/sponsors/Gymshark.png'
import { motion } from 'framer-motion'
import { SelectedPage } from '../utils/Types'

type SponsorsProps = {
    setSelectedPage: (value: SelectedPage) => void
}

const Sponsors: React.FC<SponsorsProps> = ({ setSelectedPage }) => {
    return (
        <motion.div
            className="z-30 flex h-[50px] items-center bg-gray-200 py-10 md:h-[150px]
        "
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <div className="mx-auto w-5/6">
                <motion.div
                    className="flex items-center justify-between gap-8 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img className="w-[20%]" src={Redbull} alt="Redbull" />
                    <img className="w-[20%]" src={Forbes} alt="Forbes" />
                    <img className="w-[20%]" src={Gymshark} alt="Redbull" />
                </motion.div>
            </div>
        </motion.div>
    )
}
export default Sponsors
