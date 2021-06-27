import React, {useEffect, useState} from "react"
import {FormControl, InputLabel, Select, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UserStyles from "../../styles/users";
import {withStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {getters} from "../../redux/selectors/selectors";
import {Request} from "../../data/requests";
import {getUsersList} from "../../data/queries";
import {dispatchers} from "../../redux/dispatchers/dispatchers";
import CollapsibleTable from "../../components/Tables/Table";


const UsersList = (props) => {
    const {classes} = props;
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if(alert) {
            // handleAlert("Welcome Back " + user["firstName"] + ' ' + user["lastName"] + '!')
        }
    }, [alert])

    return (
        <div>
            <Paper elevation={4} className={classes.paper}>
                <div>
                    <Typography variant={"h5"} component={"h5"}>
                        Create Users
                    </Typography>
                    <form>
                        <div className={classes.form}>
                            <TextField
                                id="firstName"
                                label="First Name"
                                type={"text"}
                                variant="outlined"/>
                            <TextField
                                id="lastName"
                                label="Last Name"
                                type={"text"}
                                variant="outlined"/>
                        </div>
                        <div className={classes.form}>
                            <TextField
                                id="email"
                                label="Email"
                                type={"email"}
                                fullWidth
                                placeholder={"example@example.com"}
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.form}>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
                                <Select
                                    native
                                    // value={state.age}
                                    // onChange={handleChange}
                                    label="Role"
                                    fullWidth
                                    inputProps={{
                                        name: 'role',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Admin</option>
                                    <option value={20}>Teacher</option>
                                    <option value={30}>Student</option>
                                </Select>
                            </FormControl>
                            <TextField
                                id="dob"
                                type={"date"}
                                variant="outlined"/>
                        </div>
                        <div className={classes.form}>
                            <TextField
                                id="password"
                                label="Password"
                                type={"password"}
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.button}>
                            <Button fullWidth variant="contained" color="secondary" size={"large"}>
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </Paper>
            <Paper elevation={4} className={classes.paper}>
                <CollapsibleTable />
            </Paper>
        </div>
    )
}

export default withStyles(UserStyles)(UsersList);