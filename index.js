var running = false;
var floIsDran = true;

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
	}
	
}

function getFlorentin() {
	return florentin[Math.floor(Math.random() * florentin.length)];
}

function getStefan() {
	return stefan[Math.floor(Math.random() * stefan.length)];
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
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
  botText.innerText = `...`;
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  

  // Fake delay to seem "real"
  setTimeout(() => {
	botText.innerText = `${product}`;
	florentinVoice(product)
	if (running) {
		addStefan()
	}
  }, 3000
  )
  

}

function addStefan() {
	
  floIsDran = true;
  
  let product = getStefan();
	
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>...</span>`;
  messagesContainer.appendChild(userDiv);


  
  // Fake delay to seem "real"
  setTimeout(() => {
	  userDiv.innerHTML = `<img src="steff_klein.png" class="avatar"><span>${product}</span>`;
	stefanVoice(product)
	if (running) {
		addFlorentin()
	}
  }, 3000
  )
  

}