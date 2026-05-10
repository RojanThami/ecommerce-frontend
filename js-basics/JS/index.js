
let running = true;
const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random()*(max - min) + 1 );

let attempts = 0;
while (running) {
  attempts++;
  let userAnswer = window.prompt(`Guess a number between ${min} and ${max}`);
  userAnswer = Number(userAnswer);
  if(userAnswer<randomNumber) {
    alert("Too low! Try again.");
  }else if(userAnswer>randomNumber) {
    alert("Too high! Try again.");
  }else {
    alert("Congratulations! You guessed the number!");
     running = false;
  }
 
}
