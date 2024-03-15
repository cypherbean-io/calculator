let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
  switch(operator) {
    case 'add':
      return add(firstNumber, secondNumber);
      break;
    case 'subtract':
      return subtract(firstNumber, secondNumber);
      break;
    case 'multiply':
      return multiply(firstNumber, secondNumber);
      break;
    case 'divide':
      return divide(firstNumber, secondNumber);
      break;
    default:
      return 'Invalid operator!'; 
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}