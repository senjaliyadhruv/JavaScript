//*********************Window Object****************

//The window object represents an open window in a browser. it is browser's object(not JavaScript) and is automatically created by browser.
//it is a global object with lots of properties and methods.

//window object ni andar j console,alert, prompt ne aa badhi method aaveli hoy chhe.

//for ex
// console.log("Hello");
// window.console.log("Hello2");//browser automatic detect kari le window ne.
// //this two are same.
// alert("AFK Warning-1!!");
// window.alert("AFK Warning-2!!");

// console.log(window);//you can directly write in console.
// console.log(window.document);
// console.dir(window.document);//document ne access karva log ni jagyae dir vadhare prefer karvama aave chhe.


//*******************************DOM(Document Object Model)********************** */
//When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.

//this is dom tree
//                Window
//                   |
//                document
//                   |
//                  html
//              /            \
//             /              \
//            /                \
//         head                 body
//     /   |    |   \          /    \
//  meta meta title link      div    script
//                         /  |  | \
//                        img h1 p div

//we can access body, head etc. using DOM
// console.log(document.body);
// console.dir(document.body);//there is difference between log and dir.
// console.dir(document.head);

//we can also access childnodes.
// console.dir(document.body.childNodes);//badha childNodes NodeList ma dekhade.
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[2]);

//**************************DOM Manipulation********************** */
//this behaves like a array. it is not exact array.

//we can access html element using this methods.
//*Selecting with id
// document.getElementById("myID");
//*Selecting with class
//document.getElementByClassName("myClass");
//*Selecting with tag
//document.getElementByTagName("p");

// let heading=document.getElementById("heading");
// console.dir(heading);//this element access using id method.

// let divs=document.getElementsByClassName("box");//*className displays htmlElement as a HTMLCollection.
// console.dir(divs);

// let tags=document.getElementsByTagName("button");
// console.dir(tags);//TagName also displays htmlElement as a HTMLCollection.

//if we don't know that it is id or class then we can use querySelector.
// let element=document.querySelector("div");//*it gives only first element or we can say it returns first element.
// console.dir(element);

//if we wanted all element then we can use querySelectorAll method
// let elem=document.querySelectorAll("div");//*it displays htmlElement in a NodeList. or we can say it returns a nodeList.
// console.dir(elem);

//in the querySelector, tag direct lakhay chhe, id # thi lakhay chhe ane class . thi lakhay chhe.

// let elem=document.querySelectorAll("#heading");
// console.dir(elem);

// let elem=document.querySelectorAll(".box");
// console.dir(elem);

// console.dir(document.body.firstChild);

//**********DOM MAnipulation Properties*******************

//1)tagName:     returns tag for element nodes.
//2)innerText:   returns the text content of the element and all its children.
//3)innerHTML:   returns the plain text or HTML contents in the element.
//4)textContent: returns textual content even for hidden elements.

//when we create DOM tree then we have three types of node, first one is text node, second type is comment node and third type node is element node.therefore text node is displayed. diagram ma aapde first two type of node we can ignored.

// console.dir(document.body.firstChild);
// let elem=document.querySelector("div")
// console.dir(elem);
// elem.innerHTML="<div><h1>dhruv</h1></div>"

// let elem=document.querySelector("div");
// console.dir(elem);

//*Create a h2 heading element with text-" Hello Javascript". Append "This is Dhruv." to this text using js.
// let res = document.querySelector("h2");
// res.innerText = res.innerText + " This is Dhruv";

//*Create 3 divs with common class name- "box". Access them and add some unique name of them.

// let divs = document.querySelectorAll("div");
// divs[0].innerText="This is unique name."
// divs[1].innerText="This is unique name."
// divs[2].innerText="This is unique name."


// let divs = document.querySelectorAll("div");
// let ind = 1;
// for (let i of divs) {
//     i.innerText = `This is unique name.${ind}`
//     ind++;
// }


// let divs = document.querySelectorAll("div");
// for(i=1;i<=divs.length;i++){
//     divs[i-1].innerText= `This is unique name ${i}`
// }

//*DOM Manipulation
//*Attributes
//getAttribute(attr)//to fet the attribute value
//setAttribute(attr, value)//to set the attribute value

//**Style */
// node.style

// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");//output box
// console.log(id);

// let name=div.getAttribute("name");//output JSdiv
// console.log(name);

//*new class 
// let para=document.querySelector("p")
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));//console ma to undefine j dekhade. but html element ma direct change thay jase.


//*styling 

// let div=document.querySelector("div");

// div.style.backgroundColor="red";
// div.style.color="white";

// div.style.fontSize="50px";
// div.innerText="Hello Coder!";
// div.style.visibility="hidden";


//*******Insert Element */
//first of all element ne create karvo pade. pachhi tene display karavvano hoy.
//node.append(element)-->adds at the end of node(inside)
//node.prepend(element)-->adds at the start of node(inside)
//node.before(element)-->adds before the node(outside)
//node.after(element)-->adds after the node(outside)

// let div=document.querySelector("div");
// div.style.backgroundColor="purple"

// let newElem=document.createElement("button");
// newElem.innerText="Click me!"
// div.append(newElem);
// div.prepend(newElem);
// div.after(newElem);
// div.before(newElem);

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>This is new Heading</i>";
// document.querySelector("body").prepend(newHeading);

//****Delete Element */

//node.remove()--> removes the node

// let p=document.querySelector("p");
// p.remove();


//**Create a new button element, Give it a text "Click me", background color of red and text color of white.*/ 
//**Insert the button as the first element inside the body tag. */

// let newBtn=document.createElement("button");
// newBtn.innerText="Click me"
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// document.querySelector("body").prepend(newBtn);

// let p=document.querySelector("p");
// p.classList.add("newClass");
