type sn = (string | number);

export function isInArray<T>(superset: T[], ...subset: T[]): boolean {
    return subset.every((value) => superset.includes(value));
}

function toNumber(arg: sn): number {
    return isNaN(Number(arg)) ? 0 : Number(arg);
}

export function summator(...args: sn[]): number {
    let sum = 0;
    args.forEach((value) => sum += toNumber(value));
    return sum;
}

export function getUnique<T>(...args: T[]): T[] {
    return Array.from(new Set<T>(args));
}
