import React, { PropTypes } from 'react';

export class Link extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a href='#'
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}
            >
        {this.props.children}
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
