//*API ==> Application Programming Interface
// The Fetch API provides an interface for fetching (sending/receiving) resources.
//it uses Request and Responses objects.
//The fetch() method is used to fetch a resource (data).

//let promise = fetch(url,[options])


//*Understanding Terms:

//AJAX is Asynchronous JS and XML.
//JSON is JavaScript Object Notation.
//json() method : returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)

//now, at this time in AJAX XML is replaced by JSON. AJAJ is weird word. so, we can say AJAX.
//json() convert response into json object.

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//*async-await:-

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data[0].text);
    factPara.innerText = data[Math.floor(Math.random()*data.length)].text;
};

//*promise:-

// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText = data[0].text;
//     });
// }

btn.addEventListener("click",getFacts);

//*Requests and Response
//HTTP verbs
//Response Status code
//HTTP response header also contain details about the responses, such as content type, HTTP status code etc.