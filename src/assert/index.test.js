import assert from './index';

describe('assert', () => {
    describe('', () => {
        test('in non-production env', () => {
            expect(assert).toBeTruthy();
            expect(() => assert(false, 'xyz', 'code')).toThrow(/xyz/);
            expect(() => assert(true, 'message', 'code')).not.toThrow();

            function getErrorObject() {
                try {
                    assert(false, 'message', 'XXXX');
                } catch (error) {
                    return error;
                }
            }

            expect(getErrorObject()).toHaveProperty('code', 'XXXX');
            expect(getErrorObject()).toHaveProperty('isCpfCheck', true);
        })
    });

    describe('', () => {
        beforeAll(() => { process.env.NODE_ENV = 'production' });

        test('in production env', () => {
            expect(() => assert(false, 'message', 'code')).toThrow(/environment/);
        })

        afterAll(() => process.env.NODE_ENV = 'test')
    });
});