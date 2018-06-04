/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { RaisedButton } from '../../components/RaisedButton';
import {
  PasswordField,
  ReduxFormField,
  required,
  maxLength15,
  minLength2,
  alphaNumeric,
} from '../../components/ReduxForm';

import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername, makeSelectUser } from './selectors';
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
  formContainer: {
    justifyContent: 'center',
    display: 'flex',
    border: 'solid orange',
    alignContent: 'center',
    width: '100%',
    margin: '4rem auto 0rem auto',
  },
  buttons: {
    justifyContent: 'space-around',
    display: 'flex',
    width: '45rem',
    margin: '1rem auto',
    flexDirection: 'row ',
  },
  form: {
    margin: '3rem auto',
    width: '25rem',
  },
  btn: {
    backgroundColor: '#ffffff',
    border: 'solid #90C6BC 4px',
    borderRadius: '1rem',
    margin: '1rem',
  },
  hide: {
    borderRadius: '1rem',
    margin: '1rem',
    visibility: 'hidden',
  },
  show: {
    borderRadius: '1rem',
    margin: '1rem',
    visibility: 'visible',
  },
  link: {
    margin: '1rem',
  },
};

export class HomePageComponent extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {}

  render() {
    const {
      classes,
      submit,
      handleSubmit,
      pristine,
      submitting,
      reset,
    } = this.props;
    return (
      <div className={classes.container}>
        <TopAppBar
          className={classes.bar}
          title={'GMAS Crypto Portal'}
          rightLink={{ title: 'registration', route: '/registration' }}
        />
        <div>
          <form
            onSubmit={handleSubmit((values) => {
              const { password, username } = values;
              console.log('password', password, username);
              // await this.props.makeAuthReq(password, username);
              submit();
            })}
          >
            <div className={classes.form}>
              <div className={classes.btn}>
                <Field
                  className={classes.field}
                  name="username"
                  id="Username"
                  label="Username"
                  type="text"
                  component={ReduxFormField}
                  validate={[required, maxLength15, minLength2]}
                  warn={alphaNumeric}
                />
              </div>
              <div className={classes.btn}>
                <Field
                  className={classes.field}
                  name="password"
                  type="password"
                  component={PasswordField}
                  hintText="Username is your email address"
                  floatingLabelText="Username"
                  validate={[required, maxLength15, minLength2]}
                  warn={alphaNumeric}
                />
              </div>
              <div className={classes.link}>
                No account? <Link to="/register">Register</Link>
                <br />
              </div>
            </div>
            <div className={classes.buttons}>
              <RaisedButton
                label="Clear"
                type="button"
                primary
                disabled={pristine || submitting}
                className={pristine || submitting ? classes.hide : classes.show}
                onClick={reset}
              />
              <RaisedButton
                label="Submit"
                type="submit"
                primary
                className={classes.btn}
              />
            </div>
          </form>
        </div>
        <article>
          <Helmet>
            <title>GMAS Crypto Portal</title>
            <meta name="description" content="GMAS Crypto Portal" />
          </Helmet>
          <div />
        </article>
      </div>
    );
  }
}

HomePageComponent.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  submit: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  think: makeSelectUser(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

const HomePageStyled = withStyles(styles)(HomePageComponent);

const LoginForm = reduxForm({
  form: 'login', // a unique identifier for this form
})(HomePageStyled);

export default compose(withReducer, withSaga, withConnect)(LoginForm);

// <div className={authErr ? classes.err : classes.noErr}>
//     <span>username (email) and/or password did not match </span>
//   </div>;
