/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  let remainder = purchaseAmount % 10;
  if (remainder < 5) {
    purchaseAmount = purchaseAmount - remainder;
  } else {
    purchaseAmount = purchaseAmount + (10 - remainder);
  }

  return 100 - purchaseAmount;
};
