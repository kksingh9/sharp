var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit',additems);

itemList.addEventListener('click',removeItem);
// filter event
filter.addEventListener('keyup',filterItems);

//Add items
function additems(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var neItem = document.getElementById('item1').value;

    //create new li element
    var li = document.createElement('li');
    //Add class
    li.className = "list-group-item";
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(neItem));

    //create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    // append del button to li 
    li.appendChild(deleteBtn);
    
    // Add edit button
    var editBtn1 = document.createElement('button');

    //Add classes to edit button
    editBtn1.className = "btn btn-sm float-right editBtn";
    editBtn1.appendChild(document.createTextNode('edit'));


    // append edit button to li
    li.appendChild(editBtn1);
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

// filter items
function filterItems(e){
    //convert text to Lowercase
   var text =  e.target.value.toLowerCase();
   //var text1 =  e1.target.value.toLowerCase();
   //console.log(text);
   // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
   // console.log(items);
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var item1 = item.childNodes[1].textContent;
        
       // console.log(itemName);
       if(itemName.toLowerCase().indexOf(text) != -1 || item1.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
       }else{
        item.style.display = 'none';
       }
    });
}
