import ButtonsHero from './ButtonsHero'
// const logo = require('../assets/pancito_logo-ready.svg')
import logo from '../../assets/pancito_logo-ready.svg'

import { JSX } from 'preact'

interface HeroInfos {
  title: JSX.IntrinsicAttributes | string
  subtitle: JSX.IntrinsicAttributes | string
}

const DATA_BTN = {
  first_btn: {
    text: 'oferta',
    link: '#oferta'
  },
  second_btn: {
    text: 'Nuestro pan',
    link: '#blog'
  }
}

function Hero({ title, subtitle }: HeroInfos) {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center mx-auto sm:min-h-screen  sm:flex-row sm:justify-around">
      <div className="flex flex-col justify-center text-center lg:flex-col sm:text-left gap-5">
        {/* texto */}
        <div>
          <h1 className="text-[2.4rem] font-fheading font-bold sm:text-6xl tracking-tight leading-[3rem] mb-4 sm:min-w-min md:leading-[4rem]">
            {title}
          </h1>
          <p className="bg-midu-dark text-[1.25rem] sm:mb-12">{subtitle}</p>
        </div>

        {/* buttons */}
        <ButtonsHero
          firstBtnText={DATA_BTN.first_btn.text}
          firstBtnlink={DATA_BTN.first_btn.link}
          secondBtnText={DATA_BTN.second_btn.text}
          secondBtnLink={DATA_BTN.second_btn.link}
        />
      </div>

      {/* logo */}
      <div className="hidden sm:flex sm:justify-center sm:items-center sm:h-screen sm:p-6">
        <img
          src={logo}
          alt="manos al trigo"
          className="object-contain sm:h-[100vh]"
        />
      </div>
    </section>
  )
}

export default Hero
