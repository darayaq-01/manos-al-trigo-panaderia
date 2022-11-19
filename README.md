# Tech

-   Vite
-   Preact
-   Taiwindcss

### estructura

| Header
|-- Navbar
|.....(Nabvar inicial)
|.....(Nabvar scroll - fixed)
|.....(Nabvar responsive)
|-- links:
|-- Hero
|----- texto
|----- imagen
| Home
|-- Offers: las ofertas de la semana
|-- Manufacture: cómo hacemos el pan
| Footer
|-- contacto
|-- privacy and copyleft

## Notes

> -poner info generica-
> decidir fuentes y colores
> navbar

### Datos de contacto

-   https://www.instagram.com/manos.altrigo/
-   +56 962025526

## Plan de trabajo

1. Hero

[x] botons con hover
[] botones conectados
[x] imagen centrar
[x] determinar colores
[x] determinar fuente
[x] componetizar los botones

2. Navbar

[] determinar fuente
[x] manu responsive funcional
[] elementos del menu: home / ofertas / blog / contacto
[x] menu fijo al scrollear
[] texto logo -> logo imagen al escrollear en el menu fijo
[] transformar logo/menu a svg (6)

2.1 Navbar responsive

[] revisar el width
[] bg color

2.2 Navbar Scroll

[] bg color
[] disgn

3. Offers

Note: array de objetos desde la BD...

[] crear fake data API: Nombre, ingredientes, precio, alergías...
[]

4. Manufacture

Note: tipo blog

5. footer

Notes: datos de contact, socnet, dev with love for darayaq. Foto nacho?

[] revisar ancho

X. Final

[] probar test
[] revisar por velocidad de carga
[] obsoletos
[] quizá animar un poco la imagen del logo al inicio?
[] extraer interfaces
[] dejar componentes sin lógica
[] eslin properties
[] updates

---

NAVBAR
_desktop_

-   no logo/texto
-   al scrollear cambia y sale el logo y se queda fijo
-   links desplegados

_otros tamanos_

-   logo
-   links en hamburger

## Fonts

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chonburi&display=swap" rel="stylesheet">

<style>
@import url('https://fonts.googleapis.com/css2?family=Chonburi&display=swap');
</style>

    font-family: 'Chonburi', cursive;


    <link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
</style>

font-family: 'Libre Baskerville', serif;

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Port+Lligat+Sans&display=swap" rel="stylesheet">

<style>
@import url('https://fonts.googleapis.com/css2?family=Port+Lligat+Sans&display=swap');
</style>

font-family: 'Port Lligat Sans', sans-serif;

## colors

default: bg-gray-800

color masa: #FAF1DC
#D6D138 - #D9BB29
#70ED4A - #68F04D
#38D68A - #32D9DB
#3EC9F0 - #3725F5

## linter

1- install standard -D
"eslintConfig": {
"extends": [
"./node_modules/standard/eslintrc.json"
]
}

## add to json

"repository": {
"type": "git",
"url": "https://github.com/chandrakumarreddy/vite-ts-preact-tailwind-template"
},

## Notes

-   Para importar las imagenes he debido utilizar `const boo = require('../boo.jpg') en vez de import boo from "../boo.jpg` debido a un problema con types declarations.ts(2307)
