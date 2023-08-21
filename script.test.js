import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./script.js";

describe("capitalize", () => {
  test("Only first character is capitalized", () => {
    let result = capitalize("hello");
    expect(result).toBe("Hello");
  });
});

describe("reverseString", () => {
  test("String was reversed", () => {
    let reverseStr = reverseString("hello");
    expect(reverseStr).toBe("olleh");
  });
});

describe("Calculator", () => {
  describe("Add method", () => {
    test("Should return the sum of two numbers", () => {
      let calculator = new Calculator();
      let sum = calculator.add(2, 3);
      expect(sum).toBe(5);
    });
  });

  describe("Subtract method", () => {
    test("Should return the difference of two numbers", () => {
      let calculator = new Calculator();
      let difference = calculator.subtract(5, 2);
      expect(difference).toBe(3);
    });
  });

  describe("Multiply method", () => {
    test("Should return the product of two numbers", () => {
      let calculator = new Calculator();
      let product = calculator.multiply(12, 3);
      expect(product).toBe(36);
    });
  });

  describe("Divide method", () => {
    test("Should return the quotient of two numbers", () => {
      let calculator = new Calculator();
      let quotient = calculator.divide(12, 2);
      expect(quotient).toBe(6);
    });
  });
});

describe("caesarCipher", () => {
  test("shifts characters by the given amount", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("wraps from z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("Z", 1)).toBe("A");
  });

  test("keeps the same case", () => {
    expect(caesarCipher("aZz", 1)).toBe("bAa");
  });

  test("does not shift punctuation", () => {
    expect(caesarCipher("What?!", 13)).toBe("Jung?!");
  });

  test("handles negative shifts", () => {
    expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
  });

  test("handles shifts greater than 26", () => {
    expect(caesarCipher("Hello, World!", 29)).toBe("Khoor, Zruog!");
  });
});

describe("analyzeArray", () => {
  let arr = [1, 8, 3, 4, 2, 6];
  let object = analyzeArray(arr);
  test("returns correct average", () => {
    expect(object.average).toBe(4);
  });

  test("returns correct minimum value", () => {
    expect(object.min).toBe(1);
  });

  test("returns correct maximum value", () => {
    expect(object.max).toBe(8);
  });

  test("returns correct length", () => {
    expect(object.length).toBe(6);
  });
});
