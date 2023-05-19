import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../utils/Types'

type BenefitItemProps = {
    title: string
    img: string
    desc: string
    setSelectedPage: (value: SelectedPage) => void
}

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
}

const BenfitItem: React.FC<BenefitItemProps> = ({
    title,
    img,
    desc,
    setSelectedPage,
}) => {
    return (
        <motion.div variants={childVariant}>
            <div className="mx-auto mb-4 h-full w-full  rounded-2xl   border-gray-900 px-5 text-center shadow-2xl  grayscale hover:grayscale-0 ">
                <div className="flex justify-center">
                    <div className=" h-[400px] max-w-[400px] py-10 ">
                        <img
                            className="h-full w-full object-cover"
                            src={img}
                            alt={title}
                        />
                    </div>
                </div>
                <h4 className="font-bold">{title}</h4>
                <p className="my-3">{desc}</p>
                <AnchorLink
                    className="font-bold hover:underline"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
            </div>
        </motion.div>
    )
}
export default BenfitItem
