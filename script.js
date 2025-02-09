let currentInput = '';  // Stores the current input for calculation

// Function to append value to the display
function appendValue(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = currentInput;
}

// Function to calculate the result
function calculateResult() {
  try {
    currentInput = eval(currentInput);  // Evaluates the expression entered by the user
    document.getElementById('display').value = currentInput;
  } catch (error) {
    document.getElementById('display').value = 'Error';  // In case of an invalid expression
    currentInput = '';
  }
}
