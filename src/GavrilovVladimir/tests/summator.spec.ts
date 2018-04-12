import {summator} from '../homework';

describe('summator', () => {
   it('test', () => {
    expect(summator(2, 5, 8, 3)).toEqual(18);
   });
});

describe('summator', () => {
    it('test', () => {
     expect(summator(2, '5', 8, '3', 0, '0')).toEqual(18);
    });
 });
