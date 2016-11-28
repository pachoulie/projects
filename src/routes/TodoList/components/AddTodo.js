import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../modules/todolist';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class AddTodo extends React.Component {
  render() {
    return (<div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
    )
  }
}

AddTodo = connect()(AddTodo);

export default AddTodo;
