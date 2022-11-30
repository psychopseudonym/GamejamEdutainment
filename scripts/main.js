function gameTimeChange(newTime){
  if(newTime > 0 && newTime < 999){
    localStorage.setItem('time',newTime);
  }  
}

function questionTimeChange(newTime) {
  if(newTime > 0 && newTime < 999){
    localStorage.setItem('qTime',newTime);
  }
}

function setDefault(){
  gameTimeChange(120);
  questionTimeChange(3);
}

function updateValues(){
  let gameTime = document.forms["settings"]["timer-adjust"].value;
  let questionTime = document.forms["settings"]["rotation"].value;
  gameTimeChange(gameTime);
  questionTimeChange(questionTime);
  console.log("Game value:" + gameTime);
  console.log("Question time:" + questionTime);
}

function main() {
  gameTimeChange(100);
  
  console.log("settings page");
}
// main();

