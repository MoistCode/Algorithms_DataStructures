function isPalindrome1(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");
  return revString === str;
}
