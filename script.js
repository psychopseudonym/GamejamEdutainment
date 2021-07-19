// background
const body = document.querySelector("body");
body.className = "background";

// title
const h1 = document.createElement("h1");
h1.textContent = "Whack A Fact!";
h1.style.color = 'orange';
h1.style.textAlign = 'center';
h1.style.fontSize = "144px";
body.appendChild(h1);


// game box
const gameContainer = document.createElement("div");
gameContainer.style.height = "768px";
gameContainer.style.width = "50%";
gameContainer.style.border = "solid orange 12px";
gameContainer.style.margin = "auto";
body.appendChild(gameContainer);


// Menu

// create screen for starting a game, will have new game option and credits buttons

// let menuPrompt =
