function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

//   save data user
var userName = localStorage.getItem("User");
userName  =JSON.parse(userName);
userName = userName.email.slice(0,userName.email.length-10);
console.log(userName)
document.getElementById("username").innerHTML = userName;



// log out  function
function logout() {
  localStorage.removeItem("User")
  window.location.href = "index.html"
}





var newData2 = localStorage.getItem("usaersDataSav");
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

//  show image
    var span_img= document.createElement("img");
    span_img.setAttribute("src", newData2[j].img.slice(12));
    span_img.setAttribute("id","img");
    span_img.setAttribute("width","100px" );
    span_img.setAttribute("hight", "100px");
    div1.appendChild(span_img);
    get.appendChild(div1);

//  show data home page

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


   



// intersted button
    var button2 = document.createElement("input");
    button2.setAttribute("value", "Like");
    button2.setAttribute("class", "btn");
    button2.setAttribute("id", newData2[j].heading)
    button2.setAttribute("type", "button");
    var x41 = document.createElement("BR");
    div1.appendChild(x41)
    div1.appendChild(button2);
    
    
    button2.addEventListener('click', function() {
      var data2 = localStorage.getItem("usaersDataSav");
         data2 = JSON.parse(data2);
         var user = localStorage.getItem("User");
         user = JSON.parse(user);
      for(var j=0; j<data2.length; j++){
          if(this.id === data2[j].heading ){
             flag = false
              for(var k=0; k<data2[j].likeEmail.length; k++){
                  if(data2[j].likeEmail[k] === user.email){
                      alert("sorry you cannot click it")
                      flag = true
                  }   
              }
          if(flag === false ){
          var flag = "no" 
              for( var l = 0; l<data2[j].disLikeEmail.length; l++ ){
                  console.log(data2[j].disLikeEmail)
                  if(data2[j].disLikeEmail[l] === user.email){
                      flag = "yes"
                      data2[j].disLikeEmail.splice(l,1);
                      data2[j].disLike--;
                      data2[j].like++;
                      data2[j].likeEmail.push(user.email)
                      localStorage.setItem("usaersDataSav",JSON.stringify(data2));
                  }
              }
              if(flag === "no"){
                  data2[j].like++
                  data2[j].likeEmail.push(user.email)
                  localStorage.setItem("usaersDataSav",JSON.stringify(data2));
              }
          }
          }
      }
      
    })
    
    
    
    
    
    //  not intersted
    var button3 = document.createElement("input");
    button3.setAttribute("class", "btn btn-danger");
    button3.setAttribute("id", newData2[j].price)
    button3.setAttribute("type", "button");
    button3.setAttribute("value", "Unlike");
    // button3.appendChild(btn3)
    div1.appendChild(button3);
    
    button3.addEventListener('click', function() {
      var data2 = localStorage.getItem("usaersDataSav");
         data2 = JSON.parse(data2);
         var user = localStorage.getItem("User");
         user = JSON.parse(user);
      for(var j=0; j<data2.length; j++){
          if(this.id === data2[j].price ){
              var flag = false
              for(var k=0; k<data2[j].disLikeEmail.length; k++){
                  if(data2[j].disLikeEmail[k] === user.email){
                      alert("sorry you cannot click it");
                      flag = true;
                  }   
              }
            var flag1 = "no" 
          if(flag === false ){
              for( var l = 0; l<data2[j].likeEmail.length; l++ ){
                  if(data2[j].likeEmail[l] === user.email){
                      flag1 = "yes"
                      data2[j].likeEmail.splice(l,1);
                      data2[j].like--;
                      data2[j].disLike++;
                      data2[j].disLikeEmail.push(user.email)
                      localStorage.setItem("usaersDataSav",JSON.stringify(data2));
                  }
              }
              if(flag1 === "no"){
                  data2[j].disLike++
                  data2[j].disLikeEmail.push(user.email)
                  localStorage.setItem("usaersDataSav",JSON.stringify(data2));
              }
          }
          }
      }
    })
    
    }



