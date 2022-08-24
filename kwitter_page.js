var firebaseConfig = {
      apiKey: "AIzaSyCiRY1mMTPTEJdgX1z-SXrsxSTZ-DMDfYc",
      authDomain: "kwitter-9eb1f.firebaseapp.com",
      databaseURL: "https://kwitter-9eb1f-default-rtdb.firebaseio.com",
      projectId: "kwitter-9eb1f",
      storageBucket: "kwitter-9eb1f.appspot.com",
      messagingSenderId: "601217412855",
      appId: "1:601217412855:web:aea03c47b27933edffedf2",
      measurementId: "G-4Y7XSH8GSS"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
roomname=localStorage.getItem("roomname");
username=localStorage.getItem("username");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_tick="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
m1="<h4 class='message_h4'>"+message+"</h4>";
likeBTN="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='likeUpdate(this.id)'>";
thumbsUP="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_tick+m1+likeBTN+thumbsUP;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function likeUpdate(message_id) {
       button_id=message_id;
       likes=document.getElementById(button_id).value;
       updatedLikes=Number(likes)+1;

       firebase.database().ref(roomname).child(message_id).update({
            like:updatedLikes
       });
}

function send() {
      msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
name : username,
message : msg,
like : 0
});
document.getElementById("msg").value="";
}