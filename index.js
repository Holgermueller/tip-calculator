"use strict";

let tip;
let customTip;
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

const uncheckRadioButtons = () => {
  let ele = document.getElementsByName("amount");
  for (let i = 0; i < ele.length; i++) ele[i].checked = false;
};

const reset = () => {
  document.getElementById("form").reset();
  document.getElementById("tipAmountDisplay").innerHTML = "$0.00";
  document.getElementById("totalDisplay").innerHTML = "0.00";
  document.getElementById("numberOfPeopleError").style.display = "none";
  document.getElementById("billError").style.display = "none";
};
