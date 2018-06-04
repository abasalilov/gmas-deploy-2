/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import RegistrationPage from 'containers/RegistrationPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
  },
};

const StyledApp = (props) => (
  <div className={props.classes.root}>
    <Helmet
      titleTemplate="%s - GMAS Development"
      defaultTitle="GMAS Development"
    >
      <meta name="description" content="GMAS Development" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/registration" component={RegistrationPage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

StyledApp.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StyledApp);
