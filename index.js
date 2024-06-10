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
  }

  if (document.getElementById("ten").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.1;
    tip = parseInt(billValue) * 0.1;
  }

  if (document.getElementById("fifteen").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.15;
    tip = parseInt(billValue) * 0.15;
  }

  if (document.getElementById("twentyFive").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.25;
    tip = parseInt(billValue) * 0.25;
  }

  if (document.getElementById("fifty").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.5;
    tip = parseInt(billValue) * 0.5;
  }

  //Allow for custom tip

  if (document.getElementById("custom") != "") {
    let elements = document.getElementsByTagName("input");

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == "radio") {
        elements[i].checked = false;
      }
    }
  }

  let numberOfPeople = numberOfPeopleEntered.value;

  let totPerPerson = billValue / numberOfPeople;

  let tipEach = tip / numberOfPeople;

  document.getElementById("tipAmountDisplay").innerHTML =
    "$" + tipEach.toFixed(2);

  document.getElementById("totalDisplay").innerHTML =
    "$" + totPerPerson.toFixed(2);
};

const reset = () => {
  document.getElementById("form").reset();
  document.getElementById("tipAmountDisplay").innerHTML = "$0.00";
  document.getElementById("totalDisplay").innerHTML = "0.00";
};
