import {constants} from "../../utils/constants";

//actions
const setEmail = (email) => ({type: constants.actionSignInTypes.EMAIL, payload: email})
const setPassword = (password) => ({type: constants.actionSignInTypes.PASSWORD, payload: password})
const setCurrentUser = (user) => ({type: constants.actionCurrentUserTypes.USER, payload: user})
const setIsAuthenticated = (isAuthenticated) => ({type: constants.actionCurrentUserTypes.IS_AUTHENTICATED, payload: isAuthenticated})
const setUsersList = (list) => ({type: constants.actionUsersListTypes.USERS_LIST, payload: list})
const setProgramsList = (list) => ({type: constants.actionProgramsTypes.PROGRAM_LIST, payload: list})
const setSemestersList = (list) => ({type: constants.actionSemestersTypes.SEMESTERS_LIST, payload: list})


export const actions = {
    setEmail,
    setPassword,
    setCurrentUser,
    setIsAuthenticated,
    setUsersList,
    setProgramsList,
    setSemestersList
};