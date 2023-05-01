function saveToLS(event){
    event.preventDefault();
    const expamount = event.target.Expamount.value;
    const description = event.target.description.value;
    const Category = event.target.category.value;
    const obj ={
        expamount,
        description,
        Category
    }
    localStorage.setItem(obj.expamount,JSON.stringify(obj));
    userOnscreen(obj);
}
function userOnscreen(obj){
    const parentItem = document.getElementById('items');

    const li = document.createElement('li');
    li.textContent = obj.expamount + ' - ' + obj.description + ' - ' + obj.Category;

    const deletBtn= document.createElement('input');
    const editBtn= document.createElement('input');
    deletBtn.type = 'button';
    deletBtn.value = 'Expensedelete';
    editBtn.type = 'button';
    editBtn.value = 'Expenseedit';
    deletBtn.onclick = () => {
        localStorage.removeItem(obj.expamount);
        parentItem.removeChild(li);
    }
    editBtn.onclick = () => {
        localStorage.removeItem(obj.expamount);
        parentItem.removeChild(li);
        document.getElementById('amount').value = obj.expamount;
        document.getElementById('item1').value = obj.description;
        document.getElementById('Category1').value = obj.Category;
    }
    
    li.appendChild(deletBtn);
    li.appendChild(editBtn);
    parentItem.appendChild(li);
  
}