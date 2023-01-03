import { useContext, useState, useEffect } from 'preact/hooks'

import Button from '../components/ButtonMenuCategorias'
import CardProducts from '../components/CardProducts'
import Layout from './Layout'

import { productos } from '../api/productos'

import { MessageContext } from '../utils/context'
import { MessageState } from '../utils/types'

interface TypeMyData {
    id: number
    img?: string
    name_product: string
    description?: string | null
    category: 'panes' | 'salados' | 'dulces' | string
    price: number
}

export default function Ofertas() {
    const [message] = useContext<MessageState>(MessageContext)
    const [filter, setFilter] = useState<string | null>(message || null)
    const [filteredProductos, setFilteredProductos] = useState<TypeMyData[]>([])

    const filterProductos = (products: TypeMyData[], filter: string | null) => {
        if (!filter) return products
        return products.filter((producto) => producto.category === filter)
    }
    console.log({ filter, message })

    useEffect(() => {
        setFilteredProductos(filterProductos(productos, filter))
    }, [filter])

    const handleFilter = (category: string | null) => {
        setFilter(category)
    }

    /* const filteredProductos = productos.filter((producto) => {
        console.log({ filter, message })
        if (!filter) return true
        return producto.category === filter
    }) */

    return (
        <Layout>
            <section className="min-h-[90vh] flex flex-col py-4 content-evenly mx-auto sm:min-h-screen">
                <div className="pt-4 space-y-16">
                    <h2 className="text-[2rem] font-fheading font-bold sm:text-5xl tracking-tight leading-[3rem] mb-4 sm:min-w-min md:leading-[4rem]">
                        Ofertas del mes
                    </h2>
                </div>
                <div className="font-fbase font-medium text-lg py-4">
                    Una selección de nuestros productos actualmente disponibles.
                    Si necesitas algo en particular, no dudes en preguntar.{' '}
                </div>
                <div className="flex justify-end pt-6 gap-2 border-b-2 border-solid border-mysecondary">
                    <Button label="Todos" onClick={() => handleFilter(null)} />
                    <Button
                        label="Panes"
                        onClick={() => handleFilter('panes')}
                    />
                    <Button
                        label="Dulces"
                        onClick={() => handleFilter('dulces')}
                    />
                    <Button
                        label="Salados"
                        onClick={() => handleFilter('salados')}
                    />
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
