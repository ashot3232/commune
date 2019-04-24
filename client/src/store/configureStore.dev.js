import { createStore, applyMiddleware, compose } from 'redux';
import  thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import history from 'config/history';
import api from 'middleware/api';
import createRootReducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
    return createStore(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                api,
                thunk
            )
        )
    );
};

export default configureStore;
