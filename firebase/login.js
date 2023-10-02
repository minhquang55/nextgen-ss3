import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { checkLoginStatus } from "./checkLoginStatus.js";
import { auth } from "./config.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const handleLogin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("currentUser", user.email);
      window.location.replace("/index.html");
    })
    .catch((error) => {
      alert(error.code);
    });
};

loginBtn.addEventListener("click", handleLogin);

checkLoginStatus();
