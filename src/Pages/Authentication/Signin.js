import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {Formik} from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import SessionStyles from '../../styles/Session';
import {getCookie, setCookie} from "../../utils/common";
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import SessionStyles from '../../Styles/session';
import {Link} from "react-router-dom";

const Signin = (props) => {
    const {classes} = props;

    const getReqOptions = (values) => {
        console.log("------------start------------");
        console.log(getQuery(values));
        console.log("----------end----------------");
        return  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Origin': '*'},
            body: JSON.stringify({query: getQuery(values)})
        };
    }

    const getQuery = (values) => {
        return `
        mutation {
  userSignin(
    input: {
      email: "${values.email}",
      password: "${values.password}"
    }
  )
  {
    firstName,
    lastName,
    dob,
    email,
    role {
      id
    },
    token
  }
}`
    }

    return (
        <div className={classNames(classes.session, classes.background)}>
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <Card>
                        <CardContent>
                            <Formik
                                initialValues={{email: '', password: ''}}
                                validate={values => {
                                    const errors = {};
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address';
                                    }
                                    if(values.password.length < 3) {
                                        errors.password = 'Password Must Be 6 letters';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        setSubmitting(false);
                                    }, 600);
                                    fetch(`http://localhost:4002/graphiql`, getReqOptions(values))
                                        .then(res => res.json())
                                        .then(
                                            (result) => {
                                                setCookie("user", result.data.token)
                                                let token = getCookie("user")
                                                console.log("------------start------------");
                                                console.log(token);
                                                console.log("----------end----------------");
                                            },
                                            (error) => {
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
                                            fullWidth
                                            onChange={handleChange}
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
                                            variant="raised"
                                            color="primary" f
                                            ullWidth type="submit"
                                            disabled={isSubmitting}
                                        >
                                            SignIn
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

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SessionStyles)(Signin);