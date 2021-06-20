import {Formik} from 'formik';
import classNames from 'classnames';
import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import SessionStyles from '../../../styles/session';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import CardContent from '@material-ui/core/CardContent';

import {setCookie} from "../../../utils/common";
import {signInQuery} from "../../../data/queries";
import {getters} from "../../../redux/selectors/selectors";
import {dispatchers} from "../../../redux/dispatchers/dispatchers";

const Signin = (props) => {
    const {classes} = props;
    const {email} = useSelector(getters.getEmail);
    const {password} = useSelector(getters.getPassword);
    const [open, setOpen] = useState(false);
    const {setEmail} = dispatchers.signInDispatcher(useDispatch())
    const {setPassword} = dispatchers.signInDispatcher(useDispatch())
    const {setCurrentUser} = dispatchers.currentUserDispatcher(useDispatch())

    const getReqOptions = () => {
        return {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Origin': '*'},
            body: JSON.stringify({query: signInQuery(email, password)})
        };
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleAlert = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classNames(classes.session, classes.background)}>
            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning">
                        Wrong Credentials!
                    </Alert>
                </Snackbar>
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
                                    fetch(`http://localhost:4002/graphiql`, getReqOptions())
                                        .then(res => res.json())
                                        .then(
                                            (result) => {
                                                if (result.data.userSignin === null) {
                                                    handleAlert()
                                                } else {
                                                    setCookie("user", result.data.token)
                                                    setCurrentUser(result.data.userSignin)
                                                    props.history.push("/dashboard");
                                                }
                                            },
                                            (error) => {
                                                handleAlert()
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