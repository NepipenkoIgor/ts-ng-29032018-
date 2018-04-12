import { isInArray } from "../homework";

describe("Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.\n" +
  " Возвращает true, если все аргументы, кроме первого входят в первый.", () => {
  it("test isInArray true", () => {
    expect(isInArray([1, 2, 3], 1, 2, 3, 2, 3, 2))
      .toEqual(true);
  });

  it("test isInArray false", () => {
    expect(isInArray([1, 2, 3], 1, 2, 2, 4, 1))
      .toEqual(false);
  });

  it("test isInArray with all types true", () => {
    expect(isInArray([1, "2", 3, true], 1, true, "2", 3, "2", 3, "2"))
      .toEqual(true);
  });

  it("test isInArray with all types true", () => {
    expect(isInArray([1, 2, "2", 3, true], 1, true, 2, 3, "2", 3, "2"))
      .toEqual(true);
  });

  it("test isInArray with all types false", () => {
    expect(isInArray([1, "2", 3, true], true, 1, "2", 2, 1))
      .toEqual(false);
  });
});
