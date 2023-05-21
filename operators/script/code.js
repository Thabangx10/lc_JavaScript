// Challenge :
// -> let first_number = 15
// -> let second_number = 17

// We have to find multiple ways(3) to swap the value of our of variables in JS code.

let first_number = 15;
console.log(first_number);
let second_number = 17;
console.log(second_number);

// first:

// first_number=second_number;
// console.log(first_number);
// second_number=first_number;
// console.log("2nd num is now ->",second_number);

// destructuring assignment [a, b] = [b, a] , is used to swap the value of two variables. If [a, b] = [1, 2, 3] , the value of a will be 1 and value of b will be 2.

[first_number, second_number] = [second_number, first_number];

console.log("They are now -> (1st)", first_number,"and -> (2nd)", second_number);

// Second:

// Reference: Javascript By Sticky Pingu on Mar 25 2020,      Source: stackoverflow.com

let first_number1 = 15, second_number1 = 17;

second_number1 = [first_number1, first_number1 = second_number1][0]

console.log("They are now -> (1st)", first_number1,"and -> (2nd)", second_number1);


// Third:

let first_number3 = 15;
let second_number3 = 17

if (first_number3 === 15) {
    console.log("First number is now ->",17);
}if (second_number3 === 17) {
    console.log("Second number is now ->", 15);
}


//  Examples 
// let arr = [1,2,3];
// let arr2 = [4,5];
// result=[...arr, ...arr2];
// console.log(result);

let z=6, k=9;

result=z+k;

k=result-k;

z=result-k;
console.log(z, k);