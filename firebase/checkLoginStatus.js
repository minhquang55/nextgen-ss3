import { auth } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

export const checkLoginStatus = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.replace("index.html")
    }
  });
};
