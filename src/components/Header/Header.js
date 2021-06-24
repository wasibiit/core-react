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
import "./header.css"
import ImageAvatars from "../Avatar/ImageAvatars";
import {Person} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {getters} from "../../redux/selectors/selectors";

import HeaderMenu from "../Menu/HeaderMenu";
import HeaderMenuItems from "../Menu/HeaderMenuItems";


import Typography from "@material-ui/core/Typography";

const Header = (props) => {
  const { classes, logo, logoAltText } = props;
  const [auth] = useState(true);
  const {user} = useSelector(getters.getCurrentUser);
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(user)

  const open = Boolean(anchorEl);

  useEffect(() => {
    // function handleStatusChange(status) {
    //   setIsOnline(status.isOnline);
    })


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
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
                   Nadia
                  </Typography>
                </IconButton>
                <HeaderMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  <HeaderMenuItems>
                    <ListItemIcon>
                      <Person fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
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