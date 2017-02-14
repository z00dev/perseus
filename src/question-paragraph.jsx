/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
/* eslint-disable comma-dangle, no-var, react/jsx-closing-bracket-location, react/jsx-indent-props, react/prop-types */
/* To fix, remove an entry above, run ka-lint, and fix errors. */

var React = require('react');
var ReadToMe = require("./read-to-me.jsx");

var QuestionParagraph = React.createClass({
    render: function() {
        console.log(this.props.children.props.children[0])
        var className = (this.props.className) ?
            "paragraph " + this.props.className :
            "paragraph";
        // For perseus-article just-in-place-translation (jipt), we need
        // to attach some metadata to top-level QuestionParagraphs:
        return <div
                className={className}
                data-perseus-component-index={this.props.translationIndex}
                data-perseus-paragraph-index={this.props.paragraphIndex}>
                <button onClick={() => ReadToMe(this.props.children.props.children[0])}>Read to Me</button>
            {this.props.children}
        </div>;
    }
});

module.exports = QuestionParagraph;
