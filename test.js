const { suite } = require('uvu');
const assert = require('uvu/assert');
const isNight = require('./index.js');

const test = suite('is-night');

test('is true when after 8pm', () => {
  let d = new Date(2021, 01, 01, 20, 0, 0);
  assert.equal(isNight(d), true);
});

test('is true when before 4am', () => {
  let d = new Date(2021, 01, 01, 3, 59, 0);
  assert.equal(isNight(d), true);
});

test('is false when after 4am', () => {
  let d = new Date(2021, 01, 01, 4, 0, 0);
  assert.equal(isNight(d), false);
});

test('Throws if not passed a date', () => {
  assert.throws(() => {
    isNight({});
  });
});

test('Throws if passed an Invalid Date', () => {
  assert.throws(() => {
    isNight(new Date('this is an invalid date'));
  });
});

test.run();