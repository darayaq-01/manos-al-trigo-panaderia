import dulce from '../assets/images/dulce.webp'
import pan from '../assets/images/pan3.webp'
import salado from '../assets/images/pizzas.webp'
import imagenPrincipalOfertas from '../assets/images/muestra.webp'

interface TypeMyData {
    id: number
    img?: string
    name_product: string
    description: string
}

export const imagePrincipalSeccion: string = imagenPrincipalOfertas
export const altImagePrincipalSeccion: string = 'Selección de productos'

export const myData: TypeMyData[] = [
    {
        id: 1,
        img: pan,
        name_product: 'Panes',
        description: 'Panes elaborados con masa madre.'
    },
    {
        id: 2,
        img: dulce,
        name_product: 'Dulces',
        description: 'Variedad en repostería artesanal.'
    },
    {
        id: 3,
        img: salado,
        name_product: 'Salados',
        description: 'Deliciosas pizzas artesanales.'
    }
]

export { imagenPrincipalOfertas }
