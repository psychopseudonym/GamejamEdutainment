// Global variables
let previousQuestion = random(8); // Start off with a random question
let smallboxAnswer = "0"; // smallbox inside answer grid containing the right answer
let inStartScreen = true;

/**
 * Questions Object
 * Correct answers located at answer[0]
 */
const questionsAndAnswers = [ {'question.id': 0,
                              'question': 'What is the name of our planet?', 
                              'answer': ['Earth', 'Mars', 'Jupiter', 'Venus', 'Saturn', 'Uranus', 'Neptune', 'Mercury', 'Pluto'] 
                            },{'question.id': 1,
                              'question': 'Which is the tallest mountain in the world?', 
                              'answer': ['Mount Everest', 'Mount Kilimanjaro', 'Lhotse', 'Denali', 'Mont Blanc', 'Nanga Parbat', 'Makalu', 'Manaslu', 'Mount Fuji'] 
                            }, {'question.id': 2,
                              'question': 'Which letter is a vowel', 
                              'answer': ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'], 
                            }, {'question.id': 3,
                              'question': 'Which month of the year has the least number of days?', 
                              'answer': ['February','January','March','April','May','June','July','August','September','October','November','December']
                            }, {'question.id': 4,
                              'question': 'How many continents are there in the world?', 
                              'answer': ['7','4','1','3','2','5','6','8','9']
                            }, {'question.id': 5,
                              'question': 'Which animal is the king of the jungle?', 
                              'answer': ['Lion','Ant','Pig','Donkey','Snake','Bat','Duck','Dog','Cat']
                            }, {'question.id': 6,
                              'question': 'How many hours do we have in a day?', 
                              'answer': [24,12,3,6,5,1,2,8,7]
                            }, {'question.id': 7,
                              'question': 'Which direction does the sun set?', 
                              'answer': ['West','East','North','South','Northwest','Northeast','Southwest','Southeast','Center']
                            }, {'question.id': 8,
                              'question': 'Which direction does the sun rise?', 
                              'answer': ['West','East','North','South','Northwest','Northeast','Southwest','Southeast','Center']
                            }, {'question.id': 9,
                              'question': 'Who was the first president of the United States of America', 
                              'answer': ['George Washington','Joe Biden','Bill Clinton','Barack Obama','Harry S. Truman','Richard Nixon','Donald Trump','John F. Kennedy','Ronald Reagan']
                            }, {'question.id': 10,
                              'question': 'Which vegetables are root vegetables?', 
                              'answer': ['Carrots','Beans','Cabbages','Tomatoes','Peas','Spinach','Corn','Broccoli','Celery']
                            }, {'question.id': 11,
                              'question': 'What is the product of 3 x 3?', 
                              'answer': [9,7,33,6,1,48,2,18,5,0,12,15] 
                            }, {'question.id': 12,
                              'question': 'What city is the Statute of Liberty in?', 
                              'answer': ['New York City','Rhode Island','Miami','Los Angeles','Seattle','Austin','Denver','Las Vegas','Chicago']
                            },]

// Generate random number with bounds 0 to num
function random(num){
  return Math.floor(Math.random() * num);
}

// Return array with specified [start,end) values, (end-start) numbers
function createRandomArray(start, end){
  let arr = [];
  for(let i = start; i < end; ++i){
    arr.push(i);
  }
  let newLength = arr.length;
  for(let i = newLength-1; i > 0; --i){ // Fisher-Yates shuffle
    let j = random(i);
    let temp = arr[j]; 
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// Remove answers from grid 
function resetGrid(){
  for(let i = 0; i <= 8; ++i){
    document.getElementById("smallbox" + i).textContent = "";
  }
}

/**
 * Fill grid with answers for a specific question. Will randomly place all answers throughout the grid
 * @param {number} questionID 
 */
function visualizeGrid(questionID) {
  let currBox = 0;                                                    // Current selected smallbox 
  let numAnswers = questionsAndAnswers[questionID]["answer"].length;  // Number of total answer choices
  let selectedAnswers = createRandomArray(1,numAnswers);              // Random selection of answer choices (except right answer)
  let selectedGrids = createRandomArray(0,9);                         // Random selection of smallboxes
  
  

  resetGrid();
  //Separately add in correct answer 
  document.getElementById("smallbox" + selectedGrids[0]).textContent = `${questionsAndAnswers[questionID]["answer"][0]}`;
  smallboxAnswer = selectedGrids[0];
  console.log("Grid answer:" + smallboxAnswer);
  // Add in wrong answers
  numAnswers = numAnswers > 9 ? 9: numAnswers;                        // # answer choices <= # smallboxes
  let numTimes = 0;
  for(let i = 1; i < numAnswers; ++i){
    currBox = selectedGrids[i];
    document.getElementById("smallbox" + currBox).textContent = `${questionsAndAnswers[questionID]["answer"][selectedAnswers[i-1]]}`;
    numTimes++;
  }
} 

/**
 * Change #question element to its specified text
 * @param {number} questionID 
 */
function visualizeQuestion(questionID){
  document.getElementById("question").textContent = `${questionsAndAnswers[questionID]["question"]}`;
}

/**
 * Show a random question and its answer in the game. 2 of the same questions in a row are disabled
 */
function newQuestion(){
  let numQuestions = questionsAndAnswers.length;
  let questionID = 0;
  do{
    questionID = random(numQuestions);          // Randomly select a question 
  }while(questionID == previousQuestion);
  visualizeQuestion(questionID);
  visualizeGrid(questionID);
  return questionID;
}


function hideIntroScreen(){
  document.getElementById('intro-screen').style.display = "none";
}
function hideGameElements(){
  document.getElementById('game-elements').style.display = "none";
}
function newGame(){
  resetGrid();
  document.getElementById('game-elements').style.display = "none";
  let startScreen = document.getElementById('question');
  let menuContainer = document.createElement('div');
  menuContainer.id = "menu";

  let newGameButton = document.createElement('div');
  newGameButton.className = "startingScreen";
  newGameButton.textContent = "New Game";
  menuContainer.appendChild(newGameButton);
  
  // startScreen.appendChild(menuContainer);
  startScreen.innerHTML = `${menuContainer}`

}
function inputQuestion(){
  
}
/**
 * Start the game, visualize the questions
 */
function initiateGame(){
  console.log("Initiate game");
  hideIntroScreen();
  inStartScreen = false; 
  document.getElementById('game-elements').style.display = "block";
  newQuestion();
  return true;
}

function logBox(num){
  console.log("Box:" + num + " Answer:" +smallboxAnswer);
  if(num == smallboxAnswer){
    console.log("Correct answer");
    newQuestion(); 
  }
}
function main() {
  hideGameElements(); // Initially hide game elements
  if(inStartScreen){
    document.getElementById('new-game').onclick = function(){initiateGame()};
  }
  document.getElementById('smallbox0').onclick = function(){logBox(0)};  
  document.getElementById('smallbox1').onclick = function(){logBox(1)};  
  document.getElementById('smallbox2').onclick = function(){logBox(2)};  
  document.getElementById('smallbox3').onclick = function(){logBox(3)};  
  document.getElementById('smallbox4').onclick = function(){logBox(4)};  
  document.getElementById('smallbox5').onclick = function(){logBox(5)}; 
  document.getElementById('smallbox6').onclick = function(){logBox(6)}; 
  document.getElementById('smallbox7').onclick = function(){logBox(7)}; 
  document.getElementById('smallbox8').onclick = function(){logBox(8)}; 
}
main();
