import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Workspace, Header, Sidebar } from '../../components/index';
import DashboardStyles from '../../styles/dashboard';
import routes from '../../routes';

function resizeDispatch () {
  if (typeof(Event) === 'function') {
    window.dispatchEvent(new Event('resize'));
  } else {
    const evt = window.document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
  }
}

class Dashboard extends Component {
  state = {
    opened: true,
    type: 'light',
    direction: 'ltr',
    openSpeedDial: false
  };

  handleDrawerToggle = () => {
    console.log("--------------Drawer Toggeled!!!")
    this.setState({ opened: !this.state.opened });
    resizeDispatch()
  };

  handleFullscreenToggle = () => {
    console.log("--------------its Full Screen Now!!!")
    const element = document.querySelector('#root');
    const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

    element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };
    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  }

  handleSpeedDialOpen = () => {
    console.log("--------------SpeedDial Opening!!!")
    this.setState({ openSpeedDial: true });
  };

  handleSpeedDialClose = () => {
    console.log("--------------speedDial Closing!!!")
    this.setState({ openSpeedDial: false });
  };

  // componentDidMount() {}

  // componentWillUnmount() {}


  render() {
    const { classes } = this.props;
    const { opened, openSpeedDial } = this.state;

    const getRoutes = (
        <Switch>
          { routes.items.map((item, index) => (
              item.type === 'external' ? <Route exact path={item.path} component={item.component} name={item.name} key={index} />:
                  item.type === 'submenu' ? item.children.map(subItem => <Route exact path={`${item.path}${subItem.path}`} component={subItem.component} name={subItem.name} />):
                      <Route exact path={item.path} component={item.component} name={item.name} key={index} />
          ))}
          <Redirect to="/404" />
        </Switch>
    )

    return (
        <Fragment>
          <Header
              logoAltText="Learning Squad"
              logo={`/static/images/LS.png`}
              toggleDrawer={this.handleDrawerToggle}
              toggleFullscreen={this.handleFullscreenToggle}
          />
          <div className={classNames(classes.panel, 'theme-dark')}>
            <Sidebar
                routes={routes.items}
                opened={opened}
                toggleDrawer={this.handleDrawerToggle}
            />
            <Workspace opened={opened}>
              {getRoutes}
            </Workspace>
          </div>
        </Fragment>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(DashboardStyles)(Dashboard);