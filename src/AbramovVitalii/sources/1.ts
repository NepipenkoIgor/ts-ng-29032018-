// exercise 1
function isInArray(testArray: snb[], ...testies: snb[]): boolean {
    for (const i of testies) {
        if (testArray.indexOf(i) > -1) {
            continue;
        }
        return false;
    }

    return true;
}

export { isInArray };
