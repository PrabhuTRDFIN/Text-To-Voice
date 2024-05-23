const listenBtn = document.querySelector('.listenBtn');
const TextArea = document.querySelector('.text');
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });

    speech.voice = voices[0];
};

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

listenBtn.onclick = function TextToSpeech() {
    speech.text = TextArea.value;
    window.speechSynthesis.speak(speech);
};
