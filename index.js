let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time"); 
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format(`MMMM Do YYYY`);
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");


let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time"); 
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format(`MMMM Do YYYY`);
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");


let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time"); 
let sydneyTime = moment().tz("Austrailia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format(`MMMM Do YYYY`);
sydneyIimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");




