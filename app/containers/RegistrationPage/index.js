/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
// import { ReduxFormField } from '../../components/ReduxForm';
import reducer from './reducer';
import saga from './saga';
import { TopAppBar } from '../../components/TopAppBar';

const styles = {
  container: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
  },
  bar: {
    backgroundColor: '#53BAD1',
  },
};

export class RegistrationPageComponent extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {}

  render() {
    const {
      classes,
      // submit,
      // handleSubmit,
      // pristine,
      // submitting,
      // reset,
    } = this.props;
    return (
      <div className={classes.container}>
        <TopAppBar
          className={classes.bar}
          title={'Register for GMAS Crypto Portal'}
          rightLink={'Login'}
        />
      </div>
    );
  }
}

RegistrationPageComponent.propTypes = {
  classes: PropTypes.object,
  // handleSubmit: PropTypes.func,
  // submit: PropTypes.func,
  // submitting: PropTypes.bool,
  // pristine: PropTypes.bool,
  // reset: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    registerUser: (e) => dispatch(() => e),
    // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: (evt) => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = createStructuredSelector({
  username: (e) => e,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withReducer = injectReducer({ key: 'reducer', reducer });
// const withSaga = injectSaga({ key: 'reducer', saga });

const RegistrationPageWithStyles = withStyles(styles)(
  RegistrationPageComponent
);

const RegistrationForm = reduxForm({
  form: 'registration', // a unique identifier for this form
})(RegistrationPageWithStyles);

export default compose(withConnect)(RegistrationForm);
// export default compose(withReducer, withSaga, withConnect)(RegistrationForm);

// <div className={authErr ? classes.err : classes.noErr}>
//     <span>username (email) and/or password did not match </span>
//   </div>;
