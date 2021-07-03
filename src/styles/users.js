const UserStyles = theme => ({
    paper: {
        maxWidth: "95%",
        marginTop: "2%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-evenly"
    },
    form: {
        display: "flex",
        flexDirection: "row",
        margin: "20px",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        width: "50%",
        marginLeft: "25%"
    },
    root: {
        width: '200%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    session: {
        position: 'relative',
        zIndex: 4000,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }
});

export default UserStyles;