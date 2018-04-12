import { getUnique } from './4';

describe('getUnique', () => {
    it('test 1', () => {
        expect(getUnique(1, 2, 3))
            .toEqual([1, 2, 3]);
    });

    it('test 2', () => {
        expect(getUnique(1, '2', true))
            .toEqual([1, '2', true]);
    });

    it('test 3', () => {
        expect(getUnique(1, 1, '1', 2))
            .toEqual([1, '1', 2]);
    });
});
