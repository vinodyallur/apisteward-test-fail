const test = require("node:test");
const assert = require("node:assert");
const { pay } = require("../index.js");

test("charge uses the current payment_method field", async () => {
  const charge = await pay(1000);
  assert.strictEqual(charge.payment_method, "tok_visa");
});

test("amount is passed through", async () => {
  const charge = await pay(1000);
  assert.strictEqual(charge.amount, 1000);
});

// This one FAILS on purpose: the app never sets receipt_email, so the fix
// alone doesn't make the suite green — a human needs to finish the change.
test("charge includes a receipt_email", async () => {
  const charge = await pay(1000);
  assert.strictEqual(charge.receipt_email, "c3@example.com");
});
