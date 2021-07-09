import {Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react"
import {withStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {FormControl, InputLabel, Select, TextField} from "@material-ui/core";

import UserStyles from "../../styles/users";
import {getCookie} from "../../utils/common";
import {constants} from "../../utils/constants";
import {getters} from "../../redux/selectors/selectors";
import {SnackBar} from "../../components/SnackBar/SnackBar";
import {dispatchers} from "../../redux/dispatchers/dispatchers";
import {AuthRequest, AuthRequestWithFlag} from "../../data/requests";
import SemestersListTable from "../../components/Tables/SemstersListTable";
import {createSemesterQuery, getProgramsQuery, getSemestersQuery} from "../../data/queries";
import {idID} from "@material-ui/core/locale";

const UsersList = (props) => {
    const {classes} = props;
    const [alert, setAlert] = useState();
    const [programs, setPrograms] = useState([]);
    const [open, setOpen] = useState();
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");
    const {semestersList} = useSelector(getters.getSemestersList);
    const {setSemestersList} = dispatchers.semestersListDispatcher(useDispatch())

    useEffect(() => {
        if (alert) {
            AuthRequest(getSemestersQuery(), setSemestersList, "getSemestersList", getCookie("user"))
            handleAlert("Semester Created Successfully!", "success")
        }else if(alert === false) {
            handleAlert("Already Exists!", "error")
        } else {
            AuthRequest(getProgramsQuery(), setPrograms, "getProgramsList", getCookie("user"))
            AuthRequest(getSemestersQuery(), setSemestersList, "getSemestersList", getCookie("user"))
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
                <SnackBar text={text} style={severity} handleClose={handleClose} open={open}/>
            </div>
            <Paper elevation={4} className={classes.paper}>
                <div>
                    <Typography variant={"h5"} component={"h5"}>Create Semester</Typography>
                    <Formik
                        initialValues={constants.SEMESTER}
                        validate={values => {
                            const errors = {};
                            if (values.program === "") {
                                errors.program = "Please Select a Program.";
                            }
                            if (values.semester === "") {
                                errors.semester = "Fill This Field";
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                setSubmitting(false);
                                setAlert()
                            }, 600);
                            AuthRequestWithFlag(createSemesterQuery(values), setAlert, "createSemester", getCookie("user"))
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
                                            helpertext={errors.program}
                                            label="Programs"
                                            fullWidth
                                            inputProps={{
                                                name: 'program',
                                                id: 'programs',
                                            }}
                                        >
                                            <option aria-label="None" value=""/>
                                            {programs.map((program) => <option value={program["id"]}>
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
                                        helpertext={errors.semester}
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
                <SemestersListTable />
            </Paper>
        </div>
    )
}

export default withStyles(UserStyles)(UsersList);