// How to create a function called fullName that returns your full name and displays it on the console

let name1 = 'Thabang Kganana'

function fullname(name1) {
    console.log(name1);
}

fullname(name1)


// Question 2

// Please create the following variables to store your information:
// firstName, lastName, age, list of subjects, and address, which will store the street
// name, street number, suburb, city, and country name.

let student = {
    firstname : 'Thabang',
    lastname : 'Kganana',
    Age : 24,
};

console.log(student.firstname, student.lastname, student.Age);


let subjects = ['JavaScript', 'HTML', 'CSS/BOOTSRTRAP']

console.log(subjects[0], subjects[1], subjects[2]);

let home = {
    Address : 'YMCA, springbok rd',
    streetNumber : 16,
    suburb : 'Kewtown',
    city : 'Athlone',
    country : 'South Africa'
}

console.log(home.Address, home.streetNumber, home.suburb, home.city, home.country);

// Calculator form

function calculate() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;

    // create a logical calculation based on the selected operator

    let result;

    // if (operator) {
        
    // }

    // will use switch - case for our logic with breaks if an operator has been selected. I t wil also raise an Error if the operator chosen isnt one of the ones already provided.

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "**":
            result = number1**number2;
            break;
        case "/":
            result = number1 / number2
            break;
        default:
            result = "Invalid operator chosen, Please select the available operators";
    }

    document.getElementById("result").textContent = "Result: " + result;
}

// We created a button to clear the inputed values and select a new equation more efficiently.

function clearForm() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("operator").selectedIndex = 0;
    document.getElementById("result").textContent = "";
}

// new execerise


// To return random characters in a string

let subject1 = "programming";
//  function called random which will take in the parameter of 'length'

function random(length) {
    
    // Set counter to an empty string 
    let result = '';

    // Create a variable to collect the elements within the strings length
    let subjectlength = subject1.length;

    // creating a range function to collect our values from the variable 'subject' and generate our desired output into 'result'
    for (let i = 0; i < length; i++) {
        result += subject1.charAt(Math.floor(Math.random() * subjectlength));
        
    }

    return result;
}
console.log(random(10));


// We are now going to implement logic that will allow us to reverse the the variable

let subject = "programming";

// lets create a function to implement our logic to solve the problem of reversing the string

function reverse(subject) {
    
    // Set counter to empty string
    let newsubject = "";

    // range function to collect elements within our value from the last value using . length -1

    for (let i = subject.length -1 ; i >= 0; i--){
        newsubject += subject[i];
    }
    return newsubject;
}

let result = reverse(subject);
console.log(result);