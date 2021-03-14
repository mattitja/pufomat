// Text to Speech

const synth = window.speechSynthesis;

const florentinVoice = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "de-DE";
  voice.volume = 2;
  voice.rate = 2;
  voice.pitch = 0; // Can be 0, 1, or 2
  synth.speak(voice);
}

const stefanVoice = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "de-DE";
  voice.volume = 2;
  voice.rate = 2;
  voice.pitch = 2; // Can be 0, 1, or 2
  synth.speak(voice);
}

const introVoice = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "de-DE";
  voice.volume = 2;
  voice.rate = 1;
  voice.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voice);
}