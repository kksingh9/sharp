let updateItem = "";
function saveTocloud(event){
    event.preventDefault();
    const Item = event.target.item.value
    const Description = event.target.itemdescription.value
    const Price = event.target.itemprice.value
    const Quantity = event.target.itemQuantity.value
    const obj = {
        Item,
        Description,
        Price,
        Quantity
    }
    if(updateItem){
        axios.put(`https://crudcrud.com/api/b52ef8e29a604317a1caacec52429050/updateQuantity/${updateItem}`,obj)
                .then((res) => {
                    Inventory(obj)
                   // updateItem = "";
                    //console.log(res);
                })
                .catch((res) => {
                    console.log(res);
                })
    }else{
        axios.post("https://crudcrud.com/api/b52ef8e29a604317a1caacec52429050/updateQuantity",obj)
            .then((res) => {
                Inventory(res.data)
                //console.log(res);
            })
            .catch((res) => {
                console.log(res);
            })
        }
    
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/b52ef8e29a604317a1caacec52429050/updateQuantity")
            .then((res) => {
                for(let i=0; i<res.data.length; i++){
                    Inventory(res.data[i]);
                }
            })
})
function Inventory(objectQuan){
    document.getElementById('item').value = "";
    document.getElementById('itemdescription').value = "";
    document.getElementById('itemprice').value = "";
    document.getElementById('itemQuantity').value = "";

    const parentItem = document.getElementById("listofitems");
    const childItem = `<li id = ${objectQuan._id}> ${objectQuan.Item} - ${objectQuan.Description} - ${objectQuan.Price} - ${objectQuan.Quantity}
    
    <button onclick = edititemDetails('${objectQuan._id}','${objectQuan.Item}','${objectQuan.Description}','${objectQuan.Price}','${objectQuan.Quantity}')> SellItem</button>
    </li>`
    parentItem.innerHTML = parentItem.innerHTML + childItem;
}
function edititemDetails(itemId,Item,Description,Price,Quantity){
    updateItem = itemId;

    document.getElementById('item').value = Item;
    document.getElementById('itemdescription').value = Description;
    document.getElementById('itemprice').value = Price;
    document.getElementById('itemQuantity').value = Quantity;
    removeItemQuantity(itemId);
}

function removeItemQuantity(itemId){
    const parentItem = document.getElementById('listofitems');
    const childNodeTobeDeleted = document.getElementById(itemId);
    if(childNodeTobeDeleted){
        parentItem.removeChild(childNodeTobeDeleted);
    }
}