var running = false;
var floIsDran = true;
var thinkText = "...";
const interruptText = "(wurde abgewürgt)"

function start() {
	running = !running;
	if (running) {
		if (floIsDran) {
			addFlorentin();
		} else {
			addStefan();
		}
	
		const button = document.getElementById("button");
		button.innerText = 'PAUSE!'
	} else {
		const button = document.getElementById("button");
		button.innerText = 'kann weiter gehn'
		synth.cancel();
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

  if (running) {
      setTimeout(() => {
        if (running) {
          botText.innerText = `${product}`;
          florentinVoice(product)
          addStefan()
        } else {
          botText.innerText = interruptText;
        }
      }, 3000)
  } else {
    botText.innerText = interruptText;
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

  if (running) {
    setTimeout(() => {
      if (running) {
	  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${product}</span>`;
	  stefanVoice(product)
      addFlorentin()
      } else {
        userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${interruptText}</span>`;
      }
    }, 3000)
  } else {
    userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${interruptText}</span>`;
  }

}

function getFlorentin() {
	return florentin[Math.floor(Math.random() * florentin.length)];
}

function getStefan() {
	return stefan[Math.floor(Math.random() * stefan.length)];
}