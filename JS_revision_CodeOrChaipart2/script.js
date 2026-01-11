//a literal is a fixed, constant (like numbers, text, or true/false states)
window.document// is an object; there would be many things after document.loc,url...links
console.log(document.links);//node collection,html collection would give the html collection not array , we would be able to convert them in arr ; so they also have property link map etc


console.log("HEllo hitesh code or chai");
// stack and heap memory = so x and y are in satck mm on change the value of y,x value wont change bcz there is copy of x in  before 
// primitive data type will go i stack like copy of value// but the non -pemivive will go in heap and there would be the refrance of orignal value  
let x = 1;
let y = x;
console.log(y);
let userOne = {name: "char", email: "xyz.com"}
let userTwo = userOne;

userTwo = {name: "hello user 2", email: "xyz.com"}

console.log(userOne === userTwo);  // false - they're different objects!
console.log(userOne);  // {name: "char", email: "xyz.com"}
console.log(userTwo);  // {name: "hello user 2", email: "xyz.com"}
// so here in case we are changing in user2 it wil change in object userOne too

// THIS would affect both:
userTwo.name = "modified";  // Modifies the SHARED object
console.log(userOne.name);  // "modified" ✓


// string method  most powerful thing in a language  
let name1 = "viksh malik"
console.log(name1.indexOf('h'));
console.log(name1[4]); // upperCase LowerCase etc,
console.log(name1.substring(0,4));// h will not include  slice(wer can povide the -ve value as well will start reverse)
// trim trimSatrt trimEndand  replace url.replace('%20','-')

//numbers toString().length, toFixed(2) > (100.00); use mdn doc for info read about Math(library come ith JS b default)
//Math.abs absolute value, .celi 4.2 result would be 5 and floor would be 4,.random(value would be 0 or 1 + 1), ... etc
// const min = 10 ; const max=20; console.log (Math.floor(Math.random()* (max - min + 1)+min)) //  notes imp 


// ** date and time
// let myDate = new Date(); console.log(mdate.toString()) // there would be more method try toLocalString to date string , Type of date is object
//.get OR .set day/month() these are the function 



//Arrays are ordered collections of values (elements) that can hold any data type - numbers, strings, objects, other arrays, functions, etc.
// 

// Method 1: Array literal (most common)
let fruits = ["apple", "banana", "orange","banana"];

// Method 2: Array constructor
let numbers = new Array(1, 2, 3);

// Empty array
let empty = [];

// Array with mixed types
let mixed = [1, "hello", true, {name: "John"}, [1, 2, 3]];
// Modifying elements
fruits[1] = "mango";  
console.log(fruits)

fruits.push('kiwi')// Add to end

console.log(fruits)
fruits.pop()// Remove from end
console.log(fruits)

fruits.shift()// Remove from beginning
console.log(fruits)

fruits.unshift('jolo')// Add to beginning
console.log(fruits)

fruits.splice(1,0,'mango')// Remove/Add at specific position
console.log(fruits)
// splice(startIndex, deleteCount, itemsToAdd...)

//**Finding Elements

console.log(fruits.indexOf("banana"));     // 1
console.log(fruits.lastIndexOf("mango")); // 3
console.log(fruits.includes("apple"));     // true
console.log(fruits.find(fruit => fruit.startsWith("o"))); // "orange"
console.log(fruits.findIndex(fruit => fruit === "orange")); // 2



let smilerMethodToFind= ()=>{
    const numbers = [1, 2, 3, 4, 5];

numbers.find(n => n > 2);    // 3 (element)
numbers.filter(n => n > 2);  // [3, 4, 5] (array)
numbers.some(n => n > 2);    // true (boolean)
numbers.findIndex(n => n > 2); // 2 (index)
// Method	Returns	Stops on first      match	Returns element/array
// find()	First   matching element	Yes	    Element
// filter()	All     matching elements	No	    Array
// some()	Boolean	Yes             	        Boolean
// findIndex()	    Index of first    match	    Yes	Number
}

let usefullPatternsOfArray2modrenES6 = ()=>{
    // flat() - Flatten nested arrays/array of arrays
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2)); // [1, 2, 3, [4]]

// flatMap() - Map then flatten
let arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

// Array.from() - Create from array-like or iterable
console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]
// Create range
let range = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// Remove duplicates
let duplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(duplicates)]; // [1, 2, 3, 4, 5]

// Check if all elements satisfy condition
let nums = [2, 4, 6, 8];
console.log(nums.every(n => n % 2 === 0)); // true

// Check if any element satisfies condition
console.log(nums.some(n => n > 5)); // true
}

//=>For large arrays, consider using Set or Map for faster lookups
// could maker arrays from(Array.from(name:"vikash")) => ['v','i','k','a','s','h']keay/value ; Array.of(return new array from set of element could var,arretc )
// read about isArray as well


//Objects*******Objects are collections of key-value pairs (properties) where keys are strings (or Symbols) and values can be any data type.
 // Method 1: Object literal (most common)
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Method 2: Object constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";

// Method 3: Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let john = new Person("John", 30);

// Method 4: ES6 Class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
let myCar = new Car("Honda", "Civic");

let car1 = {
    modl : "hondaCity",
    year : 2022,
    mycar: function(modl,year){
        (this.year + this.modl);
        
    }
}


let a = (car1.mycar());
console.log(a);

class classForObj{
    constructor(brand,year){
        this.brand = brand;
        this.year = year;
    }
}
let myObj1 = new classForObj('newcar','2020')
console.log(myObj1.toString);


let hello ="my name is hello"
document.getElementsByClassName('test').innerHTML= hello;
// document.querySelector('.test').innerHTML = myObj1.toString();

let mysym = Symbol('key 1')
console.log(typeof mysym);
const sym1 = Symbol('key 1');
const sym2 = Symbol('key 1');
console.log(sym1 === sym2); // false

// const tuser = new Object() > singleton type of obj
// const tuser = {} > non singleton o/p = {}

//Object nesting
let objP={
    child1:{
        discription:"child1 is avl",
        child2:{
            child2Name:"xyz",
            2:"hello number key"
        }
    }
}
console.log(objP.child1?.child2[2]);//2 is a number, so you can't use it with dot notation
console.log(objP?.child1?.child2?.[2]);//full optional chain (?.) work like if else 

//object concetination
let obj3 = Object.assign({},objP,myObj1)//{}target,source1, source2;{} is optional
// let obj4=(...objP,...myObj1)

//array of object do own
let arraysObj=[
    {},
    {},
    {}
]
console.log(arraysObj[2].name);
console.log(Object.keys(myObj1)); // o/p (2) ['brand', 'year'] is dataType is an array
console.log(Object.values(myObj1)); 
console.log(Object.entries(myObj1)); 
console.log(myObj1.hasOwnProperty('isloggedIn')); //false
//Destructing of object value from array of obj
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  // Extract names from all objects
  const names = users.map(({ name }) => name);
  console.log(names); // ['Alice', 'Bob', 'Charlie']


//in future the object discussion become the api discussion in future

//Destructure of an object vry imp for reactas will work on this theory Obj>destructure
let {modl} = car1
console.log(modl);
// aslo we can use  with diff var name 
let {modl:modlCopy} = car1
console.log(modlCopy);

//nested destructing 
let objPx={
    child1x:{
        discription:"child1 is avl",
        child2:{
            child2Name:"xyz",
            2:"hello number key"
        }
    }
}
let{child1x:{
    discription,
    child2:{child2Name,2:iAM2}
    
}}=objPx
console.log(iAM2);
// Without destructuring
function printPerson(person) {
    console.log(`${person.name} is ${person.age} years old`);
  }
  
  // With destructuring
  function printPerson({ name, age }) {
    console.log(`${name} is ${age} years old`);
  }
  
  // With destructuring and defaults
  function printPerson({ name = 'Anonymous', age = 0 } = {}) {
    console.log(`${name} is ${age} years old`);
  }
  
  printPerson(person); // "Alice is 30 years old"
  printPerson();       // "Anonymous is 0 years old"

//   Practical Use Cases
// Without destructuring
function printPerson(person) {
    console.log(`${person.name} is ${person.age} years old`);
  }
  
  // With destructuring
  function printPerson({ name, age }) {
    console.log(`${name} is ${age} years old`);
  }
  
  // With destructuring and defaults
  function printPerson({ name = 'Anonymous', age = 0 } = {}) {
    console.log(`${name} is ${age} years old`);
  }
  
  printPerson(person); // "Alice is 30 years old"
  printPerson();       // "Anonymous is 0 years old"



//React ** props destructing

// Instead of:
function UserProfile(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    );
  }
  
  // Use destructuring:
  function UserProfile({ name, email }) {
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
  
  // With default values:
  function UserProfile({ name = 'Guest', email = 'No email provided' }) {
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }

//   Key Points to Remember
//   Destructuring creates new variables (not references to the original properties)
  
//   The property names must match exactly (case-sensitive)
  
//   You can combine renaming with default values: { name: userName = 'Guest' }
  
//   Works with let, const, and var declarations
  
//   Can be used in loops: for (const {name, age} of users) {...}
  
//   Object destructuring makes code cleaner, more readable, and helps avoid repetitive code like object.property syntax.
  
  












