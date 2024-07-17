//* async-await >> promise chains >> callback hell

//* Sync in JS

//* Synchronous:- Synchronous means the code runs in a particular sequence of instructions give in the program. Each instruction waits for the previous instruction to complete its execution.

//*Asynchronous:- Due to synchronous programming, sometimes imp instructions get blocked due to previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// console.log("One");
// console.log("Two");
// console.log("Three");

// function hello(){
//     console.log("This is hello");
// }
// setTimeout(hello,10000);
// console.log("One");
// console.log("Two");
// setTimeout(()=>{
//     console.log("This is hello");
// },5000);
// console.log("Three");
// console.log("Four");

//*Callback is a function passed as an argument to another function.

//not perfect
// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 5, (a, b) => {
//     console.log(a + b);
// });

// const hello=()=>{
//     console.log("hello");
// }
// setTimeout(hello,1000);

//*************Callback Hell********* 
// *Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
//This style of programming becomes difficult to understand and manage.

// function getData(dataId, getNextData) {

//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1, () => {
//     console.log("Fetching Data...2");
//     getData(2, () => {
//         console.log("Fetching Data...3");
//         getData(3,()=>{
//             console.log("Fetching Data...4");
//             getData(4);
//         });
//     });
// });

//***********************Promises****** */
//Promise is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.

// let promise= new Promise((resolve, reject)=>{..})
//resolve and reject are callbacks provided by JS.

// let promise = new Promise((resolve, reject) => {
//     console.log("This is promise");
//     resolve("Successful");
//     reject("Network error");
// });
// console.log(promise);

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             // resolve("Success");
//             reject("Network error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 4000);
//     });
// }
// getData(1, () => {
//     console.log("Data Fetching...");
//     getData(2, () => {
//         console.log("Data Fetching...");
//         getData(3, () => {
//             console.log("Data Fetching...");
//             getData(4, () => {
//                 console.log("Data Fetching...");
//                 getData(5);
//             });
//         });
//     });
// });

//A JavaScript Promise object can be:
//  -Pending : The result is undefined.
//  -Resolved : The result is a value(fulfilled).
//  -Rejected : The result is an error object.
//Promise has state(pending, fulfilled) and some result(result for resolve and error for reject.).

//******.then() and .catch() */
// promise.then((res)=>{...})
// promise.catch((err)=>{...});

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("This is promise");
//         // resolve("123");
//         reject("Network error");
//     })
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res);
// })
// promise.catch((err)=>{
//     console.log("Promise rejected",err);
// })

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("success");
//             reject("Network error")
//         }, 4000);
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("success");
//             reject("Network error")
//         }, 4000);
//     });
// }

// // console.log("fetching data1...");
// // let p1 = asyncFunc();
// // p1.then((res) => {
// //     console.log(res)
// //     console.log("fetching data2...");
// //     let p2 = asyncFunc2();
// //     p2.then((res) => { console.log(res) });
// // });

// //or

// console.log("fetching data1...");
// asyncFunc().then((res) => {
//     console.log(res)
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => { console.log(res) });
// });


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//             reject("Network error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 4000);
//     });
// }
// console.log("fetching data 1...")
// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
// })

// or

// console.log("fetching data 1...")
// getData(1).then((res) => {
//     console.log(res);
//     console.log("fetching data 2...")
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });
// getData(1).catch((err) => {
//     console.log(err);
//     console.log("fetching data 2...")
//     getData(2).catch((err) => {
//         console.log(err);
//     });
// });

// *Promise chain

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             // resolve("Success");
//             reject("Network error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 4000);
//     });
// }
// console.log("fetching data 1...")
// getData(1).then((res) => {
//     console.log("fetching data 2...")
//     return getData(2);
// }).then((res) => {
//     console.log("fetching data 3...")
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });

// console.log("fetching data 1...")
// getData(1).catch((err) => {
//     console.log("fetching data 2...")
//     return getData(2);
// }).catch((err) => {
//     console.log("fetching data 3...")
//     return getData(3);
// }).catch((err) => {
//     console.log(err);
// });

//************************ Async - Await ******************

// async function always returns a promise.
//syntax:
// async function myFunction(){...}
//await pauses the execution of its surrounding async function until the promise is settled.

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("whether data");
//             resolve(200);
//         },2000);
//     });
// }

// //example of how to write.
// async function getWeatherData(){
//     await api();
//     await api();
//     await api();
// }

// function getData(dataId, getNextData) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data", dataId);
//                 resolve("Success");
//                 reject("Network error");
//                 if (getNextData) {
//                     getNextData();
//                 }
//             }, 2000);
//         });
//     }

// async function getAllData(){
//     console.log("fetching data 1...")
//     await getData(1);
//     console.log("fetching data 2...")
//     await getData(2);
//     console.log("fetching data 3...")
//     await getData(3);
// }
// getAllData();

// IIFE: Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.

// (function (){
//     //...
// })();

// (()=>{
//     //...
// })

// (async ()=>{
//     //...
// })();

// (async function(){
//     console.log("fetching data 1...");
//     await getData(1);
//     console.log("fetching data 2...")
//     await getData(2);
//     console.log("fetching data 3...")
//     await getData(3);
// })();

//*Difference between trio

//callback-hell
// getData(1, () => {
//     console.log("Fetching Data...2");
//     getData(2, () => {
//         console.log("Fetching Data...3");
//         getData(3,()=>{
//             console.log("Fetching Data...4");
//             getData(4);
//         });
//     });
// });


//Promise-chain
//console.log("fetching data 1...")
// getData(1).then((res) => {
//     console.log("fetching data 2...")
//     return getData(2);
// }).then((res) => {
//     console.log("fetching data 3...")
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });


//Async-Await
// async function getAllData(){
    //     console.log("fetching data 1...")
    //     await getData(1);
    //     console.log("fetching data 2...")
    //     await getData(2);
    //     console.log("fetching data 3...")
    //     await getData(3);
    // }
    // getAllData();