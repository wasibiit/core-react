// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import Room from '@material-ui/icons/Room';
import Settings from '@material-ui/icons/Settings';
import Social from "../pages/Social/Social";
import MessageIcon from '@material-ui/icons/Message';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
// Pages
import {
    Home,
    UsersList,
    Quiz,
    Setting,
    Programs,
    Semester
} from '../pages/pages';
export default {
    items: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            icon: ExploreIcon,
            component: Home
        },
        {
            path: '/PeopleOutlineIcon',
            name: 'Users',
            type: 'submenu',
            icon: PeopleOutlineIcon,
            children: [

                {
                    path: '/usersList',
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
            name: 'Admin Role',
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
            icon: Settings,
            component: Setting,
        }

    ]
};