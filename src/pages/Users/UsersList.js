import {Formik} from "formik";
import {useDispatch} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react"
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {FormControl, InputLabel, Select, TextField} from "@material-ui/core";

import UserStyles from "../../styles/users";
import {getCookie} from "../../utils/common";
import {constants} from "../../utils/constants";
import {SnackBar} from "../../components/SnackBar/SnackBar";
import {dispatchers} from "../../redux/dispatchers/dispatchers";
import {UsersListTable} from "../../components/Tables/UsersListTable";
import {AuthRequest, AuthRequestWithFlag} from "../../data/requests";
import {createUserQuery, getRolesQuery, getUsersListQuery} from "../../data/queries";

const UsersList = (props) => {
    const {classes} = props;
    const [alert, setAlert] = useState();
    const [roles, setRoles] = useState([]);
    const [open, setOpen] = useState();
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");
    const {setUsersList} = dispatchers.usersListDispatcher(useDispatch())

    useEffect(() => {
        if (alert) {
            AuthRequest(getUsersListQuery(), setUsersList, "getUsersList", getCookie("user"))
            handleAlert("User Created Successfully!", "success")
        }else if(alert === false) {
            handleAlert("Already Exists!", "error")
        } else {
            AuthRequest(getRolesQuery(), setRoles, "getRolesList", getCookie("user"))
        }
    }, [alert])

    const capitalizeFirstLetter = ([first, ...rest]) => first.toLocaleUpperCase() + rest.join('')

    const handleAlert = (text, type) => {
        setText(text)
        setSeverity(type)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className={classes.root}>
                <SnackBar text={text}
                          style={severity}
                          handleClose={handleClose}
                          open={open}
                />
            </div>
            <Paper elevation={4} className={classes.paper}>
                <div>
                    <Typography variant={"h5"} component={"h5"}>
                        Create Users
                    </Typography>
                    <Formik
                         initialValues={constants.USER}
                        validate={values => {
                            const errors = {};
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }
                            if (values.password.length < 3) {
                                errors.password = 'Password Must Be 6 letters';
                            }
                            if (values.dob === "") {
                                errors.dob = "Please Select Date.";
                            }
                            if (values.firstName === "") {
                                errors.firstName = "Fill This Field";
                            }
                            if (values.lastName === "") {
                                errors.lastName = "Fill This Field";
                            }
                            if (values.role === "") {
                                errors.role = "Select Role.";
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                setSubmitting(false);
                                setAlert();
                            }, 600);
                            AuthRequestWithFlag(createUserQuery(values), setAlert, "createUser", getCookie("user"))
                        }}
                    >
                        {({
                              values,
                              errors,
                              handleChange,
                              handleSubmit,
                              isSubmitting,
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <div className={classes.form}>
                                    <TextField
                                        id="firstName"
                                        label="First Name"
                                        type={"text"}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        helperText={errors.firstName}
                                        variant="outlined"/>
                                    <TextField
                                        id="lastName"
                                        label="Last Name"
                                        onChange={handleChange}
                                        value={values.lastName}
                                        helperText={errors.lastName}
                                        type={"text"}
                                        variant="outlined"/>
                                </div>
                                <div className={classes.form}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type={"email"}
                                        fullWidth
                                        onChange={handleChange}
                                        value={values.email}
                                        helperText={errors.email}
                                        placeholder={"example@example.com"}
                                        variant="outlined"
                                    />
                                </div>
                                <div className={classes.form}>
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
                                        <Select
                                            style={
                                                {width:"200px"}
                                            }
                                            native
                                            value={values.role}
                                            onChange={handleChange}
                                            helperText={errors.role}
                                            label="Role"
                                            fullWidth
                                            inputProps={{
                                                name: 'role',
                                                id: 'roles',
                                            }}
                                        >
                                            <option aria-label="None" value=""/>
                                            {roles.map((role) => <option value={role["id"]}>
                                                {capitalizeFirstLetter(`${role["id"]}`)}
                                            </option>)}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        value={values.dob}
                                        onChange={handleChange}
                                        helperText={errors.dob}
                                        id="dob"
                                        type={"date"}
                                        variant="outlined"/>
                                </div>
                                <div className={classes.form}>
                                    <TextField
                                        value={values.password}
                                        onChange={handleChange}
                                        helperText={errors.password}
                                        id="password"
                                        label="Password"
                                        type={"password"}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </div>
                                <div className={classes.button}>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSubmitting}
                                        type="submit"
                                        size={"large"}>
                                        Save
                                    </Button>

                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </Paper>
            <Paper elevation={4} className={classes.paper}>
                <UsersListTable />
            </Paper>
        </div>
    )
}

export default withStyles(UserStyles)(UsersList);