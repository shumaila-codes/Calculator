// Get the display element
let display = document.getElementById("display");

// Add number or operator to the display
function addToDisplay(value) {
  display.value += value;
}

// Clear the entire display
function clearScreen() {
  display.value = "";
}

// Delete the last character (Backspace)
function backspace() {
  display.value = display.value.toString().slice(0, -1);
}

// Calculate and show the result
function getResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
