/** Rounds to whole cents. */
export function roundCents(x) {
  return Math.round(x * 100) / 100;
}

/** Splits a total into n parts that add up to it exactly; earlier parts take the leftover cents. */
export function split(total, n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError("n must be a positive integer");
  const cents = Math.round(total * 100);
  const base = Math.floor(cents / n);
  return Array.from({ length: n }, (_, i) => (base + (i < cents % n ? 1 : 0)) / 100);
}
