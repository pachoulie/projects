import { fromJS } from 'immutable';
import {
    index, actionTypes, actions, VisibilityFilters,
    default as todoListReducer
} from 'routes/TodoList/modules/todolist';

describe('(Redux Module) Todo List', () => {
  const initialState = fromJS({
    filter: VisibilityFilters.SHOW_ALL,
    todos: []
  });

  beforeEach(function() {
    index = 0;
  });

  it('Should export a constant ADD_TODO.', () => {
    expect(actionTypes.ADD_TODO).to.equal('ADD_TODO');
  });

  it('Should export a constant TOGGLE_TODO.', () => {
    expect(actionTypes.TOGGLE_TODO).to.equal('TOGGLE_TODO');
  });

  it('Should export a constant SET_FILTER.', () => {
    expect(actionTypes.SET_FILTER).to.equal('SET_FILTER');
  });

  describe('(Reducer)', () => {
    it('Shoud be a function.', () => {
      expect(todoListReducer).to.be.a('function');
    });

    it('Should initialize with a state of empty todo array and show all visibility', () => {
      const actual = todoListReducer(undefined, {});

      expect(actual).to.equal(initialState);
    });

    it('Should return the previous state if an action was not matched.', () => {
      let state = todoListReducer(undefined, {});

      expect(state).to.equal(initialState);
      state = todoListReducer(state, { type: '@@@@@@@' });
      expect(state).to.equal(initialState);
      state = todoListReducer(state, actions.addTodo('Create Redux app'));
      expect(state).to.equal(fromJS({
        filter: 'SHOW_ALL',
        todos: [{
          id: 1,
          text: 'Create Redux app',
          completed: false
        }]
      }));
      state = todoListReducer(state, { type: '@@@@@@@' });
      expect(state).to.equal(fromJS({
        filter: 'SHOW_ALL',
        todos: [
          {
            id: 1,
            text: 'Create Redux app',
            completed: false
          }
        ]
      }));
    });
  });

  describe('(Action Creator) addTodo', () => {
    it('Should be exported as a function.', () => {
      expect(actions.addTodo).to.be.a('function');
    });

    it('Should return an action with type "ADD_TODO".', () => {
      expect(actions.addTodo()).to.have.property('type', actionTypes.ADD_TODO);
    });

    it('Should assign the first argument as text to the "payload" property.', () => {
      expect(actions.addTodo('Create Redux app')).to.have.property('text', 'Create Redux app');
    });
  });

  describe('(Action Creator) toggleTodo', () => {
    it('Should be exported as a function.', () => {
      expect(actions.toggleTodo).to.be.a('function');
    });

    it('Should return an action with type "TOGGLE_TODO".', () => {
      expect(actions.toggleTodo()).to.have.property('type', actionTypes.TOGGLE_TODO);
    });

    it('Should assign the first argument as index to the "payload" property.', () => {
      expect(actions.toggleTodo(1)).to.have.property('index', 1);
    });
  });

  describe('(Action Creator) setVisibilityFilter', () => {
    it('Should be exported as a function.', () => {
      expect(actions.setVisibilityFilter).to.be.a('function');
    });

    it('Should return an action with type "SET_FILTER".', () => {
      expect(actions.setVisibilityFilter()).to.have.property('type', actionTypes.SET_FILTER);
    });

    it('Should assign the first argument as boolean to the "payload" property.', () => {
      expect(actions.setVisibilityFilter(true)).to.have.property('filter', true);
    });
  });

  describe('(Action Handler) ADD_TODO', () => {
    it('Should append a new todo to the state with the "text" value.', () => {
      let state = todoListReducer(undefined, {});
      expect(state).to.equal(initialState);
      state = todoListReducer(state, actions.addTodo('Create Redux app'));
      expect(state.get('todos')).to.equal(fromJS([
                { id: 1, text: 'Create Redux app', completed: false }
      ]));
      state = todoListReducer(state, actions.addTodo('Eat'));
      expect(state.get('todos')).to.equal(fromJS([
                { id: 1, text: 'Create Redux app', completed: false },
                { id: 2, text: 'Eat', completed: false }
      ]));
      state = todoListReducer(state, actions.addTodo('Sleep'));
      expect(state.get('todos')).to.equal(fromJS([
                { id: 1, text: 'Create Redux app', completed: false },
                { id: 2, text: 'Eat', completed: false },
                { id: 3, text: 'Sleep', completed: false }
      ]));
    });
  });

  describe('(Action Handler) TOGGLE_TODO', () => {
    it('Should toggle todo completed status according to provided "payload" todo index.', () => {
      let state = todoListReducer(fromJS({
        filter: VisibilityFilters.SHOW_ALL,
        todos: [
                    { text: 'Create Redux app', completed: false },
                    { text: 'Eat', completed: false }
        ]
      }), {});
      expect(state).to.equal(fromJS({
        filter: 'SHOW_ALL',
        todos: [
                    { text: 'Create Redux app', completed: false },
                    { text: 'Eat', completed: false }
        ]
      }));
      state = todoListReducer(state, actions.toggleTodo(0));
      expect(state.get('todos')).to.equal(fromJS([
                { text: 'Create Redux app', completed: true },
                { text: 'Eat', completed: false }
      ]));
      state = todoListReducer(state, actions.toggleTodo(1));
      expect(state.get('todos')).to.equal(fromJS([
                { text: 'Create Redux app', completed: true },
                { text: 'Eat', completed: true }
      ]));
      state = todoListReducer(state, actions.toggleTodo(0));
      expect(state.get('todos')).to.equal(fromJS([
                { text: 'Create Redux app', completed: false },
                { text: 'Eat', completed: true }
      ]));
    });
  });

  describe('(Action Handler) SET_FILTER', () => {
    it('Should set visibility of todo according to provided "payload" todo index.', () => {
      let state = todoListReducer(undefined, {});
      expect(state.get('filter')).to.equal(VisibilityFilters.SHOW_ALL);
      state = todoListReducer(state, actions.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
      expect(state.get('filter')).to.equal(VisibilityFilters.SHOW_COMPLETED);
      state = todoListReducer(state, actions.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
      expect(state.get('filter')).to.equal(VisibilityFilters.SHOW_ACTIVE);
      state = todoListReducer(state, actions.setVisibilityFilter(VisibilityFilters.SHOW_ALL));
      expect(state.get('filter')).to.equal(VisibilityFilters.SHOW_ALL);
    });
  });
});
