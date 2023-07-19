import { checkLoginStatus } from "./checkLoginStatus.js";
import { auth, db } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const checkAdmin = async (email) => {
  const docRef = doc(db, "users", email);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    const admin = docSnap.data();
    if(admin.email === email) {
      window.location.replace('/admin.html')
    } else {
      window.location.replace('/index.html')
    }
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

const handleLogin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      checkAdmin(user.email);
    })
    .catch((error) => {
      alert(error.code);
    });
};

loginBtn.addEventListener("click", handleLogin);

checkLoginStatus();
