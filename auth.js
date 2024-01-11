// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyARrQXti8_VB3a67gxePbMVLyjqn6lZy9U",
  authDomain: "schooldb667.firebaseapp.com",
  projectId: "schooldb667",
  storageBucket: "schooldb667.appspot.com",
  messagingSenderId: "263985658202",
  appId: "1:263985658202:web:22a5b52e7776780d78db63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  set(ref(db, "user/" + document.getElementById("username").value), {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    Phone: document.getElementById("Phone").value,

    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    PhoneNumber: document.getElementById("phone").value,
  });
  alert("Login Sucessfull!!  and click ok");
  window.location.assign("mohammed/home.html");
  firebase.auth().signInWithEmailAndPassword(email, password).then(function (userCredential) {
      // User is signed in
      var user = userCredential.user;
      console.log("Logged in:", user);
      // Redirect to the main page or perform other actions
    })
    .catch(function (error) {
      // Handle login errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Login error:", errorCode, errorMessage);
    });
});
