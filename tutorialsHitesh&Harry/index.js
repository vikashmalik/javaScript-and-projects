//+++ By HItesh chai or code 

// function myf(){
//     x= 1 
//     return x
// }

// let a=[1,2,3,4,5,6,7,8,9,[1,2,3,4,5,6,[1,2,3]]]
// let b = 1;
// // console.log(typeof a) => object
//  let x= (a.push(99,99,99))
// console.log(x); // will print 13 te lanth [...[this the inner array will count like only 1 arry then can expend ]]

// let sym= Symbol("k1") // dataType symbol
// let obj1={
//prop1:"value "
//     fname: "vikash",
//     [sym]:"mySym in object",
//     myFunc:function (){
//         return "hello"
//     }
// }
// console.log(obj1)
// console.log(obj1.myFunc);
//Object.freeze(obj1) // set permanent vlaues and properties of object  
//obj1.prop1 = "new value"; // This will have no effect in non-strict mode, and throw an error in strict mode

// console.log(typeof obj1[sym]); // string

//singleton object 
// let objSinglton = new Object ()
////Object can have an another obj.
// let person={
//     fulName:{
//         fname:()=>{
//             return "my full nameFunction"
//         },
//         lsname: "maleik",
//     }
// }

//optional chaning


// console.log(person.fulName?.fname?.lname.chain);
//? use to checkif the propery does exsist same like "hasOWn"
// let obj3={obj1,obj2}// concettination
//let obj3 ={}
// console.log(Object.entries(obj1));//Returns an array of key/& values of the enumerable own properties of an object
//log(obj1.hasOwnProperty('lname))
// Destructuring of Object
// let {fname}= obj1
// console.log(fname);
//// Destructuring Object**
// const {Fname:xx}=obj1
// console.log(xx);
//// Implicit run
// const add2=(n1,n2)    //(n1+n2)
// //Object in arrow function {required } 
//  const add2=(n1,n2)=> ({name:"vik"})
// console.log(add2(1,2));
// (()=>{`${nmae}`})("vikash");     //ifee immideate fun invocation & use to ignore GlobleScope pollution need to add ";" to stop that iife


// Browser Execution phase
// 1. Global execution (this)
// 2.m/m phase
// 3. Execution phase => in single thread
//  => at global  this exection refers tot the windowObj in BOM (browser object module)


// conditions
//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }


// switch(cases){
//     case 1 :
//         console.log("case 1");
//         break;
//         case 2 :
//             console.log("case 2");
// default
        
// }

// falsy value 
//false,0,-0,Bigint 0n,",NaN",Null, undefined

//True's value
// "0","false"," ",{},[],()=>{  }, false==""/0=>true


//?? logical nullish
// val= null/undefine ?? 10 ?? 20 => 10
// ternery opt true/false opt (x>20 log("gd"): log("go ahead"))



// let nums =[1,2,3,4,5,6,7,8,9]
// let n = nums.filter((num)=>{return num > 4})  // call bacvk function 
// console.log(n);

// // ===============chaninng result of 1st map/method would pass to the next method/map in chain
//  let chaining = nums.map((num)=> num * 10 ).map((num)=> num / 2).filter((num)=> num >= 30)
//  console.log(chaining);
 

// Reduce method 

// let x = [10,123,1,1]
//  let rArr = [1,2,3,4];
//  let initalVal = 0;
 
//  let rMethod = x.reduce((a,b)=> {
//  console.log(`${a}   and  ${b}`);

//     return a + b
//   },initialVal) 

 
//  console.log(rMethod); // this method could use to the shoping mall like scanne and price would add and add

//// DOM mnuplation by hitesh 

// document.getAttribute('id/class')
// document.setAttribute('id/class','test','theClass/idThatAlreadyExist') // will always override the class


// let x = [{
//     name :"vik",
//     age:32
// }] // seems array of object 

//console.log(Array.isArray(x)); // true (x is an array)
// console.log(typeof x[0] === "object" && !Array.isArray(x[0])); // true (first element is an object)

//  console.log(x.push(4,1,1212));
//  console.log(x.forEach((index,val,arr)=>{
//     console.log(arr.push("hello"));
//     console.log(x.map(()=>{
//         console.log(x.filter((q)=>{
//             // return q < 2000;
//         }))
//     }));
    
//  }));
// console.log(x.shift);

 //document.getElementByID('title').id/className/tag.textContent/innerHTML/innerText//(provides same value)
 //<p style="display none">innerText willnot show/access this but innerContent will do </p>
 
 // querySelector
 // document.querySelector('p:')
//https://www.jobleads.com/search/jobs 
// document.querySelector('.nav-list').style.color="red"
// let navList = document. ("nav-item")
// console.log(navList);
// let convertedArray = Array.from(navList)
// console.log(convertedArray);
// convertedArray.forEach((li)=>{
//     li.style.color=  "red"
// })

// let parentDiv = document.querySelector(".parent") 

// console.log(parentDiv.children)  // result are more likely array but nnot array
// console.log(parentDiv.children[1]) // will access there properties (o/p div.week-day)
// console.log(parentDiv.children[1].innerText) //innerHTML will access content inside
// console.log(parentDiv.children[1].style.color="red");
// let nodeElement = (parentDiv.children);
// //nextElementSibling 
// console.log("NODES: ", parentDiv.childNodes);
// let h1 = document.createElement('h3')
// h1.className='h1class';
// h1.id=Math.round(Math.random()*100 + 1)
// console.log(h1);
// // h1.innerHTML('this is a h1 tag')
// let addH1 = document.createTextNode('this is a h1 by using createTextNode')
// h1.appendChild(addH1)
// h1.style.color="green"
// document.body.appendChild(h1)
// // node list and html collections are two diff thing forEach((loop)=>{call back fn}) could be perform on node list 

console.log("hello");

//hitesh 2:02


