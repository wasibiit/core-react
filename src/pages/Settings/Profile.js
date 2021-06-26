import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import {Card, LinearProgress} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import SocialStyles from "../../styles/social";

const Profile = (props) => {
    const {classes} = props;
    return (
        <Card>
            <CardContent className={classes.profile}>
                <Grid>
                    <Avatar
                        alt="Adelle Charles"
                        src="/static/images/avatar.jpg"
                        className={classes.avatar}
                    />
                    <Grid item xs={40}>
                        <Button variant="raised" color="primary">Edit Profile</Button>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider/>
        </Card>
    )
};


export default withStyles(SocialStyles)(Profile);