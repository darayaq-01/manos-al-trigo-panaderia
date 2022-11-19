import { entries } from '../api/fakePost'
// const imgEntries1 = require('../assets/revisando-masa.jpg')
import imgEntries1 from '../assets/revisando-masa.jpg'

interface toBlog {
    title: string
    link: string
    text: string
}

function Manufacture({ title, link, text }: toBlog) {
    return (
        <section>
            <h2 className="my-3 pb-7 text-5xl font-fheading font-bold text-center">
                {title}
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
                {/* destacado */}
                <div className="overflow-hidden rounded lg:flex lg:col-span-3">
                    <img
                        src={imgEntries1}
                        alt=""
                        className="object-cover w-full h-auto max-h-96 dark:bg-gray-500"
                    />
                    <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-my-secondary-900">
                        <span className="self-start px-3 py-1 text-sm rounded-full dark:bg-my-primary dark:text-gray-900">
                            Business
                        </span>
                        <h2 className="text-3xl font-fheading md:flex-1">
                            Curating a workplace that inspires team movement
                        </h2>
                        <div>
                            <p className="dark:text-gray-400">November 12</p>
                        </div>
                    </div>
                </div>

                {/* otras entradas */}
                {entries.map((entry) => {
                    return (
                        <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-my-secondary-900">
                            <h3 className="font-fheading font-bold text-xl dark:text-gray-50">
                                {entry.title}
                            </h3>
                            <p className="inline">{entry.content}</p>
                            <p className="dark:text-gray-400">{entry.date}</p>
                        </div>
                    )
                })}
            </div>

            {/* link ver más */}

            <a
                rel="noopener noreferrer"
                href="/blog"
                className="flex justify-center px-8 py-3 mt-3 text-sm font-semibold rounded-sm dark:bg-my-primary dark:text-gray-900
        leading-tight uppercase shadow-md hover:dark:bg-my-primary-700 hover:shadow-lg hover:text-white focus:dark:bg-my-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:dark:bg-my-primary-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                {text} &gt;
            </a>

            {/* <a rel='noopener noreferrer hover:dark:bg-my-primary-700' href={link}>
        <div
          className='flex justify-center p-4
        self-start px-3 py-2 mt-6 text-sm font-bold rounded-sm dark:bg-my-primary dark:text-gray-900  lg:w-1/3 mx-auto'
        >
          {text} &gt;
        </div>
      </a> */}
        </section>
    )
}
export default Manufacture
