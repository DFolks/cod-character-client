import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_CHARACTER_DATA_SUCCESS = 'FETCH_CHARACTER_DATA_SUCCESS';
export const fetchCharacterDataSuccess = data => ({
  type: FETCH_CHARACTER_DATA_SUCCESS,
  data
});

export const FETCH_CHARACTER_DATA_ERROR = 'FETCH_CHARACTER_DATA_ERROR';
export const fetchCharacterDataError = error => ({
  type: FETCH_CHARACTER_DATA_ERROR,
  error
});

export const UPDATE_CHARACTER_SUCCESS = 'UPDATE_CHARACTER_SUCCESS';
export const updateCharacterSuccess = data => ({
  type: UPDATE_CHARACTER_SUCCESS,
  data
});

export const UPDATE_CHARACTER_ERROR = 'UPDATE_CHARACTER_ERROR';
export const updateCharacterError = error => ({
  type: UPDATE_CHARACTER_ERROR,
  error
});

export const FETCH_SINGLE_CHARACTER_SUCCESS = 'FETCH_SINGLE_CHARACTER_SUCCESS';
export const fetchSingleCharacterSuccess = data => ({
  type: FETCH_SINGLE_CHARACTER_SUCCESS,
  data
});

export const FETCH_SINGLE_CHARACTER_ERROR = 'FETCH_SINGLE_CHARACTER_ERROR';
export const fetchSingleCharacterError = error => ({
  type: FETCH_SINGLE_CHARACTER_ERROR,
  error
});

export const updateCharacter = obj => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/character/${obj.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(obj)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(updateCharacterSuccess(data)))
    .catch(err => dispatch(updateCharacterError(err)));
};

export const fetchCharacterData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/character`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchCharacterDataSuccess(data)))
    .catch(err => {
      dispatch(fetchCharacterDataError(err));
    });
};

export const fetchSingleCharacter = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/character/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchSingleCharacterSuccess(data)))
    .catch(err => {
      dispatch(fetchSingleCharacterError(err));
    });
};

export const deleteCharacter = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/character/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  });
};

export const createCharacter = character => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/character`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(character)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      res.json();
    })
    .then(({ data }) => dispatch(fetchCharacterDataSuccess(data)))
    .catch(err => {
      dispatch(fetchCharacterDataError(err));
    });
};
