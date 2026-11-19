import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculate, formatTitle } from './sigmoid.mjs';

test('weighted sum, signed inputs, parameter order and URI encoding', () => {
  const sample = calculate('?A=2,4,6,8,1&B=1,-1,1,-1,1&C=4');
  assert.equal(sample.z, 1);
  assert.equal(formatTitle(sample.y), '0.731');
  assert.equal(formatTitle(calculate('?A=1&B=1&C=-1').y), '0.500');
  assert.equal(calculate('?C=2&B=-3%2C4&A=-2%2C5').z, 28);
  assert.equal(formatTitle(calculate('?A=1000&B=1&C=0').y), '1');
  assert.equal(formatTitle(calculate('?A=-1000&B=1&C=0').y), '0.000');
});

test('decimal formatting truncates instead of rounding and retains zeroes', () => {
  assert.equal(formatTitle(0.9999), '0.999');
  assert.equal(formatTitle(0.1239), '0.123');
  assert.equal(formatTitle(0.0059), '0.005');
  assert.equal(formatTitle(0), '0.000');
  assert.equal(formatTitle(1), '1');
});
