//user name
var userName = localStorage.getItem('User');
userName = JSON.parse(userName);
console.log(userName)
var name3 = userName.email
name3 = name3.slice(0,name3.length-10)
console.log(name3)




// heading data
function btn1(){
    var heading = document.getElementById("heading").value;
    var palce = document.getElementById("place").value;
    var price = document.getElementById("price").value;
    var organizer = document.getElementById("organizer").value;
    var discraption = document.getElementById("description").value;
    var img = document.getElementById("file").value;

//  constricter function
function Alldata(heading,palce,price,organizer,discraption,email,like, disLike, likeEmail, disLikeEmail){
this.heading = heading;
this.palce = palce;
this.price = price;
this.organizer = organizer;
this.discraption = discraption;
this.email = email;
this.img = img;
this.like = like;
this.disLike = disLike;
this.likeEmail = likeEmail;
this.disLikeEmail = disLikeEmail;
    };

    //  save new user mail
    var local = localStorage.getItem("User");
    local = JSON.parse(local);
    var like = 0; 
    var disLike = 0;
    var likeEmail = [local.email];
    var disLikeEmail = [local.email]
//  constrcter function
var data = new Alldata(heading,palce,price,organizer,discraption,local.email,like,disLike,likeEmail,disLikeEmail);
var arry = localStorage.getItem("usaersDataSav");
console.log(arry)
if(arry === null){
arry =[];
}
else{
arry = JSON.parse(arry);
console.log(arry);
}
arry.push(data);

newData = []
for(var i = 0; i < arry.length;i++){
    if(local.email === arry[i].email){
newData.push(arry[i])
}
}
localStorage.setItem("usaerDataSav",JSON.stringify(newData))
arry = JSON.stringify(arry);
localStorage.setItem("usaersDataSav", arry);



    //  img &  creat a node
   
    var get = document.getElementById("htmldiv");
    var div1 = document.createElement("div");    
    div1.setAttribute("id","div1")
   var span_img= document.createElement("img");
    span_img.setAttribute("src", img.slice(12));
    span_img.setAttribute("id","img");
    span_img.setAttribute("width","150px" );
    span_img.setAttribute("hight", "150px");
    div1.appendChild(span_img);
    get.appendChild(div1);

    var span = document.createElement("p");
    span.setAttribute("id", "head");
    var taxtnode = document.createTextNode(heading);
    span.appendChild(taxtnode);
    div1.appendChild(span);
    get.appendChild(div1);

    var span4 = document.createElement("p");
    var taxtnode1 = document.createTextNode(palce);
    span4.appendChild(taxtnode1);
    div1.appendChild(span4);


    
    var span6 = document.createElement("p");
    var taxtnode2 = document.createTextNode(price);
    span6.appendChild(taxtnode2);
    div1.appendChild(span6);


    
    var span66 = document.createElement("p");
    var taxtnode3 = document.createTextNode(organizer);
    span66.appendChild(taxtnode3);
    div1.appendChild(span66);
   
    var span81 = document.createElement("p");
    var taxtnode41 = document.createTextNode(discraption);
    span81.appendChild(taxtnode41);
    div1.appendChild(span81);


   


//delet button
    var button2 = document.createElement("input");
    button2.setAttribute("type", "button");
    button2.setAttribute("value", "Delet");
    button2.setAttribute("class", "btn btn-danger");
    button2.setAttribute("id",heading)
    div1.appendChild(button2);
     

    button2.addEventListener("click", function () {
        var a = localStorage.getItem('usaerDataSav');
        a = JSON.parse(a);
        for(var i = 0; i < a.length; i++){
            if(this.id === a[i].heading){
                a.splice(i,1);
                localStorage.setItem('usaerDataSav',JSON.stringify(a))
            }
        }
        var a1 = localStorage.getItem('usaersDataSav');
        a1 = JSON.parse(a1);
        for(var j = 0; j < a1.length; j++){
            if(this.id === a1[j].heading){
                a1.splice(j,1);
                localStorage.setItem('usaersDataSav',JSON.stringify(a1))
            }
           }
           console.log(this.parentNode)
        this.parentNode.remove()
    })

//  sumit data remove
    document.getElementById("heading").value = "";
    document.getElementById("place").value = "";
    document.getElementById("price").value = "";
    document.getElementById("organizer").value = "";
    document.getElementsByTagName("description").value = "";
   }
//refresh data
var newData2 = localStorage.getItem("usaerDataSav");
if (newData2 === null){
    newData2 = [];
}
else{
    newData2 = JSON.parse(newData2);
    console.log(newData2)
}
for(var j = 0; j < newData2.length; j++){
  console.log(newData2[j].heading)
    var get = document.getElementById("htmldiv");
    console.log(get)
    var div1 = document.createElement("div");    
    div1.setAttribute("id","div1")
    var span_img= document.createElement("img");
    span_img.setAttribute("src", newData2[j].img.slice(12));
    span_img.setAttribute("id","img");
    span_img.setAttribute("width","100px" );
    span_img.setAttribute("hight", "100px");
    div1.appendChild(span_img);
    get.appendChild(div1);
    var span = document.createElement("p");
    span.setAttribute("id", "head");
    var taxtnode = document.createTextNode(newData2[j].heading)
    span.appendChild(taxtnode);
    div1.appendChild(span);
    get.appendChild(div1);

    var span4 = document.createElement("p");
    var taxtnode1 = document.createTextNode(newData2[j].palce);
    span4.appendChild(taxtnode1);
    div1.appendChild(span4);


    
    var span6 = document.createElement("p");
    var taxtnode2 = document.createTextNode(newData2[j].price);
    span6.appendChild(taxtnode2);
    div1.appendChild(span6);


    
    var span66 = document.createElement("p");
    var taxtnode3 = document.createTextNode(newData2[j].organizer);
    span66.appendChild(taxtnode3);
    div1.appendChild(span66);
   
    var span81 = document.createElement("p");
    var taxtnode41 = document.createTextNode(newData2[j].discraption);
    span81.appendChild(taxtnode41);
    div1.appendChild(span81);

//  delet btn
   var button2 = document.createElement("input");
    button2.setAttribute("type", "button");
    button2.setAttribute("value", "Delet");
    button2.setAttribute("class", "btn btn-danger");
    button2.setAttribute("id",newData2[j].price)
    div1.appendChild(button2);
     

    button2.addEventListener("click", function () {
        var a = localStorage.getItem('usaerDataSav');
        a = JSON.parse(a);
        for(var i = 0; i < a.length; i++){
            if(this.id === a[i].price){
                a.splice(i,1);
                localStorage.setItem('usaerDataSav',JSON.stringify(a))
            }
        }
        var a1 = localStorage.getItem('usaersDataSav');
        a1 = JSON.parse(a1);
        for(var j = 0; j < a1.length; j++){
            if(this.id === a1[j].price){
                a1.splice(j,1);
                localStorage.setItem('usaersDataSav',JSON.stringify(a1))
            }
        }
        this.parentNode.remove()
    })

}

//  navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}