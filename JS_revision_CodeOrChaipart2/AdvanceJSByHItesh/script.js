//==============Apply() call(without argument)
// Basic apply() Syntax
// The apply() method takes this as the first argument.

// The second argument is an array of values passed to the function.

// Syntax
// functionName.apply(thisValue, [arg1, arg2, ...]);

//==============Advance MOdule ========promises=====APIs==========
//API = mechanisms that enable two software components to communicate with each other using a set of definitions 
// and protocols
//Random user api (very populer free) use https://jsonformatter.org/

//A callback is a function that is passed as an argument to another function, and is intended to be executed 
// at a later point in time,
// typically when a specific event occurs or an asynchronous operation completes.
(function promises(){

//Promises*** The Promise Object represents the completion or failure of an asynchronous operation and its results.

// A Promise can have 3 states:
// pending	initial state
// rejected	operation failed
// fulfilled	operation completed

console.log("Hello advance JS ");

let promiseOne = new Promise((resolve, reject) => {
    console.log("I am async")
    resolve({
        userName: "vikash",
        LastName: "Malik"
    })//we can pass the data also in the perameter of resolve obj,arr,fn
}).then((user) => {                       //thats how we would acess the data from resolve peraMeter as there is 
// connection b/w resolve and then
    console.log("Promise is resolved");
    console.log(user);

})

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve("Promise has been resolved")
        } else {
            reject("Error occured,somthing went wrong")
        }

    }, 1000)
}).then((resolved) => {
    console.log(resolved);
}).catch((errorCatch) => {
    console.log(errorCatch);

})


let apromise = new Promise((resolve, reject) => {
    let x = false;
    setTimeout(() => {
        if (x) {
            resolve("x is avl")
        } else {
            reject("Err: X vlaue")
        }
    }, 1000)
}).then((resolved) => console.log("x is true")).catch((err) => console.log(err)
).finally(() => {
    setTimeout(() => {
        console.log("Promise has been completed");
        // alert("Promise has been completed");
    }, 2000);
});


// ==================Handling promise with async await =================================
let promiseFive = new Promise((resolve, reject) => {
    let x = true;
    setTimeout(()=>{
        if(!x){
            resolve
            console.log("five is true");
            
        }else{
            reject("five is flase")
        }
    },3000)

}).then((resolved)=>console.log("five is resolved")).catch(
    (err)=>console.log("five have an err")).finally(()=>{console.log("finally five has been resolved" );
    })
    let asyncFivePromise = async function asynPromiseFIVE(paramsFive) {

    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    }
     asyncFivePromise ()
})//can do iife

function promiseAsyncFetch(){
    const randomUser = async function(params) {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            let data = await response.json();
            return data; // Return the data
        } catch (error) {
            console.log("E:", error);
            throw error; // Important to throw error for .catch() to work
        }
    };
    
    // Correct way to get the data
    randomUser()
        .then(data => console.log(data)) // Now you get the actual data
        .catch(error => console.log("Error:", error));
    
        // ==================
    // For use with 'await'
    // async function example() {
    //     try {
    //         const data = await fetchData();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // .then().catch() (for promises)
    // // For promises without 'await'
    // fetchData()
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
    // Minimal difference:
    // try-catch: Use with await, synchronous-looking error handling
    
    // .then/.catch: Use with promises directly, chainable operations
    
    
    //===========Fetch()================
    // The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.
    async function getData() {
        const url = "https://example.org/products.json";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error.message);
        }
      }
      //By default, fetch() makes a GET request, but you can use the method option to use a different request method:
    
      const response = await fetch("https://example.org/post", {
        method: "POST",
        //If the mode option is set to no-cors, then method must be one of GET, POST or HEAD.
      });
    // Setting a body:
    // it's the thing the client is sending to the server.
    // You cannot include a body with GET requests, but it's useful for requests that send content to the server,
    //  such as POST or PUT requests. For example, 
    // if you want to upload a file to the server, you might make a POST request and include the file as the request body.
    // const response = await fetch("https://example.org/post", {
    //     method: "POST",
    //     body: JSON.stringify({ username: "example" }),
    //     // …
    //   });
    //*Request headers give the server information about the request
    //*To make a request cancelable, create an AbortController, and assign its AbortSignal to the request's signal property.
    //Handling the response
    // Using Deferred Fetch
    // The fetchLater() API provides an interface to request a deferred fetch that can be 
    // sent after a specified period of time, or when the page is closed or navigated away from.
    // For more info have a loook at https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
}


//==================Classes=======================
//JS doesn't have classes ,most of js is based on the prototype
//a fundamental mechanism for object inheritance, allowing objects to inherit properties and methods from 
// other objects. It acts as a shared
//use to use sevices, it have component
// object literal
let classOne= class car{
constructor (){
    return this.name
}
}
console.log(car('mycar'));


















//https://factech.ai/blog/career/software-product-engineer/ apply here and this https://www.squareradius.in/career