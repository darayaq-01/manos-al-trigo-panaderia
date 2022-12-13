import { Link } from 'preact-router'
import ImgOffer1 from '../assets/donouts.jpg'

// Fake data api
import { myData } from '../api/fakeData'

interface offersHeading {
  title: string
  subtitle: string
  link: string
}

const Offers = ({ title, subtitle, link }: offersHeading) => (
  <section>
    <div className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-my-secondary-900">
      <h2 className="text-5xl font-fheading font-bold text-center">{title}</h2>

      <div className="flex text-lg justify-center p-4">
        <Link rel="noopener noreferrer" href={link}>
          {subtitle} &gt;
        </Link>
      </div>

      <img
        src={ImgOffer1}
        alt=""
        className="object-cover w-full lg:w-8/12 lg:mx-auto h-auto mt-8 rounded max-h-96 dark:bg-gray-500"
      />

      <div className="grid gap-6 my-16 lg:grid-cols-3">
        {myData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col p-8 space-y-4 rounded-md dark:bg-my-secondary-900"
          >
            <img
              className="rounded-bl-[3rem] rounded-tr-[3rem]"
              src={data.img}
              alt=""
            />
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-my-primary dark:text-gray-900">
              {data.id}
            </div>
            <p className="text-2xl font-fheading font-semibold">
              {data.name_product}
            </p>
            <p>{data.description}</p>
            <p>{data.ingredientes}</p>
            <p>{data.allergies}</p>
            <p className="self-start px-3 py-1 text-sm rounded-full dark:bg-my-primary dark:text-gray-900">
              ${data.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Offers
