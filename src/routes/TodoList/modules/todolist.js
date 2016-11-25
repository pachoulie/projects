import { Map } from 'immutable';

// ------------------------------------
// Action types
// ------------------------------------
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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
    text
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
    state.set('todos', state.todos.push({text: action.payload, completed: false})),

  [TOGGLE_TODO]: (state, action) =>
    state.todos.map((todo) => {
      if (index === action.payload) {
        todo.set('completed', !todo.completed)
      }
      return todo;
    })
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Map({
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
});

export default function todoListReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
