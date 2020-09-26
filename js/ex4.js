const value = [];
i = 1
while(true){
  let x = prompt("Enter a word");
  if(x==="stop"){
    break;
  }
  value.push(x);
  i++;
}
if (i === 1){
  console.log("No words to display");
}
else{
  console.log(`You entered the following words: ${value}`);
}

