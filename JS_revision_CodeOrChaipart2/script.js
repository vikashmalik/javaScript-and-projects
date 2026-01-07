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

const myArr = [0,1,true,"vikash"]



