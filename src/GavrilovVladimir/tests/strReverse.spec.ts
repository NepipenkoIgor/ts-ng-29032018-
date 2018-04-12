import { strReverse } from '../homework';

describe( 'strReverse', () => {
    it('test1', () => {
        expect(strReverse('abc3de56fg*%hij')).toEqual('jih3gf56ed*%cba');
    });
});

describe( 'strReverse', () => {
    it('test2', () => {
        expect(strReverse('abc34de')).toEqual('edc34ba');
    });
});

describe( 'strReverse', () => {
    it('alphas only', () => {
        expect(strReverse('abcde')).toEqual('edcba');
    });
});

describe( 'strReverse', () => {
    it('no alphas', () => {
        expect(strReverse('24$&67*')).toEqual('24$&67*');
    });
});
