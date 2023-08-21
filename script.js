export function capitalize(str) {
  let firstChar = str.slice(0, 1).toUpperCase();
  str = str.slice(1);
  let result = "";
  result = result.concat(firstChar, str);
  return result;
}

export function reverseString(str) {
  let splitStr = str.split("");
  let reverseArr = splitStr.reverse();
  let joinArr = reverseArr.join("");
  return joinArr;
}

export class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

export function caesarCipher(str, shift) {
  function shiftChar(char, shiftAmount) {
    const isLowerCase = char === char.toLowerCase();
    const base = isLowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);

    if (char.match(/[a-zA-Z]/)) {
      let shifted = ((char.charCodeAt(0) - base + shiftAmount) % 26) + base;
      return String.fromCharCode(shifted);
    }

    return char;
  }

  shift = shift % 26;
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

let arr = [1, 8, 3, 4, 2, 6];

export function analyzeArray(arr) {
  let counter = 0;
  let sum = 0;
  while (counter < arr.length) {
    sum += arr[counter];
    counter++;
  }
  let avg = Math.floor(sum / arr.length);

  let smallest = Math.min(...arr);

  let highest = Math.max(...arr);

  let object = {
    average: avg,
    min: smallest,
    max: highest,
    length: arr.length,
  };
  return object;
}
