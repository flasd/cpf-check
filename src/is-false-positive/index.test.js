import isFalsePositive from './index';

test('isFalsePositive', () => {
    expect(isFalsePositive([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(true);
    expect(isFalsePositive([1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1])).toBe(false);
});
