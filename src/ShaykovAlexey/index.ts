function isInArray(firstParam: snb[], ...restOfParams: snb[]): boolean {
  return restOfParams.every((value) => {
    return (firstParam.indexOf(value) >= 0);
  });
}

function summator(...args: sn[]): number {
  return args.map(Number).reduce((a, b) => a + (isNaN(b) ? 0 : b), 0);
}


function getUnique(...args: snb[]): snb[] {
  return [...new Set(args)];
}

function getUnique2(...args: snb[]): snb[] {
  return Array.from(new Set(args));
}


function smartRevers(str: string): string {
  let result = "";
  str.split(" ").forEach((word) => {
    const chartsArray = word.split("");
    const chartsArrayLength = chartsArray.length;
    const tmp = new Array(chartsArrayLength);
    chartsArray.forEach((chart, index) => {
      if (/^[a-zA-Z]+$/.test(chart)) {
        tmp[(chartsArrayLength - 1) - index] = chart;
      } else {
        tmp[index] = chart;
      }
    });
    result += tmp.join("");
    result += " ";
  });
  return result.trim();
}

export {isInArray, summator, smartRevers, getUnique, getUnique2};
