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
  const billValue = billInput.value;
  console.log(billValue);

  //add tip
  //document.querySelector('input[name="genderS"]:checked').value;
  if (document.getElementById("input[name='name']:checked").value == true) {
    console.log("checked 5");
  }

  //Get number of people

  let numberOfPeople = numberOfPeopleEntered.value;
  console.log(numberOfPeople);

  let totPerPerson = billValue / numberOfPeople;

  //Send Data to DOM
  let tipPerPerson = (document.getElementById("tipAmountDisplay").innerHTML =
    "$0.00");

  let totalPerPerson = (document.getElementById("totalDisplay").innerHTML =
    "$" + totPerPerson);
};

//Reset form
const reset = () => {
  console.log("reset");
};
