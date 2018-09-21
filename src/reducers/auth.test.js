import reducer from './auth';
import {
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError
} from '../actions/auth';

describe('reducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@UNKNOWN'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    });
  });
  it('should return the current state on an unknown action', () => {
    const state = {
      data: 'it worked'
    };
    const action = {
      type: '@@UNKNOWN'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual(state);
  });
  it('should handle the setAuthToken action', () => {
    const state = {
      authToken: null
    };
    const action = setAuthToken('rudabega');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      authToken: 'rudabega'
    });
  });
  it('should handle the clearAuth action', () => {
    const state = {
      authToken: 'rudabega',
      currentUser: 'billyBob'
    };
    const action = clearAuth();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      authToken: null,
      currentUser: null
    });
  });
  it('should handle the authRequest action', () => {
    const state = {
      loading: false,
      error: 'billyBob'
    };
    const action = authRequest();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: true,
      error: null
    });
  });
  it('should handle the authSuccess action', () => {
    const state = {
      loading: true,
      currentUser: null
    };
    const action = authSuccess('billyBob');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      currentUser: 'billyBob'
    });
  });
  it('should handle the authError action', () => {
    const state = {
      loading: true,
      error: null
    };
    const action = authError('error');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: 'error'
    });
  });
});
