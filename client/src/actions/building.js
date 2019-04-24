import * as types from 'actions/types'
import Schemas from 'config/schemas'
import { CALL_API } from 'middleware/api'


export const getBuildings = () => ({
    // source: 'buildings',
    [CALL_API]: {
        schema: Schemas.BUILDINGS,
        types: [types.GET_BUILDINGS_REQUEST, types.GET_BUILDINGS_SUCCESS, types.GET_BUILDINGS_FAILURE],
        endpoint: '/api/buildings'
    }
});
