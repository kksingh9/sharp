const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    userList.addEventListener('click',removItem);
    let user = {
        Email :emailInput.value, Name:nameInput.value
    }
       const li = document.createElement('li');
       //li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
       li.appendChild(document.createTextNode(user.Email , user.Name));
       var deleteBtn = document.createElement('button');
    
       deleteBtn.className = "item";
       deleteBtn.appendChild(document.createTextNode('delete'));
    // append del button to li 
       li.appendChild(deleteBtn);
       userList.appendChild(li);
        
       localStorage.setItem(user.Email, JSON.stringify(user));
       nameInput.value = '';
       emailInput.value = '';

   function removItem(e){

        if(e.target.classList.contains('item')){
  
            var li = e.target.parentElement;
            
            userList.removeChild(li);
            localStorage.removeItem(user.Email);
        
        }
    }
}