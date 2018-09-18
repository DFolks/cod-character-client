import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        id="login-form"
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <fieldset className="login-fieldset">
          <legend>Login</legend>
          {error}
          <div>
            <Field
              label="Username"
              component={Input}
              type="text"
              name="username"
              validate={[required, nonEmpty]}
              aria-label="Username"
            />
          </div>
          <div>
            <Field
              label="Password"
              component={Input}
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
              aria-label="password"
            />
          </div>
          <button
            disabled={this.props.pristine || this.props.submitting}
            className="login-button"
          >
            Log In
          </button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
