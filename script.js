// //operators 
// let a = 45;
// let b = 45;
// let sum = a+b
// console.log(sum)

// a++;
// console.log(a)

// // let name="tanmay";
// // let age=18;

// // const display=()=>{
// //     console.log(`hey ${name} and your age is ${age}`)
// // }
// const call=()=>{
//     alert('hey this is Pop up ')
// }

// //if-else statements 
// // if(age>=18){
// //     console.log("eligible")
// // }else{
// //     console.log("not eligible")
// // }


// // ternary operators
// // let result = age>=18? "Adult":"minor";
// // console.log(result);



// let obj={
//     name:"jhon",
//     language:"java script",
//     salary:50000,
//     isAdmin:false,
//     "fathers name":"madhu",
// }
// console.log(obj)
// obj.friend ="kumar"
// console.log(obj)



// for(let i = 0; i<=5;i++){
//     console.log(i)
// }

// let i=0;
// while(i<4){
//     console.log(i)
//     i++
// }


// // DOM 

// const display=()=>{
//     let btn1=document.querySelector(".Welcome");
//     btn1.innerHTML = "welcomed";
//     btn1.Style.background="green"
//     console.log(`hey ${name} and your age is ${age}`)
// }

// const magic=()=>{
//     let b1 = Array.from(document.querySelectorAll(".box"))
//     for(element of b1){
//         element.innerText="magic is done"
//     }
// }


// // VERIFICATION_PROJECT
// const verify=()=>{
//     let input = document.querySelector("#age");
//     let age = input.value;

//     if(age>=18){
//         console.log("you can vote");
//         input.style.backgroundColor = "lightgreen";
//     }else{
//         console.log("you can not vote");
//         input.style.backgroundColor = "lightcoral";
//     }
// }


// let div  = document.createElement("div")
// div.setAttribute("class","created")
// document.querySelector(".container").append(div)
// div.innerHTML="hey This element is being inserted by me "
// div.style.background="red";
// div.style.color="yellow";


// let created = document.createElement("div")
// created.setAttribute("class","create")
// document.querySelector(".container").before(created)
// created.innerHTML="Hey I have been inserted by <b>MEEE</b>"
// created.style.background="blue"


// let cont = document.querySelector(".container")
// cont.insertAdjacentText("afterend","this is the conclusion")
// cont.insertAdjacentHTML("beforeend", "I have been inserted at last ") // afterbegin // beforebegin.


let button = document.querySelector(".btn")

button.addEventListener("mouseover", () => {
    document.body.style.background = "grey"
    document.querySelector(".box").innerHTML = "Mouse on!!"
})

button.addEventListener("mouseleave", () => {
    document.body.style.background = "white"
    document.querySelector(".box").innerHTML = "Mouse off!!"
})



document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("child was clicked")

})
document.querySelector(".childcontainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childcontainer was clicked")
})
document.querySelector(".big").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("big was clicked ")
})


function getrandom() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgba(${val1},${val2},${val3})`
}

setInterval(() => {
    document.querySelector(".child").style.background = getrandom();
}, 1000);


// asynchronis 
console.log("hey this is tanmay")
console.log("this is the seconnd line to execute")

setTimeout(() => {
    document.body.style.background = "yellow"
}, 3000)

console.log("The End")
// synchronis and asynchronisis 
console.log("one")
console.log("two")
console.log("three")


//call back is a function passed as an argument to anthoer function 
function greet(name) {
    console.log("hello" + name);
}

function wished(greet) {
    greet("Tanmay")
}


wished(greet)


function sum(a, b) {
    console.log(a + b)
}

function calculator(sum) {
    sum(2, 3)
}


calculator(sum)


const getData = (data, getNextdata) => {
    setTimeout(() => {
        console.log("DATA:", data);
        if (getNextdata) {
            getNextdata();
        }
    }, 2000)
}

// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })


//promises
// let promise = new Promise((resolve, reject )=>{
//     console.log("I am a promise ")
//     resolve()
// })

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise ")
        resolve("Succes")
        reject("error")
    })
}

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise is fullfilled",res)
// })

// promise.catch((err)=>{
//     console.log("promise got error",err)
// })


// synchronisis  
function myDisplayer(some) {
    document.getElementById("demo").innerHTML += some + " ";
}

function myFirst() {
    myDisplayer("hello")
}

function mySecond() {
    myDisplayer("Tanmay !!")
}

myFirst();
mySecond();

// asynchronisis
function Mydisplay(some) {
    console.log(some)
}

function Myfirst() {
    Mydisplay("A")
}

// setTimeout(()=>{
//     Mydisplay("B")
// },2000)


function MySecond() {
    Mydisplay("C")
}
Myfirst();
MySecond();

// set timeOut method 

// function myfunction(){
//     console.log("set Timeout ")
// }


// setTimeout(myfunction,3000)


//set interval method 

// function myfun(){
//     console.log("set interval Method")
// }    

// setInterval(myfun,5000)


// call backs
function dosomething(saydone) {
    console.log("I am doing something ")
    saydone();
}


function saydone() {
    console.log("Task is completed")
}
dosomething(saydone);


function dosomework(handleresult) {      // handleresult is passed as the parameter (callback)
    let result = "task completed"        // we are storing the string in the result 
    handleresult(result)                // we are calling the handleresult same as previous but here it accepts the something input 
}

function handleresult(data) {            // this is the callback , takes an input ! therefore data = result 
    console.log(data)
}

dosomework(handleresult)                // same as previous 


function test(callback) {
    let value = 5;
    callback(value + 5)
}

test(function (value) {
    console.log(value)
})


const start = () => {
    console.log("start")
}

const inside = () => {
    console.log("i am inside the timeout")
}

const stop = () => {
    console.log("END")
}

start();

// setTimeout(() => {          // the set timeout method is the js built in - function 
//     inside()
// }, 2000);

stop();

console.log('A')

setTimeout(() => {
    console.log("B")
}, 0);

console.log("C")

let promise = new Promise((resolve, reject) => {
    resolve("success")          // resolve is called && promise stage changes to full-filled && sucess is the value -> written in the inside paranthesis of resolve 
})

// const p = new Promise((resolve, reject) => {
//     reject("Error");        // reject is called & promise stage changes to rejected && error is same as the sucess in resolve 
// });


const prom = new Promise((resolve, reject) => {
    let success = true                      // we are sending the value to promise 
    // promise stores the value for the later use 
    if (success) {
        resolve("task is completed")
    }
    else {
        reject("Task got error ")
    }
})


const p = new Promise((resolve, reject) => {
    resolve("hey I am tanmay!! ")           // we acces the value through .then() 
})


p.then(x => console.log(x));                // then takes an input from the promise , and takes argments ->call back , parameter inside the call back to store the recived from the promise 


function myDisplayer(value) {
    document.getElementById("demo").innerHTML = value;
    console.log(value)
}


const k = new Promise((resolve, rejct) => {
    ok = false;

    if (ok) {
        resolve(".OK")
    } else {
        rejct(".Not okey!!")
    }
})

k.then(x => myDisplayer(x),         // then accepts the two call-backs 1.for sucess 2.for failure
    x => myDisplayer(x))



function DED(value,background) {
    document.querySelector(".D").innerHTML = "value"
    document.querySelector(".D").style.background=background;
}

const z = new Promise((resolve,rejct)=>{
    value = true;

    if(value){
        resolve("Then !!","red")
       
    }
    else{
        rejct("Catch !! ")
    }
})


z.then(x=>DED(x))
.catch(y=>DED(y))


// promise chainging 
const t = new Promise((resolve,reject)=>{
    resolve(5);         // chaining is just passing value from .then() to another .then()
})

t.then((x)=>{return x*2 ;})
 .then((y)=>{console.log(y)})


const q = new Promise((resolve,reject)=>{
    resolve(2)
})

q.then((x=> x+3))       // without { } functioins auto matically return the value 
 .then((x=> x*4))
 .then(x=> console.log(x))