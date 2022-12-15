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
    <div className="bg-mysecondary container mx-auto rounded p-6 py-20 lg:px-8">
      <h2 className="text-center font-fheading text-5xl font-bold">{title}</h2>

      <div className="flex justify-center p-4 text-lg">
        <Link rel="noopener noreferrer" href={link}>
          {subtitle} &gt;
        </Link>
      </div>

      <img
        src={ImgOffer1}
        alt=""
        className="mt-8 h-auto max-h-96 w-full rounded bg-gray-500 object-cover lg:mx-auto lg:w-8/12"
      />

      <div className="my-16 grid gap-6 lg:grid-cols-3">
        {myData.map((data) => (
          <div
            key={data.id}
            className="bg-mysecondary flex flex-col space-y-4 rounded-md p-8"
          >
            <img
              className="rounded-bl-[3rem] rounded-tr-[3rem]"
              src={data.img}
              alt=""
            />
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-myprimary text-xl font-bold text-gray-900">
              {data.id}
            </div>
            <p className="font-fheading text-2xl font-semibold">
              {data.name_product}
            </p>
            <p>{data.description}</p>
            <p>{data.ingredientes}</p>
            <p>{data.allergies}</p>
            <p className="self-start rounded-full bg-myprimary px-3 py-1 text-sm text-gray-900">
              ${data.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Offers
