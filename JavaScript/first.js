// const student = {
//     name: "Dhruv Senjaliya",
//     rollNo: 210430116023,       //we can change object of const but we can not change const variable.
// };
// console.log(student);

// student["name"] = "Dhruv";
// console.log(student.name);

// student["rollNo"]=6023;
// console.log(student.rollNo);

// marks = [0, 1, 2, 3, 4];
// console.log(marks);

// ********************************************** else if statement----------------------

// Grade calculating
// let marks = prompt("Enter student marks:");

// if (marks >= 90 && marks <= 100) {
//     console.log("Grade A");
// }
// else if (marks >= 70 && marks <= 89) {
//     console.log("Grade B");
// }
// else if (marks >= 60 && marks <= 69) {
//     console.log("Grade C");
// }
// else if (marks >= 50 && marks <= 59) {
//     console.log("Grade D");
// }
// else if (marks >= 0 && marks <= 49) {
//     console.log("Failed");
// }
// console.log("Good Byeee");




// *=====================================check the number is multiple of 5 or not?======================

// const num = prompt("Enter the number:");

// if(num %5==0){
//     console.log(num+" is multiple of 5");
// }
// else{
//     console.log(num,"is not multiple of 5");
// }

// *==================================sum of 1 to n using loop===========================

//**********************************************for loop-------------------------
// let n=prompt("Enter the number for calculating the sum of 1 to 'Your_Number'");
// let num = 0;
// for (let i = 1; i <= n; i++) {
//     num = num + i;
// }
// console.log("The sum of " + n + " number is : ", num);
// // console.log(i);// i jotu hoy to var thi declare karvu pade.
// console.log("loop has ended");

//**********************************************while loop**********************************************

// let num =0;
// let i=1;
// while(i<=n){
//     num=num+i;
//     i++;
// }
// console.log("The sum of " + n + " number is : ", num);



//**********************************************do while**********************************************

// let i=10;
// do{
//     console.log("Dhruv Senjaliya");
//     i++;
// }while(i<=20);


// **********************************************for of loop*******************

// let str ="JavaScript";

// //---------------------------------for of loop ma increment athva limit(i<=5) aapvi na pade
// //--------------------------array and string ma use thay.
// let size=0;
// for(let i of str){
//     console.log("i= ",i);
//     size++;
// }
// console.log("Size of string is:" ,size)






// *=*=*=*=*=*=*=*=*=*=*=*=*==================print all even number between 0 to 100====================

// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }










//** Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.*****if game number is 25.
//error..........
// let gameNum = 25;

// let userNum = prompt("Guess the number:");

// while (userNum !== gameNum) {
//     prompt("oops, wrong number. Please try again!!");
// }
// console.log("Congratulation, You Guess right number!!!");







//*************************************string vs template literals */
//string is immutable
// let obj={
//     name:"Dhruv",
//     age:20,
//     rollNo:6023,
// }
// console.log("Name is:",obj.name,"age is:",obj.age,"rollno is:",obj.rollNo);
// console.log(`Name is: ${obj.name} age is: ${obj.age} rollno is: ${obj.rollNo}`);// This is template literals.
// // in this number was not highlights because template literals convert number to strings.
// let templateLiterals = `Name is: ${obj.name} age is: ${obj.age} rollno is: ${obj.rollNo}`;
// console.log(typeof(templateLiterals));






//*************************************String methods***********************/
// let str1="hello! ";
// let str2="How are you?";
// let str3="helololo"

// console.log(str1.concat(str2));

// console.log(str2.slice(2,6));//in this 6th index will not consider.

// console.log(str3.replace("lo","y"));
// console.log(str3.replaceAll("lo","y"));




//**Prompt the user to enter their full name. Generate a username for then based on the input, Start username with @ , followed by their full name and ending with the fullname length   ***********   eg. user name="dhruvsenjaliya", username should be "@dhruvsenjaliya14" */

// let userName=prompt("Enter your username. For ex: dhruvsenjaliya");
// console.log(`@${userName}${userName.length}`);






//************************==================***************Array*********======================***** */
//Array is mutable while string is immutable
//Array is type of object.
//Array is linear collection of items;

// let arr=[5,10,15,20];
// console.log(arr);
// console.log(typeof arr);//result is object

// let arr=["Dhruv","Patel",25,26];//we can write both value: number and string. but this is not right way.
//we can get array items by its index value. index value is starting from 0;




// **Looping on Array
//this is nothing else but this is printing array by loop;

// print array using for of loop
// let arr=[1,2,3,4,5,6,7,8];
// let size=0;
// for(let i of arr){
//     console.log("item at",size,"index is:",i);
//     size++;
// }

//print array using for loop
// let arr=[1,2,3,4,5,6,7,8];
// for(let i=0;i<arr.length;i++){
//     console.log(i);
// }


//uppercase and lowercase and this type of method is only work on for of loop not in for loop
// let arr = ["dhruv","patel"];
// for (let i = 0; i < arr.length; i++) {
//     let city=i.toupperCase();
//     console.log(city);
// }

// let arr = ["dhruv","patel"];
// for(let name of arr){
//     console.log(name.toUpperCase());
// }




//**For a given Array with marks of student--->[85,97,44,37,76,60]. find the average marks of the entire class. */

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i = 0; i < marks.length; i++) {
//     sum += marks[i];
// }
// let avg=sum/marks.length;
// console.log(avg);





//**for a given array with prices of 5 items --> [250,645,300,900,50]. All items have an offer of 10% on them. change the array to store final price after applying offer.  */

// let price = [250, 645, 300, 900, 50];
// for (let i = 0; i < price.length; i++) {
//     let item;
//     item = price[i] / 10;
//     console.log(price[i] - item);
// }





//**there are some method such as : push(),pop(), toString()

// let arr = [1, 2, 3,"dhruv"];

// arr.push(4);// add the element at the end
// console.log(arr);

// arr.pop();
// console.log(arr);//remove or delete last element .
// //we can also print popped element
// let arr2 = arr.pop()
// console.log("deleted element: ",arr2);
// let arr1 = arr.toString();
// console.log(arr1);//method 1

// console.log(arr.toString());// method 2





//**more method: concat(),unshift(),shift() */
// concat()---> joins multiple arrays & returns result
//unshift()---> add element at the start
// shift()---> delete from the start a & return

// let arr=[1,2,3];
// let arr2=["Dhruv","Patel"];

// console.log(arr.concat(arr2));
// arr.unshift(10);
// console.log(arr);

// arr.shift();
// console.log(arr);



//**Slice(), Splice()

//slice()---> returns a piece of the array=====> slice(starting_index,end_index);
//splice()---> change the original array(add, remove, replace) ====> splice(start_index, deleteCount, new_element)

// let arr=[1,2,3,4,5];

// arr.slice(2,4);//wrong way.
// console.log(arr.slice(2,4));// end index is not countable// in this index 2 and 3 will print.
// arr.splice(2,2,5);// in this second 2 means how many elements do you want delete.and 5 is the element which will add
// console.log(arr);





// let arr2=[10,20,30,40,50,60]
// //add element
// arr2.splice(2,0,101);
// console.log(arr2);

// //delete element
// arr2.splice(3,1);
// console.log(arr2);


// //replace element
// arr2.splice(3,1,101);
// console.log(arr2);


//**Create an array to store companies -->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//*******A. Remove the first company from the array.
//*******B.Remove Uber & add ola in its place */
//*******C. Add Amazon at the end */

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//A.
// companies.shift();
// console.log(companies);

//B.
// companies.splice(2,1,"Ola");
// console.log(companies);

//C.
// companies.push("Amazon");
// console.log(companies);




//****************************Function*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=================== */
//Block if the code that performs a specific task, can be invoked whenever needed.
//કોઈ પણ ટાસ્ક આપડે એક વાર લખવું પડે પછી તેને ફાઇલ માં ગમે ત્યાં કોલ કરવી શકીએ. તેને વારંવાર લખવાની જરૂર પડતી નથી.
//function can reduces the code. and it prevent repetition.
//**funtion ma return karya pachhinu ky pn execute thay nahi. */

//simple function

// function myFunction(){
//     console.log("This is function");
// }
// myFunction();
// myFunction();



// function message(msg){//parameter
//     console.log(msg);//takes input as a parameter.
// }

// message("Hey, How are you?")//argument


//method 1
// function sum(a,b){
//     return a+b;// or s=a+b; return s;
//    console.log("after return");
// }
// let res=sum(2,4);
// console.log(res);

//method 2
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(2, 4);
// console.log(a);// here error occus that a is not defined. because of block scope.
//function no scope local variable chhe. etle k block scope */


//***************************************Arrow Function****************************/
//compact way of writing function.
// syntax:

// const functionName=(parameter1, parameter2,.....)=>{
//     //do some work
// }

// //for example
// const sum=(a,b)=>{// barabar ni aa sidde nu arrow function kahevay. barabar no left side nu to variable ma store karavva use thay chhe.
//     return a+b;
// }

//sum function
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// arrowSum(2,3);

// //mul function
// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }
// arrowMul(2,3);

//*Create a function using the "function" keyword that takes a string as a argument and returns the number of vowels in the string.
// function vowelsCount(str) {
//     let count = 0;
//     for (const i of str) {
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u" || i == "A" || i == "E" || i == "I" || i == "O" || i == "U") {
//             count++;
//         }
//     }
//     return count;
// }
// let res = vow("ABCDEabcde");
// console.log(res);

//*Create arrow function to perform the same task.
// let arrowVowelsCount = (str) => {
//     let count = 0;
//     for (const i of str) {
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u" || i == "A" || i == "E" || i == "I" || i == "O" || i == "U") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// arrowVowelsCount("ABCEDabcde");

//*****************************ForEach loop in Arrays *******************/
//*higher order function/methods: parameter ma function pass karie tene. for ex forEach is the higher order function.
//syntax
// arr1.forEach(callBackFunction)
//CallBackFunction: Here, it is a function to execute for each element in the array.
//we can pass arrow function or simple function as a argument.
//A callback is function passed as an argument to another function.
//arr.forEach((val)=>{
//     console.log(val);//in this arrow function is passed as a argument in a foreach method.
// })

//foreach te no te array j return kare.

// let arr=[1,2,3,4,5];

// arr.forEach(function printval(val){
//     console.log(val*2);
// })


// let arr=["pune","delhi"];
// arr.forEach((val,index,array)=>{//aama first parameter value hoy second index hoy and third aakho array hoy.
//     console.log(val.toUpperCase(),index,array);
// })

//*For a given array of numbers, print the square pf each value using the forEach loop.

// let arr=[1,2,3,4,5,6,7,8];

//method 1:
// arr.forEach((val)=>{
//     console.log(val**2);//val*val
// })


//method 2:
// let arr=[1,2,3,4,5,6,7,8];
// let calSquare=(val)=>{
//     console.log(val**2);//val*val
// }
// arr.forEach(calSquare);


//**some more Array Method */

//*******************************Map********************************** */
//creates a new array with the results of some operation. the value its callback returns are used to form new array.
//syntax:
// arr.map(callbackfunction(value,index,array))
//map new array return kare.


// ex
// arr=[1,2,3,4,5]
// let newArr=arr.map((val)=>{
//     return val*val;
// })
// console.log(newArr);

//*************************************Filter*************************** */
//Creates a new array of elements that give true for a condition/filter.
//eg. all even elements
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = arr.filter((val) => {
//     return val % 2 !== 0;//odd, even, val>3,etc
// })
// console.log(newArr);

//***********************************Reduce********************************** */
//Performs some operations and reduces the array to a single value it returns that single value.
//multiple input mathi single answer. ex: sum, average,etc


//*sum of array.
// let arr=[1,2,3,4,5];
// const result =arr.reduce((res,current)=>{
// return res+current;
// })
// console.log(result);


//*maximum number of array
// let arr = [1, 2, 3, 4, 5,10];
// let output = arr.reduce((res, current) => {
//     return res > current ? res : current;
// })
// console.log(output);

//*we are given array of marks of students. Filter out of the marks of students that scored 90.

// let marks=[91,95,89,88,70,99];

// let result=marks.filter((val)=>{
//     return val>90;
// })
// console.log(result);


//*Take a number n as input from user. Create an array of numbers from 1 to n.
//*A.Use the reduce method to calculate sum of all numbers in the array.
//*B.Use the reduce method to calculate product of all numbers in the array.

// let n=prompt("Enter the number n:");
// let arr=[];

// for(let i=1; i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// //A.
// let resultSum=arr.reduce((res,current)=>{
//     return res+current;
// })
// console.log("Sum of all numbers is: ",resultSum);

// //B.
// let resultProduct=arr.reduce((res,current)=>{
//     return res*current;
// })
// console.log("Product of all numbers is:",resultProduct);