import { actions } from "../actions/actions";

const signInDispatcher = (dispatch) => ({
    setEmail: (email) => dispatch(actions.setEmail(email)),
    setPassword: (password) => dispatch(actions.setPassword(password))
})

const currentUserDispatcher = (dispatch) => ({
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
    setIsAuthenticated: (isAuthenticated) => dispatch(actions.setIsAuthenticated(isAuthenticated)),
})

const usersListDispatcher = (dispatch) => ({
    setUsersList: (list) => dispatch(actions.setUsersList(list))
})



export const dispatchers = {
    currentUserDispatcher,
    signInDispatcher,
    usersListDispatcher
};