import {constants} from "../../utils/constants";

const defaultState = {usersList: []};
export const usersListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.actionUsersListTypes.USERS_LIST:
            return { ...state, usersList: action.payload }
        default: return state;
    }
}