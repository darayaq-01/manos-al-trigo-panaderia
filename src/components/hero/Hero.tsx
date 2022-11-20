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
    link: 'https://'
  },
  second_btn: {
    text: 'Nuestro pan',
    link: 'https://'
  }
}

function Hero({ title, subtitle }: HeroInfos) {
  return (
    <section className="max-h-screen dark:bg-my-background dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-fheading font-bold sm:text-6xl tracking-tight leading-10 sm:leading-6">
            {title}
          </h1>
          <p className="mt-6 mb-8 bg-midu-dark text-lg sm:mb-12">{subtitle}</p>

          <ButtonsHero
            firstBtnText={DATA_BTN.first_btn.text}
            firstBtnlink={DATA_BTN.first_btn.link}
            secondBtnText={DATA_BTN.second_btn.text}
            secondBtnLink={DATA_BTN.first_btn.link}
          />
        </div>

        <div className="hidden sm:flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={logo}
            alt="manos al trigo"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mb-2"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
