const SidebarItemStyles = theme => ({
    badge: {
        width: '20px',
        height: '20px',
        display: 'flex',
        zIndex: 1,
        flexWrap: 'wrap',
        fontSize: '0.75rem',
        alignItems: 'center',
        borderRadius: '50%',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuLink: {
        position: 'relative',
        display: 'block'
    },
    menuItem: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    menuIcon: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    menuSubItem: {
        paddingLeft: '55px',
        paddingRight: '55px'
    },
    menuCollapsed: {
        backgroundColor:"#1D2228" ,
    },
    menuActive: {
        backgroundColor: "#E1E2E2"
    },
    menuClosed: {
        backgroundColor: '#1D2228'
    },
    caret: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    primary: {
        backgroundColor:"#E1E2E2",
        color: "#E1E2E2",
    },
    secondary: {
        backgroundColor: "#1D2228",
        color: "#E1E2E2" ,
    },
    error: {
        backgroundColor: "#1D2228" ,
        color: "#E1E2E2",
    },
    Fragment:
        {
            backgroundColor: "#1D2228",
        }
});

export default SidebarItemStyles;