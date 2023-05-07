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
window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/fe76864dc2504937a05bfb9677a5ae55/apoint")
        .then((response) => {
            //console.log(response)
            for(var i=0; i< response.data.length; i++){
                userOnscreen(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error)
        })
    
    // const localStorageobj = localStorage;
    // const localStoragekeys = Object.keys(localStorageobj);

    // for(var i=0; i< localStoragekeys.length; i++){
    //     const key = localStoragekeys[i];
    //     const userDetailsString = localStorageobj[key];
    //     const userDetailsobj = JSON.parse(userDetailsString);
    //     userOnscreen(userDetailsobj)
    // }
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