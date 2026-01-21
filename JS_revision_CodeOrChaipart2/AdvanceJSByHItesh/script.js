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
(function promises() {

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
        setTimeout(() => {
            if (!x) {
                resolve
                console.log("five is true");

            } else {
                reject("five is flase")
            }
        }, 3000)

    }).then((resolved) => console.log("five is resolved")).catch(
        (err) => console.log("five have an err")).finally(() => {
            console.log("finally five has been resolved");
        })
    let asyncFivePromise = async function asynPromiseFIVE(paramsFive) {

        try {
            const response = await promiseFive
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }
    asyncFivePromise()
})//can do iife

function promiseAsyncFetch() {
    const randomUser = async function (params) {
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

    //   const response = await fetch("https://example.org/post", {
    // method: "POST",
    //If the mode option is set to no-cors, then method must be one of GET, POST or HEAD.
    //   });
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


function classesPrototypeAndsetProto() {
    //==================Classes=======================
    //JS doesn't have classes ,most of js is based on the prototype
    //a fundamental mechanism for object inheritance, allowing objects to inherit properties and methods from 
    // other objects. It acts as a shared
    //use to use sevices, it have component
    // object literal
    //Absolute,inheriitance,Encapsulation,Polymorphism read it from chatGpt
    //* object LItreals are nothing but js a object 
    console.log(this)//undefined by default refers to window object

    let user = {
        name: "vikash",
        signedIn: true,
        getDetails: function () {
            console.log("method");
        }
    }
    console.log(user.name);

    class car {
        constructor(nmae) {
            return this.name
        }
    }
    console.log(new car('mycar'));

    const date = new Date(); // new is a consturctor function new Promise()
    console.log(date.getFullYear());
    // console.log(date.setFullYear(2121));

    function userFn(userName, age) {
        this.userName = userName;
        this.age = age;
        return this
    }
    let userOne = new userFn("Vikash", 22)
    let userTwo = new userFn("Jone", 23)
    console.log(userOne);
    console.log(userTwo.constructor.length);// we used to use new to avoid the overwrite values

    //Instanceof // to chect the nstance is same or not do r&d on mdn js

    //*ProtoTyple
    // prototype → Property of constructor functions

    // __proto__ → Property of instances (points to constructor's prototype)

    // Prototype chain → How JavaScript finds properties/methods

    // Inheritance → Connect prototypes with Object.create()

    //====================== advance function*

    function userFnOne(userName, price) {
        this.userName = userName;
        this.price = price;
    }
    userFnOne.prototype.increment = () => {
        this.price++
    }
    userFnOne.prototype.printMe = function () {
        console.log(`price is = ${this.price}`);

    }
    let chai = new userFnOne('vikash', 99) // must use with new otherwise TypeError: Cannot set properties of undefined 
    // we have to tell to the userFnOne that There is   new method   inroduced and the new keyworld do such work 
    console.log(chai);

    //behind the sean new do alot of things 
    // Creates empty object: {}

    // Sets prototype: {}.__proto__ = User.prototype

    // Binds this: this = {} inside function

    // Executes function: User("John") runs

    // Returns this: Returns the object automaticallTLDR: new = Create object + Link prototype + Call function with this + Return object

    Object.prototype.myMehod = () => {
        console.log('method is avl for for all the object');

    }
    userFnOne.myMehod()
    userFn.myMehod()
    let myArr = [1, 2, 3, 4, 5, 6]
    myArr.myMehod(`hello I am avl in array`)
    myArr.myMehod(`hello I am avl in array`)
    console.log();
    Array.prototype.heyPowerMethod = () => {
        console.log("Array power is avl");

    }
    myArr.heyPowerMethod()// only array woul abl to accec the value 


    const teacher = {
        makeVideo: true
    }
    const teachingSkills = {
        isAvl: true
    }
    const teachSupport = {
        makeVideoAssignment: true,
        fullTime: true,
        __proto__: teachingSkills,//borrow all the property of teaching
    }
    Object.prototype.objMethod = () => console.log("Teacher method is avl");
    teachSupport.objMethod()
    //tolink the two oject we used to use __proto__
    // teacher.__proto__ = teachingSkills //here teacher obj also can acess all the property of the object 
    //This is the prototiple Inheritance
    console.log(teacher.isAvl);
    if (teacher.isAvl) {
        console.log('teachingskill are avl');

    } else {
        console.log('teachingskill are not avl or teacher obj doesn"t have acess of properties ');

    }
    //__proto__ is out dated, new one is Object.set
    Object.setPrototypeOf(teachSupport, teacher)// now the teachingSporrt have acess of teacher properties as well

}
//=========call and this bind ==============
function classThis() {

    let objCall = {
        vichle: " car",
        callMethod: function (brand) {
            return this.brand
        }
    }
    let bike = { brand: "Yahama" }
    console.log(objCall.callMethod.call(bike));
    console.log(objCall.callMethod.apply(bike, []))
    function callBindApply() {
        const person = { name: "Alex" };

        function showInfo(age, city) {
            return `${this.name} is ${age} from ${city}`;
        }

        // call() - args separately
        showInfo.call(person, 30, "NY"); // "Alex is 30 from NY"

        // apply() - args as array
        showInfo.apply(person, [30, "NY"]); // "Alex is 30 from NY"

        // bind() - returns function
        const boundFunc = showInfo.bind(person, 30, "NY");
        boundFunc(); // "Alex is 30 from NY"
    }
}

//=========Classes=================
//can add properties function 
function classBasic() {
    class User {
        constructor(userName, email, password) {
            this.userName = userName;
            this.email = email;
            this.password = password;
        }
        usernameUppercase() {
            return `${this.userName.toUpperCase()}`
        }
        encryptPassword(password) {
            return `${this.password}abc`;
        }
    }
    const chai = new User("chai", "chai@gmail.com", 123)
    console.log(chai);
    console.log(chai.usernameUppercase(), chai.encryptPassword());
}

//==============Inheritanc
function inheritanceClasses() {
    class inheritancClass {
        constructor(username) {
            this.username = username;
        }
        static logMe() {                             //static will stop to acess the method in the inheritanced class
            return `${this.username} is a userName`
        }
    }
    class teacher extends inheritancClass {
        constructor(username, email) {
            super(username)// use to acess the inherited perameter or properties 
            this.email = email;
        }
        //also can make some method and call them with . or ij function with call extrension
    }
    const chai1 = new teacher("vikash", "email.com")
    console.log(chai1);
    console.log(teacher instanceof inheritancClass);// to chek if the class teacher has been formed from inheriteClass
}

//==============bind a react expample watch again=====================


function definePropertyOfObj(params) {
    console.log(Math.PI);//cannot chane the value bcz its hardcodeded in very Deep so we can do as well our method
    //  too that values would not be changeable 
    console.log(Object.getOwnPropertyDescriptor(Math, "PI")); //writable: false, enumerable: false, configurable: false}

    let chaiObj = {
        name: "masal Chai",
        price: 50
    }
    // console.log(Object.getOwnPropertyDescriptors(chaiObj,"name"));//writable: true, enumerable: true, configurable: true
    //to write for single property Object.defineProperty(chaiObj, "name", {  // ✅ 3 parameters
    //     writable: false, enumerable: false, configurable: false
    // })

    // Define MULTIPLE properties at once (correct syntax)
    Object.defineProperties(chaiObj, {
        name: {
            writable: false,
            enumerable: false,
            configurable: false
        },
        price: {
            writable: false,
            enumerable: true,
            configurable: true
        }
    });
    console.log(Object.getOwnPropertyDescriptors(chaiObj, "name"));//flase

    for (let [key, value] of Object.entries(chaiObj)) {    // to access the  properties of chaiObject we have to use Object.entries                              
        console.log(`${key} : ${value}`);

    }
}







