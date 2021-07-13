import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Route, Switch, Redirect} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import {Workspace, Header, Sidebar} from '../../components/index';
import DashboardStyles from '../../styles/dashboard';
import routes from '../../routes/routes';
import {useSelector} from "react-redux";
import {getters} from "../../redux/selectors/selectors";
import {checkCookie} from "../../utils/common";
// import {getCurrentUserQuery} from "../../data/queries";
import {SnackBar} from "../../components/SnackBar/SnackBar";
// import {Request} from "../../data/requests";

function resizeDispatch() {
    if (typeof (Event) === 'function') {
        window.dispatchEvent(new Event('resize'));
    } else {
        const evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    }
}

const Dashboard = (props) =>  {
    const {classes} = props;
    const [opened, setOpened] = useState(true);
    const [openBar, setOpenBar] = useState(false);
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");
    const {isAuthenticated} = useSelector(getters.getIsAuthenticated);
    const {user} = useSelector(getters.getCurrentUser);

    useEffect(() => {
        // function handleStatusChange(status) {
        //   setIsOnline(status.isOnline);
        // }
        if(isAuthenticated) {
            // Request(getCurrentUserQuery(getCookie("uer")), setCurrentUser, "getUserFromJwt")
            handleAlert("Welcome Back " + user["firstName"] + ' ' + user["lastName"] + '!')
        }
    }, [])

    if (!checkCookie("user")) {return <Redirect to={"/signin"}/>}

    const handleAlert = (text, type) => {
        setText(text)
        setSeverity(type)
        setOpenBar(true);
    };

    const handleCloseSnackBar = () => {
        setOpenBar(false);
    };

    const handleDrawerToggle = () => {
        setOpened(!opened)
        resizeDispatch()
    };

    const getRoutes = (
        <Switch>
            {
                !checkCookie("user") ? <Redirect to={"/signin"}/> :
                routes.items.map((item, index) => (
                item.type === 'external' ? <Route exact path={item.path} component={item.component} name={item.name} key={index} />:
                    item.type === 'submenu' ? item.children.map(subItem => <Route exact path={`${item.path}${subItem.path}`} component={subItem.component} name={subItem.name} />):
                        <Route exact path={item.path} component={item.component} name={item.name} key={index} />
            ))
            }
            <Redirect to="/404" />
        </Switch>
    )

    return (

        <div className={classes.Fragment}>
            <div className={classes.root}>
                <SnackBar text={text}
                          style={severity}
                          handleClose={handleCloseSnackBar}
                          open={openBar}
                />
            </div>
            <Header
                logoAltText="Learning Squad"
                logo={`/static/images/white.jpg`}
                toggleDrawer={handleDrawerToggle}
            />
            <div className={classNames(classes.panel, 'theme-dark')} >
                <Sidebar
                    routes={routes.items}
                    opened={opened}
                    toggleDrawer={handleDrawerToggle}
                />
                <Workspace opened={opened}>
                    {getRoutes}
                </Workspace>
            </div>
        </div>

    )
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(DashboardStyles)(Dashboard);