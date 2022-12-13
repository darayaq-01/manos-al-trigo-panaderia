import { Link } from 'preact-router'
import { navLinks } from '../../constants'

import logo2 from '../../assets/logo-text-only.svg'
import logo from '../../assets/pancito_logo-ready.svg'

// esta interface está repetida
// revisar los any
interface NavbarState {
  toggle: boolean
  setToggle: boolean | any
  showOnScroll: boolean | any
}

// color de fondo del logo: bg-[#fbf3de]

function Navbar({ toggle, setToggle, showOnScroll }: NavbarState) {
  return (
    <nav className="relative z-50 flex flex-wrap items-center justify-between isolate pt-2 sm:px-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
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
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="s"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
            className="w-8 h-8 stroke-white hover:stroke-slate-300"
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
        <div className="hidden sm:flex sm:justify-center sm:items-end gap-9 uppercase">
          {navLinks.map((link) => (
            <ul key={link.id}>
              <Link
                activeClassName="active"
                className="py-3			
				text-lg active:font-bold border-b-2 hover:border-y-2 hover:border-solid hover:border-my-primary-700 hover:text-my-primary-700 text-white p-4 mb-1 rounded"
                href={link.link}
              >
                {link.title}
              </Link>
            </ul>
          ))}
        </div>
        {/* menu responsive */}
        <div
          className={`fixed bg-gradient-to-r from-my-primary-800 via-my-primary-700 to-my-primary/[.85] w-3/5 min-h-screen shadow-lg shadow-my-primary/60 ${
            toggle ? 'left-0' : '-left-full '
          } top-0 uppercase transition-all duration-500 sm:hidden flex flex-col px-3 z-40 `}
        >
          <div className="flex justify-between items-center pt-2 mb-8">
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
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="s"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
                className="w-8 h-8 stroke-white hover:stroke-slate-300"
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
          <div className="flex flex-col w-5/6 max-w-sm py-10 overflow-y-auto">
            {navLinks.map((link) => (
              <ul key={link.id} className="dark:text-my-secondary-900 text-lg ">
                <Link
                  activeClassName="active"
                  className="block text-lg border-y-2 border-transparent hover:border-y-2 hover:border-solid hover:border-my-background hover:text-my-background text-my-secondary-900 p-4 mb-1 rounded"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </ul>
            ))}
          </div>
          {/* LOGIN */}
          <div className="mt-auto justify-end">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-3 text-base hover:text-lg hover:bg-my-background hover:text-my-primary tracking-wider leading-loose text-center font-semibold border-2 hover:border-solid border-my-background text-my-background"
                href="#!"
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

export default Navbar
