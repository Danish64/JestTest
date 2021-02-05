const { fizzBuzz } = require("../exercise1");

describe("FizzBuzz Exercise", () => {
  it("should throw if input is not a number", () => {
    expect(() => {
      fizzBuzz("Not a number");
    }).toThrow();
    expect(() => {
      fizzBuzz(null);
    }).toThrow();

    expect(() => {
      fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      fizzBuzz("");
    }).toThrow();
    expect(() => {
      fizzBuzz({});
    }).toThrow();
  });

  it("should return FizzBuzz if input is divisible by 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toContain("FizzBuzz");
  });

  it("should return Fizz if input is divisible by 3", () => {
    const result = fizzBuzz(3);
    expect(result).toContain("Fizz");
  });

  it("should return Buzz if input is divisible by 5", () => {
    const result = fizzBuzz(5);
    expect(result).toContain("Buzz");
  });

  it("should return given input if not divisible by either 3 or 5", () => {
    const result = fizzBuzz(1);
    expect(result).toBe(1);
  });
});
