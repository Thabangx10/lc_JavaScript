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







