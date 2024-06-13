"use strict";

let tip, customTip;
let tipPerPerson = (document.getElementById("tipAmountDisplay").innerHTML =
  "$0.00");
let totalPerPerson = (document.getElementById("totalDisplay").innerHTML =
  "$0.00");

let billInput = document.getElementById("bill");
let numberOfPeopleEntered = document.getElementById("numberOfPeople");

const divideAmongstGroup = () => {
  let billValue = billInput.value;

  if (document.getElementById("five").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.05;
    tip = parseInt(billValue) * 0.05;
  } else if (document.getElementById("ten").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.1;
    tip = parseInt(billValue) * 0.1;
  } else if (document.getElementById("fifteen").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.15;
    tip = parseInt(billValue) * 0.15;
  } else if (document.getElementById("twentyFive").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.25;
    tip = parseInt(billValue) * 0.25;
  } else if (document.getElementById("fifty").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.5;
    tip = parseInt(billValue) * 0.5;
  } else {
    let customTip = document.getElementById("custom");
    billValue = parseInt(billValue) + parseInt(customTip.value);
    console.log(billValue);

    tip = parseInt(customTip.value);
  }

  let numberOfPeople = numberOfPeopleEntered.value;

  let totPerPerson = parseInt(billValue) / parseInt(numberOfPeople);

  let tipEach = parseInt(tip) / parseInt(numberOfPeople);

  document.getElementById("tipAmountDisplay").innerHTML =
    "$" + Math.ceil(tipEach.toFixed(2));

  document.getElementById("totalDisplay").innerHTML =
    "$" + Math.ceil(totPerPerson.toFixed(2));
};

const checkIfBillValid = () => {
  if (billInput.value == "") {
    document.getElementById("billError").style.display = "block";
    document.getElementById("bill").style.borderRadius = "5px";
    document.getElementById("bill").style.borderWidth = "2px";
    document.getElementById("bill").style.borderStyle = "solid";
    document.getElementById("bill").style.borderColor = "red";
  }
};

const checkGroupValid = () => {
  if (numberOfPeopleEntered.value == "") {
    document.getElementById("numberOfPeopleError").style.display = "block";
    document.getElementById("numberOfPeople").style.borderRadius = "5px";
    document.getElementById("numberOfPeople").style.borderWidth = "2px";
    document.getElementById("numberOfPeople").style.borderStyle = "solid";
    document.getElementById("numberOfPeople").style.borderColor = "red";
  }
};

const uncheckRadioButtons = () => {
  let ele = document.getElementsByName("amount");
  for (let i = 0; i < ele.length; i++) ele[i].checked = false;
};

const reset = () => {
  document.getElementById("form").reset();
  document.getElementById("tipAmountDisplay").innerHTML = "$0.00";
  document.getElementById("totalDisplay").innerHTML = "$0.00";
  document.getElementById("numberOfPeopleError").style.display = "none";
  document.getElementById("billError").style.display = "none";
  document.getElementById("numberOfPeople").style.border = "none";
  document.getElementById("bill").style.border = "none";
};
