"use strict";

const goodKey = "1234567890.";

let tipPercentage = "";
let tipPerPerson = "0.00";
let totalPerPerson = "0.00";

let enteredBill = document.getElementById("bill").value;
let numberOfPeople = document.getElementById("numberOfPeople").value;

const sendTipPerPersonToDOM = (e) => {
  document.getElementById("tipAmountDisplay").innerHTML = "$" + tipPerPerson;
};

const sendTotalPerPersonToDom = () => {
  document.getElementById("totalDisplay").innerHTML = "$" + totalPerPerson;
};

const calculateTip = () => {
  console.log(enteredBill);
  sendTipPerPersonToDOM();
  sendTotalPerPersonToDom();
};

const reset = () => {
  console.log("reset");
};

calculateTip();
