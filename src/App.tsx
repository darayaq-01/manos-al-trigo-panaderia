import Footer from './components/footer/Footer'
import Header from './components/Header'
import Hero from './components/hero/Hero'
import Home from './components/Home'

const title = (
    <>
        <span className="dark:text-my-primary">Manos al Trigo</span>, la
        panadería artesanal de Valdivia
    </>
)
const subtitle = <em>Pan de pueblo, pan con masa madre, pizzas y pasteleria</em>

export function App() {
    return (
        <main>
            <Header>
                <Hero title={title} subtitle={subtitle} />
            </Header>
            <Home />
            <Footer />
        </main>
    )
}
