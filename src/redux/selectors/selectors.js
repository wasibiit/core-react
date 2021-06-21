import {createSelector} from "reselect";

//states
const signInState = (state) => state.signInReducer;
const currentUserState = (state) => state.currentUserReducer;

//selectors
const selectEmail = createSelector(signInState, signInReducer => signInReducer.email)
const selectPassword = createSelector(signInState,signInReducer => signInReducer.password)
const selectCurrentUser = createSelector(currentUserState,currentUserReducer => currentUserReducer.user)
const selectIsAuthenticated = createSelector(currentUserState,currentUserReducer => currentUserReducer.isAuthenticated)

//getters
const getEmail = createSelector(selectEmail, (email) => ({email}));
const getPassword = createSelector(selectPassword, (password) => ({password}));
const getCurrentUser = createSelector(selectCurrentUser, (user) => ({user}));
const getIsAuthenticated = createSelector(selectIsAuthenticated, (isAuthenticated) => ({isAuthenticated}));

export const selectors = {selectEmail, selectPassword, selectCurrentUser, selectIsAuthenticated};
export const getters = {getEmail, getPassword, getCurrentUser, getIsAuthenticated};
