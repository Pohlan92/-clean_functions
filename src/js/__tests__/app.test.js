import checkHealthLevel from '../app';

test.each([
  [1, 'critical'],
  [5, 'critical'],
  [16, 'wounded'],
  [37, 'wounded'],
  [51, 'healthy'],
  [154, 'healthy'],
])('Check checkHealthLevel function with %d level and %s status', (level, expected) => {
  const result = checkHealthLevel({ name: '_', health: level });
  expect(result).toBe(expected);
});
