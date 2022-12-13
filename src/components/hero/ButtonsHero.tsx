// two bottoms in a row with Tailwinds

interface ButtonsHeroInt {
  firstBtnText: string
  firstBtnlink: string
  secondBtnText: string
  secondBtnLink: string
}

const ButtonsHero = ({
  firstBtnText,
  firstBtnlink,
  secondBtnText,
  secondBtnLink
}: ButtonsHeroInt) => {
  return (
    <div className="flex flex-col space-y-4 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-start">
      <a
        rel="noopener noreferrer"
        href={firstBtnlink}
        className="px-8 py-3 text-lg font-semibold rounded dark:bg-my-primary dark:text-my-secondary-900
        leading-tight uppercase shadow-md hover:dark:bg-my-primary-700 hover:shadow-lg hover:text-white focus:dark:bg-my-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:dark:bg-my-primary-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        {firstBtnText}
      </a>
      <a
        rel="noopener noreferrer"
        href={secondBtnLink}
        className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 leading-tight uppercase shadow-md hover:dark:bg-my-primary-700 hover:shadow-lg hover:border-my-primary-700 focus:dark:bg-my-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:dark:bg-my-primary-800 active:shadow-lg focus:border-my-primary-700 transition duration-150 ease-in-out"
      >
        {secondBtnText}
      </a>
    </div>
  )
}

export default ButtonsHero
