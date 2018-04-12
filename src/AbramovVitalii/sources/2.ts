function summator(...source: sn[]): number {
    let result = 0;

    source.forEach((current: sn) => {
        if (!canSumm(current)) {
            return;
        }

        let converted = 0;
        if (typeof current === 'string') {
            converted = parseFloat(current);
        }
        if (typeof current === 'number') {
            converted = current;
        }
        
        result += converted;
    });

    return result;
}

function canSumm(testNumber: sn): boolean {
    let converted = 0;

    if (typeof testNumber === 'string') {
        converted = parseFloat(testNumber);
    }
    
    return !isNaN(converted) && isFinite(converted);
}

export { summator };