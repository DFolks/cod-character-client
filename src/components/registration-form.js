import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/user';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 6, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, name } = values;
    const user = { username, password, name };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <fieldset>
          <legend>Signup</legend>
          <div>
            <Field
              label="Name"
              component={Input}
              type="text"
              name="name"
              aria-label="name"
            />
          </div>
          <div>
            <Field
              label="Username"
              component={Input}
              type="text"
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
              aria-label="username"
            />
          </div>
          <div>
            <Field
              label="Password"
              component={Input}
              type="password"
              name="password"
              validate={[required, passwordLength, isTrimmed]}
              aria-label="password"
            />
          </div>
          <div>
            <Field
              label="Confirm password"
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
              aria-label="confirm password"
            />
          </div>
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('regisration', Object.keys(errors)[0]))
})(RegistrationForm);
