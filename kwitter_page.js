const firebaseConfig = {
    apiKey: "AIzaSyCMqGxDV6h1pO2PKf15P4CrBOrGNm1kdR0",
    authDomain: "letschat-18af3.firebaseapp.com",
    databaseURL: "https://letschat-18af3-default-rtdb.firebaseio.com",
    projectId: "letschat-18af3",
    storageBucket: "letschat-18af3.appspot.com",
    messagingSenderId: "313501696109",
    appId: "1:313501696109:web:fce3a004ecff4e1e153f64"
  };

     // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS


user_name = localStorage.getItem("user");
room_name = localStorage.getItem("room");

title = "Chat Page for Room " + "#" + room_name;
document.getElementById("title").innerHTML = title;

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = ""; 
}

function logOut(){
    localStorage.removeItem("user");
    localStorage.removeItem("room");
    window.location = "index.html";
}