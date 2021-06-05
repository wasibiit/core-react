import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import SessionStyles from '../../styles/Session';

import store from "../../store/configureStore"
import getAuth from "../../actions/signinAction"

class Signin extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        login: "",
        password: ""
    }
}

handleChange = (e) => {
    // console.log(e.target.getAttribute('id'))
  const input_elem = e.target.getAttribute('id')
    const input_val= e.target.value;
    // console.log(input_val)
    switch (input_elem){
        case 'username':
            this.setState({
                login: input_val
            })
            break;
        case 'password':
            this.setState({
                password: input_val
            })
            break;
    }
}

handleSubmit = (e) => {
    // console.log("state", this.state)
    const data = this.state
    console.log("DATA", data)
    store.dispatch(getAuth(data))
    e.preventDefault()
}

render() {
    const {classes}= this.props;
    return (
        <div className={classNames(classes.session, classes.background)}>
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <img src="/static/images/logo.svg" alt=""/>
                                    <Typography variant="caption">Login With Admin Account.</Typography>
                                </div>
                                <TextField
                                    id="username"
                                    label="Username"
                                    className={classes.textField}
                                    onChange={this.handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    onChange={this.handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedA"
                                        />
                                    }
                                    label="Stayed logged in"
                                    className={classes.fullWidth}
                                />
                                <Button
                                    variant="raised"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                    onClick={this.handleSubmit}
                                >
                                    Login
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/forgot">
                                        <Button>Forgot password?</Button>
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    {/*<Link to="/signup">*/}
                                    {/*    <Button>Create new account.</Button>*/}
                                    {/*</Link>*/}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(SessionStyles)(Signin);