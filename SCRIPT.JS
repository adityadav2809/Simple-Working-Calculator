// Get all the input elements
const inputs = document.querySelectorAll('input[type="button"]');
const disp = document.getElementById('disp');

// Initialize the first number, operator, and second number
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Add event listeners to all the input elements
inputs.forEach(input => {
  input.addEventListener('click', () => {
    // Get the value of the input element
    const value = input.value;

    // Check if the value is a number or an operator
    if (!isNaN(value) || value === '.') {
      // Check if an operator has been selected
      if (operator === '') {
        // Append the value to the first number
        firstNumber += value;
        disp.value = firstNumber;
      } else {
        // Append the value to the second number
        secondNumber += value;
        disp.value = firstNumber + operator + secondNumber;
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Store the operator
      operator = value;
      disp.value = firstNumber + operator;
    } else if (value === '=') {
      // Calculate the result
      const result = eval(firstNumber + operator + secondNumber);
      disp.value = result;
      firstNumber = '';
      operator = '';
      secondNumber = '';
    }
  });
});