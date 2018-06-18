function reverseInt1(int) {
  const revString = int
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(revString) * Math.sign(int);
}
