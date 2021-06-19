import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
import SearchIcon from '@material-ui/icons/Search';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderStyles from '../../styles/header';
import "./header.css"
import LetterAvatars from "../Avatar/LetterAvatars";
import ImageAvatars from "../Avatar/ImageAvatars";
import {Option} from "react-select";
import {AccountCircle} from "@material-ui/icons";

class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseMenu = () => {
    console.log("--------------Menu Closed!!!")
    this.setState({ anchorEl: null });
  };

  handleSearchExpandToggle = () => {
    console.log("--------------Search is Happening!!!")
    this.setState({ searchExpanded: !this.state.searchExpanded });
  };

  handleDrawerToggle = () => {
    // console.log("-------------Drawer Worked!!")
    this.props.toggleDrawer();
    if (this.state.searchExpanded) this.handleSearchExpandToggle();
  }

  render() {
    const { classes, logo, logoAltText, toggleFullscreen } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <AppBar
        position="static"
        style={{ background:"grey" }}
        className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.branding}>
            <img src={logo} alt={logoAltText} className="resize" />
          </div>

          <Hidden xsDown>
            <div className={classes.searchWrapper}>
              <form className={classes.searchForm}>
                {/*<IconButton*/}
                {/*  aria-label="Search"*/}
                {/*  className={classes.searchIcon}*/}
                {/*>*/}
                {/*  /!*<SearchIcon />*!/*/}
                {/*</IconButton>*/}
                {/*<input className={classes.searchInput} type="text" placeholder="Search" autoFocus="true" />*/}
              </form>
            </div>
          </Hidden>

          <Hidden smUp>
            <span className="flexSpacer" />
          </Hidden>
          {auth && (
              <div>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                  {/*<AccountCircle />*/}
                  <ImageAvatars/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'left',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>
                </Menu>
              </div>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

Header.prototypes = {
  classes: PropTypes.object.isRequired,
  logo: PropTypes.object,
  logoAltText: PropTypes.string
};

export default withStyles(HeaderStyles)(Header);