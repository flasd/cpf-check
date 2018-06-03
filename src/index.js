import assert from './assert';
import { CPF_REGEX, INVALID_CODE, LENGTH_CODE, VALID_CODE } from './constants';
import getVerifier from './get-verifier';
import isFalsePositive from './is-false-positive';

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} error Wether there were any erros during validation.
 * @property {boolean} valid Wether the provided CPF is valid.
 * @property {string} code Error or success code.
 */


/**
 * Strip '-', '.', and anything that is not a digit from the provided input.
 * @public
 * @param      {string}  raw The text input.
 * @return     {string}  Striped down input.
 */
export function strip(raw) {
    assert(
        Object.prototype.toString.call(raw) === '[object String]',
        `Expected String but instead got ${typeof raw}`,
        INVALID_CODE,
    );

    return raw.replace(/[^\d]/g, '').trim();
}

/**
 * Validates CPF's
 * @public
 * @param {any} rawString Value to validate.
 * @returns {ValidationResult} The result of a given validation.
 */
export function validate(rawString) {
    assert(
        Object.prototype.toString.call(rawString) === '[object String]',
        `Expected CPF to be a string insead got ${typeof rawString}`,
    );


    try {
        assert(
            rawString.length === 11,
            `Expected CPF to have length of 11 instead got ${rawString.length}`,
            LENGTH_CODE,
        );

        const numbers = rawString
            .replace(CPF_REGEX, '$1$3$5$7')
            .split('')
            .map(string => parseInt(string, 10));

        numbers.forEach((value) => {
            assert(
                !Number.isNaN(value),
                `Expected CPF to have only digits but instead got ${value}`,
                INVALID_CODE,
            );
        });

        assert(
            !isFalsePositive(numbers),
            'Provided CPF is a false positive.',
            INVALID_CODE,
        );

        const userVerifiers = numbers.slice(9);

        assert(
            userVerifiers[0] === getVerifier(numbers.slice(0, 9), 1),
            'Provided CPF is invalid.',
            INVALID_CODE,
        );

        assert(
            userVerifiers[1] === getVerifier(numbers.slice(0, 10), 2),
            'Provided CPF is invalid.',
            INVALID_CODE,
        );

        return {
            error: false,
            valid: true,
            code: VALID_CODE,
        };
    } catch (error) {
        if (error.isCpfCheck) {
            return {
                error: true,
                valid: false,
                code: error.code,
            };
        }

        throw error;
    }
}

/**
 * Format a given cpf. For example '00000000000' will result in
 * '000.000.000-00'.
 * @public
 * @param      {string}  raw The unformated CPF.
 * @return     {string}  The formated CPF.
 */
export function format(raw) {
    const { valid } = validate(raw);

    assert(
        valid,
        'Cannot format invalid CPF strings.',
        INVALID_CODE,
    );

    return strip(raw).replace(CPF_REGEX, '$1.$3.$5-$7');
}

/**
 * Generate new random valid CPF.
 * @public
 * @param {?boolean} formatted Wether or not to format the output;
 * @returns {string} A random valid CPF string.
 */
export function generate(formatted = true) {
    assert(
        Object.prototype.toString.call(formatted) === '[object Boolean]',
        `Expected generate argument to be boolean instead got ${typeof formatted}.`,
        INVALID_CODE,
    );

    const prefix = Array(9).fill(0)
        .map(() => Math.floor(Math.random() * (9 - (1 + 1))) + 1);

    const firstVerifier = getVerifier(prefix, 1);
    const secondVerifier = getVerifier(prefix.concat(firstVerifier), 2);

    const finalString = `${prefix.join('')}${firstVerifier}${secondVerifier}`;

    return formatted ? format(finalString) : finalString;
}

export default Object.defineProperties({}, {
    strip: { value: strip },
    format: { value: format },
    validate: { value: validate },
    generate: { value: generate },
});
