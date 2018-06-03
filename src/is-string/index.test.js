import isString from './index';

test('isString', () => {
    expect(isString('')).toBe(true);
    expect(isString('hello')).toBe(true);
    expect(isString(new String('hello'))).toBe(true);
    
    expect(isString(2)).toBe(false);
    expect(isString(/gg/)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString({ dimensions: 137 })).toBe(false);
    expect(isString([1, 3, 7])).toBe(false);
});