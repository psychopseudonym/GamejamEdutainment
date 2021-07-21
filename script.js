// Global variables
let previousQuestion = random(8); 

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
                              'answer': [9,7,33,6,1,48,2,18,5] 
                            }, {'question.id': 12,
                              'question': 'What city is the Statute of Liberty in?', 
                              'answer': ['New York City','Rhode Island','Miami','Los Angeles','Seattle','Austin','Denver','Las Vegas','Chicago']
                            },]

// Generate random number with bounds 0 to num
function random(num){
  return Math.floor(Math.random() * num);
}

// Return array with specified length
function createRandomArray(length){
  let arr = [];
  for(let i = 0; i < length; ++i){
    arr.push(i);
  }
  for(let i = length-1; i > 0; --i){ // Fisher-Yates shuffle
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
  console.log("Entering");
  let currBox = 0;                                                    // Current selected smallbox 
  let selected = createRandomArray(9);                                // Random array with smallbox numbers
  let numAnswers = questionsAndAnswers[questionID]["answer"].length;  // Number of answers 

  resetGrid();
  for(let i = 0; i < numAnswers; ++i){                                // Cycle through    
    currBox = selected[i];
    document.getElementById("smallbox" + currBox).textContent = `${questionsAndAnswers[questionID]["answer"][i]}`;
    // console.log(`${questionsAndAnswers[questionID]["question"][i]}`);
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
function implementQuestion(){
  let numQuestions = questionsAndAnswers.length;
  let questionID = 0;
  do{
    questionID = random(numQuestions);          // Randomly select a question 
  }while(questionID == previousQuestion);
  visualizeQuestion(questionID);
  visualizeGrid(questionID);
  return questionID;
}

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

function main() {
  // TODO: Use this method on some event
  implementQuestion();
}
main();






