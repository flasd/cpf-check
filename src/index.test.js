import { CPF_REGEX, INVALID_CODE, LENGTH_CODE, VALID_CODE } from './constants';
import CPF, { strip, format, validate, generate } from './index';

describe('CPF module', () => {
    test('strip', () => {
        expect(strip('000.000.000-00')).toBe('00000000000');
        expect(() => strip(2)).toThrow(/instead got number/);
    });

    describe('validate', () => {
        test('when input is not a string', () => {
            expect(() => validate(2)).toThrow(/string/);
        });

        test('when inputs have wrong length', () => {
            const { valid, error, code } = validate('3871157813');

            expect(valid).toBe(false);
            expect(error).toBe(true);
            expect(code).toBe(LENGTH_CODE);
        });

        test('when length is corrent but input contain not-number chars', () => {
            const { valid, error, code } = validate('ABCDEFGHIJK');

            expect(valid).toBe(false);
            expect(error).toBe(true);
            expect(code).toBe(INVALID_CODE);
        });

        test('when its a false positive', () => {
            const { valid, error, code } = validate('11111111111');

            expect(valid).toBe(false);
            expect(error).toBe(true);
            expect(code).toBe(INVALID_CODE);
        });

        test('When the first verifier is off', () => {
            const { valid, error, code } = validate('38711578150');

            expect(valid).toBe(false);
            expect(error).toBe(true);
            expect(code).toBe(INVALID_CODE);
        });

        test('When the second verifier is off', () => {
            const { valid, error, code } = validate('38711578132');

            expect(valid).toBe(false);
            expect(error).toBe(true);
            expect(code).toBe(INVALID_CODE);
        });

        test('when input is valid', () => {
            const { valid, error, code } = validate('38711578130');

            expect(valid).toBe(true);
            expect(error).toBe(false);
            expect(code).toBe(VALID_CODE);
        });

        describe('', () => {
            const isFalsePositive = require('./is-false-positive');
            const savedDefault = isFalsePositive.default;

            beforeAll(() => {
                isFalsePositive.default = jest.fn().mockImplementation(() => {
                    throw new Error('jest');
                });
            });

            test('when something under cpf-check breaks', () => {
                expect(() => validate('38711578130')).toThrow(/jest/);
            });

            afterAll(() => {
                isFalsePositive.default = savedDefault;
            });
        });
    });

    test('format', () => {
        expect(format('38711578130')).toBe('387.115.781-30');
        expect(() => format('abcdefghijk')).toThrow(/invalid/);
        expect(() => format(2)).toThrow(/number/);
    });

    test('generate', () => {
        expect(generate()).toHaveLength(14);
        expect(generate()).toMatch(CPF_REGEX);

        expect(generate(false)).toHaveLength(11);
        expect(generate(true)).toHaveLength(14);

        expect(generate(false)).toMatch(CPF_REGEX);
        expect(generate(true)).toMatch(CPF_REGEX);

        expect(() => generate('not-a-boolean')).toThrow();
    });

    test('main export', () => {
        expect(CPF).toHaveProperty('strip', strip);
        expect(CPF).toHaveProperty('format', format);
        expect(CPF).toHaveProperty('validate', validate);
        expect(CPF).toHaveProperty('generate', generate);
    });
});
