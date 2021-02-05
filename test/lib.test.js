const lib = require("../lib");

describe("absolute", () => {
  it("will return positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("will return positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("will return zero if input is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return greet message with person name", () => {
    const result = lib.greet("Danish");
    // expect(result).toMatch(/Danish/);
    expect(result).toContain("Danish");
    // expect(result).stringContaining("Danish");
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["AUD", "EUR", "USD"]));
  });
});

describe("getProduct", () => {
  it("should return product with given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual(
      expect.objectContaining({
        id: 1,
        price: expect.any(Number),
      })
    );
  });
});

describe("registerUser", () => {
  it("should throw if user name is falsy", () => {
    // Falsy -> Null, NaN, undefined, false, 0,''
    //Parameterized Testing alternative

    const args = [null, NaN, undefined, 0, "", false];
    args.forEach((arg) => {
      expect(() => {
        lib.registerUser(arg);
      }).toThrow();
    });
  });

  it("should return user if valid username is given", () => {
    const result = lib.registerUser("username");

    expect(result).toEqual(
      expect.objectContaining({
        username: "username",
      })
    );

    expect(result.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("should apply discount of 10% if user have more than 10 points", () => {});
});
