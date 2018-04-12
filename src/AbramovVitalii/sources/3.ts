function getUnique(...source: snb[]): snb[] {
    // tslint:disable-next-line:prefer-const
    let uniques: snb[] = [];

    source.forEach((current: snb) => {
        if (uniques.indexOf(current) > -1) {
            return;
        }
        
        uniques.push(current);
    });

    return uniques;
}

export { getUnique };