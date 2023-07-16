import { auth } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const logoutBtn = document.getElementById("auth-btn");

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      window.location.replace("/login.html");
    })
    .catch((error) => {
      alert(error.code);
    });
};

logoutBtn.addEventListener("click", handleLogout);
