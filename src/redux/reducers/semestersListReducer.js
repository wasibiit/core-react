import {constants} from "../../utils/constants";

const defaultState = {semestersList: []};
export const semestersListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.actionSemestersTypes.SEMESTERS_LIST:
            return { ...state, semestersList: action.payload }
        default: return state;
    }
}