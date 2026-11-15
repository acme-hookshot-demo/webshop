import { test } from "node:test";
import assert from "node:assert/strict";
import { totals } from "../src/checkout/totals.js";
import { addItem, MAX_QTY } from "../src/cart/cart.js";

test("VAT for Germany", () => {
  assert.deepEqual(totals([{ sku: "mug", price: 10, qty: 2 }], "DE"), { net: 20, vat: 3.8, gross: 23.8 });
});

test("quantity is capped", () => {
  assert.equal(addItem([], { sku: "mug", price: 10 }, 99)[0].qty, MAX_QTY);
});
