import HeadingText from '../utils/HeadingText'
import { useForm } from 'react-hook-form'
import ContactUsGraphic from '../assets/ContactUsGraphic.webp'
import { SelectedPage } from '../utils/Types'
import { motion } from 'framer-motion'

type ContactUsProps = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs: React.FC<ContactUsProps> = ({ setSelectedPage }) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-gray-200
    px-5 py-3 placeholder-black resize-none`

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm()

    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }

    return (
        <section id="contactus" className="bg-gray-100">
            <motion.div
                className="mx-auto w-5/6 pb-12 md:pt-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                {/* HEADER */}
                <div className="md:w-3/5">
                    <HeadingText>
                        <span className="text-primary-500">JOIN NOW</span> TO
                        GET IN SHAPE
                    </HeadingText>
                    <p className="my-5 md:text-lg">
                        Don't wait any longer - join us today and experience the
                        remarkable benefits of a dedicated fitness community
                        that is committed to helping you thrive.
                    </p>
                </div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <div className="mt-10 basis-3/5 md:mt-0">
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/prashbala13@gmail.com"
                            method="POST"
                        >
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register('name', {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-rose-600">
                                    {errors.name.type === 'required' &&
                                        'This field is required.'}
                                    {errors.name.type === 'maxLength' &&
                                        'Max length is 100 char.'}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-rose-600">
                                    {errors.email.type === 'required' &&
                                        'This field is required.'}
                                    {errors.email.type === 'pattern' &&
                                        'Invalid email address.'}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register('message', {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-rose-600">
                                    {errors.message.type === 'required' &&
                                        'This field is required.'}
                                    {errors.message.type === 'maxLength' &&
                                        'Max length is 2000 char.'}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="rounded-lg bg-black px-20 py-3 text-white transition transition duration-300 duration-500 hover:text-accent100 md:mt-5"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        onViewportEnter={() =>
                            setSelectedPage(SelectedPage.ContactUs)
                        }
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img
                                className="w-full  rounded-xl shadow-lg grayscale hover:grayscale-0"
                                alt="contact-us-page-graphic"
                                src={ContactUsGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
export default ContactUs
