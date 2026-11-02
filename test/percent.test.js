import assert from "node:assert/strict";
import { test } from "node:test";
import { percentOf } from "../src/money.js";

test("takes a percentage in cents", () => {
  assert.strictEqual(percentOf(80, 15), 12);
  assert.strictEqual(percentOf(19.99, 7.5), 1.5);
});
