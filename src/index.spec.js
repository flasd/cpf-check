/* eslint-env node, mocha */
/* eslint no-underscore-dangle: "off" */
/* eslint no-confusing-arrow: "off" */
/* eslint no-plusplus: "off" */
/* eslint import/no-named-as-default-member: "" */

import { expect } from 'chai';
import * as CPF from './index.js';

describe('CPF module', () => {
    describe('Parser', () => {
        it('should parse text string with cpfs', () => {
            const expected = '000.000.000-00';
            const input = 'lorem ipsum 000.000.000-00 dolor sit amet';
            const output = CPF.parse(input);

            expect(output).to.equal(expected);
        });

        it('should parse text strings without cpfs', () => {
            const expected = '';
            const input = 'lorem ipsum dolor sit amet';
            const output = CPF.parse(input);

            expect(output).to.equal(expected);
        });

        it('should throw error on wrog data types', () => {
            const inputs = [1, /regex/g, () => {}, {}, []];

            inputs.map(input => expect(() => CPF.parse(input)).to.throw());
        });
    });

    describe('Striper /* LOL */', () => {
        it('should strip any non digit character from given string', () => {
            const expected = '10101010101';
            const input = '101.010.101-01';
            const output = CPF.strip(input);

            expect(output).to.equal(expected);
        });

        it('should throw errors on wrog data types', () => {
            const inputs = [1, /regex/g, () => {}, {}, []];

            inputs.map(input => expect(() => CPF.strip(input)).to.throw());
        });
    });

    describe('Formatter', () => {
        it('should format a CPF string', () => {
            const expected = '101.010.101-01';
            const input = '10101010101';
            const output = CPF.format(input);

            expect(output).to.equal(expected);
        });

        it('shouldnt format non-cpf strings', () => {
            const expected = '';
            const input = 'lorem ipsum';
            const output = CPF.format(input);

            expect(output).to.equal(expected);
        });

        it('should throw errors on wrog data types', () => {
            const inputs = [1, /regex/g, () => {}, {}, []];

            inputs.map(input => expect(() => CPF.format(input)).to.throw());
        });
    });

    describe('Transformer  /* LOL2 */', () => {
        it('should transform a cpf string into an array', () => {
            const expected = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
            const input = '10101010101';
            const output = CPF.transform(input);

            expect(output).to.deep.equal(expected);
        });

        it('should throw errors on non-digit passed string', () => {
            const input = 'lorem ipsum';

            expect(() => (CPF.transform(input))).to.throw();
        });

        it('should throw errors on wrog data types', () => {
            const inputs = [1, /regex/g, () => {}, {}, []];

            inputs.map(input => expect(() => CPF.transform(input)).to.throw());
        });
    });

    describe('Sum Checker', () => {
        it('shound return the correct digit for the tenth CPF digit', () => {
            const expected = 6;
            const input = [7, 2, 2, 8, 6, 4, 5, 3, 1];
            const output = CPF.checkSum(input);

            expect(output).to.equal(expected);
        });

        it('shound return the correct digit for the eleventh CPF digit', () => {
            const expected = 0;
            const input = [7, 2, 2, 8, 6, 4, 5, 3, 1, 6];
            const output = CPF.checkSum(input);

            expect(output).to.equal(expected);
        });

        it('should throw errors on wrog data types', () => {
            const inputs = [1, /regex/g, () => {}, {}, 'hello'];

            inputs.map(input => expect(() => CPF.checkSum(input)).to.throw());
        });
    });

    describe('Validator', () => {
        it('should return true for a valid CPF', () => {
            const expected = true;
            const input = '45260864280';
            const output = CPF.validate(input);

            expect(output).to.equal(expected);
        });

        it('should return false for a invalid CPF', () => {
            const expected = false;
            const input = '45260864281';
            const output = CPF.validate(input);

            expect(output).to.equal(expected);
        });

        it('should throw errors on wrog data types', () => {
            const inputs = [1, /regex/g, () => {}, {}, []];

            inputs.map(input => expect(() => CPF.validate(input)).to.throw());
        });

        it('should return false if cpf length is not 11', () => {
            const expected = false;
            const input = '4526086428';
            const output = CPF.validate(input);

            expect(output).to.equal(expected);
        });
    });

    describe('Generator', () => {
        it('should generate valid CPFs', () => {
            const generated = CPF.generate();
            const validity = CPF.validate(generated);

            expect(generated).to.be.a('string');
            expect(validity).to.equal(true);
        });
    });

    describe('isString', () => {
        it('should assert if given input is a string', () => {
            expect(CPF.isString([])).to.equal(false);
            expect(CPF.isString({})).to.equal(false);
            expect(CPF.isString(137)).to.equal(false);
            expect(CPF.isString(() => {})).to.equal(false);
            expect(CPF.isString(/regex/)).to.equal(false);

            expect(CPF.isString('hello')).to.equal(true);
        });
    });

    describe('Random Number Generator', () => {
        it('should generate random number inside the correct range', () => {
            expect(CPF.random(9, 1)).to.be.closeTo(5, 4);
        });
    });
});
