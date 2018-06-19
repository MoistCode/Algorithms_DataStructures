function capitalizeLetters1(str) {
  const strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}

function capitalizeLetters2(str) {
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}

console.log(capitalizeLetters2("cowman is nigh"));
