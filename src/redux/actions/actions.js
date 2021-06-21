import {constants} from "../../utils/constants";

//actions
const setEmail = (email) => ({type: constants.actionSignInTypes.EMAIL, payload: email})
const setPassword = (password) => ({type: constants.actionSignInTypes.PASSWORD, payload: password})
const setCurrentUser = (user) => ({type: constants.actionCurrentUserTypes.USER, payload: user})
const setIsAuthenticated = (isAuthenticated) => ({type: constants.actionCurrentUserTypes.IS_AUTHENTICATED, payload: isAuthenticated})


export const actions = {setEmail, setPassword, setCurrentUser, setIsAuthenticated};