
/// task 1.

function isInArray<T>(arr: T[], ...rest: T[]): boolean {
  let result = true;

  for (const el of rest) {
      if (arr.indexOf(el) === -1) {
          result = false;
          break;
      }
  }

  return result;
}

/// task 2.

function summator(...rest: ns[]): number {
  return rest.reduce(
      (sum: number, el: ns) => sum += (typeof el === 'string' ? parseInt(el, 10) : el),
      0);
}

/// task 3.

function getUnique<T>(arr: T[]): T[] {
  const result: Set<T> = new Set<T>();

  for (const el of arr) {
      result.add(el);
  }
  return Array.from(result);
}

/// task 4.

function strReverse(arg: string): string {
  const origin: string[] = arg.split('');

  const originAlphas: string[] = origin.reduce(
      (alphas: string[], el: string) => { if (isAlpha(el)) { alphas.push(el); } return alphas; },
      []);

  return origin.reduce(
      (result: string[], el: string) => {
          const current: string = (isAlpha(el) ? originAlphas.pop() as string : el);
          result.push(current);
          return result;
      },
      []).join('');
}

function isAlpha(arg: string): boolean {
  return /[a-zA-Z]/.test(arg);
}

///

export { isInArray, summator, getUnique, strReverse };
