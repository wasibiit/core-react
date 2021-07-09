
const BASEURL = `http://localhost:4002/graphiql`;

const USER = {email: "", password: "", dob: "", firstName: "", lastName: "", role: ""};
const PROGRAM = {program: "", duration: ""};
const SEMESTER = {program: "", semester: ""};

const actionSignInTypes = {EMAIL: "EMAIL", PASSWORD: "PASSWORD"};
const actionCurrentUserTypes = {USER: "USER", IS_AUTHENTICATED: "IS_AUTHENTICATED"};
const actionUsersListTypes = {USERS_LIST: "USERS_LIST"};
const actionProgramsTypes = {PROGRAM_LIST: "PROGRAM_LIST"};
const actionSemestersTypes = {SEMESTERS_LIST: "SEMESTERS_LIST"};



export const constants = {
    actionSignInTypes,
    actionProgramsTypes,
    actionSemestersTypes,
    actionUsersListTypes,
    actionCurrentUserTypes,
    USER,
    BASEURL,
    PROGRAM,
    SEMESTER,
};