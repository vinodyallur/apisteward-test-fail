const { PayClient } = require("./demo-pay");

const client = new PayClient();

async function pay(amount) {
  // NOTE: this app forgets to set receipt_email — the test below expects it,
  // so even after APISteward migrates payment_method -> payment_method, one test fails.
  return client.charges.create({
    amount,
    currency: "usd",
    payment_method: "tok_visa",
  });
}

module.exports = { pay };
