
var email = document.getElementById("email");
var password = document.getElementById("password");
var autMassage = document.getElementById("message");

function signup(){
var req = email.value;
if (document.getElementById("name").value.length === 0) {
    alert("Please enter your First name");
    document.getElementById("name").focus()
    return false;
}
if (document.getElementById("lastname").value.length === 0) {
    alert("Please enter your Last name");
    document.getElementById("lastname").focus()
    return false;
}
var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
if (!(req.match(regex))) {
alert("Please correct email address");
return false;
}
if (document.getElementById("password").value.length <= 5) {
    alert("Please enter your Password");
    document.getElementById("password").focus()
    return false;
}
if (document.getElementById("contact").value.length <= 5) {
    alert("Please enter your contact");
    document.getElementById("contact").focus()
    return false;
}
if (document.getElementById("age").value.length = 0) {
    alert("Please enter your age");
    document.getElementById("age").focus()
    return false;
}
//    First Signin 
var firstUsers = localStorage.getItem("firstUsers");
console.log(firstUsers)
var userExit = false;
if(firstUsers === null){
firstUsers =[];
}
else{
firstUsers = JSON.parse(firstUsers);
console.log(firstUsers);
}
var user = {
email : email.value,
password : password.value
}
for(var i= 0; i < firstUsers.length; i++){
if(firstUsers[i].email === email.value){
userExit = true;
}
}
if(userExit === true){
    autMassage.innerHTML = "user already Exists!";
}
else{
firstUsers.push(user);
firstUsers = JSON.stringify(firstUsers);
localStorage.setItem("firstUsers", firstUsers);
email.value = "";
password.value = "";
document.getElementById("message").innerHTML = "seccessfully signup!";

window.location.href = "index.html"
}
}

