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

const programsListDispatcher = (dispatch) => ({
    setProgramsList: (list) => dispatch(actions.setProgramsList(list))
})

const semestersListDispatcher = (dispatch) => ({
    setSemestersList: (list) => dispatch(actions.setSemestersList(list))
})



export const dispatchers = {
    currentUserDispatcher,
    signInDispatcher,
    usersListDispatcher,
    programsListDispatcher,
    semestersListDispatcher
};