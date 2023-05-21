function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; // convert height from cm to meters
  
    if (weight === "" || height === "") {
      document.getElementById("result").innerHTML = "Please enter values for weight and height.";
    } else {
      let bmi = weight / (height * height);
      document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2); // Number of digits after the decimal point. Must be in the range 0 - 2
    }
}

// clears the weight and height input fields and resets the result display when the Clear button is clicked.

function clearInput() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}