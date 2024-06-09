"use strict";

let tipPercentage = "";
let tipPerPerson = "0.00";
let totalPerPerson = "0.00";

let billInput = document.getElementById("bill").value;
let numberOfPeople = document.getElementById("numberOfPeople").value;

//Get data from form
const getBillValue = () => {};

const getNumberofPeople = () => {};

const calculateTip = () => {
  //Get bill
  const billValue = billInput;
  console.log(billValue);

  //Get number of people

  sendTipAmountToDOM();
  sendTotalPerPersonToDOM();
};

//Send Data to DOM
const sendTipAmountToDOM = () => {
  document.getElementById("tipAmountDisplay").innerHTML = tipPerPerson;
};

const sendTotalPerPersonToDOM = () => {
  document.getElementById("totalDisplay").innerHTML = totalPerPerson;
};

//Reset form
const reset = () => {
  console.log("reset");
};

calculateTip();
