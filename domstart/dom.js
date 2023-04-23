var itemList = document.querySelector("#items");
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

// parentelement and parentnode both are same
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//childNode = textnode = i.e whitespace is count
console.log(itemList.childNodes);
//childen = in this text node is not count. childen is a HTML collection
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "red";

//firstChild = it react like childNode
console.log(itemList.firstChild);
//firstElementChild == children
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello";

//nextSibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

//create Element

//create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className= "Hello";

//Add id
newDiv.id = "hello1S"

// Add attribute
newDiv.setAttribute('title','Hello Div');

//Create text Node
var newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);
//console.log(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = "50px";
container.insertBefore(newDiv,h1);
var Div1 = document.createElement('div');

    Div1.className = "hell";
var Div1Text = document.createTextNode("Hello World");
Div1.appendChild(Div1Text);
var container1 = document.querySelector('.container ul');
var h2 = document.querySelector('.container li');
console.log(Div1);
Div1.style.fontSize = "50px";
container1.insertBefore(Div1,h2);





