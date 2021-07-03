const moneyBox = () => {
  let saveCoins = 0;
  return (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}.`);
  };
};

const myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(4);
myMoneyBox(4);
