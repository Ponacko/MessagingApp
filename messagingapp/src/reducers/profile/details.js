import { PROFILE_UPDATE_DETAILS } from '../../constants/actionTypes';

const defaultDetails = {
    email: 'undefined@null.zero',
    fullName: '',
    phone: '',
};

export const details = (prevState = defaultDetails, action) => {
    switch (action.type) {
        case PROFILE_UPDATE_DETAILS:
        return payload.action.details;

        default:
            return prevState;
    }
};