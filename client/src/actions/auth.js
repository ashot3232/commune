import * as types from 'actions/types'
import { removeTokens } from 'helpers/auth'
import history from "config/history";
import { CALL_API } from 'middleware/api'


export const signIn = body => ({
    [CALL_API]: {
        types: [types.SIGN_IN_REQUEST, types.SIGN_IN_SUCCESS, types.SIGN_IN_FAILURE],
        endpoint: '/api/sign-in',
        method: 'POST',
        redirectUrl: '/',
        body
    }
});

export const signOut = () => dispatch => {
    dispatch({
        type: types.SIGN_OUT
    });
    removeTokens();
    history.push('/');
};