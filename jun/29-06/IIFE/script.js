// module patterns

const bankAccount = ((balance) => {

  const checkBalance = (currentBalance, amountToWithdraw) => {
    if (currentBalance >= amountToWithdraw) {
      return true;
    } else false;
  };

  const withdraw = (amount) => {
    const currentBalance = checkBalance(balance, amount);
    if (currentBalance) {
      balance -= amount;
      return balance;
    } else {
      console.log("Bist Arm digga.");
    }
  };

  return {
    // gleich wie:  withdraw: withdraw
      withdraw,
      checkBalance
  };
})(300);









/* const withdraw = ((balance, amount) => {
  if (balance >= amount) {
    balance -= amount;
  }
    return balance;
})(100,20);

console.log(withdraw); */
