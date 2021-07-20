// background
const body = document.querySelector("body");
body.className = "background";

// title
const h1 = document.createElement("h1");
h1.textContent = "Whack A Fact!";
h1.style.color = "orange";
h1.style.textAlign = "center";
h1.style.fontSize = "144px";
h1.style.margin = "2%";
body.appendChild(h1);

// question box
const h2 = document.createElement("h2");
// this will later prompt a random question to answer
h2.textContent = 'What is the name of our planet?';
h2.style.color = "yellow";
h2.style.textAlign = "center";
h2.style.fontSize = "72px";
h2.style.margin = "3%";
body.appendChild(h2);

// questions

// 1. What city is the Statute of Liberty in?
// New York, 8 other wrong answers

// 2. What is 3x3
// 9

// 3. Which vegetable are root vegetables?
// Carrots

// 4. Who was the first president of the United States of America?
// George Washington,

// 5. Which direction does the sun rise?
// East

// 6. Which direction does the sun set?
// West

// 7. How many hours do we have in a day?
// 24

// 8. Which animal is the king of the jungle?
// Lion

// 9. How many continents are there in the world?
// 7

// 10. Which month of the year has the least number of days?
// February

// 11. Which is the tallest mountain in the world?
// Mount Everest

// 12. Which letter is a vowel?
// A, E, I, O, U

// 13. What is the name of our planet?
// Earth




// game outerbox properties
const gameContainer = document.createElement("div");
// gameContainer.style.height = "50%";
gameContainer.style.width = "700px";
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
    smallBox.style.height = "200px";
    smallBox.style.width = "200px";
    smallBox.style.border = "solid hotpink 9px";
    smallBox.textContent = "Earth";
    smallBox.style.fontSize = "36px";
    smallBox.style.color = "white"
    smallBox.style.textAlign = "center";
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


// Questions

// question function will have a question and answer portion, if answer is correct, another question will be asked. if answer is incorrect, a sound will be played hinting user to choose another response.

function gameQuestions(){

}


// Menu

// create screen for starting a game, will have new game option and credits buttons

// let menuPrompt =
