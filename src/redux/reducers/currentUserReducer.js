import {constants} from "../../utils/constants";

const defaultState = {user: {}};
export const currentUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.actionCurrentUserTypes.USER:
            return { ...state, user: action.payload }
        default: return state;
    }
}