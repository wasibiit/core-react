import {constants} from "../../utils/constants";

const defaultState = {coursesList: []};
export const coursesListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.actionCoursesTypes.COURSES_LIST:
            return { ...state, coursesList: action.payload }
        default: return state;
    }
}