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

function userOnscreen(user){
   
    document.getElementById('usernameInputtag').value = '';
    document.getElementById('emailIdInputtag').value = '';
    document.getElementById('phonenumberInputtag').value = '';
    const parentItem = document.getElementById('listofitems');

    const childHTML = `<li id = ${user._id}> ${user.name} - ${user.email}
                        <button onclick = deleteUser('${user._id}')> Delete User</button>
                        <button onclick = editUserDetails('${user._id}','${user.email}','${user.name}','${user.phonenumber}')> Edituser</button>
                        </li>`
        parentItem.innerHTML = parentItem.innerHTML + childHTML;
}

// edit user
    function editUserDetails(userId,email,name,phonenumber){
    //     axios.put(`https://crudcrud.com/api/d00a18d9149545339746250a76d50bad/user/${userId}/${name}/${email}/${phonenumber}
    //         `
    //     )
    // //.then(res => console.log(res.data))
    // .then(res => {
         
    // })
    // .catch(err => console.log(err));
        document.getElementById('usernameInputtag').value = name;
        document.getElementById('emailIdInputtag').value = email;
        document.getElementById('phonenumberInputtag').value = phonenumber;
        deleteUser(userId)
        
    }

    // deleteuser('user.id')
    function deleteUser(userId){
        axios.delete(`https://crudcrud.com/api/d00a18d9149545339746250a76d50bad/user/${userId}`)
    .then((res) => {
        removeUserfromscreen(userId);
    })
    .catch((err) => {
        console.log(err)
    }); 
    }

    function removeUserfromscreen(userId){
        const parentItem = document.getElementById('listofitems');
        const childNodeTobeDeleted = document.getElementById(userId);
        if(childNodeTobeDeleted){
            parentItem.removeChild(childNodeTobeDeleted);
        }
    }
   
  
