"use strict";

const goodKey = "1234567890.";

let tipPercentage = "";
let tipPerPerson = "0.00";
let totalPerPerson = "0.00";

let enteredBill = document.getElementById("bill").value;
let numberOfPeople = document.getElementById("numberOfPeople").value;

const sendTipPerPersonToDOM = (e) => {
  if (enteredBill > 0) {
    tipPerPerson = enteredBill.toString();
  } else {
    tipPerPerson = "0.00";
  }

  document.getElementById("tipAmountDisplay").innerHTML = "$" + tipPerPerson;
};

const sendTotalPerPersonToDom = () => {
  document.getElementById("totalDisplay").innerHTML = "$" + totalPerPerson;
};

const calculateTip = () => {
  sendTipPerPersonToDOM();
  sendTotalPerPersonToDom();

  console.log(enteredBill.parseInt());
};

const reset = () => {
  console.log("reset");
};

calculateTip();
