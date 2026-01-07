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
    // flat() - Flatten nested arrays
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

