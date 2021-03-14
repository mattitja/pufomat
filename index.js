var running = false;
var floIsDran = true;
var firstStart = true;
var thinkText = "...";
var pauseInMilliseconds = "4000"
const interruptText = "(wurde abgewürgt)"

function start() {
	running = !running;
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
		button.innerText = 'PAUSE!'
		button.className = 'red-button'
	} else {
		const button = document.getElementById("button");
		button.innerText = 'weitermachen!'
		button.className = 'green-button'
		synth.cancel();
	}
}

function reload() {
    location.reload();
}

function addIntro() {
  let introtext = "(la, laaa, lalala laaa! lah lah lah lala! lah lah lah laa!!)";

  const messagesContainer = document.getElementById("messages");

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response intro";
  botText.innerText = introtext;
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  introVoice(introtext)
  voice.onend = function(event) {
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
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

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
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${product}</span>`;
  stefanVoice(product)

  voice.onend = function(event) {
      if (running) {
        addFlorentin();
      }
    }

}

function getFlorentin() {
	return florentin[Math.floor(Math.random() * florentin.length)];
}

function getStefan() {
	return stefan[Math.floor(Math.random() * stefan.length)];
}