const { PayClient } = require("./demo-pay");

const c1 = new PayClient();

async function pay(amount) {
  // NOTE: this app forgets to set receipt_email — the test below expects it,
  // so even after APISteward migrates source -> payment_method, one test fails.
  return c1.charges.create({
    amount,
    currency: "usd",
    source: "tok_visa",
  });
}

module.exports = { pay };
