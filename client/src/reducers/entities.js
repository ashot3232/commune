import { combineReducers } from 'redux'
import * as types from 'actions/types'
import update from 'reducers/update'

const entitiesReducer = combineReducers({
    residents: update({
        types: [
            types.GET_RESIDENTS_REQUEST,
            types.GET_RESIDENTS_SUCCESS,
            types.GET_RESIDENTS_FAILURE
        ]
    }),
    resident: update({
        types: [
            types.GET_RESIDENT_REQUEST,
            types.GET_RESIDENT_SUCCESS,
            types.GET_RESIDENT_FAILURE
        ]
    }),
    buildings: update({
        types: [
            types.GET_BUILDINGS_REQUEST,
            types.GET_BUILDINGS_SUCCESS,
            types.GET_BUILDINGS_FAILURE
        ]
    })
});


export default entitiesReducer;
