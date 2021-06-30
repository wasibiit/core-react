import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
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
import {AuthRequest, AuthRequestWithFlag} from "../../data/requests";
import {createProgramQuery, getProgramsQuery} from "../../data/queries";
import ProgramsListTable from "../../components/Tables/ProgramsListTable";

const Programs = (props) => {
    const {classes} = props;
    const [open, setOpen] = useState(true);
    const [alert, setAlert] = useState();
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");
    const {setProgramsList} = dispatchers.programsListDispatcher(useDispatch())

    useEffect(() => {
        if (alert) {
            AuthRequest(getProgramsQuery(), setProgramsList, "getProgramsList", getCookie("user"))
            handleAlert("Programs Created Successfully!", "success")
        }else if(alert === false) {
            handleAlert("Already Exists!", "error")
        } else {
        AuthRequest(getProgramsQuery(), setProgramsList, "getProgramsList", getCookie("user"))
        }
    }, [alert])

    // const capitalizeFirstLetter = ([first, ...rest]) => first.toLocaleUpperCase() + rest.join('')

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
                        Create Program
                    </Typography>
                    <Formik
                        initialValues={constants.PROGRAM}
                        validate={values => {
                            const errors = {};
                            if (values.program === "") {
                                errors.program = "Fill This Field";
                            }
                            if (values.duration === "") {
                                errors.duration = "Can't be Blank";
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                setSubmitting(false);
                            }, 600);
                            AuthRequestWithFlag(createProgramQuery(values), setAlert, "createProgram", getCookie("user"))
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
                                        id="program"
                                        label="Program"
                                        type={"text"}
                                        onChange={handleChange}
                                        value={values.program}
                                        helperText={errors.program}
                                        variant="outlined"/>
                                    <TextField
                                        id="duration"
                                        label="Duration"
                                        onChange={handleChange}
                                        value={values.duration}
                                        helperText={errors.duration}
                                        type={"text"}
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
                <ProgramsListTable />
            </Paper>
        </div>
    )
}

export default withStyles(UserStyles)(Programs);