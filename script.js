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

console.log("tanmay is hacker")
console.log("rohan is hecker")


setTimeout(() => {
    console.log("i am inside the timer")
}, 3000)

console.log("The end")
//call backs 

