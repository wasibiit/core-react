import {createSelector} from "reselect";

//states
const signInState = (state) => state.signInReducer;
const currentUserState = (state) => state.currentUserReducer;
const usersListState = (state) => state.usersListReducer;

//selectors
const selectEmail = createSelector(signInState, signInReducer => signInReducer.email)
const selectPassword = createSelector(signInState,signInReducer => signInReducer.password)
const selectCurrentUser = createSelector(currentUserState,currentUserReducer => currentUserReducer.user)
const selectIsAuthenticated = createSelector(currentUserState,currentUserReducer => currentUserReducer.isAuthenticated)
const selectUsersList = createSelector(usersListState, usersListReducer => usersListReducer.usersList)

//getters
const getEmail = createSelector(selectEmail, (email) => ({email}));
const getPassword = createSelector(selectPassword, (password) => ({password}));
const getCurrentUser = createSelector(selectCurrentUser, (user) => ({user}));
const getIsAuthenticated = createSelector(selectIsAuthenticated, (isAuthenticated) => ({isAuthenticated}));
const getUsersList = createSelector(selectUsersList, (usersList) => ({usersList}));

export const getters = {
    getEmail,
    getPassword,
    getCurrentUser,
    getIsAuthenticated,
    getUsersList
};
