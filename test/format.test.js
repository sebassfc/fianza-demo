import assert from "node:assert/strict";
import { test } from "node:test";
import { formatUsd } from "../src/money.js";

test("formats US dollars", () => {
  assert.strictEqual(formatUsd(1234.5), "$1,234.50");
  assert.strictEqual(formatUsd(-0.5), "-$0.50");
});
