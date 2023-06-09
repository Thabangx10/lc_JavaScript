// Declare two variables with strings. Your name and your surname.//

let firstName = 'Thabang';
let lastName = 'Kganana';

// Concat the two variables. (This is done by adding a + in between the two names) You should see the data of the two joined on the output//

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Declare another variable with the name numberVar and the value being 5.

numberVar = 5;

/* the output on the console, numberVar *5, is:
                                                -> numberVar * 5
                                                ->  25 
*/

// const Name = 'Thabang';
// const Name = 'Thabang';

// Exercise:

// 1 -> Build 5 constructive functions named 'person'

function person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
};

let person1 = new person('Thabang', 'Kganana', 24);
console.log(person1);

let person2 = new person('Joe', 'Frazier', 44);
console.log(person2);

let person3 = new person('Lionel', 'Messi', 34);
console.log(person3);

let person4 = new person('Siya', 'Jhonga', 20);
console.log(person4);

let person5 = new person('Jordan', 'Kravitz', 29);
console.log(person5);


// 2 -> Add each object to the 'people' array

let people = []
// people.push({person1, person2, person3, person4, person5});
people.splice(0,0,person1, person2, person3, person4, person5)
console.log(people);


// 3 -> Add array to the localStorage


localStorage.setItem('people', JSON.stringify(people));


// 4 -> Get items from localStorage to display persons with an age more than 30

JSON.parse(localStorage.getItem('people'))


// Async, fecth and then functions

async function getAPI() {
   try {
    let API = await fetch('https://api.publicapis.org/entries');
    let data = await API.json()
    console.log(data)
   } catch (error) {
    console.log(error);
    return
   }
}

console.log(getAPI());

// try{
//     fetch('https://api.publicapis.org/entries').then(response => response.json()).then(data=>{console.log(data);})
// }
// catch (err){
//     console.log(err);
// }

//  DATE -> 07 JUNE 2023, WEDNESDAY

// Create an array of Objects (At least 3 Objects). Each object should have a URL Link to an image.


let products = [
    {
        productID: 01,
        productName: 'Manchester United Mens shirt',
        productPrice: 2000,
        images: document.createElement("img").src="https://i.postimg.cc/2ypSdcxF/download-1.jpg",
    
        // productDescription: '',
    },

    {
        productID: 02,
        productName: 'Barcelona Mens shirt',
        productPrice: 1800,
        // productDescription: '',
    },

    {
        productID: 03,
        productName: 'Chelsea Mens Football Club shirt',
        productPrice: 1500,
        productDescription: 'https://i.postimg.cc/2ypSdcxF/download-1.jpg',
    }
]


// Set your array in localStorage.

let Details = localStorage.setItem('Products', JSON.stringify(products));
console.log(Details);

// Get your array from localStorage and store it in a variable called "Information"

// JSON.parse(localStorage.getItem('Products'))

console.log(JSON.parse(localStorage.getItem('Products')));

// Display/Write the content of the variable "Information" on the document and make sure the images are displayed

document.write(localStorage.getItem('Products')) 

// HOMEWORK

// 1. HIGH-ORDER FUNCTIONS

// Higher order functions are functions that operate on other
// functions, either by taking them as arguments or by returning
// them.

// In simple words, A Higher-Order function is a function that
// receives a function as an argument or returns the function as
// output.

// Example ->


// 2. REST OPERATOR

// The three dots (...) in the snippet above symbolize the rest operator.

// The text after the rest operator references the values you wish to encase inside an array. You can only use it before the last parameter in a function definition.

// Example -> 

// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
  // The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"]

// 3. GETTERS / SETTERS 

// Data Quality
// JavaScript can secure better data quality when using getters and setter

// Example -> access fullName as a property: person.fullName.
let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };

// 4. TRY / CATCH -> MORE IN-DEPTH
// 5. USAGE OF THE 'THIS.' KEYWORD

// 6. ARRAY FILTERING / MAPPING

//  map() takes a maximum of three arguments, which are value/element, index, and array.

let arrOne = [32, 45, 63, 36, 24, 11]

// arrOne.map(value/element, index, array)

const multFive = (num) => {
return num * 5; //'num' here, is the value of the array.
}
let arrTwo = arrOne.map(multFive)
console.log(arrTwo)

// filter() Method

// The name kind of gives it away, doesn't it? You use this method to filter the array based on conditions you provide. The filter() method also creates a new array.

let arrNum = [15, 39, 20, 32, 30, 45, 22]
function divByFive(num) {
  return num % 3 == 0
}
let arrNewNum = arrNum.filter(divByFive)
console.log(arrNewNum)

// CRUD APP 