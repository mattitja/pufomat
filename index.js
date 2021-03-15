var running = false;
var floIsDran = true;
var firstStart = true;
var thinkText = "...";
var pauseInMilliseconds = "4000"
var voicespeed = 50;
const interruptText = "(wurde abgewürgt)"

const slider = document.getElementById("voicespeed");
slider.value = 50;

var introAudio = new Audio('intro1.mp3');

var speedcontainer = document.getElementById("speedcontainer");

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
		const button = document.getElementById("button");
		button.innerText = 'PAUSE (z.B. Geschwindigkeit verändern)'
		button.className = 'red-button'
		speedcontainer.style.display = "none";
	} else {
		const button = document.getElementById("button");
		button.innerText = 'weitermachen!'
		button.className = 'green-button'
		speedcontainer.style.display = "block";
		synth.cancel();
	}
}

function reload() {
    synth.cancel();
    location.reload();
}

function addIntro() {
  let introtext = "welcome to d.p.u. podcast, this is another great generated episode for you, i am an artificial intelligence yeah";

  const messagesContainer = document.getElementById("messages");

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

  introAudio.play();

  introAudio.onended  = function() {
      if (running) {
        addFlorentin();
      }
    }
}

function addFlorentin() {
  floIsDran = false;
	
  let product = getFlorentin();
  const messagesContainer = document.getElementById("messages");

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
  florentinVoice(product)

  voice.onend = function(event) {
    if (running) {
      addStefan();
    }
  }

}

function addStefan() {
	
  floIsDran = true;
  
  let product = getStefan();
	
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${thinkText}</span>`;
  messagesContainer.appendChild(userDiv);
  scroll(messagesContainer);

  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${product}</span>`;
  stefanVoice(product)

  voice.onend = function(event) {
      if (running) {
        addFlorentin();
      }
    }

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