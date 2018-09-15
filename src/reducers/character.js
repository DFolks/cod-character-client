import {
  FETCH_CHARACTER_DATA_SUCCESS,
  FETCH_CHARACTER_DATA_ERROR,
  FETCH_SINGLE_CHARACTER_SUCCESS,
  FETCH_SINGLE_CHARACTER_ERROR,
  UPDATE_CHARACTER_ERROR,
  UPDATE_CHARACTER_SUCCESS
} from '../actions/character';

const initialState = {
  character: undefined,
  data: [],
  error: null,
  editing: false,
  expanded: false
};

export default function characterReducer(state = initialState, action) {
  if (action.type === FETCH_CHARACTER_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_CHARACTER_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === UPDATE_CHARACTER_SUCCESS) {
    return Object.assign({}, state, {
      updatedValue: action.data,
      error: null
    });
  } else if (action.type === UPDATE_CHARACTER_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === FETCH_SINGLE_CHARACTER_SUCCESS) {
    return Object.assign({}, state, {
      character: action.data,
      error: null
    });
  } else if (action.type === FETCH_SINGLE_CHARACTER_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
