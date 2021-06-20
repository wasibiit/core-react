// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import People from '@material-ui/icons/People';
import Room from '@material-ui/icons/Room';
import FilterList from '@material-ui/icons/FilterList';
import Settings from '@material-ui/icons/Settings';
import Social from "../pages/Social/Social";
import MessageIcon from '@material-ui/icons/Message';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

// Pages
import {
    Home,
    UsersList,
    BlockedUsers,
    HotRooms,
    AllRooms,
    ActiveFilters,
    Quiz,
    Setting,
    Programs,
    Semester
} from '../pages/pages';



export default {
    items: [
        {
            path: '/Dashboard',
            name: 'Dashboard',
            type: 'link',
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
                    path: '/blockedusers',
                    name: 'Blocked Users',
                    component: BlockedUsers
                },
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
                    path: '/hot',
                    name: 'ClassRoom',
                    component: HotRooms
                },
                {
                    path: '/allrooms',
                    name: 'VirtualRoom',
                    component: AllRooms
                },
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
            path: '/filters',
            name: 'Filters / Restricted Terms',
            type: 'link',
            icon: FilterList,
            component: ActiveFilters
        },
        {
            path: '/quiz',
            name: ' Quiz',
            type: 'link',
            icon: QueryBuilderIcon,
            component: Quiz
        },
        {
            path: '/settings',
            name: 'Settings',
            type: 'link',
            icon: Settings,
            component: Setting
        },


    ]
};