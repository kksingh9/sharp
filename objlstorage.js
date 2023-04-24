let myobj = {
    name: "krishna",
    age : "30"
};
//localStorage.setItem(myobj)
let myobj_serial = JSON.stringify(myobj);
//console.log(myobj_serial);
localStorage.setItem('myobj',myobj_serial);
//console.log(localStorage);
let myobj_deserial = JSON.parse(localStorage.getItem('myobj'));
console.log(myobj_deserial);
console.log(localStorage);