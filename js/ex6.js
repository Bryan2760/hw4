var correct = Math.floor(Math.random() * 10) + 1;
var guess = prompt("guess");

i = 1
while (true){
  if (correct == guess){
    console.log(`Correct, It took you ${i} attempts to guess the correct number`)
    break;
  }
  else if (correct < guess){
    guess = prompt("Too high, guess again");
    i++;
  }
  else if (correct > guess){
    guess = prompt("Too low, guess again");
    i++;
  }
}
