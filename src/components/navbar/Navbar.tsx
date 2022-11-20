import { useState } from 'preact/hooks'
// import { navLinks } from '../../constants'

// const logo2 = require('../assets/logo-text-only.svg')
// const logo = require('../assets/pancito_logo-ready.svg')
import logo2 from '../../assets/logo-text-only.svg'
import logo from '../../assets/pancito_logo-ready.svg'

interface NavbarState {
  toggle: boolean
  show: boolean
}

// eslint-disable-next-line capitalized-comments
// functionality scroll
/*
const controlNavbar = () =>
window.scrollY > 50 ? setShow(true) : setShow(false);
useEffect(() => {
window.addEventListener("scroll", controlNavbar);
return () => {
  window.removeEventListener("scroll", controlNavbar);
};
}, []);
*/

// color de fondo del logo: bg-[#fbf3de]

const NavbarButton = () => {
  const [toggle, setToggle] = useState<NavbarState['toggle']>(false)

  return (
    <button
      className="flex justify-end p-4 sm:hidden"
      onClick={() => setToggle((prev) => !prev)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        {!toggle ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 6h16M6 12h16M2 18h16"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 18L18 6M6 6l12 12"
          />
        )}
      </svg>
    </button>
  )
}

function Navbar() {
  const [showOnScroll] = useState<NavbarState['show']>(false)

  return (
    <nav className="relative flex flex-wrap items-center justify-between isolate">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Regresar al inicio"
          className="flex items-center p-2"
        >
          <img
            src={`${!showOnScroll ? logo : logo2}`}
            alt="manos al trigo"
            className={
              // eslint-disable-next-line no-negated-condition
              !showOnScroll
                ? 'h-14 w-14 self-center object-contain'
                : 'h-24 w-24 self-center object-contain'
            }
          />
        </a>
        <NavbarButton />
      </div>
    </nav>
  )
}

export default Navbar
