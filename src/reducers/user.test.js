import reducer from './user';
import {
  fetchCharacterDataSuccess,
  fetchCharacterDataError
} from '../actions/character';

describe('reducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@UNKNOWN'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      data: '',
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
  it('should handle the fetchCharacterDataSuccess action', () => {
    const state = {
      data: '',
      error: null
    };
    const action = fetchCharacterDataSuccess(['rudabega']);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      data: ['rudabega'],
      error: null
    });
  });
  it('should handle the fetchCharacterDataError action', () => {
    const state = {
      error: null
    };
    const action = fetchCharacterDataError(['rudabega']);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      error: ['rudabega']
    });
  });
});
