import React from 'react'
import { renderRoutes } from "react-router-config"
import Header from 'components/UI/Header'


const App = props => {
    const { routes } = props.route;
    return (
        <div>
            <Header />
            { renderRoutes(routes) }
        </div>
    );
};


export default App;
