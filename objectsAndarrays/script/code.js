// OBJECTS

years = {
    num1: 23,
    num2: 20,
    num3: 20
};

my_people = {
    Person1:'Thabang',
    Person2:'Summer',
    Person3:'Rabia'};

// let access = Object.values(access)[0]
console.log(my_people.Person1);
console.log(my_people.Person2);
console.log(my_people.Person3);

//ARRAY

let ages = [23,20,20];
let persons = ['Thabang', 'Summer', 'Rabia'];

console.log(ages[0]);
console.log(persons[2]);


// Array Methods

let num = [25, 32];

// We want the length of the array
console.log("Length: ", num.length);

// we want to log the elements value
console.log("values: ", num);

// Lets add two more integer datatypes in the array of num []
num.push(50,12)
console.log("added: ", num);

// The length of the array has increased due to the built-in function of push() used in the above program
console.log("Added length: ", num.length);

// Lets remove the last element of the array
num.pop()
console.log("Depleted num: ", num);

// ...now the first element
num.shift()
console.log("Shifted num: ", num);

// ..lets add two more elements in our array
num.unshift(90,120)
console.log("Unshifted num: ", num);

// Let us create a variable thats going tp help us view a selected part of the array num[] to view in our console
let slice = num.slice(0,2)
console.log("Section of num: ",slice);
console.log("Original num: ",num);

// Select a position in the array and add a value to its position
num.splice(3,0,322)
console.log("New positional value: ",num);

// lets print out the array data, thats its value isnt 50

for (let i = 0; i < num.length; i++) {
    if (num[i] != 50) {
        console.log(num[i]);
    }
}

// Print out the 4th positions value
// We used the filter built in with an arrow function
console.log(num.filter(i=>i==50));

// Challenge 

let Challenge = ["Kamva", "Jason", "Mujahid"];

console.log(Challenge.filter(name=>{
    // return name.indexOf('a')==1
    return name.charAt(1) == 'a'
}));

let another =[3, 45, "Thabang"];

// console.log(another.reduce(i=>{
//     return another
// }));

// console.log(another.splice(0,2));

// let sum = 0;   

// for (let i = 0; i < another.length; i++) {
//     let sum = another[i];
//     console.log(another.splice(0,2));

//     console.log(function addition(a,b) {
//         add = a + b
//         console.log();
//     });
    
// }
console.log(parseInt(another.reduce((a,b)=>{
    return a+b
})));


let submit = document.querySelector('#submit')
let display = document.querySelector('#display')
let input = document.querySelector('#input')
let list = document.querySelector('#list')

let displaylist = []

submit.addEventListener("click", (e) =>{
    e.preventDefault()
    if (input.value) {
        displaylist.push(input.value)
        // clear our input element
        input.value = " "
        
    } else {
        input.style = "outline 3px red"
    }

    localStorage.setItem("names", JSON.stringify(displaylist))
})


display.addEventListener("click", (e) =>{
    e.preventDefault()
    // list = JSON.parse("names",localStorage.getItem(displaylist))
    displaylist.forEach((name) => {
        list.innerHTML +=
        `
        <p>${name}</p>
        `
    });
})