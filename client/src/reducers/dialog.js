import { CHANGE_MODAL_STATE } from 'actions/types'


const INITIAL_STATE = {
    visible: false,
    data: null
};

const dialogReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_MODAL_STATE:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default dialogReducer;
