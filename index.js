"use strict";

let tipPercentage = "";
let tipPerPerson = (document.getElementById("tipAmountDisplay").innerHTML =
  "$0.00");
let totalPerPerson = (document.getElementById("totalDisplay").innerHTML =
  "$0.00");

let billInput = document.getElementById("bill");
let numberOfPeopleEntered = document.getElementById("numberOfPeople");

const divideAmongstGroup = () => {
  //Get bill
  let billValue = billInput.value;
  console.log(billValue);

  //add tip
  //document.querySelector('input[name="genderS"]:checked').value;

  if (document.getElementById("five").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.05;
    console.log(billValue);
  }
  if (document.getElementById("ten").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.1;
    console.log(billValue);
  }
  if (document.getElementById("fifteen").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.15;
    console.log(billValue);
  }
  if (document.getElementById("twentyFive").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.25;
    console.log(billValue);
  }
  if (document.getElementById("fifty").checked) {
    billValue = parseInt(billValue) + parseInt(billValue) * 0.5;
    console.log(billValue);
  }

  //Get number of people
  let numberOfPeople = numberOfPeopleEntered.value;

  let totPerPerson = billValue / numberOfPeople;

  //Send Data to DOM
  let tipPerPerson = (document.getElementById("tipAmountDisplay").innerHTML =
    "$0.00");

  let totalPerPerson = (document.getElementById("totalDisplay").innerHTML =
    "$" + totPerPerson.toFixed(2));
};

//Reset form
const reset = () => {
  document.getElementById("form").reset();

  // let radio = document.getElementsByName("amount");

  // for (let i = 0; radio.length; i++)
  //   if (radio[i].checked == true) {
  //     radio[i].checked = false;
  //   }
};
