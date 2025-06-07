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

console.log("hello");

//hitesh 2:02



// Events in DOM**************************************************

// // node list and html collections are two diff thing forEach((loop)=>{call back fn},false
//true[event propagation/ bubbling default is  false] ) could be perform on node list 

//type(keybord types eent, moue event, timeStemp, defaultPreventred (to control the default behaviour of elements or navigation of link tag and window behavior of browser))
//target, toElement, srcElement, currentTarget
// screen/clientX, clintY
//altKey, ctrlKey, shiftKey, keyCode (likea,b,c,d,...)


// // project 1 color picker 
//  let list_item = document.querySelectorAll('.list-item')
//  console.log(list_item)
//  let body = document.querySelector('body')
//  console.log(body);

//  list_item.forEach(function (lst) {
//     console.log(lst);
//     lst.addEventListener('mouseover', function(e) {
//         console.log(e)
//         if (e.target.className === 'list-item red') { //className returns the full string ("list-item red"), not just "red"
//             body.style.backgroundColor = 'red'
//         }
//         else if(lst.id.contains === 'blue'){
//               body.style.backgroundColor = e.target.id;

//         }
//         else if(lst.className.contains === 'list-item yellow'){
//             body.style.backgroundColor = e.target.className;

//       }

//       else if(lst.className.contains === 'list-item white'){ 
//         body.style.backgroundColor = 'white';

//   }
//     })
//  })
 

// // else if (lst.id.includes('blue')) {  // Checks if ID contains 'blue'
// // body.style.backgroundColor = 'blue';
// // }//
// // if (lst.classList.contains('red')) {  // Checks if element has class 'red'
// //     body.style.backgroundColor = 'red';
// // }
// // 📖 includes() vs contains()
// // Method	      Applies To	     Purpose	                                  Example
// // .includes()	Strings & Arrays	Checks if a value exists in a string/array	"hello".includes("ell") → true
// // .contains()	classList (DOM)	Checks if an element has a class	element.classList.contains("red")

//bubbling in js
// document.getElementById('xyz').addEventListener.apply('click',function(){log;e.stoppropagation},flase/true)
// while using false it will go like img clicked > li clicked > ul>clickked;; but if this true will go ulclicked >> li clicked >> img; depens on useCase 




////=====================================================================================================================
////
//api////// api.github randomuser. me 
// there is alot of data in the api can read in the form of aex and son file   to read that data we are going to use the website kinda recomdation only "son formatter "

//XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. 
// This enables a Web page to update just part of a page without disrupting what the user is doing.
// Events******
// abort = Fired when a request has been aborted XMLHttpRequest.abort().

// error =

// load = Fired when an XMLHttpRequest transaction completes successfully.the onload event .

// loadend = Fired when a request has completed, whether successfully (after load) or unsuccessfully (after abort or error). Also available via the onloadend event handler property.

// loadstart = Fired when a request has started to load data. Also available via the onloadstart event handler property.

// progress = Fired periodically when a request receives more data. Also available via the onprogress event handler property.

// readystatechange =  Fired whenever the readyState property changes. Also available via the onreadystatechange event handler property.

// timeout = Fired when progress is terminated due to preset time expiring. Also available via the ontimeout event handler property.

// Holds the status of the XMLHttpRequest.
       //State
// 0: unsend            open()request not initialized
// 1: OPENED            open() server connection established
// 2: Headers Recive    send()  request received
// 3: LOADING           processing request
// 4: DONE              request finished and response is ready

// data data = Number/String/JSON.parse(this.stringFromURL) // .parseto change the string in number/string and JSON 

//V8 engine      github/v8     Console.log====================
// its a dev tool nt a part of JS


//FETCH//Promises =6.22.00 hitesh part 2========================================================================
// Rad this once https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

//The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
// A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, 
// a then() handler must check the Response.ok and/or Response.status properties.


//Classes / object orianted programing
//js is a prtotype based languages, its classes are primarerlly syntatic suger over prototype-bases language
// have constructor/inhertance  programing peradime (codeing style structur classes/function etc  )
//oops : objects : collection of propreties(variable/constents and method(function)
//why use opps : js to ignorance of messing up code 
// parts of oops : Objects literal(literally)
// constructor ,prototype, classes, instances (new, this etc )
//read on own : Abstracton(hide the detail like fetch ),inheritance, encapsulation(rapup the data/things ), plymorphism(many roop/woks done by one code)
       //class literals       
const user = {
       useName : 'vikash',
       loginCount : 8,
       getUserData : function(){
              return ("got user data from user databace")
       }
   } 
   console.log(user.getUserData());
   

