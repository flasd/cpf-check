/**
 * Asserts given condition.
 * @private
 * @param {boolean} condition The condition to assert validity of.
 * @param {string|undefined} message The error message to display during development.
 * @param {string} code The error code.
 */
export default function assert(condition, message, code) {
    if (!condition) {
        const errorMessage = process.env.NODE_ENV === 'production' ?
            'cpf-check error. Use dev environment for the full error message.' : `cpf-check Error. ${message}`;

        const error = new Error(errorMessage);
        error.code = code;
        error.isCpfCheck = true;

        throw error;
    }
}
