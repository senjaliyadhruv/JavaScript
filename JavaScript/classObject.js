//**************************** Prototype in JS

// A javaScript object is an entity having state and behavior (properties and method.)
// JS object have a special property called prototypes
// we can set prototype using   __proto__
//note* if object and prototype have same method, object's method will be used.

//create any object
// __proto__ can access the methods of other Object
// it gives reference to an object.
// it is used in to access for the object.



// const emp = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
//     name:"dhruv",
// }
// const emp2={
//     salary:10000
// }
// const emp3={
//     salary:10000,
//     calcTax(){
//         console.log("tax rate is 20%");//access karva ma bey method na name same hoy to aa object self method display kare.
//     }
// }
// const emp4={
//     salary:10000
// }
// emp2.__proto__=emp;
// emp3.__proto__=emp;
// emp4.__proto__=emp;





// ****************************Classes in JavaScript******************
//Class is a program-code template for creating object
//Those objects will have some state (variables) and some behavior (functions) inside it.
//class is a one type of blurPrint.

// syntax:-
// class MyClass{
//     constructor()(....)
// myMethod()(...MyClass.)
// }
// let myObj= new MyClass();

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;//this is used for --> aa object ni andar j  argument lakhi hoy tyare.
//         //right side nu brand argument kahevay.
//     }
// }
// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner");
// let innova=new ToyotaCar();
// innova.setBrand("inova");


//*****************************Constructor()****************** */
// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner");
// let innova=new ToyotaCar();
// innova.setBrand("innova");

// Constructor() method is:
// -->automatically invoked by new.
// --> initializes object.

// class myClass{
//     constructor(){...}//it is automatically invoked by new keyword.
//     mymethod(){...}
// }

// class ToyotaCar {
//     constructor(brand,mileage){
//         console.log("This is class constructor");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
// }
// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);
// let innova = new ToyotaCar("innova",12);
// console.log(innova);



//**************************************Inheritance***************** */
//inheritance is passing down properties and methods from parent class to child class.
//syntax

// class parent{

// }
// class child extends parent{

// }
//*if child and parent have same method. child's method will be used.[method overriding].

// class parent{
//     hello(){
//         console.log("This is Parent");
//     }
// }
// class child extends parent{

// }
// let obj= new child();
// console.log(obj);



// class person{
//     constructor(){
//         this.species="human";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("nothing");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("work engineering");
//     }
// }
// class doctor extends person{
//     work(){
//         console.log("work doctor");
//     }
// }

// let eng=new engineer();
// let dr=new doctor();

//***************Super Keyword******** */
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

//super(args)//calls parent's constructor
// super.parentMethod(args);


// class person {
//     constructor(name) {
//         console.log("enter parent constructor");
//         this.species = "human";
//         this.name=name;
//         console.log("exit parent constructor");
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class engineer extends person {
//     constructor(name){
//         console.log("enter child constructor");
//         super(name);// to invoke parent class constructor.//jya jya super call thay tya tya parent constructor invoke thay.
//         console.log("exit child constructor");
//     }
//     work() {
//         super.eat();
//         console.log("work engineering");
//     }
// }


// let eng = new engineer("IT engineer");

//*You are creating a website for your college. Create a class User with 2 properties, name and email. it also has a method called viewData() thay allows user to view website data.

// let DATA= "any information";
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("website Data",DATA);
//     }
// }

// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="some new value";
//     }
// }

// let student1=new user("Dhruv","senjaliyadhruvr@gmail.com");
// let student2=new user("AAA","aaa@gmail.com");

// let teacher1=new admin("BBB","admin@gmail.com");

// *************try and catch**********************

// try{
//     normal code;
// }
// catch(err){//err is error object
//     handling error;
// }


// let a=5;
// let b=10;

// console.log("a =",a);
// console.log("b =",b);
// console.log("a + b =",a+b);
// // console.log("a + b =",a+c);

// //jo try catch block na lakhie to te pachhi no code execute thay nahi. ane jo lakhie to eni pachhi no code execute thay jay.
// try{
//     console.log("a + b =",a+c);
// }
// catch(err){
//     console.log(err);
// }

// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);