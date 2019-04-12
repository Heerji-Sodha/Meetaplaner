
var newData2 = localStorage.getItem("usaerDataSav");
if (newData2 === null){
    newData2 = [];
}
else{
    newData2 = JSON.parse(newData2);
    console.log(newData2)
}

//  image show in my evednt
for(var j = 0; j < newData2.length; j++){
    var get = document.getElementById("htmldiv");
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