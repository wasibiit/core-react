// Home
import Home from './Home/Home';

// Users
import BlockedUsers from './Users/BlockedUsers';
import UsersList from './Users/UsersList';

//Authntication
import Signin from './Authentication/Signin'

//Rooms
import HotRooms from './Rooms/HotRooms';
import AllRooms from './Rooms/AllRooms';
import Programs from './Rooms/Programs';
import Semester from './Rooms/Semester';
//Filters
import ActiveFilters from "./Filters/ActiveFilters";
//
//Quiz
import Quiz from '../Components/Quiz/Quiz';

//Settings
import Setting from "./Settings/Settings";

//Errors
import NotFound from "./Errors/NotFound";
import BackendError from "./Errors/BackendError";

//dashboard
import Dashboard from "./Dashboard/Dashboard";

export {
    Home,
    BlockedUsers,
    Signin,
    UsersList,
    HotRooms,
    AllRooms,
    ActiveFilters,
    Quiz,
    Setting,
    NotFound,
    BackendError,
    Dashboard,
    Programs,
    Semester
}