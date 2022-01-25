import {
  healthBar, HEALTH_CRITICAL, HEALTH_WOUNDED, HEALTH_HEALTHY,
} from '../app';


test.each([
  [100, HEALTH_HEALTHY],
  [50, HEALTH_WOUNDED],
  [20, HEALTH_WOUNDED],
  [15, HEALTH_WOUNDED],
  [0, HEALTH_CRITICAL],
])(
  'Персонаж со здоровьем %i отображается как %s',
  (hp, expected) => {
    const result = healthBar({
      name: 'Bob',
      health: hp,
    });
    expect(result).toBe(expected);
  },
);
