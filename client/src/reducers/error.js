import { RESET_ERROR_MESSAGE } from 'actions/types'


const errorReducer = (state = null, action) => {
    const { type, error } = action;

    if (type === RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }

    return state
};

export default errorReducer
