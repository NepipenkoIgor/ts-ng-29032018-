import { isInArray } from "./2-1-isArray";
import { summator } from "./2-2-Summator";
import { getUnique } from "./2-3-uniqueArr";

describe("isInArray", () => {
  it("positive case", () => {
    expect(isInArray([1, 2, 3], 1, 2, 3, 2, 3, 2))
      .toEqual(true);
  });

   it("negative case", () => {
    expect(isInArray([1, 2, 3], 1, 5, 3, 2, 3, 2))
      .toEqual(false);
  });


})


describe("summator", () => {
  it("positive case first number", () => {
    expect(summator(1,2,'3',1))
      .toEqual(7);
  });

  it("positive case first string ", () => {
    expect(summator('1',2,'3',1))
      .toEqual(7);
  });

});

describe("uniqueArr", () => {
  it("positive case", () => {
    expect(getUnique([1, 2, '3', 1, '4', '3', false, false]))
      .toEqual([1, 2, '3', '4', false]);
  });

});
