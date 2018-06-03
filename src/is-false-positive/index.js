/**
 * Because of how CPF's validity is calculated, number like 11111111111 are valid.
 * To prevent users from abusing this quirk, we check if CPF string follows this
 * pattern and we invalidade if so.
 * @private
 * @param {Array<number>} data Array containing user provided CPF.
 * @returns {boolean} Wether of not the CPF is a false positive.
 */
export default function isFalsePositive(data) {
    return data.every(value => value === data[0]);
}
