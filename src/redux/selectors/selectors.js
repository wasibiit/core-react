import {createSelector} from "reselect";

//states
const signInState = (state) => state.signInReducer;
const currentUserState = (state) => state.currentUserReducer;
const usersListState = (state) => state.usersListReducer;
const programsListState = (state) => state.programsListReducer;
const semestersListState = (state) => state.semestersListReducer;
const coursesListState = (state) => state.coursesListReducer;

//selectors
const selectEmail = createSelector(signInState, signInReducer => signInReducer.email)
const selectPassword = createSelector(signInState,signInReducer => signInReducer.password)
const selectCurrentUser = createSelector(currentUserState,currentUserReducer => currentUserReducer.user)
const selectIsAuthenticated = createSelector(currentUserState,currentUserReducer => currentUserReducer.isAuthenticated)
const selectUsersList = createSelector(usersListState, usersListReducer => usersListReducer.usersList)
const selectProgramsList = createSelector(programsListState, programsListReducer => programsListReducer.programsList)
const selectSemestersList = createSelector(semestersListState, semestersListReducer => semestersListReducer.semestersList)
const selectCoursesList = createSelector(coursesListState, coursesListReducer => coursesListReducer.coursesList)

//getters
const getEmail = createSelector(selectEmail, (email) => ({email}));
const getPassword = createSelector(selectPassword, (password) => ({password}));
const getCurrentUser = createSelector(selectCurrentUser, (user) => ({user}));
const getIsAuthenticated = createSelector(selectIsAuthenticated, (isAuthenticated) => ({isAuthenticated}));
const getUsersList = createSelector(selectUsersList, (usersList) => ({usersList}));
const getProgramsList = createSelector(selectProgramsList, (programsList) => ({programsList}));
const getSemestersList = createSelector(selectSemestersList, (semestersList) => ({semestersList}));
const getCoursesList = createSelector(selectCoursesList, (coursesList) => ({coursesList}));

export const getters = {
    getEmail,
    getPassword,
    getCurrentUser,
    getIsAuthenticated,
    getUsersList,
    getProgramsList,
    getSemestersList,
    getCoursesList
};
