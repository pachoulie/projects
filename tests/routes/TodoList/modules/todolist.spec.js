import {
  ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER
  addTodo,
  default as todoListReducer
} from 'routes/TodoList/modules/todolist';

describe('(Redux Module) Todo List', () => {
  it('Should export a constant ADD_TODO.', () => {
    expect(ADD_TODO).to.equal('ADD_TODO');
  });

  it('Should export a constant TOGGLE_TODO.', () => {
    expect(TOGGLE_TODO).to.equal('TOGGLE_TODO');
  });

  it('Should export a constant SET_VISIBILITY_FILTER.', () => {
    expect(SET_VISIBILITY_FILTER).to.equal('SET_VISIBILITY_FILTER');
  });

  describe('(Reducer)', () => {
    it('Shoud')
  });
});
