import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from "connected-react-router"
import { Provider } from 'react-redux'
import { renderRoutes } from "react-router-config"
import 'index.css'
import 'typeface-roboto'

import history from "config/history"
import routes from "config/routes"
import configureStore from 'store/configureStore'

export const store = configureStore();


const APP = (
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            { renderRoutes(routes) }
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(APP, document.getElementById('root'));
