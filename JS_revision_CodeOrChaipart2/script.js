let ObjectBasicTOAdvance = () => {
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
        modl: "hondaCity",
        year: 2022,
        mycar: function (modl, year) {
            (this.year + this.modl);

        }
    }


    let a = (car1.mycar());
    console.log(a);

    class classForObj {
        constructor(brand, year) {
            this.brand = brand;
            this.year = year;
        }
    }
    let myObj1 = new classForObj('newcar', '2020')
    console.log(myObj1.toString);


    let hello = "my name is hello"
    document.getElementsByClassName('test').innerHTML = hello;
    // document.querySelector('.test').innerHTML = myObj1.toString();

    let mysym = Symbol('key 1')
    console.log(typeof mysym);
    const sym1 = Symbol('key 1');
    const sym2 = Symbol('key 1');
    console.log(sym1 === sym2); // false

    // const tuser = new Object() > singleton type of obj
    // const tuser = {} > non singleton o/p = {}

    //Object nesting
    let objP = {
        child1: {
            discription: "child1 is avl",
            child2: {
                child2Name: "xyz",
                2: "hello number key"
            }
        }
    }
    console.log(objP.child1?.child2[2]);//2 is a number, so you can't use it with dot notation
    console.log(objP?.child1?.child2?.[2]);//full optional chain (?.) work like if else 

    //object concetination
    let obj3 = Object.assign({}, objP, myObj1)//{}target,source1, source2;{} is optional
    // let obj4=(...objP,...myObj1)

    //array of object do own
    let arraysObj = [
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
    let { modl } = car1
    console.log(modl);
    // aslo we can use  with diff var name 
    let { modl: modlCopy } = car1
    console.log(modlCopy);

    //nested destructing 
    let objPx = {
        child1x: {
            discription: "child1 is avl",
            child2: {
                child2Name: "xyz",
                2: "hello number key"
            }
        }
    }
    let { child1x: {
        discription,
        child2: { child2Name, 2: iAM2 }

    } } = objPx
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


function aboutThefunction() {
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

    function createMultiplier(multiplier) {
        return function (num) {
            return num * multiplier;
        }
    }
    let double = createMultiplier(2)
    console.log(double(5));
    let triple = createMultiplier(3)
    console.log(triple(6));//o/p not a number 


    let fn = (n = 2, n1) => {
        // let result =  n+n1;
        console.log("I will printable bcz i came before  result in here");
        if (typeof n === "number" && typeof n1 === "number") {
            return n + n1;
        }
        else {
            return "invalid value,plz enter a number"
        }
        console.log("I will not printable bcz i c   ameafter result in here");

    }


    objeFn = {
        userName: "mySelf",
        value: 200
    }
    function handelObj(anyObj) {
        console.log
            (`my name is ${anyObj.userName}, and the product value is ${anyObj.value}`)
    }

    handelObj(objeFn)

    function thisFn() {
        username = "vik",
            console.log(this.username);//undefined , this will work with obj
    }

    console.log(thisFn());
    //arrow function 
    let arrowFn = (num3, num4) => (num3 + num4 + ({ username: "nameVik" }))//if we are using {} have to use return as well
    console.log(arrowFn(3, 4));

    // to return a obj we have to use ({})
    //iife = use to avoid the globel scope issues 
    (function namedIffe() {
        console.log((`i am iffe `));

    })('arrgumes');//iffe function must be end with ; to run the next iffe or code otherwise there wouldd be error  

}

let conditionLoopMapReduce = function () {
    //Conditon
    // falsy values = false, 0, -0, bigInt 0n, "", null, undefine, NaN;
    //rest are truthy value ex: "0", "false", "space", [], {}, function(){}
    const emptyObj = { usereName: 12 }
    if (Object.keys(emptyObj).length === 0) {
        console.log('obj is empty');

    } else {
        //console.log(Object.keys(emptyObj));// will print the key in the form of obj

    }


    //(??) Nullish Coalescing Operator
    // //operator val1= null/undefined ?? 10 ?? 54 /o/p = 10 // will chk for 1st in case not avl then will print 10; used to used for the dsa or api values

    let aTestMap = new Map()
    aTestMap.set('IN', 'India')
    aTestMap.set('US', 'UIndia')
    aTestMap.set('NZ', 'ZIndia')

    for (const [keysOfaTestMap, vlauesOfaTestMap] of aTestMap) { // also can do like this for(const [key,value] of aTestMap)
        console.log(vlauesOfaTestMap);// will print vlaue in the form of object

    }

    const myObjectForOF = {
        userName: "gamers",
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

    const pLang = [11, 22, 33, 44, 55]
    for (const key in pLang) {
        console.log(key); // will print keys 0,1,2,3,4
        console.log(pLang[key]);// will print values 11,22,33,44,55

    }
    //for each lopp most used for array
    //parameter of loop already injected into the js 
    const arrForEach = ["i am for Each", 55]
    arrForEach.forEach((val, index, fullArray) => { // we can give a function referance not declare only to the fpor each like forEach(printForEachFunctio)
        console.log(val, index, fullArray);

    })
    // Output =>> i am for Each 0 
    // (2) ['i am for Each', 55]
    //  55 1 
    // (2) ['i am for Each', 55]

    let myCodingLang = [{
        lanName: "JS",
        lanFileName: "filejs",
    },
    {
        lanName: "Python",
        lanFileName: "filejs1",
    },
    {
        lanName: "OOps",
        lanFileName: "filejs2",
    }]

    myCodingLang.forEach((item, index, arr) => {
        console.log(item.lanName);
        // console.log(index);

        //return // return a result is not allowed in forEach
    })

    // forEach loop does not return then in this case we will use filter(()=>{})
    let forEachValue = myCodingLang.forEach((item, index, arr) => {
        //console.log(item);
        return item
        // console.log(index);


    })
    console.log(forEachValue);      // undefined

    //filterFunction
    const newCoding = myCodingLang.filter((item) => {
        return item.lanName.length > 1
    })
    console.log(newCoding);

    // 1. Filter by property value
    const jsItems = myCodingLang.filter(item => item.lanName === "JS");

    // 2. Filter by property containing string
    const hasJs = myCodingLang.filter(item => item.lanFileName.includes("js"));

    // 3. Filter by multiple conditions
    const multiFilter = myCodingLang.filter(item => {
        return item.lanName.length > 1 && item.lanFileName.startsWith("file");
    });

    // 4. Filter truthy values (if property exists)
    const hasFileName = myCodingLang.filter(item => item.lanFileName);

    // 5. Filter by index
    const firstTwo = myCodingLang.filter((item, index) => index < 2);

    //filter


    // Correct way - using proper parameter names
    let pLangFilter = myCodingLang.filter((item, index, array) => {
        return item.lanFileName === "filejs2" && index.pLangFilter === "lPython";
    });

    console.log(pLangFilter);
    // Output: [{ lanName: "OOps", lanFileName: "filejs2" }]

    //map is also a callback function 
    let mapNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let newNumber = mapNumber.map((num) => num + 10)
    console.log(newNumber);

    //chaing of methods map()=> num * 10.map( here values are num * 10).filter(true or false).forEach() etc.
    //reduce method *

    const myTotal = mapNumber.reduce((accumlator, currentValue) => {
        return accumlator + currentValue
    }, 0) // 0 is an intital value accumlator is an variable to make accumlator to understand we provide the initialvalue i.e 0

    console.log(myTotal);



    let course = [
        {
            courseName: "Js",
            price: 999
        },
        {
            courseName: "Js",
            price: 1999
        },
        {
            courseName: "Js",
            price: 2999
        }
    ]


    let chkPrice = course.reduce((accumlator, item) => accumlator + item.price, 0); // mostly reduce use for ShopingCarts

    if (typeof chkPrice === 'number') {
        console.log(chkPrice);

    } else {
        console.log("enter a valid val");

    }
}
let domM = function (){
    //Dom
    //The DOM API (Application Programming Interface) is a set of Methods and Properties that allow JavaScript to change the 
    // content, structure, and style of any HTML elements.
    //The document object is the owner of all other objects in your web page.


    let x = (document.querySelector('h1'));
    if (x) {
        console.log('true x', x);
        document.querySelector('h1').style.color = "red"
    }
    //create an element
    document.querySelector("#header").setAttribute("class", 'testSetAtt header')// it will override the already class
    document.body.style.color = ""
    //document.querySelector("#header").innerHTMl/innerText/InnerCOntent
    // let uList = document.querySelector("ul")
    // let listItem = uList.querySelector('li')


    //Node list and HTml collection are not pure array , we have to make them array like all method map() will avl 
    // querySelector,getElementById/className will give you  HTML collection ,querySelectorAll will gice you node list can apply forEach() as well
    const myLi = document.querySelectorAll('li')
    myLi[1].style.cssFloat = "color=red;"

    let myList = document.querySelectorAll('li')
    myList.forEach((li) => li.style.backgroundColor = "red") // here li is all the list item

    // for using map() we have to convertn the node list to the proper array    
    let myListArray = Array.from(myList)
    myListArray.map((index) => index.innerHTML = "List Items")

    // by using same method we can convert the html collectio as well

    let myListItem = document.querySelectorAll('.listItem') // give the HTML collections 
    Array.from(myListItem); // converted to an array
    myListItem.forEach((li) => {
        console.log(li)
    })

    // acessing child using childer,childNode,firstChild,lastChild,firstElemenChild,lastElementChild,
    //Acessing parent from child node child.parentElement, nextElementSibling  its call traversing
    let parent = document.querySelector('.parent')
    Array.from(parent.children).forEach((div) => div.style.color = "green")
    parent.children[1].style.color = "yellow" // can save t an veriable also

    for (i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i].innerHTML);

    }

    // creating new elements or node 
    let h1 = document.createElement('h1')
    console.log(h1);

    h1.setAttribute("titel", "Hello I am created title")
    h1.innerHTML = "I am H1 attteched Child"// can give style as well , loops as well 
    // let h1Text= document.createTextNode=("I am Text Node")
    // h1.appendChild(h1Text)
    document.body.appendChild(h1)// attech to the body h1

    // add a new day function optimised day
    function addDay(newDay, ExtraDay) {
        let div = document.createElement('div')
        div.classList.add('child-added')
        // div.classList.remove('child-added')
        div.textContent = `${newDay} ${ExtraDay}`
        document.querySelector('.parent').appendChild(div)
        if (div.textContent != "wow") {
            div.classList.remove('child-added'); //.remove()
            //         div.classList.remove('add');  // Can remove later
            // div.classList.toggle('add');  // Can toggle
        }
    }
    addDay('day 5', 'New Day')

    //Edit the day = replaceWith()
}


//Events
//type,timestamp,defaultPrevented(stop the default behaviour of tag),target,toElement, srcElement, currentTarget
//clintX/Y, screenX/y
//altKey, ctrlKey, shiftKey

//event Propogations(bubling o/p child clicked > parentClicked) = eventPublick(default which is false), eventCapturing(true parent 1st > child click)
//e.stopPropagation() will st0p the bubbling will stay on the clicked one // child is clicked
//prventDefault 

document.querySelector('.googleLink').addEventListener('clcik',function(e){
    e.preventDefault();
    e.stopPropagation();
})
    // //onclick hide the div
            document.querySelector('.ul-list').addEventListener('click',function(e){
                console.log(e.target.parentNode);
                let removeIt = e.target.parentNode;
                removeIt.remove()
                
            })
            //tag name
    
// setTimeout/interval(),clearTimeout()

let referanceOnly = function(){
    console.log("i would be refered in timout to get print ")
}
const stopMe = setTimeout(referanceOnly,3000)
document.querySelector('#clear').addEventListener('click',function(){
    clearTimeout(stopMe)
    console.log('setTimeOut is stoped');
    
}) // same as with setInterval() it also can have perameters and have an extra var 
//genrate a random body bg color after earch second 

// Fixed color generator
const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#'; // Added 'let'
    for(let i = 0; i < 6; i++) { // Added 'let'
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Store interval ID
let intervalId = null;

// Start function - only sets up event listener
function startInterval() {
    document.querySelector('.start').addEventListener('click', () => {
        // Clear any existing interval first
        if (intervalId) {
            clearInterval(intervalId);
        }
        
        // Start new interval
        intervalId = setInterval(() => {
            document.querySelector('body').style.backgroundColor = randomColor();
        }, 1000);
        
        console.log('clicked startInterval button');
    });
}

// Stop function - only sets up event listener
function stopInterval() {
    document.querySelector('.stop').addEventListener('click', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            console.log('clicked stopInterval button - interval cleared');
        }
    });
}

// Initialize event listeners
startInterval();
stopInterval();

//==========Project Press any key===================

const insert = document.querySelector('.insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
});
//==Modern aproch
window.addEventListener('keydown', (e) => {
    insert.textContent = `
    Key: ${e.key}
    Code: ${e.code}
    KeyCode (deprecated): ${e.keyCode}
    `;
});


