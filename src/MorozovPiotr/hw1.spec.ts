import {getUnique, isInArray, summator} from "./hw1";

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

describe("summator", () => {
    it("verify that sum of (1, 2, 3, 4, 5) is 15", () => {
        expect(summator(1, 2, 3, 4, 5)).toEqual(15);
    });
});

describe("summator", () => {
    it("verify that sum of (1, '2', 3, '4', 5) is 15", () => {
        expect(summator(1, "2", 3, "4", 5)).toEqual(15);
    });
});

describe("summator", () => {
    it("verify that sum of ('1', 2, '3', 'four', 5) is 11", () => {
        expect(summator("1", 2, "3", "four", 5)).toEqual(11);
    });
});

describe("summator", () => {
    it("verify that sum of (1) is 1", () => {
        expect(summator(1)).toEqual(1);
    });
});

describe("summator", () => {
    it("verify that sum of () is 0", () => {
        expect(summator()).toEqual(0);
    });
});

describe("getUnique", () => {
    it("verify that unique for (1, 2, 2, 3, 3, 4, 3, 3, 3, 3, 1, 1, 1, 5) is [1, 2, 3, 4, 5]", () => {
        expect(getUnique(1, 2, 2, 3, 3, 4, 3, 3, 3, 3, 1, 1, 1, 5)).toEqual([1, 2, 3, 4, 5]);
    });
});

describe("getUnique", () => {
    it("verify that unique for (1, 1, 1) is [1]", () => {
        expect(getUnique(1, 1, 1)).toEqual([1]);
    });
});

describe("getUnique", () => {
    it("verify that unique for () is []", () => {
        expect(getUnique()).toEqual([]);
    });
});
