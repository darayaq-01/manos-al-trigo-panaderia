import { useContext } from 'preact/hooks'
import { Link } from 'preact-router'

import { MessageContext } from '../utils/context'
import { MessageState } from '../utils/types'

import {
    myData,
    imagenPrincipalOfertas,
    altImagePrincipalSeccion
} from '../api/seleccionCategorias'

interface descripcionOfertasCategorias {
    title: string
    subtitle: string
    link: string
}

export default function OfertasComponent({
    title,
    subtitle,
    link
}: descripcionOfertasCategorias) {
    const handleClick = (value: string) => {
        setMessage(value)
    }
    const [, setMessage] = useContext<MessageState>(MessageContext)
    return (
        <section>
            <div className="bg-mysecondary min-h-[90vh] mx-auto rounded px-6 py-4 lg:px-8">
                <h2 className="text-left md:text-center pt-10 font-fheading text-4xl sm:text-5xl font-bold">
                    {title}
                </h2>

                <div className="flex md:justify-center py-4">
                    <Link rel="noopener noreferrer" href={link}>
                        <h3 className="text-2xl mt-4 underline underline-offset-4 hover:no-underline hover:font-bold hover:text-myprimary hover:transition-colors">
                            {subtitle}
                        </h3>
                    </Link>
                </div>

                <img
                    src={imagenPrincipalOfertas}
                    alt={altImagePrincipalSeccion}
                    className="my-8 h-auto max-h-96 w-full border-4 border-solid border-background bg-gray-500 object-cover "
                />

                <div className="my-4 grid gap-4 md:gap-2 md:grid-cols-3">
                    {myData.map((data) => (
                        <div
                            key={data.id}
                            className="bg-mysecondary flex flex-col p-6 md:p-4 space-y-4 hover:bg-background border-2 border-solid border-background"
                        >
                            <img
                                className="rounded-bl-[3rem] h-fit rounded-tr-[3rem] shadow-gray-800 shadow-md "
                                src={data.img}
                                alt={data.name_product}
                            />
                            <p className="font-fheading text-2xl font-semibold">
                                {data.name_product}
                            </p>
                            <p className="md:h-1/6">{data.description}</p>
                            <Link
                                href="/ofertas"
                                onClick={() =>
                                    handleClick(data.name_product.toLowerCase())
                                }
                                className="self-start rounded-md bg-myprimary px-3 py-3 text-sm text-gray-900 cursor-pointer uppercase  hover:bg-myprimary-800 hover:text-gray-100 transition duration-500 ease-in-out"
                            >
                                Ver Oferta{' '}
                                <span className="font-semibold">
                                    {data.name_product}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
