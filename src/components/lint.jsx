/**
 * A lint highlighter, used to flag results from Gorgon that we want to
 * warn an editor about before submitting to the live site.
 *
 */
const React = require("react");
const {StyleSheet, css} = require("aphrodite");

const Lint = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        inline: React.PropTypes.bool,
        message: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <div ref="container" className={css(styles.container)}>
                <div ref="circle" className={css(styles.circle)} />
                <div className={css(styles.box)}>
                    <span className={css(styles.warning)}>Warning:</span>
                    {this.props.message}
                </div>
                {this.props.children}
            </div>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        marginLeft: "-16px",
        paddingLeft: "16px",
        position: "relative",
    },
    circle: {
        backgroundColor: "#ffbe26",
        borderRadius: "8px",
        height: "16px",
        position: "absolute",
        right: "-32px",
        top: "8px",
        width: "16px",

        ':hover + div': {
            display: 'inline-block',
        }
    },
    hidden: {
        display: "none",
    },
    floating: {
        position: "absolute",
    },
    box: {
        backgroundColor: "#21242c",
        borderRadius: "4px",
        color: "white",
        display: "none",
        fontSize: "80%",
        left: "0",
        lineHeight: "1.25",
        maxWidth: "400px",
        opacity: "0.9",
        padding: "12px",
        position: "absolute",
        top: "0px",
        zIndex: "1000",
    },
    warning: {
        color: "#ffbe26",
        paddingRight: "4px",
    },
});

module.exports = Lint;
