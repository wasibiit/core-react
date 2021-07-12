import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderStyles from '../../styles/header';
import ImageAvatars from "../Avatar/ImageAvatars";
import {Person} from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch, useSelector} from "react-redux";
import HeaderMenu from "../Menu/HeaderMenu";
import HeaderMenuItems from "../Menu/HeaderMenuItems";
import Typography from "@material-ui/core/Typography";
import {useHistory} from 'react-router-dom';
import "./header.css"
import {Request} from "../../data/requests";
import {deleteCookie, getCookie} from "../../utils/common";
import {getCurrentUserQuery} from "../../data/queries";
import {getters} from "../../redux/selectors/selectors";
import {dispatchers} from "../../redux/dispatchers/dispatchers";


const Header = (props) => {
  const { classes, logo, logoAltText } = props;
  const [auth] = useState(true);
  const {user} = useSelector(getters.getCurrentUser);
  const history = useHistory();
  const {setCurrentUser} = dispatchers.currentUserDispatcher(useDispatch())
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    // function handleStatusChange(status) {
    //   setIsOnline(status.isOnline);
    Request(getCurrentUserQuery(getCookie("user")), setCurrentUser, "getUserFromJwt")
    }, [])


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    deleteCookie("user")
    history.replace("/signin")
  };

    return (
      <AppBar
        position="static"
        className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.branding}>
            <img src={logo} alt={logoAltText} className="resize" />
          </div>

            <div className={classes.searchWrapper} />

          <Hidden smUp>
            <span className="flexSpacer" />
          </Hidden>
          {auth && (
              <div>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                  {/*<AccountCircle />*/}
                  <ImageAvatars />
                  <Typography variant="h6" component="h2">
                    {user["firstName"] + ' ' + user["lastName"]}
                  </Typography>
                </IconButton>
                <HeaderMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  {/*profile*/}
                  <HeaderMenuItems>
                    <ListItemIcon>
                      <Person fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </HeaderMenuItems>
                  {/*Logout*/}
                  <HeaderMenuItems>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText onClick={logout} primary="Logout" />
                  </HeaderMenuItems>
                </HeaderMenu>
              </div>
          )}
        </Toolbar>
      </AppBar>
    )
}

Header.prototypes = {
  classes: PropTypes.object.isRequired,
  logo: PropTypes.object,
  logoAltText: PropTypes.string
};

export default withStyles(HeaderStyles)(Header);