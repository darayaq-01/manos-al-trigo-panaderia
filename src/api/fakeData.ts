// test Imgs

import productImg1 from '../assets/images/pan-en-bandeja.webp'
import productImg2 from '../assets/images/sweets.webp'

interface TypeMyData {
  id: number
  img?: string
  name_product: string
  description: string
  ingredientes: string[]
  price: number
  allergies: string[]
}

export const myData: TypeMyData[] = [
  {
    id: 1,
    img: productImg1,
    name_product: 'Brot',
    description: 'rico con pan con pan y pan',
    ingredientes: ['harina', 'sal', 'agua'],
    price: 2500,
    allergies: ['trigo']
  },
  {
    id: 2,
    img: productImg2,
    name_product: 'pan 2',
    description: 'rico con pan con pan y pan',
    ingredientes: ['harina', 'sal', 'agua'],
    price: 2500,
    allergies: ['trigo']
  },
  {
    id: 3,
    img: productImg2,
    name_product: 'pan 3',
    description: 'rico con pan con pan y pan',
    ingredientes: ['harina', 'sal', 'agua'],
    price: 2500,
    allergies: ['trigo']
  }
]
