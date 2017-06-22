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
                    borderBottom: '2px dotted #ffbe26',
                }}
                title={this.props.message}
            >
                {this.props.children}
            </span>;
        } else {
            return <div
                style={{
                    borderLeft: '2px dotted #ffbe26',
                }}
                title={this.props.message}
            >
                {this.props.children}
            </div>;
        }
    },
});

module.exports = Lint;
