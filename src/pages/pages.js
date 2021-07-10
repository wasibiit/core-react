// Home
import Home from './Home/Home';

// Users
import UsersList from './Users/UsersList';

//Authentication
import Signin from './Authentication/Signin/Signin'

import Programs from './Rooms/Programs';
import Semester from './Rooms/Semester';
import Courses from './Rooms/Courses';
import Quiz from '../components/Quiz/Quiz';

//Settings
import Profile  from "./Settings/Profile";

//Errors
import NotFound from "./Errors/NotFound";
import BackendError from "./Errors/BackendError";

//dashboard
import Dashboard from "./Dashboard/Dashboard";

export {
    Home,
    Signin,
    UsersList,
    Quiz,
    Profile,
    NotFound,
    BackendError,
    Dashboard,
    Programs,
    Semester,
    Courses
}