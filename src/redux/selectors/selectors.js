import {createSelector} from "reselect";

//states
const signInState = (state) => state.signInReducer;
const currentUserState = (state) => state.currentUserReducer;

//selectors
const selectEmail = createSelector(signInState, signInReducer => signInReducer.email)
const selectPassword = createSelector(signInState,signInReducer => signInReducer.password)
const selectCurrentUser = createSelector(currentUserState,currentUserReducer => currentUserReducer.user)

//getters
const getEmail = createSelector(selectEmail, (email) => ({email}));
const getPassword = createSelector(selectPassword, (password) => ({password}));
const getCurrentUser = createSelector(selectCurrentUser, (user) => ({user}));

export const selectors = {selectEmail, selectPassword, selectCurrentUser};
export const getters = {getEmail, getPassword, getCurrentUser};
