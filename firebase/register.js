import { auth, db } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("register-btn");
const errorMessage = document.getElementById("error-message");

const handleRegister = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email)
      saveUser(email.value);
      // window.location.replace("/login.html");
    })
    .catch((error) => {
      alert(error.code);
      if (error.code === "auth/invalid-email") {
        errorMessage.textContent = "Email không hợp lệ";
      } else if (error.code === "auth/missing-password") {
        errorMessage.textContent = "Chưa nhập password";
      }
    });
};

const saveUser = async (email) => {
  const citiesRef = collection(db, "users");
  await setDoc(doc(citiesRef, email), {
    email: email,
    isAdmin: false,
  })
}

registerBtn.addEventListener("click", handleRegister);
