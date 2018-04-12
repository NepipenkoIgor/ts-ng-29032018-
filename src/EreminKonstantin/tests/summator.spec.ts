import { summator } from "../homework";

describe("Написать функцию summator(), которая сумирует переданые ей аргументы.\n" +
  " Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено", () => {
  it("Сумма простого ряда", () => {
    expect(summator(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1))
      .toEqual(56);
  });

  it("Сумма ряда цифр вперемешку с буквами", () => {
    expect(summator(1, "2", 3, "4", 5, "6", 7, "8", 9, "10", "0", 1))
      .toEqual(56);
  });

  it("Сумма ряда цифр с предложением", () => {
    expect(summator(1, "2", 3, "4test", 5, "6", 7, "8", 9, "10", "0", 1))
      .toEqual(52);
  });

  it("Сумма ряда цифр вещественных вперемешку с буквами", () => {
    expect(summator(1.6, "2", 3.7, "4", 5.1, "6", 7, "8", 9, "10", "0", 1))
      .toEqual(57.4);
  });
});