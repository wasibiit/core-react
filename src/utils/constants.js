
const BASEURL = `http://cbcda276e8df.ngrok.io/graphiql`;

const USER = {email: "", password: "", dob: "", firstName: "", lastName: "", role: ""};
const PROGRAM = {program: "", duration: ""};

const actionSignInTypes = {EMAIL: "EMAIL", PASSWORD: "PASSWORD"};

const actionCurrentUserTypes = {USER: "USER", IS_AUTHENTICATED: "IS_AUTHENTICATED"};

const actionUsersListTypes = {USERS_LIST: "USERS_LIST"};

const actionProgramsTypes = {PROGRAM_LIST: "PROGRAM_LIST"};



export const constants = {
    actionCurrentUserTypes,
    actionSignInTypes,
    USER,
    BASEURL,
    actionUsersListTypes,
    PROGRAM,
    actionProgramsTypes
};