/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
/* eslint-disable comma-dangle, no-var, react/jsx-closing-bracket-location, react/jsx-indent-props, react/prop-types */
/* To fix, remove an entry above, run ka-lint, and fix errors. */

var React = require('react');

var SpeakerIcon = require('./icons/speaker.jsx');
var ReadToMe = require("./read-to-me.jsx");

var QuestionParagraph = React.createClass({
    getReadableText() {
        const children = this.props.children.props.children;
        if (Array.isArray(children)) {
            return children.filter((child) => {
                if (typeof child === 'string' && child.trim() !== '') {
                    return child;
                }
            }).join(' ') || '';
        } else {
            return '';
        }
    },

    render() {
        const text = this.getReadableText();

        var className = this.props.className
            ? "paragraph " + this.props.className
            : "paragraph";

        // For perseus-article just-in-place-translation (jipt), we need
        // to attach some metadata to top-level QuestionParagraphs:
        return <div
            className={className}
            data-perseus-component-index={this.props.translationIndex}
            data-perseus-paragraph-index={this.props.paragraphIndex}
        >
            {text !== '' && <span onClick={() => ReadToMe(text)}>
                <SpeakerIcon/>
            </span>}
            {this.props.children}
        </div>;
    }
});

module.exports = QuestionParagraph;
