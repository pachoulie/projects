import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{textDecoration: completed ? 'line-through' : 'none'}}
            >
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;