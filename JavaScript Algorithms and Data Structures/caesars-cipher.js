function rot13(str) { // LBH QVQ VG!
  let encArr = [];

  for (let i = 0; i < str.length; i++) {
    encArr.push(str.charCodeAt(i));
  } for(let j = 0; j < encArr.length; j++) {
    if (encArr[j] <= 90 && encArr[j] >= 65) {
    if (encArr[j] - 13 >= 65) {
      encArr[j] = encArr[j] - 13;
    } else {
      encArr[j] = encArr[j] + 13;
    }};
   }
  let newStr = String.fromCharCode(...encArr).replace (/-/g, " ");
  return newStr; 
}
  

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
