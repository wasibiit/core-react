// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FilterList from '@material-ui/icons/FilterList';
import {Tasks} from './pages/task/tasks';
import {Classrooms} from './pages/classroom/classrooms';

export default {
    items: [
        {
            path: '/',
            name: 'Home',
            type: 'link',
            icon: ExploreIcon,
            component: Classrooms
        },
        // {
        //     path: '/rooms',
        //     name: 'Rooms',
        //     type: 'submenu',
        //     icon: Room,
        //     children: [
        //         {
        //             path: '/hot',
        //             name: 'Hot Rooms',
        //             component: Tasks
        //         },
        //         {
        //             path: '/allrooms',
        //             name: 'All Rooms',
        //             component: AllRooms
        //         }
        //     ]
        // },
        {
            path: '/filters',
            name: 'Filters / Restricted Terms',
            type: 'link',
            icon: FilterList,
            component: Tasks
        }
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