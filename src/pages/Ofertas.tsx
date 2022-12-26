import Layout from './Layout'
import { productos } from '../api/productos'
import CardProducts from '../components/CardProducts'
import { useState } from 'preact/hooks'

/* const noHayOfertas = (
    <p className="self-start rounded-md bg-myprimary font-bold px-3 py-2 text-sm text-gray-900">
        No tenemos ningún producto en oferta por el momento. Por favor regresa
        más tarde o envianos un mensaje.
    </p>
) */

const Ofertas = () => {
    const [filter, setFilter] = useState<string | null>(null)

    const handleFilter = (category: string | null) => {
        setFilter(category)
    }

    const filteredProductos = productos.filter((producto) => {
        if (!filter) return true
        return producto.category === filter
    })

    const borders = 'border-solid, border-red-600, border-2'

    return (
        <Layout>
            <section className="min-h-[90vh] flex flex-col py-4 content-evenly mx-auto sm:min-h-screen">
                <div className="pt-4 space-y-16">
                    <h2 className="text-[2rem] font-fheading font-bold sm:text-5xl tracking-tight leading-[3rem] mb-4 sm:min-w-min md:leading-[4rem]">
                        Ofertas del mes
                    </h2>
                </div>
                <div className="font-fbase font-medium text-lg py-4 ">
                    Una selección de nuestros productos actualmente disponibles.
                    Si necesitas algo en particular, no dudes en preguntar.{' '}
                </div>
                {/* buttons options */}
                <div className="flex justify-end pt-6 gap-2 border-b-2 border-solid border-mysecondary">
                    <button
                        className="self-start text-gray-100 bg-mysecondary hover:bg-myprimary font-bold px-2 py-1 text-sm hover:text-gray-900 border-x-2 border-t-2 border-solid border-mysecondary active:text-red-700"
                        onClick={() => handleFilter(null)}
                    >
                        Todos
                    </button>
                    <button
                        className="self-start text-gray-100 bg-mysecondary hover:bg-myprimary font-bold px-2 py-1 text-sm hover:text-gray-900 border-x-2 border-t-2 border-solid border-mysecondary"
                        onClick={() => handleFilter('panes')}
                    >
                        Panes
                    </button>
                    <button
                        className="self-start text-gray-100 bg-mysecondary hover:bg-myprimary font-bold px-2 py-1 text-sm hover:text-gray-900 border-x-2 border-t-2 border-solid border-mysecondary"
                        onClick={() => handleFilter('dulces')}
                    >
                        Dulces
                    </button>
                    <button
                        className="self-start text-gray-100 bg-mysecondary hover:bg-myprimary font-bold px-2 py-1 text-sm hover:text-gray-900 border-x-2 border-t-2 border-solid border-mysecondary"
                        onClick={() => handleFilter('salados')}
                    >
                        Salados
                    </button>
                </div>
                <div className="mt-2 grid sm:grid-cols-2 gap-4 md:grid-cols-3">
                    {filteredProductos.map((card) => (
                        <CardProducts
                            key={card.name_product}
                            id={card.id}
                            img={card.img}
                            name_product={card.name_product}
                            description={card.description}
                            category={card.category}
                            price={card.price}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default Ofertas

/* 
renderizar los butones:

import { h, FunctionComponent } from 'preact';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ label, onClick }) => (
  <button
    className="self-start text-gray-100 bg-mysecondary hover:bg-myprimary font-bold px-2 py-1 text-sm hover:text-gray-900 border-x-2 border-t-2 border-solid border-mysecondary"
    onClick={onClick}
  >
    {label}
  </button>
);

const FilterButtons = () => (
  <div className="flex justify-end gap-2 border-b-2 border-solid border-mysecondary">
    <Button label="Todos" onClick={() => handleFilter(null)} />
    <Button label="Panes" onClick={() => handleFilter('panes')} />
    <Button label="Dulces" onClick={() => handleFilter('dulces')} />
    <Button label="Salados" onClick={() => handleFilter('salados')} />
  </div>
);


*/
