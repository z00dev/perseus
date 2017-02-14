const synth = window.speechSynthesis;

const populateVoices = (utterance) => {
    let voices = synth.getVoices();
    for(let i = 0; i < voices.length ; i++) {
        if(voices[i].name === "Google US English") {
            utterance.voice = voices[i];
        }
    }
};

function ReadToMe(words) {
    console.log("ReadToMe:", words);
    const utterThis = new SpeechSynthesisUtterance(words);
    populateVoices(utterThis)
    return synth.speak(utterThis);
};



module.exports = ReadToMe;
