const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();

   // console.log(nameInput.value);
   if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
       // alert("please enter fields");
       setTimeout(() => msg.remove(),3000);
   }else{
       // console.log("success");
    //    const li = document.createElement('li');
    //    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    let nam = nameInput.value;
    let Email = emailInput.value;

    localStorage.setItem(Email,['name',nam,'email',Email]);
    
    //    //clear field
       nameInput.value = '';
       emailInput.value = '';
   }
}