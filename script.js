// Global variables
let previousQuestion = random(8); // Start off with a random question
let smallboxAnswer = "0"; // smallbox inside answer grid containing the right answer
let inStartScreen = true;
let displayAnswerInterval;
let questionID = 0;
let currentScore = 0;

let timer = document.getElementById("timer");
roundTimer(120, timer);

function randomVowel() {
  const vowels = ["A", "E", "I", "O", "U"]
  return vowels[random(5)]
};


/**
 * Questions Object
 * Correct answers located at answer[0]
 */
const questionsAndAnswers = [
  {
    "question.id": 0,
    question: "What is the name of our planet?",
    answer: [
      "Earth",
      "Mars",
      "Jupiter",
      "Venus",
      "Saturn",
      "Uranus",
      "Neptune",
      "Mercury",
      "Pluto",
    ],
  },
  {
    "question.id": 1,
    question: "Which is the tallest mountain in the world?",
    answer: [
      "Mount Everest",
      "Mount Kilimanjaro",
      "Lhotse",
      "Denali",
      "Mont Blanc",
      "Nanga Parbat",
      "Makalu",
      "Manaslu",
      "Mount Fuji",
    ],
  },
  {
    "question.id": 2,
    question: "Which letter is a vowel",
    answer: [
      randomVowel(),
      // 
      "B",
      "C",
      "D",
      // "E",
      "F",
      "G",
      "H",
      // "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      // "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      // "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    "question.id": 3,
    question: "Which month of the year has the least number of days?",
    answer: [
      "February",
      "January",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  {
    "question.id": 4,
    question: "How many continents are there in the world?",
    answer: ["7", "4", "1", "3", "2", "5", "6", "8", "9"],
  },
  {
    "question.id": 5,
    question: "Which animal is the king of the jungle?",
    answer: [
      "Lion",
      "Ant",
      "Pig",
      "Donkey",
      "Snake",
      "Bat",
      "Duck",
      "Dog",
      "Cat",
    ],
  },
  {
    "question.id": 6,
    question: "How many hours do we have in a day?",
    answer: [24, 12, 3, 6, 5, 1, 2, 8, 7],
  },
  {
    "question.id": 7,
    question: "Which direction does the sun set?",
    answer: [
      "West",
      "East",
      "North",
      "South",
      "Northwest",
      "Northeast",
      "Southwest",
      "Southeast",
      "Center",
    ],
  },
  {
    "question.id": 8,
    question: "Which direction does the sun rise?",
    answer: [
      "East",
      "West",
      "North",
      "South",
      "Northwest",
      "Northeast",
      "Southwest",
      "Southeast",
      "Center",
    ],
  },
  {
    "question.id": 9,
    question: "Who was the first president of the United States of America",
    answer: [
      "George Washington",
      "Joe Biden",
      "Bill Clinton",
      "Barack Obama",
      "Harry S. Truman",
      "Richard Nixon",
      "Donald Trump",
      "John F. Kennedy",
      "Ronald Reagan",
    ],
  },
  {
    "question.id": 10,
    question: "Which vegetables are root vegetables?",
    answer: [
      "Carrots",
      "Beans",
      "Cabbages",
      "Tomatoes",
      "Peas",
      "Spinach",
      "Corn",
      "Broccoli",
      "Celery",
    ],
  },
  {
    "question.id": 11,
    question: "What is the product of 3 x 3?",
    answer: [9, 7, 33, 6, 1, 48, 2, 18, 5, 0, 12, 15],
  },
  {
    "question.id": 12,
    question: "What city is the Statute of Liberty in?",
    answer: [
      "New York City",
      "Rhode Island",
      "Miami",
      "Los Angeles",
      "Seattle",
      "Austin",
      "Denver",
      "Las Vegas",
      "Chicago",
    ],
  },
];

// MUSIC


bgMusic = new Audio('/sounds/bensound-littleidea.mp3');
correctAnswer = new Audio('/sounds/click-select.wav');
incorrectAnswer = new Audio('/sounds/click-error.wav');


if (typeof bgMusic.loop == 'boolean') {
  bgMusic.loop = true;
} else {
  bgMusic.addEventListener('ended', function(){
    this.currentTime = 0;
    this.play()
  }, false);
}



// Generate random number with bounds 0 to num
function random(num) {
  return Math.floor(Math.random() * num);
}

// Return array with specified [start,end) values, (end-start) numbers
function createRandomArray(start, end) {
  let arr = [];
  for (let i = start; i < end; ++i) {
    arr.push(i);
  }
  let newLength = arr.length;
  for (let i = newLength - 1; i > 0; --i) {
    // Fisher-Yates shuffle
    let j = random(i);
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// Remove answers from grid
function resetGrid() {
  for (let i = 0; i <= 8; ++i) {
    document.getElementById("smallbox" + i).textContent = "";
  }
}

/**
 * Fill grid with answers for a specific question. Will randomly place all answers throughout the grid
 * @param {number} questionID
 */
function visualizeGrid(questionID) {
  let currBox = 0; // Current selected smallbox
  let numAnswers = questionsAndAnswers[questionID]["answer"].length; // Number of total answer choices
  let selectedAnswers = createRandomArray(1, numAnswers); // Random selection of answer choices (except right answer)
  let selectedGrids = createRandomArray(0, 9); // Random selection of smallboxes

  resetGrid();

  //Separately add in correct answer
  document.getElementById(
    "smallbox" + selectedGrids[0]
  ).textContent = `${questionsAndAnswers[questionID]["answer"][0]}`;
  smallboxAnswer = selectedGrids[0];
  console.log("Grid answer:" + smallboxAnswer);
  // Add in wrong answers
  numAnswers = numAnswers > 9 ? 9 : numAnswers; // # answer choices <= # smallboxes
  let numTimes = 0;
  for (let i = 1; i < numAnswers; ++i) {
    currBox = selectedGrids[i];
    document.getElementById("smallbox" + currBox).textContent = `${
      questionsAndAnswers[questionID]["answer"][selectedAnswers[i - 1]]
    }`;
    numTimes++;
  }
}

/**
 * Change #question element to its specified text
 * @param {number} questionID
 */
function visualizeQuestion(questionID) {
  document.getElementById(
    "question"
  ).textContent = `${questionsAndAnswers[questionID]["question"]}`;
}

/**
 *  2 minute timer
 */
function roundTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent =
      `Timer: ` +
      minutes +
      ":" +
      seconds +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      `Score: ` +
      currentScore;

    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}

/**
 * Show a random question and its answer in the game. 2 of the same questions in a row are disabled
 */
function newQuestion() {
  let numQuestions = questionsAndAnswers.length;
  questionID = 0;
  do {
    questionID = random(numQuestions); // Randomly select a question
  } while (questionID == previousQuestion);
  visualizeQuestion(questionID);
  revisualizeGrid = true;
  visualizeGrid(questionID);
  // visualizeGrid(questionID);
  displayAnswerInterval = setInterval(function () {
    visualizeGrid(questionID);
  }, 2000); // randomly display answers in different boxes every 2 seconds
}

function hideIntroScreen() {
  document.getElementById("intro-screen").style.display = "none";
}
function hideGameElements() {
  document.getElementById("game-elements").style.display = "none";
}

/**
 * Start the game, visualize the questions
 */
function initiateGame() {
  console.log("Initiate game");
  hideIntroScreen();
  inStartScreen = false;
  bgMusic.play();
  document.getElementById("game-elements").style.display = "block";
  document.getElementById("game-elements")
  newQuestion();
  return true;
}

function checkUserInput(num) {
  console.log("Box:" + num + " Answer:" + smallboxAnswer); // Testing
  if (num == smallboxAnswer) {
    clearInterval(displayAnswerInterval);
    console.log("Correct answer"); // Testing
    correctAnswer.play();
    currentScore += 10;
    console.log(currentScore);
    newQuestion();
  } else {
    incorrectAnswer.play();
    if (currentScore == 0) {
      currentScore = 0;
    } else {
      currentScore -= 5;
    }
  }
}
function main() {
  hideGameElements(); // Initially hide game elements
  if (inStartScreen) {
    document.getElementById("new-game").onclick = function () {
      initiateGame();
    };
  }
  document.getElementById("smallbox0").onclick = function () {
    checkUserInput(0);
  };
  document.getElementById("smallbox1").onclick = function () {
    checkUserInput(1);
  };
  document.getElementById("smallbox2").onclick = function () {
    checkUserInput(2);
  };
  document.getElementById("smallbox3").onclick = function () {
    checkUserInput(3);
  };
  document.getElementById("smallbox4").onclick = function () {
    checkUserInput(4);
  };
  document.getElementById("smallbox5").onclick = function () {
    checkUserInput(5);
  };
  document.getElementById("smallbox6").onclick = function () {
    checkUserInput(6);
  };
  document.getElementById("smallbox7").onclick = function () {
    checkUserInput(7);
  };
  document.getElementById("smallbox8").onclick = function () {
    checkUserInput(8);
  };
}
main();
