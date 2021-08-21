// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import People from '@material-ui/icons/People';
import Room from '@material-ui/icons/Room';
import Settings from '@material-ui/icons/Settings';
import Social from "../pages/Social/Social";
import MessageIcon from '@material-ui/icons/Message';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

// Pages
import {
    Home,
    UsersList,
    Quiz,
    Profile,
    Programs,
    Semester,
    Courses
} from '../pages/pages';

let adminRoutes =  {
    items: [
        {
            path: '/',
            name: 'Dashboard',
            icon: ExploreIcon,
            component: Home
        },
        {
            path: '/users',
            name: 'Users',
            type: 'submenu',
            icon: People,
            children: [
                {
                    path: '/userslist',
                    name: 'UsersList',
                    component: UsersList
                }
            ]
        },
        {
            path: '/social',
            name: 'Social',
            type: 'submenu',
            icon : MessageIcon,
            children: [
                {
                    path: '/social',
                    name: 'Message',
                    component: Social,
                },

            ]
        },
        {
            path: '/controller',
            name: 'Controller',
            type: 'submenu',
            icon: Room,
            children: [
                {
                    path: '/programs',
                    name: 'Programs',
                    component: Programs
                },
                {
                    path: '/semester',
                    name: 'Semester',
                    component: Semester
                } ,
                {
                    path: '/course',
                    name: 'Course',
                    component: Courses
                }
            ]
        },
        {
            path: '/quiz',
            name: ' Quiz',
            icon: QueryBuilderIcon,
            component: Quiz
        },
        {
            path: '/settings',
            name: 'Settings',
            type: 'submenu',
            icon: Settings,
            children: [
                {
                    path: '/profile',
                    name: 'Profile',
                    component: Profile
                }
            ]
        }
    ]
};

let teacherRoutes = {}

let studentRoutes = {}

export const getRoutesBy = (role) => {return role === "admin" ? adminRoutes : role === "teacher" ? teacherRoutes : studentRoutes;}