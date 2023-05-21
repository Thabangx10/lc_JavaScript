let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (display){
    const result = eval(display.value);

    if (result === Infinity || result === -Infinity) {
        display.value = "Division by zero";
    } else {
        display.value = result;
    }
  } if (error) {
    display.value = "Error";
  }
}