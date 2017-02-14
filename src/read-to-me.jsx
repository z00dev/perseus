const synth = window.speechSynthesis;

function ReadToMe(words) {
    console.log("ReadToMe:", words);
    const utterThis = new SpeechSynthesisUtterance(words);
    return synth.speak(utterThis);
};

module.exports = ReadToMe;