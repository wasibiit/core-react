// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import People from '@material-ui/icons/People';
import Room from '@material-ui/icons/Room';
import FilterList from '@material-ui/icons/FilterList';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import Settings from '@material-ui/icons/Settings';
import Person from '@material-ui/icons/Person'

// Pages
import {
    Lockscreen,
    Signin,
    Signup
} from './pages';

export default {
    items: [
        {
            path: '/',
            name: 'Home',
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
            path: '/rooms',
            name: 'Rooms',
            type: 'submenu',
            icon: Room,
            children: [
                {
                    path: '/hot',
                    name: 'Hot Rooms',
                    component: HotRooms
                },
                {
                    path: '/allrooms',
                    name: 'All Rooms',
                    component: AllRooms
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
            path: '/emojis',
            name: 'Emojis',
            type: 'link',
            icon: InsertEmoticon,
            component: Emojis
        },
        {
            path: '/settings',
            name: 'Settings',
            type: 'link',
            icon: Settings,
            component: Setting
        },
        // {
        //     name: 'Authentication',
        //     type: 'submenu',
        //     icon: Person,
        //     children: [{
        //         path: '/Signin',
        //         name: 'Signin',
        //         component: Signin
        //     }]
        // }
    ]
};