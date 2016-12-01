import { List, Map } from 'immutable';

// ------------------------------------
// Action types
// ------------------------------------
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const actionTypes = {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER
};

// ------------------------------------
// Other constants
// ------------------------------------
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// ------------------------------------
// Action creators
// ------------------------------------
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}
export function setVisibilityFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  };
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
  [SET_FILTER]: (state, action) =>
    state.set('filter', action.filter),

  [ADD_TODO]: (state, action) =>
    state.updateIn(['todos'], (todos) => todos.push(Map({id: todos.size + 1, text: action.text, completed: false}))),

  [TOGGLE_TODO]: (state, action) =>
    state.updateIn(['todos', action.index, 'completed'], (completed) => !completed)
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Map({
  filter: VisibilityFilters.SHOW_ALL,
  todos: List()
});

export default function todoListReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
