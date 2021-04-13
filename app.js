const rand = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  
let userGuess = window.prompt("Guess a number between 1 and 100.");
  
while (userGuess !== rand) {
    
    if (userGuess < rand) {
    alert("Too low. Try again!"); userGuess = window.prompt("Guess a number between 1 and 100.");
    } 
    else if (userGuess > rand) {
    alert("Too high. Guess again!"); userGuess = window.prompt("Guess a number between 1 and 100.");
    } 
    else {
    alert("Congratulations! You guessed the correct number!"); break;
    }

  }  
 } checkGuess();