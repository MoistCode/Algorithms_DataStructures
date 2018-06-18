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

console.log(reverseString2("cowman"));
