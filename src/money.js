/** Rounds to whole cents, half away from zero. Shifts the exponent in the string so 1.005 rounds to 1.01. */
export function roundCents(x) {
  return Math.sign(x) * Number(`${Math.round(Number(`${Math.abs(x)}e2`))}e-2`);
}

/** Splits a total into n parts that add up to it exactly; earlier parts take the leftover cents. */
export function split(total, n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError("n must be a positive integer");
  const cents = Math.round(total * 100);
  const base = Math.floor(cents / n);
  return Array.from({ length: n }, (_, i) => (base + (i < cents % n ? 1 : 0)) / 100);
}
