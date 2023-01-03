interface ButtonProps {
    label: string
    onClick: () => void
}

export default function ButtonMenuCategorias({ label, onClick }: ButtonProps) {
    return (
        <button
            className="self-start text-gray-100 bg-mysecondary hover:bg-myprimary font-bold px-2 py-1 text-sm hover:text-gray-900 border-x-2 border-t-2 border-solid border-mysecondary"
            onClick={onClick}
        >
            {label}
        </button>
    )
}
