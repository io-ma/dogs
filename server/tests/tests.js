const test = require('tape').test;
const server = require('../server');

test('A passing test', assert => {
  assert.pass('This test will pass.');
  assert.end();
});
test('Assertions with tape', assert => {
  const expected = Object;
  const actual = typeof server.dog;

  assert.equal(
    actual,
    expected,
    'bug report'
  );

  assert.end();
});

