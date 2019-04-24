import React from 'react'
import { Redirect } from 'react-router-dom'
import { isAuthenticated } from 'helpers/auth'
import App from 'components/App'
import Residents from 'components/Residents/Residents'
import Resident from 'components/Resident/Resident'
import Debt from 'components/Debt/Debt'
import Payments from 'components/Payments/Payments'
import SignIn from 'components/SignIn/SignIn'



const Conditional = (C1, C2) => {
    return {
        component: props =>
            isAuthenticated() ? <C1 {...props} /> : <C2 {...props} />
    };
};

const Protected = C => {
    return {
        component: props => isAuthenticated() ? <C {...props} /> : <Redirect to="/" />
    };
};


const routes = [
    {
        path: '/',
        ...Conditional(App, SignIn),
        routes: [
            {
                path: '/',
                exact: true,
                ...Protected(Residents)
            },
            {
                path: '/resident/:id',
                exact: true,
                ...Protected(Resident)
            },
            {
                path: '/payments',
                exact: true,
                ...Protected(Payments)
            },
            {
                path: '/debt',
                exact: true,
                ...Protected(Debt)
            },
            { component: () => <Redirect to="/" /> }
        ]
    },
    { component: () => <Redirect to="/" /> }
];


export default routes;
