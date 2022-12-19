import { render } from 'preact'
import 'preact/debug'

import { App } from './App'
import './index.css'

render(<App />, document.getElementById('app') as HTMLElement)

ServiceWorkerRegistration
