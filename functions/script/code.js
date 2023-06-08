// What is a function?

// In the category of reference types, we have gone over objects and arrays, now let’s take a look at functions.

// Functions are one of the fundamental building blocks of JavaScript.
// A function is a set of statements that performs a task, or calculates a value.

function details(name,age) {
    console.log('My name is :'+ " " + name + ' and I am'
    + " " + age + ' years old.');
}

// Arguments vs Parameters?
// A parameter is a variable used at time of declaration, and an argument is the value
// passed into the parameter when the function is called.

details('Thabang', 24)

function sum(number1, number2) {
    if (number1 < number2) {
        console.log('Sum: ' + number1 * number2);
    }else{
        console.log('Number1 is less then his comparison');
    }
}

sum(20, 5)

// Here we declare a function called square() which takes in a parameter number.
// To calculate the square of the number, we multiply number by number.
// Then we return this value to whoever called this value using the return keyword.


function tableOfFive(digit) {
    return digit * 5
}

tableOfFive(5)
let digit = tableOfFive(5)
console.log(digit);

// Can you create a function as stated below?

let displayName = (firstName)=> {

     document.write(firstName);

};

// displayName ('Joel');

// keyword -> let;
// displayName -> is the function name we could call to display the function
// firstname -> will be used as a parameter for our function
// Function : =>

// Objects

let dictionary = {
    person1 : 'Mongigazi'
}
let needs1 = [23, 'thabang']

needs1.push(dictionary.person1)
console.log(needs1);



// Additional Tasks

let numb1 = parseInt(document.getElementById('numb1').value);
let cost = parseInt(document.getElementById('cost').value);
// let total = 


// More practice 

// The normal function that accepts arguments:
function divide(num1, num2) {
    result = num1 / num2 
    console.log(result);
    // if (num1 == 0 || num2 == 0) {
    //      console.log("You cannot divide by ZERO!");
    // }else{
    //     console.log(divide(100, 50));
    // }
    // try {
    //     console.log(divide(100,5));
    // } catch (error) {
    //     console.log(error.message);
    // }


};
divide(100,5);

// Then an arrow function that outputs the correct output needed but structured differently

let divide2 = (num1, num2) => {
    result = num1 / num2
    console.log(result);
};
divide2(100,10);

// Lets create an object with multiple keys

let myDetails = {
    fullName: 'Thabang Kganana',
    age: 24,
    Description: 'He is a persistenent ididvidual, looking for strategically upskilling enviroments'
};

console.log(myDetails);
console.log(myDetails.fullName, myDetails.Description, myDetails.age);
console.log(myDetails['age']);
console.log(Object.keys(myDetails));
console.log(Object.values(myDetails));
let sources = ['I am willing to explore various other avenues within software engineering']

// let newStr = Object.assign(sources.push() , myDetails.Description )
// console.log();

sources.push(myDetails.Description)
console.log(sources);

// console.log(myDetails['subject']);

myDetails.Education = ["Web and Software development", "Sofware Engineering"];
console.log("Updated :" , myDetails);

// Arrow function to access the keys of an object
debugger
let City = {
    Name: "Mine",
    Situated: "Covukiland",
    Founded: "Through blood",
    Description: function() {
        return this.Name.concat(" is situated in, ", this.Situated)
    }
}

Object.values(City).forEach(point => {
    console.log(point);
});

// Using the propertyfunction in the 'KEY'-> DESCRIPTION to concatinate both the 'NAME + SITUATED)

console.log(City.Description());

// Another object excercise

let details = {
    firstName: 'Thabang',
    lastName: 'Kganana',
    age: 24,
    old: function () {
        return this.age < 15 ? 'YOU are old enough' : 'to young'
    }
};

console.log(details.old());








