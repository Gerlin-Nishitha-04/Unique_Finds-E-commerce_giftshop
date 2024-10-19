 // Import the necessary Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
  // Add more SDKs as needed

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA0Cc-V2JJRsbJhDShuT9NkXQss47tkAzQ",
    authDomain: "sampletry-a3fc7.firebaseapp.com",
    databaseURL: "https://sampletry-a3fc7-default-rtdb.firebaseio.com",
    projectId: "sampletry-a3fc7",
    storageBucket: "sampletry-a3fc7.appspot.com",
    messagingSenderId: "550239957918",
    appId: "1:550239957918:web:16701befadb101867c9c8f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app); // Initialize Firebase Auth if needed


// Sign Up Form Handling
document.querySelector(".sign-up-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve form values
  const email = document.querySelector(".sign-up-form input[placeholder='Email']").value;
  const password = document.querySelector(".sign-up-form input[placeholder='Password']").value;
  const roleselect = document.getElementById("roleselect").value;

  // Firebase sign up with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Account creation successful
      alert("Account created successfully!");

      // You can store the role in the localStorage (or Firebase database) if needed
      localStorage.setItem("role", roleselect);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Sign In Form Handling
document.getElementById("signInForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve form values
  const email = document.querySelector(".sign-in-form input[placeholder='Email']").value;
  const password = document.querySelector(".sign-in-form input[placeholder='Password']").value;
  const roleselect = document.getElementById("roleselect").value;

  // Firebase sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;

      // Retrieve stored role (can also be fetched from Firebase if saved there)
      const storedRole = localStorage.getItem("role");

      // Redirect based on the role
      if (roleselect === "customer") {
        window.location.href = "index.html"; // Redirect to customer page
      } else if (roleselect === "seller") {
        window.location.href = "admin_page.html"; // Redirect to admin page
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Login failed: " + errorMessage);
    });
});
