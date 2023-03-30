export default function checkHealthLevel(params = {}) {
  if (params.health < 15) {
    return 'critical';
  }
  if (params.health > 50) {
    return 'healthy';
  }
  return 'wounded';
}
