var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit',additems);

itemList.addEventListener('click',removeItem);

//Add items
function additems(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //Add class
    li.className = "list-group-item";
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    // append del button to li 
    li.appendChild(deleteBtn);
    
    // Add edit button
    var editBtn = document.createElement('button');

    //Add classes to edit button
    editBtn.className = "btn btn-danger btn-sm float-right delete";
    editBtn.appendChild(document.createTextNode('edit'));


    // append edit button to li
    li.appendChild(editBtn);
    //append li to item list
    itemList.appendChild(li);
}

function removeItem(e){
    //console.log(1);
    if(e.target.classList.contains('delete')){
        //console.log(1);
        if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}