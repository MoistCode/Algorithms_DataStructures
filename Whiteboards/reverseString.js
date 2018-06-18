function reverseString1(str) {
  let arr = [...str];
  let newArr = arr.map((_, i, arr) => {
    return arr[arr.length - 1 - i];
  });
  return newArr.join("");
}

function reverseString2(str) {}
