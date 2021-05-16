import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import SessionStyles from '../../styles/Session';

const Signin = (props) => {
  const { classes } = props;
  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <img src="/static/images/logo-dark.svg" alt=""/>
                  <Typography variant="caption">Sign in with your app id to continue.</Typography>
                </div>
                <TextField
                  id="username"
                  label="Username"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
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
                <Button variant="raised" color="primary" fullWidth type="submit">Login</Button>
                <div className="pt-1 text-md-center">
                    <Button>Forgot password?</Button>
                    <Button>Create new account.</Button>
                </div>
              </form>
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