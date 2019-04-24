import * as types from 'actions/types'
import { CALL_API } from 'middleware/api'


export const makePayments = body => ({
    [CALL_API]: {
        responseType: 'blob',
        method: 'POST',
        types: [types.MAKE_PAYMENTS_REQUEST, types.MAKE_PAYMENTS_SUCCESS, types.MAKE_PAYMENTS_FAILURE],
        endpoint: '/api/make-payments',
        body
    }
});
