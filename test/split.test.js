import assert from "node:assert/strict";
import { test } from "node:test";
import { split } from "../src/money.js";

test("parts add up to the total", () => {
  assert.deepStrictEqual(split(1, 3), [0.34, 0.33, 0.33]);
});

test("rejects zero parts", () => {
  assert.throws(() => split(1, 0), RangeError);
});
