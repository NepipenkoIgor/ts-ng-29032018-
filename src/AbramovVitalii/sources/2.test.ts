import { summator } from './2';

describe('summator', () => {
    it('test 1', () => {
        expect(summator(1, 2, 3))
            .toBe(6);
    });

    it('test 2', () => {
        expect(summator(1, '2', 3))
            .toBe(6);
    });

    it('test 3', () => {
        expect(summator('1', '2', 'fail'))
            .toBe(3);
    });
});
