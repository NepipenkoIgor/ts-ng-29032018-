export function isInArray<T>(superset: T[], ...subset: T[]): boolean {
    return subset.every((value) => superset.includes(value));
}
