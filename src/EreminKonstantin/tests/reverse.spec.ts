import { reverse } from "../homework";

describe("Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы\n" +
  "   цифры и специальные символы должны остаться на месте", () => {
  it("test isInArray true", () => {
    expect(reverse("qwerty"))
      .toEqual("ytrewq");
  });

  it("test isInArray with all types true", () => {
    expect(reverse("s1tar3t 2 hellow"))
      .toEqual("t1rat3s 2 wolleh");
  });

});
