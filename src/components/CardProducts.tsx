interface TypeMyData {
    id: number
    img?: string
    name_product: string
    description?: string | null
    category: 'panes' | 'salados' | 'dulces' | string
    price: number
}

export default function CardProducts({
    img,
    name_product,
    description,
    price
}: TypeMyData) {
    return (
        <div className="bg-mysecondary flex flex-col space-y-4 px-2 py-4">
            <img
                className="rounded-bl-[3rem] rounded-tr-[3rem]"
                src={img}
                alt={name_product}
            />
            <div className="flex flex-col">
                <div className="flex flex-row gap-4">
                    <p className="font-fheading text-2xl font-semibold">
                        {name_product}
                    </p>
                    <p className="self-start rounded-md bg-myprimary font-bold px-3 py-2 text-sm text-gray-900">
                        ${price}
                    </p>
                </div>
                <p className="h-1/3">{description}</p>
            </div>
        </div>
    )
}
