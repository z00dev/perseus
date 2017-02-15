const synth = window.speechSynthesis;

const populateVoices = (utterance) => {
    const voices = synth.getVoices();
    voices.find((voice) => {
        if (voice.name === "Google US English") {
            utterance.voice = voice;
        }
    });
};

function ReadToMe(words) {
//    console.log("ReadToMe:", words);
    const utterThis = new SpeechSynthesisUtterance(words);
    populateVoices(utterThis);
    return synth.speak(utterThis);
}



module.exports = ReadToMe;
