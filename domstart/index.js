//Examine the document object

//console.dir(document);
//console.log(document.domain);
console.log(document.URL);

//document.title = 123;
console.log(document.title);
console.log(document.head);
console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello"
console.log(document.forms);
//console.log(document.links);
console.log(document.images);
console.log(document.getElementById("header-title"));
var header = document.getElementById("header-title");
var headerTitle = document.getElementById("main-header");
console.log(header);
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h3>Hello</h3>"
headerTitle.style.borderBottom = "solid 3px #000";