import { createStore, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import history from 'config/history';
import api from 'middleware/api';
import createRootReducer from 'reducers';


const configureStore = () => {
    return createStore(
        createRootReducer(history),
        applyMiddleware(
            routerMiddleware(history),
            api,
            thunk
        )
    );
};

export default configureStore;
