import { CHANGE_MODAL_STATE } from 'actions/types'

const changeModalState = (visible, data) => {
    return {
        type: CHANGE_MODAL_STATE,
        payload: {
            visible,
            data
        }
    }
};

export const openDialog = data => changeModalState(true, data);

export const closeDialog = () => changeModalState(false, null);
