import Hero from '../components/hero/Hero'
import OfertasComponent from '../components/OfertasComponent'
import Layout from './Layout'

// hero
const title = (
    <>
        <h1 className="text-myprimary">Manos al Trigo</h1>
        <h1>Panadería artesanal de Valdivia</h1>
    </>
)
const subtitle = (
    <p>
        <em>Pan de pueblo, pan con masa madre, pizzas y pasteleria</em>
    </p>
)

// Ofertas
const titleOfertas = 'Nuestras ofertas'
const subtitleOfertas = 'Revisa todas nuestras ofertas actuales'
const linkOfertas = '/ofertas'

// const DATA_BLOG = {
//     checkBlog: {
//         link: '/blog',
//         text: 'Check our blog',
//         title: 'Nuestro pan'
//     }
//}

const Home = () => {
    return (
        <Layout>
            <Hero title={title} subtitle={subtitle} />
            <main className="container mx-auto space-y-16">
                <div id="oferta">
                    <OfertasComponent
                        title={titleOfertas}
                        subtitle={subtitleOfertas}
                        link={linkOfertas}
                    />
                </div>
                {/* Por mientras no hay nada lo retiro */}
                {/* 
                    <div id="blog">
                        <Manufacture
                            title={DATA_BLOG.checkBlog.title}
                            link={DATA_BLOG.checkBlog.link}
                            text={DATA_BLOG.checkBlog.text}
                        />
                    </div>
										 */}
            </main>
        </Layout>
    )
}

export default Home
