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
    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-start sm:space-y-0 sm:space-x-4">
      <a
        rel="noopener noreferrer"
        href={firstBtnlink}
        className="text-mysecondary rounded bg-myprimary px-8 py-3 text-lg font-semibold
        uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:bg-myprimary-700 hover:text-white hover:shadow-lg focus:bg-myprimary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-myprimary-800 active:shadow-lg"
      >
        {firstBtnText}
      </a>
      <a
        rel="noopener noreferrer"
        href={secondBtnLink}
        className="rounded border border-gray-100 px-8 py-3 text-lg font-semibold uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:border-myprimary-700 hover:bg-myprimary-700 hover:shadow-lg focus:border-myprimary-700 focus:bg-myprimary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-myprimary-800 active:shadow-lg"
      >
        {secondBtnText}
      </a>
    </div>
  )
}

export default ButtonsHero
