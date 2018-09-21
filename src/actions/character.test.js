import {
  FETCH_CHARACTER_DATA_SUCCESS,
  fetchCharacterDataSuccess,
  FETCH_CHARACTER_DATA_ERROR,
  fetchCharacterDataError,
  UPDATE_CHARACTER_SUCCESS,
  updateCharacterSuccess,
  UPDATE_CHARACTER_ERROR,
  updateCharacterError,
  FETCH_SINGLE_CHARACTER_SUCCESS,
  fetchSingleCharacterSuccess,
  FETCH_SINGLE_CHARACTER_ERROR,
  fetchSingleCharacterError,
  updateCharacter,
  fetchCharacterData,
  fetchSingleCharacter,
  deleteCharacter,
  createCharacter
} from './character';

describe('fetchCharacterDataSuccess', () => {
  it('should return the action', () => {
    const data = 'rudabega';
    const action = fetchCharacterDataSuccess(data);
    expect(action).toEqual({
      type: FETCH_CHARACTER_DATA_SUCCESS,
      data
    });
  });
});

describe('fetchCharacterDataError', () => {
  it('should return the action', () => {
    const error = 'rudabega';
    const action = fetchCharacterDataError(error);
    expect(action).toEqual({
      type: FETCH_CHARACTER_DATA_ERROR,
      error
    });
  });
});

describe('updateCharacterSuccess', () => {
  it('should return the action', () => {
    const data = 'rudabega';
    const action = updateCharacterSuccess(data);
    expect(action).toEqual({
      type: UPDATE_CHARACTER_SUCCESS,
      data
    });
  });
});

describe('updateCharacterError', () => {
  it('should return the action', () => {
    const error = 'rudabega';
    const action = updateCharacterError(error);
    expect(action).toEqual({
      type: UPDATE_CHARACTER_ERROR,
      error
    });
  });
});

describe('fetchSingleCharacterSuccess', () => {
  it('should return the action', () => {
    const data = 'rudabega';
    const action = fetchSingleCharacterSuccess(data);
    expect(action).toEqual({
      type: FETCH_SINGLE_CHARACTER_SUCCESS,
      data
    });
  });
});

describe('fetchSingleCharacterError', () => {
  it('should return the action', () => {
    const error = 'rudabega';
    const action = fetchSingleCharacterError(error);
    expect(action).toEqual({
      type: FETCH_SINGLE_CHARACTER_ERROR,
      error
    });
  });
});

describe('updateCharacter', () => {
  it('should send a PATCH request', () => {});
});

describe('fetchCharacterData', () => {
  it('should send a GET request', () => {});
});

describe('fetchSingleCharacter', () => {
  it('should send a GET by id request', () => {});
});

describe('deleteCharacter', () => {
  it('should send a DELETE request', () => {});
});

describe('createCharacter', () => {
  it('should send a POST request', () => {});
});
