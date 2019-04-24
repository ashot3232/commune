import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'

import dialogReducer from 'reducers/dialog'
import authReducer from 'reducers/auth'
import errorReducer from 'reducers/error'
import entitiesReducer from 'reducers/entities'
import { SIGN_OUT } from "actions/types";

const appReducer = history => {
    return combineReducers({
        router: connectRouter(history),
        form: formReducer,
        auth: authReducer,
        entities: entitiesReducer,
        error: errorReducer,
        dialog: dialogReducer
    })
};


const createRootReducer = history => (state, action) => {

    if (action.type === SIGN_OUT) {
        state = undefined;
    }

    return appReducer(history)(state, action);
};


export default createRootReducer;
