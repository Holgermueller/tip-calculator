"use strict";

let tipPercentage = "";
let tipPerPerson = "0.00";
let totalPerPerson = "0.00";

let billInput = document.getElementById("bill");
let numberOfPeopleEntered = document.getElementById("numberOfPeople");

//Get data from form
const getBillValue = () => {
  let billValue = billInput.value;

  return billValue;
};

const divideAmongstGroup = () => {
  //Get bill
  const billValue = billInput.value;
  console.log(billValue);

  //Get number of people

  let numberOfPeople = numberOfPeopleEntered.value;
  console.log(numberOfPeople);

  sendTipAmountToDOM(billValue);
  sendTotalPerPersonToDOM();
};

//Send Data to DOM
const sendTipAmountToDOM = (billValue) => {
  if (billValue <= 0) {
    document.getElementById("tipAmountDisplay").innerHTML = "0.00";
  } else {
    document.getElementById("tipAmountDisplay").innerHTML = billValue;
  }
};

const sendTotalPerPersonToDOM = () => {
  document.getElementById("totalDisplay").innerHTML = totalPerPerson;
};

//Reset form
const reset = () => {
  console.log("reset");
};
