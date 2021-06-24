import {Formik} from 'formik';
import classNames from 'classnames';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SessionStyles from '../../../styles/session';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import CardContent from '@material-ui/core/CardContent';

import {getReqOptions, setCookie} from "../../../utils/common";
import {signInQuery} from "../../../data/queries";
import {getters} from "../../../redux/selectors/selectors";
import {dispatchers} from "../../../redux/dispatchers/dispatchers";
import {SnackBar} from "../../../components/SnackBar/SnackBar";
import {constants} from "../../../utils/constants";

const Signin = (props) => {
    const {classes} = props;
    const history = useHistory();
    const {email} = useSelector(getters.getEmail);
    const {password} = useSelector(getters.getPassword);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");
    const {setEmail} = dispatchers.signInDispatcher(useDispatch())
    const {setPassword} = dispatchers.signInDispatcher(useDispatch())
    const {setCurrentUser} = dispatchers.currentUserDispatcher(useDispatch())
    const {setIsAuthenticated} = dispatchers.currentUserDispatcher(useDispatch())

    const handleAlert = (text, type) => {
        setText(text)
        setSeverity(type)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classNames(classes.session, classes.background)}>
            <div className={classes.root}>
                <SnackBar text={"Wrong Credentials!"}
                          style={"warning"}
                          handleClose={handleClose}
                          open={open}
                />
            </div>
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <Card>
                        <div className="text-xs-center pb-xs">
                            <img src={"/static/images/ls.jpg"} className={classes.media} alt="ls"/>
                        </div>
                        <CardContent>
                            <Formik
                                initialValues={{email: email, password: password}}
                                validate={values => {
                                    const errors = {};
                                    setEmail(values.email)
                                    setPassword(values.password)
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address';
                                    }
                                    if (values.password.length < 3) {
                                        errors.password = 'Password Must Be 6 letters';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        setSubmitting(false);
                                    }, 600);
                                    fetch(constants.BASEURL, getReqOptions(signInQuery(email, password)))
                                        .then(res => res.json())
                                        .then(
                                            (result) => {
                                                if (result.data.userSignin === null) {
                                                    handleAlert("Invalid Credentials", "warning")
                                                } else {
                                                    setCookie("user", result.data.userSignin.token)
                                                    setCurrentUser(result.data.userSignin)
                                                    setIsAuthenticated(true)
                                                    history.push("/dashboard");
                                                }
                                            },
                                            (error) => {
                                                handleAlert("Connection Failed!", "error")
                                                console.log("------------start------------");
                                                console.log(error);
                                                console.log("----------end----------------");
                                            }
                                        )
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
                                        <TextField
                                            helperText={errors.email}
                                            id={"email"}
                                            label="Email"
                                            placeholder={"example@.com"}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            fullWidth
                                            value={values.email}
                                            margin="normal"
                                        />
                                        <TextField
                                            helperText={errors.password}
                                            id={"password"}
                                            label="Password"
                                            className={classes.textField}
                                            onChange={handleChange}
                                            value={values.password}
                                            type="password"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <Button
                                            variant={"outlined"}
                                            size={"large"}
                                            className={classes.myButton}
                                            fullWidth
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Login
                                        </Button>
                                        <div className="pt-1 text-xs-center"/>
                                    </form>
                                )}
                            </Formik>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default withStyles(SessionStyles)(Signin);