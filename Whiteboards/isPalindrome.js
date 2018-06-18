function isPalindrome1(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");
  return revString === str;
}

function isPalindrome2(str) {
  let isPali = true;
  let caseStr = str.toLowerCase();
  let arr = caseStr.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      isPali = false;
      break;
    }
  }
  return isPali;
}
