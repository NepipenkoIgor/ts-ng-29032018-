export function isInArray(first: snb[], ...second: snb[]): boolean {
  let result: boolean = true;
  for (const elSecond of second) {
    if ( !first.some((x) => x === elSecond) ) {
      result = false;
      break;
    }
  }
  return result;
}

export function summator(...arr: Array<number | string>): number {
  let total: number = 0;
  for (const element of arr) {
    if (!isNaN(Number(element))) {
      total += +element;
    }
  }
  return total;
}

export function getUnique(...arr: snb[]): snb[] {
  const newArray: snb[] = [];
  for (const element of arr) {
    if ( newArray.every((x) => x !== element) ) {
      newArray.push(element);
    }
  }
  return newArray;
}

export function reverse(initial: string): string {
  let newString = "";
  initial.split(" ").forEach((word) => {
    const letterArray = word.split("");
    const tempArray = new Array(letterArray.length + 1);
    letterArray.forEach((chart, index) => {
      if (/^[a-zA-Z]$/.test(chart)) {
        tempArray[(letterArray.length - 1) - index] = chart;
      } else {
        tempArray[index] = chart;
      }
    });
    newString += tempArray.join("");
    newString += " ";
  });
  return newString.trim();
}
