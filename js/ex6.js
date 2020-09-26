var num = Math.floor(Math.random() * 10) + 1;
var guess = prompt("guess");

i = 1
while (true){
  if (num == guess){
    console.log(`Correct, It took you ${i} attempts to guess the correct number`)
    break;
  }
  else if (num < guess){
    guess = prompt("Too high, guess again");
    i++;
  }
  else if (num > guess){
    guess = prompt("Too low, guess again");
    i++;
  }
}
