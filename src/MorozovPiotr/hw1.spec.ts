import {isInArray} from "./hw1";

describe("isInArray", () => {
  it("verify that [1, 2, 3, 4, 5] contains values: 1, 5, 2, 4, 3", () => {
    expect(isInArray([1, 2, 3, 4, 5], 1, 5, 2, 4, 3)).toBeTruthy();
  });
});

describe("isInArray", () => {
    it("verify that [1, 2, 3, 4, 5] contains duplicate values: 1, 2, 2, 1, 1, 1, 1, 3, 3, 3", () => {
        expect(isInArray([1, 2, 3, 4, 5], 1, 2, 2, 1, 1, 1, 1, 3, 3, 3)).toBeTruthy();
    });
});

describe("isInArray", () => {
    it("verify that [1, 2, 3, 4, 5] contains single value: 1", () => {
        expect(isInArray([1, 2, 3, 4, 5], 1)).toBeTruthy();
    });
});

describe("isInArray", () => {
    it("verify that [1] contains values: 1, 1, 1", () => {
        expect(isInArray([1], 1, 1, 1)).toBeTruthy();
    });
});

describe("isInArray", () => {
    it("verify that [1, 2, 3, 4, 5] does not contain all of the values: 1, 3, 6, 5, 4, 2", () => {
        expect(isInArray([1, 2, 3, 4, 5], 1, 3, 6, 5, 4, 2)).toBeFalsy();
    });
});
