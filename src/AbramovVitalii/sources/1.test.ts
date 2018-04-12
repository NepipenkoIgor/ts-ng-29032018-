import { isInArray } from './1';

describe('isInArray', () => {
    it('test 1', () => {
        expect(isInArray([1, '2', true], 1, '2', true))
            .toBe(true);
    });

    it('test 2', () => {
        expect(isInArray([1], 2))
            .toBe(false);
    });

    it('test 3', () => {
        expect(isInArray([1], '1'))
            .toBe(false);
    });
});
