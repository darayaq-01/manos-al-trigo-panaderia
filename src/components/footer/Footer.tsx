// const img1 = require('../assets/nacho-pan.jpg')
import img1 from '../../assets/nacho-pan.jpg'

const yearPresent = new Date().getFullYear() || 2022

/*
 * No sé si esto es necesario
 * interface DataFooter {
 *     imgs: {
 *         alt: string
 *         img1: HTMLImageElement
 *     }
 *     paraPedidos: {}
 *     social: {}
 *     textos: {}
 * }
 */

const DATA_FOOTER = {
    imgs: {
        alt: 'foto',
        img1,
    },
    paraPedidos: {
        disponibilidad: 'Lunes a Sábado, 13:00 a 23:30',
        telefono: '(+56) 962025526',
        whatsapp: 'wa.me/message/O6Z36ECL6UEQG1',
    },
    social: {
        facebookImg: (
            <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                />
            </svg>
        ),
        facebookLink: 'https://www.instagram.com/manos.altrigo/',
        instagramImg: (
            <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                />
            </svg>
        ),
        instagramLink: 'https://www.instagram.com/manos.altrigo/',
    },
    textos: {
        nombreEmpresa: 'Manos al Trigo',
    },
}

interface TypeMenuFoot {
    contacto: string
    faq: string
    privacy: string
}

const menuFoot: TypeMenuFoot[] = [
    {
        contacto: 'Contacto',
        faq: 'FAQs',
        privacy: 'Privacidad',
    },
]

const Column1 = () => (
    <div>
        <p className="font-medium">
            <span className="text-xs uppercase tracking-widest">
                {' '}
                Llama al:{' '}
            </span>
            <a
                className="block text-2xl hover:opacity-75 sm:text-3xl mb-2"
                href=""
            >
                {DATA_FOOTER.paraPedidos.telefono}
            </a>
            <span className="text-xs uppercase tracking-widest">
                {' '}
                o a través de{' '}
            </span>

            <a
                className="block text-2xl hover:opacity-75 sm:text-3xl"
                href={DATA_FOOTER.paraPedidos.whatsapp}
            >
                Whatsapp
            </a>
        </p>

        <ul className="mt-8 space-y-2 text-sm">
            <li>{DATA_FOOTER.paraPedidos.disponibilidad}</li>
        </ul>
    </div>
)

const Column2 = () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
            {/* SocNets */}
            <div className="flex gap-3">
                <a
                    className="rounded-full border border-white/25 p-2 hover:opacity-75"
                    href={DATA_FOOTER.social.facebookLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only"> Facebook </span>

                    {DATA_FOOTER.social.facebookImg}
                </a>

                <a
                    className="rounded-full border border-white/25 p-2 hover:opacity-75"
                    href={DATA_FOOTER.social.instagramLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only"> Instagram </span>

                    {DATA_FOOTER.social.instagramImg}
                </a>
            </div>

            {/* Nenu */}

            <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
                {menuFoot.map((menu) => (
                    <div key={menu}>
                        <a className="hover:opacity-75" href="">
                            {menu.contacto}
                        </a>
                        <a className="hover:opacity-75" href="">
                            {menu.faq}
                        </a>
                        <a className="hover:opacity-75" href="">
                            {menu.privacy}
                        </a>
                    </div>
                ))}
            </nav>
        </div>
    </div>
)

const Footer = () => (
    <footer className="mx-auto bg-my-secondary-900 text-white lg:grid lg:grid-cols-6">
        <aside className="hidden lg:relative lg:col-span-2 lg:block">
            <img
                alt={DATA_FOOTER.imgs.alt}
                src={DATA_FOOTER.imgs.img1}
                className="absolute inset-0 h-full w-full object-cover"
            />
        </aside>

        <div className="px-4 pt-16 pb-4 sm:px-6 lg:col-span-4 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Column1 />
                <Column2 />
                {/* Credits */}
                <div className="mt-12 border-t border-gray-800 pt-4">
                    <div className="font-mono text-xs text-gray-300 opacity-90 sm:flex sm:items-center sm:justify-between">
                        <div className="flex gap-3">
                            Made fir
                            <a className="hover:opacity-75" href="">
                                {' '}
                                darayaq{' '}
                            </a>
                        </div>
                        <p className="mt-4 sm:mt-0">
                            {yearPresent}, {DATA_FOOTER.textos.nombreEmpresa}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
