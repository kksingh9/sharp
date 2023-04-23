var li = document.getElementsByTagName("li");
console.log(li);
console.log((li[1]));
//items[1].textContent = "Hello";
//items[1].style.fontWeight = "bold";
li[2].style.background = "green";
for(let i=0; i<li.length; i++){
li[i].style.fontWeight = "bold";
}