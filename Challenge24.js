let $visor = document.querySelector('[data-js="visor"]');
let $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
let $buttonsOperations = document.querySelectorAll(
  '[data-js="button-operation"]'
);
let $buttonCE = document.querySelector('[data-js="button-ce"]');
let $buttonEqual = document.querySelector('[data-js="button-equal"]');

function initialize() {
  initEvents();
}

function initEvents() {
  Array.prototype.forEach.call($buttonsNumbers, function (button) {
    button.addEventListener("click", handleClickNumber, false);
  });

  Array.prototype.forEach.call($buttonsOperations, function (button) {
    button.addEventListener("click", handleClickOperation, false);
  });
  $buttonCE.addEventListener("click", handleClickCE, false);
  $buttonEqual.addEventListener("click", handleClickEqual, false);
}

function handleClickNumber() {
  $visor.value += this.value;
}
function handleClickOperation() {
  removeLastItemIfIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function isLastItemAnOperation(number) {
  let operations = getOperations();
  let lastItem = number.split("").pop();
  return operations.some(function (operator) {
    return operator === lastItem;
  });
}

function getOperations() {
  return Array.prototype.map.call($buttonsOperations, function (operator) {
    return operator.value;
  });
}

function removeLastItemIfIsAnOperator(number) {
  if (isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfIsAnOperator($visor.value);
  let allValues = $visor.value.match(getOperations());
  $visor.value = allValues.reduce(calculateAllValues);
}

function getRegexOperations() {
  return new RegExp("\\d+[" + getOperations().join("") + "]?", "g");
}

function calculateAllValues(accumulated, actual) {
  let firstValue = accumulated.slice(0, -1);
  let operator = accumulated.split("").pop();
  let lastValue = removeLastItemIfIsAnOperator(actual);
  let lastOperator = getLastOperator(actual);
  return doOperation(operator) + lastOperator;
}

function getLastOperator(value) {
  return isLastItemAnOperation(value) ? actual.split("").pop() : "";
}

function doOperation(operator, firstValue, lastValue) {
  switch (operator) {
    case "+":
      return Number(firstValue) + Number(lastValue);
    case "-":
      return Number(firstValue) - Number(lastValue);
    case "*":
      return Number(firstValue) * Number(lastValue);
    case "/":
      return Number(firstValue) / Number(lastValue);
  }
}

initialize();
