"use strict";

let bill = "";
let numberOfPeople = "";
let tipPercentage = "";
let tipPerPerson = "0.00";
let totalPerPerson = "0.00";

let enteredBill = document.getElementById("bill").value;

const sendTipPerPersonToDOM = () => {
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

calculateTip();
