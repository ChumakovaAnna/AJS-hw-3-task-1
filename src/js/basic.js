export default function getHealthStatus(person) {
  const { health } = person;

  if (health >= 50) {
    return 'healthy';
  } if (health < 15) {
    return 'critical';
  }
  return 'wounded';
}
