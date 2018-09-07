import React from 'react';
import './welcome.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Welcome() {
  return (
    <header>
      <h1>Welcome to Chronicles of Darkness Character Management</h1>
      <form id="signup-form" class="js-signup-from">
        <fieldset>
          <legend>Signup</legend>
          <div>
            <label for="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              class="js-fullname-entry"
              value=""
            />
          </div>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              class="js-username-entry"
              value=""
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              class="js-password-entry"
              value=""
            />
          </div>
          <button type="submit">Signup</button>
        </fieldset>
      </form>

      <form id="login-form" class="js-login-form">
        <fieldset>
          <legend>Login</legend>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              class="js-username-entry"
              value=""
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              class="js-password-entry"
              value=""
            />
          </div>
          <button type="submit">Login</button>
        </fieldset>
      </form>
      <p>
        Test link just to jump to character sheet
        <Link to="/:character">Click Here</Link>. Will be removed in final
        product.
      </p>
    </header>
  );
}

export default connect()(Welcome);
