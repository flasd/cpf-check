import { CPF_REGEX, INVALID_CODE, LENGTH_CODE, VALID_CODE } from './index';

describe('constants', () => {
    test('CPF_REGEX', () => {
        expect(Object.prototype.toString.call(CPF_REGEX)).toBe('[object RegExp]');
        expect(CPF_REGEX.test('000.000.000-00')).toBe(true);
        expect(CPF_REGEX.test('000.000.000-0A')).toBe(false);
    });

    test('INVALID_CODE', () => {
        expect(Object.prototype.toString.call(INVALID_CODE)).toBe('[object String]');
        expect(INVALID_CODE).toBe('INVALID');
    });

    test('LENGTH_CODE', () => {
        expect(Object.prototype.toString.call(LENGTH_CODE)).toBe('[object String]');
        expect(LENGTH_CODE).toBe('LENGTH');
    });

    test('VALID_CODE', () => {
        expect(Object.prototype.toString.call(VALID_CODE)).toBe('[object String]');
        expect(VALID_CODE).toBe('VALID');
    });
});
