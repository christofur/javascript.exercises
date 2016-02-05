/*

 Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself
 a little helper, that returns the noun with the matching article:

 each noun containing less than 2 vowels has the article "das"
 each noun containing 2/3 vowels has the article "die"
 each noun containing more than 3 vowels has the article "der"
 Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

 (This Kata is a joke, there is no such grammar rule!)

 */

const vowels = ['a','e','i','o','u','ä','ö','ü'];

((word) => {
  "use strict";


  if(!word || word.length < 2)
  {
    return 'das';
  }

  let vowelCount = 0;
  let split = word.split('');
  for(let i in split)
  {
      if(vowels.indexOf(split[i]) > -1){
        vowelCount++;
      }
  }

  if(vowelCount < 2){
    return 'das';
  }
  if(vowelCount < 4){
    return 'die';
  }
  return 'der'
})('Ei');

