function vowel_count(str1)
{
  let vowel_list = 'aeiou';
  let vcount = 0;
  
  for(let x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

console.log(vowel_count(prompt("Enter a word")));