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
import HeaderStyles from '../../styles/Header';
import "./header.css"

class Header extends Component {
  state = {
    anchorEl: null,
    searchExpanded: false
  };

  handleSettingdToggle = event => {
    console.log("--------------Settings Toggled!!!")
    this.setState({ anchorEl: event.currentTarget });
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
    const { anchorEl, searchExpanded } = this.state;
    return (
      <AppBar
        position="static"
        style={{ background: 'linear-gradient(to right bottom, #71B280, #134E5E)' }}
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
                <IconButton
                  aria-label="Search"
                  className={classes.searchIcon}
                >
                  {/*<SearchIcon />*/}
                </IconButton>
                {/*<input className={classes.searchInput} type="text" placeholder="Search" autoFocus="true" />*/}
              </form>
            </div>
          </Hidden>

          <Hidden smUp>
            <span className="flexSpacer" />
          </Hidden>

          <Hidden xsDown>
            <IconButton color="inherit" onClick={toggleFullscreen}>
              <FullscreenIcon />
            </IconButton>
          </Hidden>

          <IconButton
            aria-label="User Settings"
            aria-owns={anchorEl ? 'user-menu' : null}
            aria-haspopup="true"
            color="inherit"
            onClick={this.handleSettingdToggle}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleCloseMenu}
          >
            <MenuItem onClick={this.handleCloseMenu}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText inset primary="Sign out" />
            </MenuItem>
          </Menu>
        </Toolbar>
        <Hidden smUp>
          <Collapse in={searchExpanded} timeout="auto" unmountOnExit>
            <Toolbar className={classes.toolBar}>
              <div className={classes.searchWrapper}>
                <form className={classNames(classes.searchForm, 'mr-0')}>
                  <IconButton
                    aria-label="Search"
                    className={classes.searchIcon}
                  >
                    {/*<SearchIcon />*/}
                  </IconButton>
                  {/*<input className={classes.searchInput} type="text" placeholder="Search" autoFocus="true" />*/}
                </form>
              </div>
            </Toolbar>
          </Collapse>
        </Hidden>
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