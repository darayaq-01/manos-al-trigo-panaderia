import { useState } from 'preact/hooks'

import Navbar from './navbar/Navbar'
import Hero from '../components/hero/Hero'
import Offers from './Offers'
import Manufacture from './Manufacture'
import Footer from '../components/footer/Footer'

// hero
const title = (
  <>
    <h1 className="dark:text-my-primary">Manos al Trigo</h1>
    <h1>Panadería artesanal de Valdivia</h1>
  </>
)
const subtitle = (
  <p>
    <em>Pan de pueblo, pan con masa madre, pizzas y pasteleria</em>
  </p>
)

interface NavbarState {
  toggle: boolean
  setToggle: boolean | any
  show: boolean
  showOnScroll: boolean | any
}

// Ofertas
const titleOfertas = 'Nuestras ofertas'
const subtitleOfertas = 'Revisa nuestras ofertas anteriores'
const linkOfertas = '/ofertas-anteriores'

const DATA_BLOG = {
  checkBlog: {
    link: '/blog',
    text: 'Check our blog',
    title: 'Nuestro pan'
  }
}

const Home = () => {
  const [toggle, setToggle] = useState<NavbarState['toggle']>(false)
  const [showOnScroll] = useState<NavbarState['show']>(false)

  return (
    <div
      className={`dark:bg-my-background dark:text-gray-100 ${
        !toggle ? null : 'inset-0 absolute'
      }`}
    >
      <Navbar
        toggle={toggle}
        setToggle={setToggle}
        showOnScroll={showOnScroll}
      />
      <div className="px-[1.15rem] sm:px-11 lg:px-28 pb-8 space-y-8 z-0">
        <Hero title={title} subtitle={subtitle} />
        <main>
          <div className="container mx-auto space-y-16">
            <div id="oferta">
              <Offers
                title={titleOfertas}
                subtitle={subtitleOfertas}
                link={linkOfertas}
              />
            </div>
            <div id="blog">
              <Manufacture
                title={DATA_BLOG.checkBlog.title}
                link={DATA_BLOG.checkBlog.link}
                text={DATA_BLOG.checkBlog.text}
              />
            </div>
          </div>
        </main>
      </div>
      <div id="contacto">
        <Footer />
      </div>
    </div>
  )
}

export default Home
