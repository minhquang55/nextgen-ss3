import {
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./config.js";

const registerGoogle = document.getElementById("register-google");

const provider = new GoogleAuthProvider();

const handleLoginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      alert(user);
      window.location.replace('/index.html')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

registerGoogle.addEventListener("click", handleLoginWithGoogle);
