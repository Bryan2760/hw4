function count(str)
{
  let list = 'aeiou';
  let vcount = 0;
  
  for(let x = 0; x < str.length ; x++)
  {
    if (list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

console.log(count(prompt("Enter a word")));