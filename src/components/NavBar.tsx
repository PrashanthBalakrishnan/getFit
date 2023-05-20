import { SelectedPage } from '@/utils/Types'
import Link from '../utils/Link'
import { useState } from 'react'
import { CgGym } from 'react-icons/cg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

type NavBarProps = {
    isTopOfPage: boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export const NavBar: React.FC<NavBarProps> = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage,
}) => {
    const navBackGround = isTopOfPage
        ? ''
        : 'bg-gray-950 text-white transition duration-200'
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    const handleMenuToggle = () => {
        setIsMenuToggled((prev) => !prev)
    }
    return (
        <nav
            className={`${navBackGround} fixed top-0 z-50 w-full bg-gray-100 py-6`}
        >
            <div className="flex-between mx-auto flex w-5/6 ">
                <div className="flex items-center gap-1">
                    <CgGym size={50} className={`${navBackGround}`} />
                    <p className="text-2xl font-bold">
                        GET<span className="text-accent100">FIT</span>
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="sm:flex-between hidden gap-8 text-sm sm:flex">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
                {/* Mobile Menu*/}
                <div className="sm:hidden">
                    <AiOutlineMenu size={30} onClick={handleMenuToggle} />
                </div>
                {isMenuToggled && (
                    <nav className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-gray-100 text-black drop-shadow-lg transition duration-200">
                        {/* CloseButton */}
                        <div className="flex-end p-[12%]">
                            <AiOutlineClose
                                size={30}
                                onClick={handleMenuToggle}
                            />
                        </div>
                        {/* Mobile Menu Items */}

                        <div className="ml-[20%] flex flex-col gap-10 text-2xl ">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                handleMenuToggle={handleMenuToggle}
                            />
                            <Link
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                handleMenuToggle={handleMenuToggle}
                            />
                            <Link
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                handleMenuToggle={handleMenuToggle}
                            />
                            <Link
                                page="Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                handleMenuToggle={handleMenuToggle}
                            />
                        </div>
                    </nav>
                )}
            </div>
        </nav>
    )
}
