import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import './index.css'
import './assets/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css'
import 'bulma/css/bulma.min.css'

const target = document.querySelector('#root')

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	target
)
