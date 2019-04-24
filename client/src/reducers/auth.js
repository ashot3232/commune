import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from 'actions/types'
import { isAuthenticated  } from 'helpers/auth'



const INITIAL_STATE = {
    isSignedIn: isAuthenticated()
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                isSignedIn: false
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignedIn: true
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                isSignedIn: false
            };
        default:
            return state;
    }
};

export default authReducer;
