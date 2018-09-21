import characterReducer from './character';
import {
  fetchCharacterDataSuccess,
  fetchCharacterDataError,
  updateCharacterSuccess,
  updateCharacterError,
  fetchSingleCharacterSuccess,
  fetchSingleCharacterError
} from '../actions/character';

describe('characterReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@UNKNOWN'
    };
    const newState = characterReducer(state, action);
    expect(newState).toEqual({
      character: undefined,
      editing: false,
      expanded: false,
      data: [],
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
    const newState = characterReducer(state, action);
    expect(newState).toEqual(state);
  });
  it('should handle the fetchCharacterDataSuccess action', () => {
    const state = {
      data: [],
      error: null
    };
    const action = fetchCharacterDataSuccess(['rudabega']);
    const newState = characterReducer(state, action);
    expect(newState).toEqual({
      data: ['rudabega'],
      error: null
    });
  });
  it('should handle the fetchCharacterDataError action', () => {
    const state = {
      error: null
    };
    const action = fetchCharacterDataError('rudabega');
    const newState = characterReducer(state, action);
    expect(newState).toEqual({
      error: 'rudabega'
    });
  });
  it('should handle the updateCharacterSuccess action', () => {
    const state = {
      error: null
    };
    const action = updateCharacterSuccess('rudabega');
    const newState = characterReducer(state, action);
    expect(newState).toEqual({
      updatedValue: 'rudabega',
      error: null
    });
  });
  it('should handle the updateCharacterError action', () => {
    const state = {
      error: null
    };
    const action = updateCharacterError('rudabega');
    const newState = characterReducer(state, action);
    expect(newState).toEqual({
      error: 'rudabega'
    });
  });
  it('should handle the fetchSingleCharacterSuccess action', () => {
    const state = {
      character: undefined,
      error: null
    };
    const action = fetchSingleCharacterSuccess(['rudabega']);
    const newState = characterReducer(state, action);
    expect(newState).toEqual({
      character: ['rudabega'],
      error: null
    });
  });
  it('should handle the fetchSingleCharacterError action', () => {
    const state = {
      error: null
    };
    const action = fetchSingleCharacterError(['rudabega']);
    const newState = characterReducer(state, action);
    expect(newState).toEqual({
      error: ['rudabega']
    });
  });
});
