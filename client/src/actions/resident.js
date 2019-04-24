import * as types from 'actions/types'
import Schemas from 'config/schemas'
import { CALL_API } from 'middleware/api'


export const getResidents = buildingId => ({
    [CALL_API]: {
        schema: Schemas.RESIDENTS,
        types: [types.GET_RESIDENTS_REQUEST, types.GET_RESIDENTS_SUCCESS, types.GET_RESIDENTS_FAILURE],
        endpoint: `/api/residents?buildingId=${ buildingId }`
    }
});

export const getResident = id => ({
    [CALL_API]: {
        schema: Schemas.RESIDENT,
        types: [types.GET_RESIDENT_REQUEST, types.GET_RESIDENT_SUCCESS, types.GET_RESIDENT_FAILURE],
        endpoint: `/api/residents/${ id }`
    }
});

export const getTCountExcel = id => ({
    [CALL_API]: {
        responseType: 'blob',
        types: [types.GET_TCOUNT_EXCEL_REQUEST, types.GET_TCOUNT_EXCEL_SUCCESS, types.GET_TCOUNT_EXCEL_FAILURE],
        endpoint: `/api/t-count-excel/${ id }`
    }
});
