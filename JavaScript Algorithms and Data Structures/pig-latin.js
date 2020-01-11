function translatePigLatin(str) {
  let vowel = /[aeiouy]/i;
  if (str[0].match(vowel)) {
    return str + "way";
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(vowel)) {
        let whatever = str.substr(0, i); 
        return str.slice(i) + whatever + "ay";
      }
    }
  } return str + "ay";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("animorph"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("glove"));