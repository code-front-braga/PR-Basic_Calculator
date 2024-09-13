const displayElement = document.querySelector('#display span') as HTMLSpanElement;
const buttonElements = document.querySelectorAll('.buttons-container button');
const clearButton = document.querySelector('.clear-display');
const equalsButton = document.querySelector('.equal');

function appendToDisplay(value: string) {
  if (value === '=' || value === 'C') return;

  const isOperator = /[+\-*/]/.test(value);
  const formattedValue = isOperator ? ` ${value} ` : value;

  displayElement.textContent += formattedValue;
}

const clearDisplay = () => (displayElement.textContent = '');

clearButton?.addEventListener('click', clearDisplay);

function evaluateExpression() {
  const currentDisplay = displayElement.textContent || '';
  try {
    const result = eval(currentDisplay);
    displayElement.textContent = result;
  } catch (error) {
    displayElement.textContent = 'Error';
  }
}

equalsButton?.addEventListener('click', evaluateExpression);

function initializeButtonListeners() {
  buttonElements.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent || '';

      appendToDisplay(value);
    });
  });
}

initializeButtonListeners();
