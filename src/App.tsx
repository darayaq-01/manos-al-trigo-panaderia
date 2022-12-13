import { Route, Router } from 'preact-router'

import Home from './components/Home'
// acá se importaría luego el blog, por ejemplo
// también el acceso al dashboard.

export function App() {
  return (
    <main>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </main>
  )
}
