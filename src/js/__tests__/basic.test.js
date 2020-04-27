import getHealthStatus from '../basic';

describe('GetHealthStatus', () => {
  test.each([
    [{ name: 'Mag', health: 90 }, 'healthy'],
    [{ name: 'Mag', health: 10 }, 'critical'],
    [{ name: 'Mag', health: 50 }, 'wounded'],
    [{ name: 'Mag', health: 15 }, 'wounded'],
  ])('for %s health get %i', (person, expected) => {
    const result = getHealthStatus(person);

    expect(result).toBe(expected);
  });
});
