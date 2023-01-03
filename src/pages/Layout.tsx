import { ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'

import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

interface ChildrenProps {
    children?: ComponentChildren
}

interface NavbarState {
    toggle: boolean
    setToggle: boolean | any
    show: boolean
    showOnScroll: boolean | any
}

function Layout({ children }: ChildrenProps) {
    const [toggle, setToggle] = useState<NavbarState['toggle']>(false)
    const [showOnScroll] = useState<NavbarState['show']>(false)

    return (
        <div className="bg-[#0c0c0cee]">
            <div
                className={`bg-background text-gray-100  lg:mx-auto lg:w-11/12 ${
                    !toggle ? null : 'absolute inset-0'
                }`}
            >
                <Navbar
                    toggle={toggle}
                    setToggle={setToggle}
                    showOnScroll={showOnScroll}
                />

                <main className="z-0 space-y-8 px-[1.15rem] pb-8 sm:px-11 lg:px-28">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default Layout
