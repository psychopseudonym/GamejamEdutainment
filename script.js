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

// random question function
function randomQuestion(num){
  return Math.floor(Math.random(num) * num);
}

// questions
const questionsAndAnswers = [ {'question.id': 0,
                              'question': 'What is the name of our planet?', 
                              'answer': ['Earth', 'Mars', 'Jupiter', 'Venus', 'Saturn', 'Uranus', 'Neptune', 'Mercury', 'Pluto'] 
                            },{'question.id': 1,
                              'question': 'Which is the tallest mountain in the world?', 
                              'answer': ['Mount Everest', 'Mount Kilimanjaro', 'Lhotse', 'Denali', 'Mont Blanc', 'Nanga Parbat', 'Makalu', 'Manaslu', 'Mount Fuji'] 
                            }, {'question.id': 2,
                              'question': 'Which letter is a vowel', 
                              'answer': ['A', 'E', 'I', 'O', 'U'], 
                            }, {'question.id': 3,
                              'question': 'Which month of the year has the least number of days?', 
                              'answer': 'February', 
                            }, {'question.id': 4,
                              'question': 'How many continents are there in the world?', 
                              'answer': '7', 
                            }, {'question.id': 5,
                              'question': 'Which animal is the king of the jungle?', 
                              'answer': 'Lion', 
                            }, {'question.id': 6,
                              'question': 'How many hours do we have in a day?', 
                              'answer': 24, 
                            }, {'question.id': 7,
                              'question': 'Which direction does the sun set?', 
                              'answer': 'West', 
                            }, {'question.id': 8,
                              'question': 'Which direction does the sun rise?', 
                              'answer': 'East', 
                            }, {'question.id': 9,
                              'question': 'Who was the first president of the United States of America', 
                              'answer': 'George Washington', 
                            }, {'question.id': 10,
                              'question': 'Which vegetable are root vegetables?', 
                              'answer': 'Carrots', 
                            }, {'question.id': 11,
                              'question': 'What is the product of 3 x 3?', 
                              'answer': 9, 
                            }, {'question.id': 12,
                              'question': 'What city is the Statute of Liberty in?', 
                              'answer': 'New York', 
                            },]

// answers





// prompt                      
const h2 = document.createElement("h2");
// this will later prompt a random question to answer
// h2.textContent = `${questionsAndAnswers[randomQuestion(13)]["question"]}`;
h2.textContent = `${questionsAndAnswers[0]["question"]}`;
h2.style.color = "yellow";
h2.style.textAlign = "center";
h2.style.fontSize = "72px";
h2.style.margin = "3%";
body.appendChild(h2);
            

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

function createGrid(parent) {
  let smallBox = '';
  let ran = randomQuestion(13);
  for (i = 0; i <= 8; i++){
    smallBox = document.createElement("div");
    smallBox.id = `smallbox${i}`;
    smallBox.style.height = "200px";
    smallBox.style.width = "200px";
    smallBox.style.border = "solid hotpink 9px";
    // let ran = randomQuestion(13);
    // console.log(ran)
    smallBox.textContent = `${questionsAndAnswers[ran]["answer"][i]}`;
    smallBox.style.fontSize = "36px";
    smallBox.style.color = "white";
    smallBox.style.backgroundColor = "#5F9A80";
    smallBox.style.textAlign = "center";
    parent.appendChild(smallBox);
  }
} 

createGrid(gameContainer);

// 3x3  grid

// function gameGrid(){
//   for (let i = 0; i < 9; i++){
//     createBox(gameContainer);
//   }
// }

// gameGrid();




// Menu

// create screen for starting a game, will have new game option and credits buttons

// let menuPrompt =
