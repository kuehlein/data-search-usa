import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
