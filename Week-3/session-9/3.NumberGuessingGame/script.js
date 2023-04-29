"use strict";
function playGuessingGame(numberToguess, totalGuess = 10) {
  let count = 0;
  // as soon as the playGuessingGame is Called we ask to guess a number 
  let number=  prompt("Enter the number between one and hundered");
  // we run the till the totalguess is greater than zero
  while (totalGuess > 0) {
    
    // if on prompt cancel was clicked we will return zero - null comes to from the prompt() when cancle is clicked 
    if (number == null) {
      return 0;
    }
    if (!isNaN(number)) {
      counter();
      totalGuess--;
      if (number == numberToguess) {
        return count;
      } else if (number > numberToguess && totalGuess>0) {
        number = prompt(`${number} is too Large. Guess a smaller number.`);
      } else if (number < numberToguess && totalGuess>0){
        number = prompt(`${number} is too small. Guess a larger number`);
      }
    }
    else{
        number=prompt("Please enter a  number");
    }
  }

  function counter() {
    count = count + 1;
  }
}

