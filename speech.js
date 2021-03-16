// Text to Speech

const synth = window.speechSynthesis;
let voice;


const florentinVoice = (string) => {
  voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "de-DE";
  voice.volume = 2;
  voice.rate = voicespeed / 50;
  voice.pitch = 0; // Can be 0, 1, or 2
  synth.speak(voice);
}

const stefanVoice = (string) => {
  voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "de-DE";
  voice.volume = 2;
  voice.rate = voicespeed / 50;
  voice.pitch = 1.3; // Can be 0, 1, or 2
  synth.speak(voice);
}

const introVoice = (string) => {
  voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "de-DE";
  voice.volume = 2;
  voice.rate = voicespeed / 50;
  voice.pitch = 2; // Can be 0, 1, or 2
  synth.speak(voice);
}

const silentVoice = (string) => {
  voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "de-DE";
  voice.volume = 0;
  voice.rate = voicespeed / 50;
  voice.pitch = 2; // Can be 0, 1, or 2
  synth.speak(voice);
}