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
    const [open, setOpen] = useState(true);
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");
    const {setUsersList} = dispatchers.usersListDispatcher(useDispatch())

    useEffect(() => {
        if (alert) {
            // AuthRequest(getUsersListQuery(), setUsersList, "getUsersList", getCookie("user"))
            handleAlert("User Created Successfully!", "success")
        }else if(alert === false) {
            handleAlert("Already Exists!", "error")
        } else {
            // AuthRequest(getRolesQuery(), setRoles, "getRolesList", getCookie("user"))
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
                        Create Semester
                    </Typography>
                    <Formik
                        initialValues={constants.SEMESTER}
                        validate={values => {
                            const errors = {};
                            if (values.program === "") {
                                errors.dob = "Please Select a Program.";
                            }
                            if (values.semester === "") {
                                errors.firstName = "Fill This Field";
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                setSubmitting(false);
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
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="outlined-age-native-simple">Programs</InputLabel>
                                        <Select
                                            native
                                            value={values.program}
                                            onChange={handleChange}
                                            helperText={errors.program}
                                            label="Programs"
                                            fullWidth
                                            inputProps={{
                                                name: 'program',
                                                id: 'programs',
                                            }}
                                        >
                                            <option aria-label="None" value=""/>
                                            {roles.map((program) => <option value={program["id"]}>
                                                {capitalizeFirstLetter(`${program["id"]}`)}
                                            </option>)}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={classes.form}>
                                    <TextField
                                        id="semester"
                                        label="Semester"
                                        type={"text"}
                                        onChange={handleChange}
                                        value={values.semester}
                                        helperText={errors.semester}
                                        variant="outlined"/>
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