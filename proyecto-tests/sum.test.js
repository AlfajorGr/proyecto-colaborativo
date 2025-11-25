const { test, expect } = require('@playwright/test');
const sum = require('../sum');

test('suma correcta de números', () => {
  expect(sum(2, 3)).toBe(5);
});
