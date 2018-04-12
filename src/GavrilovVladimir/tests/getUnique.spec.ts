import { getUnique } from '../homework';

describe( getUnique, () => {
    it('getUnique', () => {
        expect(getUnique([3, 7, 3, 9, 13, 2, 13])).toEqual([3, 7, 9, 13, 2]);
    });
});

describe( getUnique, () => {
    it('getUnique', () => {
        expect(getUnique(['abc', 'def', 'abe', 'def', 'abc'])).toEqual(['abc', 'def', 'abe']);
    });
});

const obj1 = {key: 10, value: 140};
const obj2 = {key: 20, value: 240};
const obj3 = {key: 30, value: 340};

const obj1SameFields = {key: 10, value: 140};

describe( getUnique, () => {
    it('getUnique', () => {
        expect(getUnique([obj1, obj3, obj1, obj1, obj2])).toEqual([obj1, obj3, obj2]);
    });
});

describe( getUnique, () => {
    it('getUnique', () => {
        expect(getUnique([obj1, obj2, obj1, obj1SameFields, obj2])).toEqual([obj1, obj2, obj1SameFields]);
    });
});
