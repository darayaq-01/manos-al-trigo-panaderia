import { Link } from 'preact-router'
import { entries } from '../api/fakePost'
import imgEntries1 from '../assets/revisando-masa.jpg'

interface toBlog {
  title: string
  link: string
  text: string
}

function Manufacture({ title, link, text }: toBlog) {
  return (
    <section>
      <h2 className="my-3 pb-7 text-center font-fheading text-5xl font-bold">
        {title}
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {/* destacado */}
        <div className="overflow-hidden rounded lg:col-span-3 lg:flex">
          <img
            src={imgEntries1}
            alt=""
            className="h-auto max-h-96 w-full bg-gray-500 object-cover"
          />
          <div className="bg-mysecondary space-y-6 p-6 md:flex md:flex-col lg:p-8">
            <span className="self-start rounded-full bg-myprimary px-3 py-1 text-sm text-gray-900">
              Business
            </span>
            <h2 className="font-fheading text-3xl md:flex-1">
              Curating a workplace that inspires team movement
            </h2>
            <div>
              <p className="text-gray-400">November 12</p>
            </div>
          </div>
        </div>

        {/* otras entradas */}
        {entries.map((entry) => {
          return (
            <div
              className="bg-mysecondary rounded p-6 lg:p-8 lg:py-12"
              key={entry.title}
            >
              <h3 className="font-fheading text-xl font-bold text-gray-50">
                {entry.title}
              </h3>
              <p className="inline">{entry.content}</p>
              <p className="text-gray-400">{entry.date}</p>
            </div>
          )
        })}
      </div>
      {/* link ver más */}
      <Link
        rel="noopener noreferrer"
        href={link}
        className="mt-4 flex justify-center rounded-sm bg-myprimary px-8 py-3 text-sm font-semibold uppercase
        leading-tight text-gray-900 shadow-md transition duration-150 ease-in-out hover:bg-myprimary-700 hover:text-white hover:shadow-lg focus:bg-myprimary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-myprimary-800 active:shadow-lg"
      >
        {text} &gt;
      </Link>
    </section>
  )
}
export default Manufacture
