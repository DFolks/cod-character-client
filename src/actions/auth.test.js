import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  setAuthToken,
  SET_AUTH_TOKEN,
  clearAuth,
  CLEAR_AUTH,
  AUTH_REQUEST,
  authRequest,
  AUTH_SUCCESS,
  authSuccess,
  AUTH_ERROR,
  authError,
  login,
  refreshAuthToken
} from './auth';
import { Field } from 'redux-form';
import { mount, shallow } from 'enzyme';
import LoginForm from '../components/login-form';
import { Provider } from 'react-redux';

describe('setAuthToken', () => {
  it('should return the action', () => {
    const authToken = 'rudabega';
    const action = setAuthToken(authToken);
    expect(action).toEqual({
      type: SET_AUTH_TOKEN,
      authToken
    });
  });
});

describe('clearAuth', () => {
  it('should return the action', () => {
    const action = clearAuth();
    expect(action).toEqual({
      type: CLEAR_AUTH
    });
  });
});

describe('authRequest', () => {
  it('should return the action', () => {
    const action = authRequest();
    expect(action).toEqual({
      type: AUTH_REQUEST
    });
  });
});

describe('authSuccess', () => {
  it('should return the action', () => {
    const currentUser = 'rudabega';
    const action = authSuccess(currentUser);
    expect(action).toEqual({
      type: AUTH_SUCCESS,
      currentUser
    });
  });
});

describe('authError', () => {
  it('should return the action', () => {
    const error = 'rudabega';
    const action = authError(error);
    expect(action).toEqual({
      type: AUTH_ERROR,
      error
    });
  });
});

describe('login', () => {
  jest.mock('./auth', () => {
    Object.assign({}, require.requireActual('./auth'), {
      authRequest: jest.fn().mockImplementation((username, password) => {
        return {
          type: 'AUTH_REQUEST',
          username,
          password
        };
      }),
      login: jest.fn()
    });
  });
  it('dispatches the authRequest action', () => {
    const username = 'billyBob';
    const password = 'password';
    const dispatch = jest.fn();
    const store = configureStore([thunk])();
    const wrapper = mount(
      <Provider store={store}>
        <LoginForm dispatch={dispatch} repos={[]} />
      </Provider>
    );
    const form = wrapper.find('form');
    console.log('*******I"M HERE**********', wrapper.find('form'));
    form.simulate('submit');
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('refreshAuthToken', () => {
  it('should send a POST request', () => {});
});
