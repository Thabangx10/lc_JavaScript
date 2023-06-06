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