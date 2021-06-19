import {constants} from "../../utils/constants";

const defaultState = {email: "", password: ""};
export const signInReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.actionSignInTypes.EMAIL:
            return { ...state, email: action.payload }
        case constants.actionSignInTypes.PASSWORD:
            return { ...state, password: action.payload }
        default: return state;
    }
}