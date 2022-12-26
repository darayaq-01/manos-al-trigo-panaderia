import { Link } from 'preact-router'

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

function handleClick() {
    console.log('click')
}

const OfertasComponent = ({
    title,
    subtitle,
    link
}: descripcionOfertasCategorias) => (
    <section>
        <div className="bg-mysecondary min-h-[90vh] mx-auto rounded p-6 py-20 lg:px-8">
            <h2 className="text-center font-fheading text-5xl font-bold">
                {title}
            </h2>

            <div className="flex justify-center p-4">
                <Link rel="noopener noreferrer" href={link}>
                    <h3 className="text-2xl mt-4 underline underline-offset-4 hover:no-underline hover:font-bold hover:text-myprimary hover:transition-colors">
                        {subtitle}
                    </h3>
                </Link>
            </div>

            <img
                src={imagenPrincipalOfertas}
                alt={altImagePrincipalSeccion}
                className="mt-8 h-auto max-h-96 w-full border-4 border-solid border-background bg-gray-500 object-cover "
            />

            <div className="my-16 grid gap-8 md:grid-cols-3">
                {myData.map((data) => (
                    <div
                        key={data.id}
                        className="bg-mysecondary flex flex-col p-2 space-y-4 hover:bg-background"
                    >
                        <img
                            className="rounded-bl-[3rem] rounded-tr-[3rem] "
                            src={data.img}
                            alt={data.name_product}
                        />
                        <p className="font-fheading text-2xl font-semibold">
                            {data.name_product}
                        </p>
                        <p className="h-1/3">{data.description}</p>
                        <Link
                            href="/ofertas"
                            onClick={handleClick}
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

export default OfertasComponent
