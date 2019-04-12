var email = document.getElementById("email");
var password = document.getElementById("password");
var autMassage = document.getElementById("message");

// path signin
function signup(){
    window.location.href = "signup.html"
}



//  log in sav local storage
function login(){
var firstUsers=localStorage.getItem("firstUsers");
console.log(firstUsers);
var user = {
email : email.value,
password : password.value
}

if(firstUsers === null){
    firstUsers = [];   
}

else{
    firstUsers = JSON.parse(firstUsers);   
}
var check1 = false;
for(i = 0; i < firstUsers.length; i++){
if(firstUsers[i].email === email.value&&firstUsers[i].password === password.value){
check1 = true                 
}
}
if(check1 === false){
alert("login Failed")
} 
else{
var newUser = JSON.stringify(user);
localStorage.setItem("User", newUser);
// home page
window.location.href = ('navbar.html');
//  data sav localstorage
var arry = localStorage.getItem("usaersDataSav");
console.log(arry)
if(arry === null){
arry = [];
}
else{
arry = JSON.parse(arry);
console.log(arry);
}

var local = localStorage.getItem("User")
local = JSON.parse(local)
newData = []
for(var i = 0; i < arry.length; i++){
    if(local.email === arry[i].email){
newData.push(arry[i])
}
}
localStorage.setItem("usaerDataSav",JSON.stringify(newData))
email.value = "";
password.value= "";
}
}















    
    
    
 