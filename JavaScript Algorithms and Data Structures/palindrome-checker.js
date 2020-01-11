function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "").replace(/\W/g, "").replace("_", "");
  
  var revStr = "";
  for (let i = 0; i < str.length; i++) {
    let splitStr = str.split("");
    let revSplitStr = splitStr.reverse();
    revStr = revSplitStr.join("");
  }
  
  if (str === revStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");

