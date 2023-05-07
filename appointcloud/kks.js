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
    axios.post("https://crudcrud.com/api/d00a18d9149545339746250a76d50bad/user",obj)
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
window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/d00a18d9149545339746250a76d50bad/user")
        .then((response) => {
            //console.log(response)
            for(var i=0; i< response.data.length; i++){
                userOnscreen(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error)
        })
    
})

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
        axios.delete('https://crudcrud.com/api/d00a18d9149545339746250a76d50bad/user/645764ef6246ac03e853a4af')
    .then((res) => {
        //userOnscreen(res.data)
    })
    .catch((err) => {
        console.error(err)
    });
        //localStorage.removeItem(obj.email);
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