/**
 * Checks if given value is a string.
 * @private
 * @param {any} possibleString Anything that might be a string.
 * @returns {boolean} Wether the valua is a string or not.
 */
export default function isString(possibleString) {
    return Object.prototype.toString.call(possibleString) === '[object String]';
}
