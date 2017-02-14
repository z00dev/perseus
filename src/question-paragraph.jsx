/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
/* eslint-disable comma-dangle, no-var, react/jsx-closing-bracket-location, react/jsx-indent-props, react/prop-types */
/* To fix, remove an entry above, run ka-lint, and fix errors. */

var React = require('react');
var synth = window.speechSynthesis;

var QuestionParagraph = React.createClass({

    talkToMeFriend: function(){
        var utterThis = new SpeechSynthesisUtterance(this.props.children.props.children[0])
        return synth.speak(utterThis)
    },

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
                <button onClick={this.talkToMeFriend}>Read to Me</button>
            {this.props.children}
        </div>;
    }
});

module.exports = QuestionParagraph;
