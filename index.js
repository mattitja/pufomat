var running = false;
var floIsDran = true;
var firstStart = true;
var thinkText = "...";
var pauseInMilliseconds = "4000"
var voicespeed = 50;
var vorlesen = true;
const interruptText = "(wurde abgewürgt)"
var counter = 0;
var counterMax = 100;

const startButton = document.getElementById("button");
const slider = document.getElementById("voicespeed");
const messagesContainer = document.getElementById("messages");
const scriptButton = document.getElementById("scriptButton");
scriptButton.style.display = "none";

const skipIntroButton = document.getElementById("skipIntroButton");
skipIntroButton.style.display = "none";

slider.value = 50;

var introAudio = new Audio('intro1.mp3');

var speedcontainer = document.getElementById("speedcontainer");
var vorleseButton = document.getElementById("vorleseButton");
var vorleseButtonContainer = document.getElementById("vorleseButtonContainer");


function changeSpeed(value) {
  if (!running) {
      synth.cancel();
      voicespeed = value;
      florentinVoice("Geschwindigkeits-Test zu langsam oder zu schnell?")
  }
}


function start() {
	running = !running;
	synth.cancel();
	introAudio.pause();

	if (firstStart) {
	    firstStart = false;
	    addIntro();
	} else {
	    if (running) {
            if (floIsDran) {
                addFlorentin();
            } else {
                addStefan();
            }
        }
	}
	if (running) {
	    if (vorlesen) {
            startButton.innerText = 'PAUSE (z.B. Geschwindigkeit verändern)'
            startButton.className = 'red-button'
            speedcontainer.style.display = "none";
            vorleseButtonContainer.style.display = "none";
            scriptButton.style.display = "none";
		} else {
		    startButton.style.display = "none";
		    speedcontainer.style.display = "none";
		    vorleseButtonContainer.style.display = "none";
		    scriptButton.style.display = "block";
		}
	} else {
		startButton.innerText = 'weiter vorlesen!'
		startButton.className = 'green-button'
		speedcontainer.style.display = "block";
		scriptButton.style.display = "block";
		skipIntroButton.style.display = "none";
		synth.cancel();
	}
}

function toggleVorlesen() {
    vorlesen = !vorlesen;
    if (vorlesen) {
        vorleseButton.innerText = 'Vorlesefunktion ist an'
        vorleseButton.className = 'blue-button'
        speedcontainer.style.display = "block";
        startButton.innerText = 'Neue DPU-Folge generieren und vorlesen'
    } else {
        vorleseButton.innerText = 'Vorlesefunktion ist aus'
        vorleseButton.className = 'orange-button'
        speedcontainer.style.display = "none";
        startButton.innerText = 'Neue DPU-Folge nur generieren'
    }
}

function reload() {
    synth.cancel();
    location.reload();
}

function skipIntro() {
    introAudio.pause();
    skipIntroButton.style.display = "none";
    if (running) {
        addFlorentin();
    }
}

function addIntro() {
  let introtext = "welcome to d.p.u. podcast, this is another great generated episode for you, i am an artificial intelligence yeah";

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response intro";
  botText.innerText = "(Intro): " + introtext + "";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  scroll(messagesContainer);

  if (vorlesen) {
      introAudio.play();
      skipIntroButton.style.display = "block";
      introAudio.onended  = function() {
          skipIntroButton.style.display = "none";
          if (running) {
            addFlorentin();
          }
      }
  } else {
     addFlorentin();
  }
}

function addFlorentin() {
  counter++;
  if (counter >= counterMax) {
    addEnde();
    return;
  }
  floIsDran = false;
	
  let product = getFlorentin();

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "flo_klein.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = thinkText;
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
 scroll(messagesContainer);

  botText.innerText = `${product}`;
  if (vorlesen) {
    florentinVoice(product)
    voice.onend = function(event) {
      if (running) {
        addStefan();
      }
    }
  } else {
    addStefan();
  }

}

function addStefan() {
  counter++;
  if (counter >= counterMax) {
    addEnde();
    return;
  }
	
  floIsDran = true;
  
  let product = getStefan();

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${thinkText}</span>`;
  messagesContainer.appendChild(userDiv);
  scroll(messagesContainer);

  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${product}</span>`;

    if (vorlesen) {
      stefanVoice(product)
      voice.onend = function(event) {
        if (running) {
          addFlorentin();
        }
      }
    } else {
      addFlorentin();
    }

}

function addEnde() {
    let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response intro";
  botText.innerText = "It's a worstbird production. Arrrggh!";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  scroll(messagesContainer);

}

function scroll(element) {
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

function getFlorentin() {
	return florentin[Math.floor(Math.random() * florentin.length)];
}

function getStefan() {
	return stefan[Math.floor(Math.random() * stefan.length)];
}

function download() {
    document.open();

    document.write('<!DOCTYPE html><html><head><title>Puf-O-Mat 1.1</title><link rel="icon" href="bot-mini.png"/><link rel="stylesheet" href="style.css"/></head>');
    document.write('<body>');
    document.write('<button class="orange-button" onclick="window.location.reload();">Zurück zum Puf-O-Maten (löscht diese Folge)</button>');
    document.write('<div id="messages" class="messages">');
    document.write(messagesContainer.innerHTML);
    document.write('</div>');
    document.write('<button class="orange-button" onclick="window.location.reload();">Zurück zum Puf-O-Maten (löscht diese Folge)</button>');
    document.write('</body></html>');
}