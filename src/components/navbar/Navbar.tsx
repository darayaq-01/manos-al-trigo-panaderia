import { Link } from 'preact-router'
import { navLinks } from '../../constants'

import logo2 from '../../assets/images/logo/logo-text-only.svg'
import logo from '../../assets/images/logo/pancito_logo-ready.svg'
interface NavbarState {
    toggle: boolean
    setToggle: boolean | any
    showOnScroll: boolean | any
}

export default function Navbar({
    toggle,
    setToggle,
    showOnScroll
}: NavbarState) {
    return (
        <nav className="relative isolate flex flex-wrap items-center justify-between pt-2 sm:px-10">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
                {/* logo */}
                <Link
                    rel="noopener noreferrer"
                    href="/"
                    aria-label="Regresar al inicio"
                    className="flex items-center p-2"
                >
                    <img
                        src={`${!showOnScroll ? logo : logo2}`}
                        alt="manos al trigo"
                        className={
                            !showOnScroll
                                ? 'h-14 w-14 self-center object-contain'
                                : 'h-24 w-24 self-center object-contain'
                        }
                    />
                </Link>
                {/* hamburger button */}
                <button
                    className="flex justify-end p-4 sm:hidden "
                    onClick={() => setToggle((prev: any) => !prev)}
                    aria-label="Toggle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="s"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2.5"
                        className="h-8 w-8 stroke-white hover:stroke-slate-300"
                    >
                        {!toggle ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2 6h16M6 12h16M2 18h16"
                            />
                        ) : null}
                    </svg>
                </button>
                {/* menu +640px */}
                <div className="hidden gap-9 uppercase sm:flex sm:items-end sm:justify-center">
                    {navLinks.map((link) => (
                        <ul key={link.id}>
                            <li>
                                <Link
                                    activeClassName="active"
                                    className="mb-1			
				rounded border-b-2 p-4 py-3 text-lg text-white hover:border-y-2 hover:border-solid hover:border-myprimary-700 hover:text-myprimary-700 active:font-bold"
                                    href={link.link}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
                {/* menu responsive */}
                <div
                    className={`fixed min-h-screen w-3/5 bg-gradient-to-r from-myprimary-800 via-myprimary-700 to-myprimary/[.85] shadow-lg shadow-myprimary/60 ${
                        toggle ? 'left-0' : '-left-full '
                    } top-0 flex flex-col px-3 uppercase transition-all duration-500 sm:hidden`}
                >
                    <div className="mb-8 flex items-center justify-between pt-2">
                        {/* imagen */}
                        {toggle ? (
                            <Link
                                rel="noopener noreferrer"
                                href="/"
                                aria-label="Regresar al inicio"
                            >
                                <img
                                    src={logo}
                                    alt="manos al trigo"
                                    className="h-16 w-16 self-center object-contain"
                                />
                            </Link>
                        ) : null}
                        {/* button X */}
                        <button
                            className="flex justify-end sm:hidden "
                            onClick={() => setToggle((prev: any) => !prev)}
                            aria-label="toggle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="s"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2.5"
                                className="h-8 w-8 stroke-white hover:stroke-slate-300"
                            >
                                {toggle ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : null}
                            </svg>
                        </button>
                    </div>
                    <div className="flex w-5/6 max-w-sm flex-col overflow-y-auto py-10">
                        {navLinks.map((link) => (
                            <ul
                                key={link.id}
                                className="text-mysecondary text-lg "
                            >
                                <li>
                                    <Link
                                        activeClassName="active"
                                        className="text-mysecondary mb-1 block rounded border-y-2 border-transparent p-4 text-lg hover:border-y-2 hover:border-solid hover:border-background hover:text-background"
                                        href={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                    {/* LOGIN */}
                    <div className="mt-auto justify-end">
                        <div className="pt-6">
                            <Link
                                className="mb-3 block border-2 border-background px-4 py-3 text-center text-base font-semibold leading-loose tracking-wider text-background hover:border-solid hover:bg-background hover:text-lg hover:text-myprimary"
                                href="/"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
