import { getUnique } from "../homework";

describe("Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,\n" +
  "  и возвращает массив уникальных элементов. Аргумент не должен изменяться.\n" +
  "  Порядок элементов результирующего массива должен совпадать с порядком,\n" +
  "  в котором они встречаются в оригинальной структуре.", () => {
  it("test getUnique with integers", () => {
    expect(getUnique(1, 2, 3, 1, 2, 3, 1))
      .toEqual([ 1, 2, 3]);
  });

  it("test getUnique with integers", () => {
    expect(getUnique(1, 2, 3, 1, 2, 2, 4, 1))
      .toEqual([ 1, 2, 3, 4 ]);
  });

  it("test getUnique with integers and strings", () => {
    expect(getUnique(1, "2", 3, "1", 2, "3", 1))
      .toEqual([ 1, "2", 3, "1", 2, "3"]);
  });

  it("test getUnique with all types", () => {
    expect(getUnique(1, 2, 3, "1", 2, "3", 1, true, true, true))
      .toEqual([ 1, 2, 3, "1", "3", true]);
  });
});
