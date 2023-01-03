import { useState } from 'preact/hooks'
import { Route, Router } from 'preact-router'
import { MessageContext } from './utils/context'

import Home from './pages/Home'
import Ofertas from './pages/Ofertas'
// acá se importaría luego el blog, por ejemplo
// también el acceso al dashboard.

export function App() {
    const [message, setMessage] = useState('')

    return (
        <MessageContext.Provider value={[message, setMessage]}>
            <main>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/ofertas" component={Ofertas} />
                    {/* agregar not found */}
                </Router>
            </main>
        </MessageContext.Provider>
    )
}
