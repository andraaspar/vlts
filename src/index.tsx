import React from 'react'
import ReactDOM from 'react-dom'
import { AppComp } from './comp/AppComp'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<AppComp />, document.getElementById('root'))

serviceWorker.unregister()
