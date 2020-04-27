import getHealthStatus from '../basic';

describe('GetHealthStatus', () => {
  test.each([
    ['90 health get healthy', { name: 'Mag', health: 90 }, 'healthy'],
    ['10 health get critical', { name: 'Mag', health: 10 }, 'critical'],
    ['50 health get wounded', { name: 'Mag', health: 50 }, 'wounded'],
    ['15 health get wounded', { name: 'Mag', health: 15 }, 'wounded'],
  ])('%s', (name, person, expected) => {
    const result = getHealthStatus(person);

    expect(result).toBe(expected);
  });
});
