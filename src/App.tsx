import { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { SelectedPage } from './utils/Types'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Benefits from './components/Benefits'
import OurClasses from './components/OurClasses'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    )

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true)
            }
            if (window.scrollY !== 0) setIsTopOfPage(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="app">
            <NavBar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <main>
                <Hero setSelectedPage={setSelectedPage} />
                <Sponsors setSelectedPage={setSelectedPage} />
                <Benefits setSelectedPage={setSelectedPage} />
                <OurClasses setSelectedPage={setSelectedPage} />
                <ContactUs setSelectedPage={setSelectedPage} />
            </main>
            <Footer />
        </div>
    )
}
export default App
