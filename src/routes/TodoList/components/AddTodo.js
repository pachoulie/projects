import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../modules/todolist';

let AddTodo = (props) => {
  let input;

  return (<div>
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      props.addTodo(input.value);
      input.value = '';
    }}>
      <input ref={node => {
        input = node;
      }} />
      <button type='submit'>
            Add Todo
          </button>
    </form>
  </div>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addTodo
};

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodo;
