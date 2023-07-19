import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./config.js";

export const checkLoginStatus = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (
        location.pathname === "/login.html" ||
        location.pathname === "/register.html"
      ) {
        // window.location.replace("index.html");
      } else if (location.pathname === "/index.html") {
        const authBtn = document.getElementById("auth-btn");
        authBtn.textContent = "Logout";
        const welcomeText = document.getElementById("welcome-text");
        const profile = user.providerData[0];
        welcomeText.innerText = "Xin chào " + profile.email;
      }
    } else {
      if (location.pathname === "/index.html") {
        const authBtn = document.getElementById("auth-btn");
        authBtn.textContent = "Login";
      }
    }
  });
};
