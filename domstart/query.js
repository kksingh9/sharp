// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello world";
// var submit = document.querySelector("input[type='submit']");
// submit.value = "Send";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "blue";
var seconditem = document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.background = "green";
var seconditem = document.querySelector(".list-group-item:nth-child(3)");
seconditem.style.visibility = "hidden";

//QueryselectorAll
var seconditem = document.querySelectorAll("li:nth-child(n)");
seconditem[1].style.color = "blue";
var odd = document.querySelectorAll("li:nth-child(odd)");
for(let i=0; i<odd.length; i++){
odd[i].style.backgroundColor = "green";
}
