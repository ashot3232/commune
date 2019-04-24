
const initial = {
    pending: false,
    data: null,
    ids: []
};

const update = ({ types }) => {

    const [ requestType, successType, failureType ] = types;

    const updateEntities = (state = initial, action) => {
        switch (action.type) {
            case requestType:
                return {
                    ...state,
                    data: null,
                    pending: true,
                    ids: []
                };
            case successType:
                return {
                    ...state,
                    pending: false,
                    data: action.response.entities,
                    ids: action.response.result
                };
            case failureType:
                return initial;
            default:
                return state;
        }
    };

    return (state, action) => {
        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                return {
                    ...state,
                    ...updateEntities(state, action)
                };
            default:
                return {
                    ...updateEntities(state, action)
                };
        }
    }
};

export default update;