let ObjectBasicTOAdvance = ()=>{
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

// // Instead of:
// function UserProfile(props) {
//     return (
//       <div>
//         <h1>{props.name}</h1>
//         <p>{props.email}</p>
//       </div>
//     );
//   }
  
//   // Use destructuring:
//   function UserProfile({ name, email }) {
//     return (
//       <div>
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
  
//   // With default values:
//   function UserProfile({ name = 'Guest', email = 'No email provided' }) {
//     return (
//       <div>
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }

//   Key Points to Remember
//   Destructuring creates new variables (not references to the original properties)
  
//   The property names must match exactly (case-sensitive)
  
//   You can combine renaming with default values: { name: userName = 'Guest' }
  
//   Works with let, const, and var declarations
  
//   Can be used in loops: for (const {name, age} of users) {...}
  
//   Object destructuring makes code cleaner, more readable, and helps avoid repetitive code like object.property syntax.
  
}  // This closes the ObjectBasicTOAdvance function


function aboutThefunction(){
    // Functions also have to use the m/m managment as well to undersand the fun well
// Function declaration - hoisted (can be called before declaration)
// Function expression - not hoisted
//Higher-Order Functions
// Functions that take other functions as arguments or return functions.
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"

// Ex HIgher order function

function createMultiplier(multiplier){
    return function(num){
        return num*multiplier;
    }
}
let double = createMultiplier(2)
console.log(double(5));
let triple = createMultiplier(3)
console.log(triple(6));//o/p not a number 


let fn = (n=2,n1)=>{
    // let result =  n+n1;
    console.log("I will printable bcz i came before  result in here");
    if (typeof n === "number" && typeof n1 === "number") {
        return n + n1;
    }
    else{
        return "invalid value,plz enter a number"
    }
    console.log("I will not printable bcz i c   ameafter result in here");
    
}


objeFn={
    userName:"mySelf",
    value: 200
}
function handelObj(anyObj){
    console.log
     (`my name is ${anyObj.userName}, and the product value is ${anyObj.value}`)
}

handelObj(objeFn)

 function thisFn(){
    username ="vik",
    console.log(this.username);//undefined , this will work with obj
}

console.log(thisFn());
//arrow function 
let arrowFn = (num3,num4) => (num3 + num4 + ({username:"nameVik"}))//if we are using {} have to use return as well
console.log(arrowFn(3,4));

// to return a obj we have to use ({})
//iife = use to avoid the globel scope issues 
(function namedIffe(){
    console.log((`i am iffe `));
    
})('arrgumes');//iffe func tion must be end with ; to run the next iffe or code otherwise there wouldd be error  

}

//Conditon
// falsy values = false, 0, -0, bigInt 0n, "", null, undefine, NaN;
//rest are truthy value ex: "0", "false", "space", [], {}, function(){}
const emptyObj = {usereName : 12}
if(Object.keys(emptyObj).length ===0){
    console.log('obj is empty');
    
} else{
    console.log(Object.keys(emptyObj));// will print the key in the form of obj
    
}


//(??)operator

let aTestMap = new Map()
aTestMap.set('IN','India')
aTestMap.set('US','UIndia')
aTestMap.set('NZ','ZIndia')

 for(const[x,y] of aTestMap){ // also can do like this for(const [key,value] of aTestMap)
    console.log(y);// will print vlaue in the form of object
    
 }

 const myObjectForOF={
    userName:"gamers",
    totalGames: 12,
 }

//  for(const key of myObjectForOF){ // only owrk on array or maps
//     console.log(key); //Uncaught TypeError: myObjectForOF is not iterable

    
//  }

// so for object there is for in loop its not like it only work for the obj it use for other things as well


for (const key in myObjectForOF) {
    console.log(myObjectForOF[key]); // "userName", "totalGames"
}
//ReDo

//for in also work on Arrays as well, but will not work on the masp bcz maps are not itrable 

const pLang=[11,22,33,44,55]
for (const key in pLang) {
    console.log(key); // will print keys 0,1,2,3,4
    console.log(pLang[key]);// will print values 11,22,33,44,55
    
}


