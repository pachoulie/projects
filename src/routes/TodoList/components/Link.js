import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class Link extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        if (this.props.active) {
            return <span>{childen}</span>
        }

        return (
            <a href="#"
               onClick={e => {
                   e.preventDefault();
                   onClick();
               }}
            >
                {children}
            </a>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;