// Global variables
let smallboxAnswer = "0"; // smallbox inside answer grid containing the right answer
let inStartScreen = true;
let displayAnswerInterval;
let currentScore = 0;
let timerFinished = false;

// function for question.id 2, answer[0]
function randomVowel() {
  const vowels = ["A", "E", "I", "O", "U"];
  return vowels[random(5)];
}

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
    question: "What is the tallest mountain in the world?",
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
  // {
  //   "question.id": 2,
  //   question: "Which letter is a vowel",
  //   // will need to code a function that allows a, e, i, o, u from this array to be accepted as an answer
  //   answer: [
  //     randomVowel(),
  //     //
  //     "B",
  //     "C",
  //     "D",
  //     // "E",
  //     "F",
  //     "G",
  //     "H",
  //     // "I",
  //     "J",
  //     "K",
  //     "L",
  //     "M",
  //     "N",
  //     // "O",
  //     "P",
  //     "Q",
  //     "R",
  //     "S",
  //     "T",
  //     // "U",
  //     "V",
  //     "W",
  //     "X",
  //     "Y",
  //     "Z",
  //   ],
  // },
  // {
  //   "question.id": 3,
  //   question: "Which month of the year has the least number of days?",
  //   answer: [
  //     "February",
  //     "January",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ],
  // },
  // {
  //   "question.id": 4,
  //   question: "How many continents are there in the world?",
  //   answer: ["7", "4", "1", "3", "2", "5", "6", "8", "9"],
  // },
  // {
  //   "question.id": 5,
  //   question: "Which animal is the king of the jungle?",
  //   answer: [
  //     "Lion",
  //     "Ant",
  //     "Pig",
  //     "Donkey",
  //     "Snake",
  //     "Bat",
  //     "Duck",
  //     "Dog",
  //     "Cat",
  //   ],
  // },
  // {
  //   "question.id": 6,
  //   question: "How many hours do we have in a day?",
  //   answer: [24, 12, 3, 6, 5, 1, 2, 8, 7],
  // },
  // {
  //   "question.id": 7,
  //   question: "Which direction does the sun set?",
  //   answer: [
  //     "West",
  //     "East",
  //     "North",
  //     "South",
  //     "Northwest",
  //     "Northeast",
  //     "Southwest",
  //     "Southeast",
  //     "Center",
  //   ],
  // },
  // {
  //   "question.id": 8,
  //   question: "Which direction does the sun rise?",
  //   answer: [
  //     "East",
  //     "West",
  //     "North",
  //     "South",
  //     "Northwest",
  //     "Northeast",
  //     "Southwest",
  //     "Southeast",
  //     "Center",
  //   ],
  // },
  // {
  //   "question.id": 9,
  //   question: "Who was the first president of the United States of America",
  //   answer: [
  //     "George Washington",
  //     "Joe Biden",
  //     "Bill Clinton",
  //     "Barack Obama",
  //     "Harry S. Truman",
  //     "Richard Nixon",
  //     "Donald Trump",
  //     "John F. Kennedy",
  //     "Ronald Reagan",
  //   ],
  // },
  // {
  //   "question.id": 10,
  //   question: "Which vegetables are root vegetables?",
  //   answer: [
  //     "Carrots",
  //     "Beans",
  //     "Cabbages",
  //     "Tomatoes",
  //     "Peas",
  //     "Spinach",
  //     "Corn",
  //     "Broccoli",
  //     "Celery",
  //   ],
  // },
  // {
  //   "question.id": 11,
  //   question: "What is the product of 3 x 3?",
  //   answer: [9, 7, 33, 6, 1, 48, 2, 18, 5, 0, 12, 15],
  // },
  // {
  //   "question.id": 12,
  //   question: "What city is the Statute of Liberty in?",
  //   answer: [
  //     "New York City",
  //     "Rhode Island",
  //     "Miami",
  //     "Los Angeles",
  //     "Seattle",
  //     "Austin",
  //     "Denver",
  //     "Las Vegas",
  //     "Chicago",
  //   ],
  // },
  // {
  //   "question.id": 13,
  //   question: "How many arms does an octopus have?",
  //   answer: [8, 2, 4, 6, 1, 48, 7, 17, 5, 0, 12, 99],
  // },
  // {
  //   "question.id": 14,
  //   question: "What do bees make?",
  //   answer: [
  //     "Honey",
  //     "Toys",
  //     "Paper",
  //     "Glass",
  //     "Nuts",
  //     "Salt",
  //     "Sugar",
  //     "Waffles",
  //     "Milk",
  //   ],
  // },
  // {
  //   "question.id": 15,
  //   question:
  //     "What is it called when birds fly to warmer climates for the winter?",
  //   answer: [
  //     "Migration",
  //     "Black Friday",
  //     "Heating Up",
  //     "Exodus",
  //     "Relocation",
  //     "Moving",
  //     "Traveling",
  //     "Evaluation",
  //     "Transporting",
  //   ],
  // },
  // {
  //   "question.id": 16,
  //   question: "What is the bottom number of a fraction called?",
  //   answer: [
  //     "Denominator",
  //     "The Terminator",
  //     "Second Half",
  //     "The Bottom",
  //     "Lower",
  //     "Base",
  //     "Scope",
  //     "Axis",
  //     "Floor",
  //   ],
  // },
  // {
  //   "question.id": 17,
  //   question: "Who invented the telephone?",
  //   answer: [
  //     "Alexander Graham Bell",
  //     "Stephen Hawkins",
  //     "Elon Musk",
  //     "Hilary Clinton",
  //     "Rosa Parks",
  //     "Bruce Lee",
  //     "Michael Jordan",
  //     "Bill Gates",
  //     "Amelia Earhart",
  //   ],
  // },
  // {
  //   "question.id": 18,
  //   question: "Who discovered electricity?",
  //   answer: [
  //     "Benjamin Franklin",
  //     "Theodore Roosevelt",
  //     "Tom Brady",
  //     "Albert Einstein",
  //     "Steve Jobs",
  //     "Grace Hopper",
  //     "Jane Goodall",
  //     "Sandra Day O'Connor",
  //     "Nikola Tesla",
  //   ],
  // },
  // {
  //   "question.id": 19,
  //   question: "What is the largest bird in the world??",
  //   answer: [
  //     "Ostrich",
  //     "Eagle",
  //     "Duck",
  //     "Turkey",
  //     "Chicken",
  //     "Mockingbird",
  //     "Swan",
  //     "Vulture",
  //     "Albatross",
  //   ],
  // },
];

// Global variables for question tracking
let questions = createRandomArray(0, questionsAndAnswers.length); // Random questions
let currQuestion = 0; // Current selected question

// MUSIC

bgMusic = new Audio("/sounds/bensound-littleidea.mp3");
bgMusic.volume = 0.2;
correctAnswer = new Audio("/sounds/click-select.wav");
correctAnswer.volume = 0.3;
incorrectAnswer = new Audio("/sounds/click-error.wav");
incorrectAnswer.volume = 0.3;

if (typeof bgMusic.loop == "boolean") {
  bgMusic.loop = true;
} else {
  bgMusic.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
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
  document.getElementById("question").textContent = `${questionsAndAnswers[questionID]["question"]}`;
}

/**
 *  2 minute timer that takes seconds as input and coverts to minutes
 * display is applied to textContent of node
 * @param {number} duration
 * @param {number} display
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
      timerFinished = true;
    }
  }, 1000);
}

/**
 * Show a random question and its answer in the game. 2 of the same questions in a row are disabled
 */
function newQuestion(questionID) {
  visualizeQuestion(questionID);
  revisualizeGrid = true;
  visualizeGrid(questionID);
  // visualizeGrid(questionID);
  displayAnswerInterval = setInterval(function () {
    visualizeGrid(questionID);
  }, 2000); // randomly display answers in different boxes every 2 seconds
}

function hideGameElements() {
  document.getElementById("game-elements").style.display = "none";
}

function playAgain() {
  let boxes = document.getElementsByClassName("boxes")
  let a = document.createElement('a');
  a.setAttribute('href', "game.html");
  a.innerHTML = "Play Again?";
  a.classList = "menu-buttons";
  a.id = "new-game";
  document.getElementById("game-elements").remove(boxes);
  let body = document.querySelector("body");
  body.appendChild(a);
  
}

/**
 * Start the game, visualize the questions
 */
function initiateGame() {
  console.log("Initiate game");
  inStartScreen = false;
  var audio1 = new Audio("./audio/МСвыд.mp3");
  audio1.play();
  bgMusic.play();
  newQuestion(questions[0]); // Initiate with first randomly selected question
  return true;
}

function checkUserInput(num) {
  console.log("Box:" + num + " Answer:" + smallboxAnswer); // Testing
  if (num == smallboxAnswer) {
    clearInterval(displayAnswerInterval);
    console.log("Correct answer"); // Testing
    correctAnswer.play();
    currentScore += 10;
    console.log(questions)
    if (currQuestion >= questions.length - 1) {
      console.log("Finished!");
      playAgain();
    } else {
      ++currQuestion; // Move onto next question
      newQuestion(questions[currQuestion]);
    }
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
  initiateGame(); // Create new question, play background audio
  let timer = document.getElementById("timer");
  roundTimer(120, timer);
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
