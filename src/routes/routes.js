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
    Semester
} from '../pages/pages';



export default {
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
                    name: 'Users List',
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
                    path: '/Social',
                    name: 'Message',
                    component: Social,
                },

            ]
        },
        {
            path: '/rooms',
            name: 'Rooms',
            type: 'submenu',
            icon: Room,
            children: [
                {
                    path: '/Programs',
                    name: 'Programs',
                    component: Programs
                },
                {
                    path: '/Semester',
                    name: 'Semester',
                    component: Semester
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