import React, {useState} from 'react';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Person} from "@material-ui/icons";


const StyledMenu = withStyles({
  paper: {
    width: '200px',
    border: '1px solid #d3d4d5',
  },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = (props) => {
  const { classes, logo, logoAltText } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(true);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    console.log("--------------Menu Closed!!!")
    setAnchorEl(null);
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
                </IconButton>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  <StyledMenuItem>
                    <ListItemIcon>
                      <Person fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </StyledMenuItem>
                </StyledMenu>
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