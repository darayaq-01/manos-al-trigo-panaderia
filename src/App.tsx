import { Route, Router } from 'preact-router'

import Home from './components/Home'
import Ofertas from './pages/Ofertas'
// acá se importaría luego el blog, por ejemplo
// también el acceso al dashboard.

export function App() {
    return (
        <main>
            <Router>
                <Route path="/" component={Home} />
                <Route path="/ofertas" component={Ofertas} />
                {/* agregar not found */}
            </Router>
        </main>
    )
}
