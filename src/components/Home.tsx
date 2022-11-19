import Manufacture from './Manufacture'
import Offers from './Offers'

// Ofertas
const title = 'Nuestras ofertas'
const subtitle = 'Revisa nuestras ofertas anteriores'
const link = '/ofertas-anteriores'

const DATA_BLOG = {
    checkBlog: {
        link: '/blog',
        text: 'Check our blog',
        title: 'Nuestro pan',
    },
}

const Home = () => (
    <div className="w-full min-h-screen dark:bg-my-background dark:text-gray-100">
        <div className="p-6 space-y-8">
            <main>
                <div className="container mx-auto space-y-16">
                    <Offers title={title} subtitle={subtitle} link={link} />
                    <Manufacture
                        title={DATA_BLOG.checkBlog.title}
                        link={DATA_BLOG.checkBlog.link}
                        text={DATA_BLOG.checkBlog.text}
                    />
                </div>
            </main>
        </div>
    </div>
)

export default Home
