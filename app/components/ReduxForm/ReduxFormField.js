import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  showErr: {
    visibility: 'visible',
    color: 'red',
    width: '14rem',
    height: '1rem',
  },
  hideErr: {
    visibility: 'hidden',
    width: '14rem',
    height: '1rem',
  },
  textField: {
    width: '14rem',
    margin: '0 auto',
  },
};

const RenderFieldComponent = (props) => {
  const {
    input,
    type,
    classes,
    id,
    label,
    meta: { touched, error },
  } = props;
  return (
    <div className={classes.container}>
      <TextField
        id={id}
        label={label}
        className={classes.textField}
        {...input}
        type={type}
        margin="normal"
      />
      <span
        className={
          touched && error !== 'Required' ? classes.showErr : classes.hideErr
        }
      >
        {error}
      </span>
    </div>
  );
};

export const ReduxFormField = withStyles(styles)(RenderFieldComponent);

RenderFieldComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from 'material-ui/TextField';
// import PropTypes from 'prop-types';

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   showErr: {
//     visibility: 'visible',
//     color: 'red',
//     width: '14rem',
//     height: '1rem',
//   },
//   hideErr: {
//     visibility: 'hidden',
//     width: '14rem',
//     height: '1rem',
//   },
// };

// const RenderFieldComponent = (props) => {
//   const {
//     input,
//     label,
//     type,
//     classes,
//     meta: { touched, error },
//   } = props;
//   console.log('props', props);
//   return (
//     <div className={classes.container}>
//       <TextField
//         {...this.props}
//         hintText={props.hintText}
//         floatingLabelText={props.floatingLabelText}
//         {...input}
//         placeholder={label}
//         type={type}
//       />
//       <span
//         className={
//           touched && error !== 'Required' ? classes.showErr : classes.hideErr
//         }
//       >
//         {error}
//       </span>
//     </div>
//   );
// };

// export const ReduxFormField = withStyles(styles)(RenderFieldComponent);

// RenderFieldComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
//   input: PropTypes.object,
//   floatingLabelText: PropTypes.string,
//   hintText: PropTypes.hintText,
//   meta: PropTypes.object,
//   label: PropTypes.string,
//   type: PropTypes.string,
// };
