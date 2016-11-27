import { List, Map } from 'immutable';

// ------------------------------------
// Action types
// ------------------------------------
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const actionTypes = {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
};

// ------------------------------------
// Other constants
// ------------------------------------
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_DONE: 'SHOW_DONE'
};

// ------------------------------------
// Action creators
// ------------------------------------
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}
export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    payload: index
  }
}
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  }
}

export const actions = {
  addTodo,
  toggleTodo,
  setVisibilityFilter
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_VISIBILITY_FILTER]: (state, action) =>
    state.set('visibilityFilter', action.payload),

  [ADD_TODO]: (state, action) =>
      state.updateIn(['todos'], (todos) => todos.push(Map({text: action.payload, completed: false}))),

  [TOGGLE_TODO]: (state, action) =>
    state.updateIn(['todos', action.payload, 'completed'], (completed) => !completed)
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Map({
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: List()
});

export default function todoListReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
