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
username=localStorage.getItem("username");
document.getElementById("welcomeuser").innerHTML="welcome " + username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      row="<div id="+Room_names+" class='room_name' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;

      //End code
      });});}
getData();

function addRoom() {
  room_name=document.getElementById("roomname").value;
  localStorage.setItem("roomname",room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  window.location="kwitter_page.html"

}

function redirect(name) {
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location="index.html";
}
