import {withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import React from "react";

const HeaderMenu = withStyles({
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


export default HeaderMenu;