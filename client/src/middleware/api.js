import { normalize } from 'normalizr'
import { getTokens, setToken } from 'helpers/auth'
import { checkSubmissionErrors } from 'helpers/utils'
import { signOut } from 'actions/auth'
import history from 'config/history'
import axios from 'axios'
import { saveAs } from 'file-saver';


const api = axios.create({
    headers: { 'content-type': 'application/json' }
});

export const CALL_API = 'Call API';


const callApi = async  (endpoint, method = 'GET', responseType = 'json', body, schema, store) => {
    const stringBody = body && JSON.stringify(body);

    const send = async () => {
        api.defaults.headers.common['Authorization'] = `Bearer ${ getTokens().accessToken }`;
        const response = await api({
            responseType,
            method: method.toLowerCase(),
            url: endpoint,
            data: stringBody
        });

        if(responseType === 'blob') {
            saveAs(
                new Blob([response.data]),
                `payments${new Date()}.xlsx`,
                { type: 'application/vnd.ms-excel' }
             );
            return {};
        }
        

        let data = response.data.result || response.data;

        if(endpoint === '/api/sign-in') {
            const { accessToken } = data;
            setToken({ accessToken })
        }

        const normalizedData = schema ? normalize(data, schema) : data;

        return normalizedData;

    };

    try {
        return await send();
    } catch (err) {

        if (err.response.status !== 401) {
            if(endpoint === '/api/sign-in') {
                const error = {
                    name: 'ValidationError',
                    errors: { password: { message: 'Գաղտնաբառը սխալ է'} }
                };
                throw error;
            } else {
                throw err.response.data;
            }

        } else {
            store.dispatch(signOut());
        }

    }

};


export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint, method, body, schema, redirectUrl, types, responseType } = callAPI;
    const actionWith = data => {
        const finalAction = { ...action, ...data };
        delete finalAction[CALL_API];
        return finalAction;
    };

    const redirect = () => {
        if(redirectUrl){
            history.push(redirectUrl);
        }
    };

    const [ requestType, successType, failureType ] = types;

    next(actionWith({ type: requestType }));

    return callApi(endpoint, method, responseType, body, schema, store).then(
        response => {
            next(actionWith({
                response,
                type: successType
            }));
            redirect();
            return response;
        },
        error => {
            next(actionWith({
                type: failureType,
                error: error.message || 'Something bad happened'
            }));
            checkSubmissionErrors(error);
        }
    )
}
