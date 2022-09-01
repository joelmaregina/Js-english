// Primitive Data Types:
// - String
// - Number
// - Boolean
// - null
// - undefined
// - Symbol (ES6)
// Reference Data Types:
// - Arrays
// - Object Literals
// - Functions
// - Dates
// - Anything else

//Type convertion 

let val;
// Number to String
val = String(555); // 555 | string | 3
val = String(4+4); // 8 | string | 1
// Bool to String
val = String(true); // true | string | 4
// Date to string
val = String(new Date()); // (...) | string | 58
// Array to String
val = String([1, 2, 3, 4]); // 1,2,3,4 | string | 7


// toString()
val = (5).toString(); // 5 | string | 1
val = (false).toString(); // false | string | 5

// String to number
val = Number('5'); // 5 | number | 5
val = Number(true); // 1 | number | 1
val = Number(false); // 0 | number | 0
val = Number(null); // 0 | number | 0
val = Number(undefined); // NaN | number | NaN
val = Number('Hello'); // NaN | number | NaN
val = Number([1, 2, 3, 4]); // NaN | number | NaN

val = parseInt('100.30'); // 100 | number | 100
val = parseFloat('100.33'); // 100.33 | number | 100

// //Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length); //Funciona apenas para strings/arrays
// console.log(val.toFixed()); // Funciona apenas em numeros

// **************** Numbers & The Math Object *******************

const num1 = 100;
const num2 = 50;
let val2;

// Math Object
val2 = Math.PI; // 3.141592653589793
val2 = Math.E; // 2.718281828459045
val2 = Math.round(2.6); // 3
val2 = Math.round(2.4); // 2
val2 = Math.ceil(2.4); // 3
val2 = Math.floor(2.6); // 2
val2 = Math.sqrt(25); // Raiz quadrada 25 -> 5
val2 = Math.abs(-3); // 3
val2 = Math.pow(8, 2); // 64
val2 = Math.pow(5, 3); // 125
val2 = Math.max(45, 33, 30, 1989, 92, 655, 99, 55, 33); // 1989
val2 = Math.min(45, 33, 30, 1989, 92, 655, 99, 55, 33); // 30
val2 = Math.random();

val2 = Math.floor(Math.random() * 20 + 1);

// console.log(val2);

// ************* String Methods & Concatenation ****************

const firstName = 'Ciaran';
const lastName = 'Hand';
const age = 32;
const str = 'Hello there my name is Joelma';

let val3;

// Append:
val3 = 'Joelma';
val3 += ' Silva'; // Joelma Silva

val3 = 'Hello my name is ' + firstName + ' and I am ' + age + ' years old'; // Hello my name is Ciaran and I am 32 years old

// Escaping
val3 = 'That\'s awsome, I can\'t wait'; // That's awsome, I can't wait

// concat
val3 = firstName.concat(' ', lastName, ' is ', age, ' years old') // Ciaran Hand is 32 years old

// Change case
val3 = firstName.toLowerCase(); // ciaran
val3 = firstName.toUpperCase(); // CIARAN

let test = firstName[0]; // C
test = firstName[1]; // i
test = firstName[2]; // a
test = firstName[3]; // r
test = firstName[4]; // a
test = firstName[5]; // n
// console.log(test);

// indexOf()
val3 = firstName.indexOf('a'); // 2
val3 = firstName.lastIndexOf('a'); // 4

// charAt()
val3 = firstName.charAt('3'); // r
// Get the last char
val3 = firstName.charAt(firstName.length - 1); // n

// substring()
val3 = firstName.substring(0, 2); // Ci

// slice()
val3 = firstName.slice(0, 3); // Cia
val3 = firstName.slice(-3); // ran

// split()
val3 = str.split(' '); // [ 'Hello', 'there', 'my', 'name', 'is', 'Joelma' ]

// replace()
val3 = str.replace('Joelma', 'Regina'); // Hello there my name is Regina

// includes();
val3 = str.includes('Joelma'); // true
val3 = str.includes('Regina'); // false
val3 = str.includes('World'); // false

// console.log(val3);

// ****************** Template Literals *********************
const name2 = 'Joelma';
const age2 = 29;
const job = 'Intern';
const city = 'Salvador';
let html;

// Without template strings (ES5)
html = '<ul><li> Name: '+ name2 + '</li><li> Age: ' + age + '</li><li> Job: ' + job + '</li> <li> City: ' + city + '</li></ul>';

html = '<ul>' +
    '<li> Name: '+ name2 + '</li>' + 
    '<li> Age: ' + age + '</li>' +
    '<li> Job: ' + job + '</li>' +
    '<li> City: ' + city + '</li>' +
    '</ul>';

function sayHello(){
    return name2 + ' say Hello!'
}

// With template strings (ES6)
html = `
    <ul>
        <li>Name: ${name2}</li>
        <li>Age: ${age2}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${sayHello()}</li>
        <li>${2022 - 1992}</li>
        <li>${ age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;
// document.body.innerHTML = html;

// ****************** Arrays & Arrays Methods *********************
//Creating some arrays
const numbers = [43, 89, 56, 33, 6, 16, 10, 9, 30];
const numbers2 = new Array (15, 7, 4, 2, 5, 737);
const fruits = ['apple', 'banana', 'avocado', 'grappe'];
const mixed = [6, 'Hello', 5.5, true, undefined, null, {a:1, b:5}, new Date()];

let val4;

// Check if is array
val4 = Array.isArray(numbers); //true
// Insert/replace into Array
numbers[1] = 16
// Find index of
val4 = numbers.indexOf(33); // 3

// MUTTATING ARRAYS
// Add on to end
numbers.push(7);
// Add on to front
numbers.unshift(1992);
// Take off from end
numbers.pop();
// Take off from frent
numbers.shift();
// Splice values
numbers.splice(1, 1) // (A partit de que item, quantos itens)
// Reverse
numbers2.reverse();
// console.log(numbers2); //[ 737, 5, 2, 4, 7, 15 ]

// Concanate Array
val4 = numbers.concat(numbers2);

// Sorting arrays
val4 = fruits.sort();
val4 = numbers2.sort(); //[ 15, 2, 4, 5, 7, 737 ] sort by the first number

// Use the "Compare function"
val4 = numbers2.sort(function(x, y){
    return x - y;
}); // [ 2, 4, 5, 7, 15, 737 ]

// Reverse sort
val4 = numbers2.sort(function(x, y){
    return y - x;
}); // [ 737, 15, 7, 5, 4, 2 ]

// Find
function under50(num){
    return num < 50;
}

val4 = numbers2.find(under50); // 15

// console.log(numbers);
// console.log(val4);

// ****************** Object Literals *********************
const person = {
    firstName: 'Joelma',
    lastName: 'Silva',
    age: 29,
    email: 'joelma@email.com',
    hobbies: ['music', 'ballet', 'cook'],
    adress: {
        city: 'Salvador',
        state: 'Bahia',
        country: 'Brazil',
    },
    getBirthYear: function(){
        return 2022 - this.age;
    }
}

let val5;

val5 = person;
val5 = person.firstName;
val5 = person['firstName'];
val5 = person.hobbies[1]; // ballet
val5 = person.adress.city; // Salvador
val5 = person.getBirthYear(); //1992

// console.log(val5);

const people = [
    { name: 'Maria', age: 64},
    { name: 'Pedro', age: 8},
    { name: 'Luisa', age: 4}
]

for(let i = 0; i < people.length; i++){
    // console.log(people[i].name); // Maria Pedro Luisa
}

// ******************** Dates & Times ***********************
let val6;

const today = new Date();
let birthday = new Date('9-16-1992 10:30:00'); // Wed Sep 16 1992 00:00:00 GMT-0300 (Horário Padrão de Brasília)
birthday = new Date('6 October 1989'); // Fri Oct 06 1989 00:00:00 GMT-0300 (Horário Padrão de Brasília)
birthday = new Date('09/16/1992'); // Wed Sep 16 1992 00:00:00 GMT-0300 (Horário Padrão de Brasília)

val6 = today; //typeof object
val6 = today.toString(); //typeof string
val6 = birthday; 
val6 = today.getMonth(); // 7 (agosto) // zero-based
val6 = today.getDate(); // 17 // está correto
val6 = today.getDay(); // 3 // zero-based
val6 = today.getFullYear(); // 2022
val6 = today.getHours(); // 20
val6 = today.getMinutes(); // 15
val6 = today.getSeconds(); // 30
val6 = today.getTime(); //1660778180197 (Time-stamp)

birthday.setMonth(10); // Mon Nov 16 1992 00:00:00 GMT-0200 (Horário de Verão de Brasília)
birthday.setDate(7);
birthday.setFullYear(1994);
birthday.setHours(7);
birthday.setMinutes(36);
birthday.setSeconds(28); // Mon Nov 07 1994 07:36:28 GMT-0200 (Horário de Verão de Brasília)

// console.log(birthday); 

// ******  IMIDIATELY FUNCTION EXPRESSIONS - IIFES ********

(function(){
    // console.log('IIFE Ran...'); // IIFE Ran...
})();

(function(name){
    // console.log('Hello ' + name); // IIFE Ran...
})('Joelma'); //Hello Joelma

// ****************** Window Object *********************
let val7;

// Outter height and width
val7 = window.outerHeight;
val7 = window.outerWidth;

// Inner height and width
val7 = window.innerHeight;
val7 = window.innerWidth;

// Scroll points
val7 = window.scrollY;
val7 = window.scrollX;

// Location Object
val7 = window.location;
// val7 = window.port;
// val7 = window.href;
// val7 = window.search;

// Redirect
// window.location.href = 'http:/google.com';
//Reload
//window.location.reload();

//History Object
//window.history.go(-3);
val7 = window.history.length;

//Navigator Object
val7 = window.navigator;
val7 = window.navigator.userAgent;

// console.log(val7);

// ************** Block Scope With let & const *****************
//Global Scope
var a = 1;
let b = 2;
const c = 3;

// function teste() {
//     // Exibe: valores diferentes do Global
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c); // 4, 5, 6 (Global: 1, 2, 3)
// }
// teste();

if(true){
    // Block Scope = Exibe: valores diferentes do Global / Atualiza o valor de 'a'
    var a = 7;
    let b = 8;
    const c = 9;
    // console.log('IF Scope', a, b, c); // 7, 8 9 (Global: 7, 2, 3)
}

for(var a = 0; a < 10; a++){
    // Atualiza o valor global de var (Global: 10, 2, 3)
    //  console.log(`Loop: ${a}`);
}

// console.log('Global Scope: ', a, b, c);


// ************ DOM Selectors for single Elements ***************
document.getElementById;
document.querySelector;

// *********** DOM Selectors for multiple Elements **************
document.getElementsByClassName;
document.getElementsByTagName;
document.querySelectorAll; //Retorna uma Node List (Não precisa converter em array para iterar sobre ele)

// *********  Prototypes && Prototypal Inheritance ************
// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// Cauculate age
Person.prototype.cauculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// Get Married
Person.prototype.getsMaried = function(newLastName){
    this.lastName += newLastName;
}

const jo = new Person('Jo', 'Silva', '9-16-92');
const peu = new Person('Pedro', 'Silva', 'July 30 2015');

// console.log(jo);
// console.log(peu.cauculateAge());
// console.log(jo.getFullName());
// jo.getsMaried(' Ha');
// console.log(jo.getFullName());

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}

// Costumer constructor
function Costumer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName, phone, membership);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Costumer.prototype = Object.create(Person.prototype);

// Make costumer.prototype return Costumer()
Costumer.prototype.constructor = Costumer;

const costumer1 = new Costumer('Maria', 'Assis', '77-5555-5555', 'Standard');

// console.log(costumer1);

// Customer greeting
Costumer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

// console.log(costumer1.greeting());


// *****************  Using Object.create ********************
const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Pereira';
mary.age = 30;

// console.log(mary.greeting());

mary.getsMarried('Silvaa');

// console.log(mary.greeting());

const luisa = Object.create(personPrototypes, {
    firstName: {value: 'Luisa'},
    lastName: {value: 'Alves'},
    age: {value: 4}
}
);

// console.log(luisa);
// console.log(luisa.greeting());

// *****************  Classes && Subclasses ********************
class Person2 {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}

class Costumer2 extends Person2 {
    constructor(firstName, lastName, phone, membership){
        super (firstName, lastName)

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const lulu = new Costumer2('Luisa', 'Empresa', '5555-5555', 'Standard');

console.log(lulu.greeting());
console.log(Costumer2.getMembershipCost());