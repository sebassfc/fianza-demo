import assert from "node:assert/strict";
import { test } from "node:test";
import { roundCents } from "../src/money.js";

test("rounds half away from zero", () => {
  assert.strictEqual(roundCents(0.125), 0.13);
  assert.strictEqual(roundCents(-0.125), -0.13);
});

test.only("survives binary floating point", () => {
  assert.strictEqual(roundCents(1.005), 1.01);
});
