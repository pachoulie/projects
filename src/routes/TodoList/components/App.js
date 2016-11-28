import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
