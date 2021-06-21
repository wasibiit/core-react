import {constants} from "../../utils/constants";

const defaultState = {user: {}, isAuthenticated: false};
export const currentUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.actionCurrentUserTypes.USER:
            return { ...state, user: action.payload }
        case constants.actionCurrentUserTypes.IS_AUTHENTICATED:
            return { ...state, isAuthenticated: action.payload }
        default: return state;
    }
}