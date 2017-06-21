const React = require('react');

const Lint = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        inline: React.PropTypes.bool,
        message: React.PropTypes.string.isRequired,
    },
    render: function() {
        if (this.props.inline) {
            return <span
                style={{
                    backgroundColor: '#fcc',
                    textDecoration: 'dotted red underline',
                }}
                title={this.props.message}
            >
                {this.props.children}
            </span>;
        } else {
            return <div
                style={{
                    backgroundColor: '#fdd',
                    borderRight: '3px dotted red',
                }}
                title={this.props.message}
            >
                {this.props.children}
            </div>;
        }
    },
});

module.exports = Lint;
