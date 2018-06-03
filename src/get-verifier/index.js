/**
 * Do some math to check CPF verifier digits.
 * @private
 * @param {Array<number>} data CPF digits, with 9 or 10 numbers.
 * @param {number} verifier Wether to check the first or second verifiers.
 * @returns {number} The verifier digit.
 */
export default function getVerifier(data, verifier) {
    if (data.length < 9 || data.length > 10) {
        return -1;
    } else if (data.length === 9 && verifier === 2) {
        return -1;
    } else if (data.length === 10 && verifier === 1) {
        return -1;
    }

    const mappings = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    if (verifier === 2) {
        mappings.unshift(11);
    }


    const sum = mappings
        .map((value, index) => value * data[index])
        .reduce((accumulator, value) => accumulator + value, 0);

    const reminder = sum % 11;

    if (reminder < 2) {
        return 0;
    }

    return 11 - reminder;
}
