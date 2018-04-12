import {isInArray} from '../homework';

describe('IsInArray', () => {
    it('inArray', () => {
        expect(isInArray([2, 5, 8, 3], 3, 2, 8, 2, 8)).toBeTruthy();
    });
});

describe('IsInArray', () => {
    it('notInArray', () => {
        expect(isInArray([5, 8, 123], 5, 120, 8)).toBeFalsy();
    });
});

describe('IsInArray', () => {
    it('emptyArray', () => {
        expect(isInArray(new Array(), 5, 120, 8)).toBeFalsy();
    });
});

describe('IsInArray', () => {
    it('emptyList', () => {
        expect(isInArray([4, 8])).toBeTruthy();
    });
});

describe('IsInArray', () => {
    it('strings', () => {
        expect(isInArray(['abc', 'def'], 'abc', 'def')).toBeTruthy();
    });
});

const obj1 = {key: 10, value: 140};
const obj2 = {key: 20, value: 240};
const obj3 = {key: 30, value: 340};

const obj1SameFields = {key: 10, value: 140};

describe('IsInArray', () => {
    it('objects', () => {
        expect(isInArray([obj1, obj2], obj2, obj1)).toBeTruthy();
    });
});

describe('IsInArray', () => {
    it('diff objects', () => {
        expect(isInArray([obj1, obj2], obj2, obj3)).toBeFalsy();
    });
});

describe('IsInArray', () => {
    it('objects new', () => {
        expect(isInArray([obj1, obj2], obj2, obj1SameFields)).toBeFalsy();
    });
});
