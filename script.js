// background
const body = document.querySelector("body");
body.className = "background";

// title
const h1 = document.createElement("h1");
h1.textContent = "Whack A Fact!";
h1.style.color = "orange";
h1.style.textAlign = "center";
h1.style.fontSize = "144px";
body.appendChild(h1);

// question box
const h2 = document.createElement("h2");
h2.textContent = 'What is the name of our planet?';
h2.style.color = "yellow";
h2.style.textAlign = "center";
h2.style.fontSize = "72px";
body.appendChild(h2);

// game outerbox properties
const gameContainer = document.createElement("div");
gameContainer.style.height = "900px";
gameContainer.style.width = "50%";
gameContainer.style.border = "solid orange 12px";
gameContainer.style.margin = "auto";
gameContainer.style.display = "flex";
gameContainer.style.flexWrap = "wrap";
gameContainer.style.flexDirection = "row";
gameContainer.style.justifyContent = "space-around"
gameContainer.style.alignContent = "space-around";
body.appendChild(gameContainer);

// inner boxes

function createBox(parent) {
    const smallBox = document.createElement("div");
    smallBox.id = "smallbox";
    smallBox.style.height = "245px";
    smallBox.style.width = "245px";
    smallBox.style.border = "solid hotpink 9px";
    // smallBox.style.
    parent.appendChild(smallBox);
  }

// 3x3  grid

function gameGrid(){
  for (let i = 0; i < 9; i++){
    createBox(gameContainer);
  }
}

gameGrid();


// Menu

// create screen for starting a game, will have new game option and credits buttons

// let menuPrompt =
