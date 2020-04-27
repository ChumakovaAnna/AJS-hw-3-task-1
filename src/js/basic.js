export default function getHealthStatus(person) {
  const personHealth = person.health;

  if (personHealth > 50) {
    return 'healthy';
  } if (personHealth < 15) {
    return 'critical';
  }
  return 'wounded';
}
