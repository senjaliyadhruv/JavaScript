//*******************Events in JavaScript*************** */
//The change in the state of an object is known as an event.
//Events are fired to notify to code of "interesting changes" that may affect code execution.
//ex.
//Mouse events(click, double click, etc.)
//Keyboard events(keypress, keyup, keydown)
//Form events(Submit, etc.)
//Print event and many more

// let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("btn1 was clicked.....");
//     let a=25;
//     a++;
//     console.log(a);
// }

// let div=document.querySelector("#div1");
// console.log(div);
// div.onmouseover=()=>{
//     console.log("You are inside the div");
// }

// let btn1=document.querySelector("#btn1");
// //in onclick method we can call only one function on one tag. when we call another then it override on the first one.
// btn1.onclick=()=>{
//     console.log("Handler 1");

// }
// btn1.onclick=()=>{
//     console.log("Handler 2");

// }

//*Event Object*****
//it is a special object that has details about the event.
// it gives all details about the event.
// All event handler have access to the event object's properties and methods.

//node.event=(e)=>{
//handle here
// }

// e.target,e.type,e.clientX,e.clientY


// let btn1 = document.querySelector("button");
// console.log(btn1);
// btn1.onclick = (e) => {
//     console.log(e.type);//it shows that event is click event
//     console.log(e.target);
//     console.log(e);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// let div = document.querySelector("#div1");
// console.log(div);
// div.onmouseover = (e) => {
//     console.log("You are inside the div");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }


//***********Event Listeners***********/

//we can add or remove event on the node.
//node.addEventListener(event, callback);
//node.removeEventListener(event,callback);
//note*: the callback reference should be same to remove

//when we call multiple event listener on same element then it displays all the event. override doesn't happen.
// let btn1 = document.querySelector("#btn1");
// const third=()=>{
//     console.log("btn was clicked.... third");
// }

// btn1.addEventListener("click", () => {
//     console.log("btn was clicked.... first");
// });
// btn1.addEventListener("click", () => {
//     console.log("btn was clicked.... second");
// });
// btn1.addEventListener("click", third);//same callback
// btn1.addEventListener("click", () => {
//     console.log("btn was clicked.... fourth");
// });
// //both callback function should exact same .
// btn1.removeEventListener("click", third);//remove karva ek variable ma store karvu pade.//same callback

//*Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again. */

// let btn1 = document.querySelector("#btn1");
// let body = document.querySelector("body");
// let currentMode = 'light';

// btn1.addEventListener("click", () => {
//     if (currentMode === 'light') {
//         currentMode = 'dark';
//         body.style.backgroundColor = "black";
//         body.style.color = "white";
//         btn1.innerText="Switch to light Mode"
//     }
//     else {
//         currentMode = 'light';
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         btn1.innerText="Switch to Dark Mode"
//     }
//     console.log(currentMode);
// });
