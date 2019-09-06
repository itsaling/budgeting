var addContainer = document.getElementById("addContainer");
var subContainer = document.getElementById("subContainer");
var addBtn = document.getElementById("addBtn");
var subBtn = document.getElementById("subBtn");
var backBtn = document.getElementById("backBtn");
var backBtnExpense = document.getElementById("backBtnExpense");
var income = document.getElementById("title");
var expense = document.getElementById("subTitle");
var inputBox = document.getElementById("amountInput");
var expenseBox = document.getElementById("expenseInput");
var total = 0;
var message = document.getElementById("message");

var array = [];
var list = "";

addBtn.addEventListener("click", addBtnClick);
subBtn.addEventListener("click", subBtnClick);
backBtn.addEventListener("click", backBtnClick);
backBtnExpense.addEventListener("click", backBtnExpenseClick);
inputBox.addEventListener("keydown", addValue);
expenseBox.addEventListener("keydown", subtraction);
getTotal();
displayArray();
new fullpage("#fullpage", {
  autoScrolling: true
});

function addBtnClick() {
  TweenMax.to(addBtn, 2, { bottom: 600 });
  TweenMax.to(income, 2, { bottom: 300 });
  TweenMax.to(inputBox, 2, { bottom: 200 });
  TweenMax.to(backBtn, 2, { bottom: 400 });

  inputBox.style.opacity = "1";
  inputBox.style.transition = ".2s";
  inputBox.style.borderColor = "#000357";
  inputBox.focus();
}
function subBtnClick() {
  TweenMax.to(subBtn, 2, { bottom: 600 });
  TweenMax.to(expense, 2, { bottom: 300 });
  TweenMax.to(expenseBox, 2, { bottom: 200 });
  TweenMax.to(backBtnExpense, 2, { bottom: 400 });

  expenseBox.style.opacity = "1";
  expenseBox.style.transition = ".2s";
  expenseBox.style.borderColor = "#79002c";
  expenseBox.focus();
}

function backBtnClick() {
  TweenMax.to(backBtn, 2, { bottom: -400 });
  TweenMax.to(income, 2, { bottom: 0 });
  TweenMax.to(addBtn, 2, { bottom: 0 });
  TweenMax.to(inputBox, 2, { bottom: 0 });

  inputBox.style.opacity = "0";
  inputBox.style.transition = ".2s";
}
function backBtnExpenseClick() {
  TweenMax.to(backBtnExpense, 2, { bottom: -400 });
  TweenMax.to(expense, 2, { bottom: 0 });
  TweenMax.to(subBtn, 2, { bottom: 0 });
  TweenMax.to(expenseBox, 2, { bottom: 0 });

  expenseBox.style.opacity = "0";
  expenseBox.style.transition = ".2s";
}

function addValue() {
  if (event.keyCode === 13) {
    array.push(inputBox.value);
    total = total + parseFloat(inputBox.value);
    getTotal();
    inputBox.value = "";
    displayArray();
  }
}
function subtraction() {
  if (event.keyCode === 13) {
    total = total - parseFloat(expenseBox.value);
    getTotal();
    expenseBox.value = "";
  }
}
function getTotal() {
  if (total < 0) {
    message.innerHTML = "You're in the negative, stop spending!";
  } else {
    message.innerHTML = "You're good to spend but don't over do it";
  }
  document.getElementById("totalAmount").innerHTML = "$ " + total;
}

function displayArray() {
  var i;
  for (i = 0; i < array.length; i++) {
    list += array[i] + "<br>";
  }
  document.getElementById("spending").innerHTML = list;
}
