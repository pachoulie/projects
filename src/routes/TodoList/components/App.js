import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodo from '../components/AddTodo';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <AddTodo />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
