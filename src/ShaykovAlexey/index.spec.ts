import { isInArray, summator, smartRevers, getUnique2 } from "./index";

describe("isInArray", () => {
  it("one other param not in first", () => {
    expect(isInArray([1, 2, 3], 1, 2, 8, 2, 3, 2))
      .toBeFalsy();
  });
  it("one other param not in first", () => {
    expect(isInArray([1, "2", false], 1, "2", 1, "2", false, 1))
      .toBeTruthy();
  });
});

describe("getUnique", () => {
  it("getUnique", () => {
    expect(getUnique2(1, "15", "str", 1, "15", 15))
      .toEqual([1, "15", "str", 15]);
  });
});

describe("summator", () => {
  it("summ number | string", () => {
    expect(summator(1, "15", "aa123"))
      .toBe(16);
  });
});

describe("smartRevers", () => {
  it("revert string", () => {
    expect(smartRevers("s1tar3t 2 hellow"))
      .toBe("t1rat3s 2 wolleh");
  });
});
