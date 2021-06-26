import { drawerWidth } from '../utils/variables';

const SidebarStyles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        maxWidth: drawerWidth,
        height: '100%',
        zIndex: theme.zIndex.drawer + 99,
        backgroundColor: "#1D2228",
        color: "#E1E2E2",
    },
    modal: {
        [theme.breakpoints.down('sm')]: {
            top: '56px',
        },
        [theme.breakpoints.up('sm')]: {
            top: '64px',
        },
        zIndex: '1000'
    },
    backdrop: {
        [theme.breakpoints.down('sm')]: {
            top: '56px',
        },
        [theme.breakpoints.up('sm')]: {
            top: '64px',
        },
        icon: {
            color: "white"
        }
    },
});

export default SidebarStyles;