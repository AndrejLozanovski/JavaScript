// const amount = 4123
// 4 * 1000
// 1 * 100
// 2 * 10
// 3 * 1

const amount = 5555;

const isNumberValidForATM = (numberInput) => numberInput % 10 === 5 || numberInput % 10 === 0;

const createDOM = (
  banknote_1000,
  banknote_500,
  banknote_100,
  banknote_50,
  banknote_10,
  banknote_5,
  sumInput
) => {
  const element = document.createElement("p");
  const message = `Amount for withdraw ${sumInput} would be: 
  ${banknote_1000} in 1000
  ${banknote_500} in 500
  ${banknote_100} in 100
  ${banknote_50} in 50
  ${banknote_10} in 10
  and ${banknote_5} in 5`;
  element.innerText = message;

  return element;
};

const checkBanknotes = (moneyInput) => {
  const moneyCpu = moneyInput.toString();
  const isValidATM = isNumberValidForATM(moneyInput);
  if (isValidATM) {
    let banknote_1000, banknote_500, banknote_100, banknote_50, banknote_10, banknote_5;

    banknote_1000 = Math.trunc(moneyInput / 1000);

    moneyInput = moneyInput % 1000;

    banknote_500 = Math.trunc(moneyInput / 500);

    moneyInput = moneyInput % 500;

    banknote_100 = Math.trunc(moneyInput / 100);

    moneyInput = moneyInput % 100;

    banknote_50 = Math.trunc(moneyInput / 50);

    moneyInput = moneyInput % 50;

    banknote_10 = Math.trunc(moneyInput / 10);

    moneyInput = moneyInput % 10;

    banknote_5 = Math.trunc(moneyInput / 5);

    console.log(amount);
    console.log(banknote_1000);
    console.log(banknote_500);
    console.log(banknote_100);
    console.log(banknote_50);
    console.log(banknote_10);
    console.log(banknote_5);

    document.body.appendChild(
      createDOM(
        banknote_1000,
        banknote_500,
        banknote_100,
        banknote_50,
        banknote_10,
        banknote_5,
        moneyCpu
      )
    );
  } else {
    alert("You cannot withdraw money that does not end with 0 or 5");
  }
};

checkBanknotes(amount);
