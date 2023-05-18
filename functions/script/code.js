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