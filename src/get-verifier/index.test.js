import getVerifier from './index';

describe('getVerifier', () => {
    test('when length if wrong', () => {
        expect(getVerifier([1, 2, 3])).toBe(-1);
    });

    test('when verifier is wrongly set up', () => {
        expect(getVerifier([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toBe(-1);
        expect(getVerifier([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(-1);
    });

    test('when the input is valid', () => {
        expect(getVerifier([3, 3, 0, 4, 4, 2, 5, 8, 9], 1)).toBe(6);
        expect(getVerifier([3, 3, 0, 4, 4, 2, 5, 8, 9, 6], 2)).toBe(0);
    });
});