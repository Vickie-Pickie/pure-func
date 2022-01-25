export const HEALTH_HEALTHY = 'healthy';
export const HEALTH_WOUNDED = 'wounded';
export const HEALTH_CRITICAL = 'critical';

export function healthBar(hero) {
  if (hero.health > 50) {
    return HEALTH_HEALTHY;
  }

  if (hero.health >= 15 && hero.health <= 50) {
    return HEALTH_WOUNDED;
  }

  return HEALTH_CRITICAL;
}
