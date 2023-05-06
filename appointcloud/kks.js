function saveTocloud(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    const obj ={
        name,
        email,
        phonenumber
    }
    axios.post("https://crudcrud.com/api/fe76864dc2504937a05bfb9677a5ae/apoint",obj)
        .then((response) => {
            userOnscreen(response.data);
           // console.log(response)
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> something went wrong </h4>";
            console.log(err);
        })
    // localStorage.setItem(obj.email,JSON.stringify(obj));
     
}
function userOnscreen(obj){
    const parentItem = document.getElementById('listofitems');

    const li = document.createElement('li');
    li.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber;

    const deletBtn= document.createElement('input');
    const editBtn= document.createElement('input');
    deletBtn.type = 'button';
    deletBtn.value = 'delete';
    editBtn.type = 'button';
    editBtn.value = 'edit';
    deletBtn.onclick = () => {
        localStorage.removeItem(obj.email);
        parentItem.removeChild(li);
    }
    editBtn.onclick = () => {
        localStorage.removeItem(obj.email);
        parentItem.removeChild(li);
        document.getElementById('usernameInputtag').value = obj.name;
        document.getElementById('emailIdInputtag').value = obj.email;
        document.getElementById('phonenumberInputtag').value = obj.phonenumber;
    }
    
    li.appendChild(deletBtn);
    li.appendChild(editBtn);
    parentItem.appendChild(li);
  
}