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

function reverseString5(str) {
  let revString = "";
  for (let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

function reverseString6(str) {
  let revString = "";
  for (let char of str) {
    revString = char + revString;
  }
  return revString;
}

function reverseString7(str) {
  let revString = "";
  str.split("").forEach(char => (revString = char + revString));
  return revString;
}

console.log(reverseString2("cowman"));
