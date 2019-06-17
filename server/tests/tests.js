const test = require('tape').test;
const server = require('./server');

test('A passing test', assert => {
  assert.pass('This test will pass.');
  assert.end();
});
test('Assertions with tape', assert => {
  const expected = 3;
  const actual = server.leaksList.length;

  assert.equal(
    actual,
    expected,
    'bug report'
  );

  assert.end();
});

test('My first test', function(assert) {
  assert.equal(1,14, 'Numbers 1 and 2 are the same');
  assert.end();
});
