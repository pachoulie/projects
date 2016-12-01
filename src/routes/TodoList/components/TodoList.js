import React, { PropTypes } from 'react';
import Todo from './Todo';
import ImmutablePropTypes from 'react-immutable-proptypes';

export class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.get('id')}
            text={todo.get('text')}
            completed={todo.get('completed')}
            onClick={() => this.props.onTodoClick(todo.get('id'))}
          />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapOf({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
