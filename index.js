// const ul1 = document.querySelector('.items');
// //ul1.lastElementChild.remove();
// ul1.firstElementChild.textContent = "Hello";
// ul1.firstElementChild.style.color = "green";
// ul1.children[1].textContent = "Dark";
// ul1.children[1].style.color = "yellow";
//ul1.remove();
//const btn1 = document.querySelector('.btn');
// btn1.style.background ="red";
//const li = document.
//console.log(e.target.className);
    //console.log(e.target.id);
const btn1 = document.querySelector('.btn');
btn1.addEventListener('click',(e) => {
    e.preventDefault();
    console.log("click");
    document.querySelector('#my-form').style.background = '#ccc';
});


    
    btn1.addEventListener('mouseout',(e) => {
        e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>HELLO</h1>';
});
btn1.addEventListener('mouseover',(e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('.items').firstElementChild.textContent = "dark"
});

