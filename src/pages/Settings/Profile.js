import React, {useEffect} from "react";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import {ButtonBase, Card, Paper} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";

import {Request} from "../../data/requests";
import {getCookie} from "../../utils/common";
import SocialStyles from "../../styles/social";
import {getCurrentUserQuery} from "../../data/queries";
import {getters} from "../../redux/selectors/selectors";
import {dispatchers} from "../../redux/dispatchers/dispatchers";
import LinearProgress from "@material-ui/core/LinearProgress";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {Title} from "@material-ui/icons";

const Profile = (props) => {
    const {classes} = props;
    const {user} = useSelector(getters.getCurrentUser);
    const {isAuthenticated} = useSelector(getters.getIsAuthenticated);
    const {setCurrentUser} = dispatchers.currentUserDispatcher(useDispatch())

    useEffect(() => {
        // function handleStatusChange(status) {
        //   setIsOnline(status.isOnline);
        // }
        if(!isAuthenticated) {
            Request(getCurrentUserQuery(getCookie("user")), setCurrentUser, "getUserFromJwt")
            // handleAlert("Welcome Back " + user["firstName"] + ' ' + user["lastName"] + '!')
        }
    }, [])

    return (
        <div>
            <Paper elevation={4} className={classes.paper}>
                <Grid justify={"space-evenly"}>
                    <Avatar
                        alt="Adelle Charles"
                        src="/static/images/avatar.jpg"
                        className={classes.avatar}
                    />
                    <Typography variant={"h5"} component={"h5"}>{user["firstName"] + ' ' + user["lastName"]}</Typography>
                    <Typography variant={"h5"} component={"h5"}>{user["email"]}</Typography>
                    <Typography variant={"h5"} component={"h5"}>{user["dob"]}</Typography>
                    <Typography variant={"h5"} component={"h5"}>{user["role"]["id"]}</Typography>
                    
                </Grid>
            </Paper>
        </div>
    )
};


export default withStyles(SocialStyles)(Profile);