let firstNumber;
let secondNumber;
let operator;

let display = document.querySelector('.display');

document.querySelectorAll('.button').forEach(function(button) {
  button.addEventListener('click', function() {
    let buttonValue = this.textContent;

    switch(buttonValue) {
      case 'C':
        display.textContent = '0';
        break;
      case '=':
        secondNumber = parseInt(display.textContent);
        display.textContent = operate(firstNumber, secondNumber, operator);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        firstNumber = parseInt(display.textContent);
        operator = buttonValue;
        display.textContent = '0';
        break;
      default:
        if (display.textContent === '0') {
          display.textContent = buttonValue;
        }
        else {
          display.textContent += buttonValue;
        }
        break;
    }
  })
})

function operate(firstNumber, secondNumber, operator) {
  switch(operator) {
    case '+':
      return add(firstNumber, secondNumber);
      break;
    case '-':
      return subtract(firstNumber, secondNumber);
      break;
    case '*':
      return multiply(firstNumber, secondNumber);
      break;
    case '/':
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