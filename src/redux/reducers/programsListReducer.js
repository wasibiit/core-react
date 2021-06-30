import {constants} from "../../utils/constants";

const defaultState = {programsList: []};
export const programsListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.actionProgramsTypes.PROGRAM_LIST:
            return { ...state, programsList: action.payload }
        default: return state;
    }
}