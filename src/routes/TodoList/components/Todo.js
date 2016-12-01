import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
      >
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Todo;
