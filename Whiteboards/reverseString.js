function reverseString1(str) {
  let arr = [...str];
  let newArr = arr.map((_, i, arr) => arr[arr.length - 1 - i]);
  return newArr.join("");
}

function reverseString2(str) {
  return str
    .split("")
    .reduce((reversedString, character) => character + reversedString, "");
}

function reverseString3(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverseString4(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}

console.log(reverseString2("cowman"));
