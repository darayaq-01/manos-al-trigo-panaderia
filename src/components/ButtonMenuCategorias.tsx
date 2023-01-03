interface ButtonProps {
    label: string
    onClick: () => void
}

export default function ButtonMenuCategorias({ label, onClick }: ButtonProps) {
    return (
        <button
            className="self-start text-gray-100 uppercase bg-mysecondary hover:bg-myprimary font-bold px-4 py-1 text-sm sm:text-base hover:text-gray-900 border-2 sm:border-x-2 sm:border-t-2 border-solid border-mysecondary"
            onClick={onClick}
        >
            {label}
        </button>
    )
}
