import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNDFkdOrJiCDR0W-JjDccHnbaKB62R1Pg",
  authDomain: "authen-firebase-js.firebaseapp.com",
  projectId: "authen-firebase-js",
  storageBucket: "authen-firebase-js.appspot.com",
  messagingSenderId: "839258110224",
  appId: "1:839258110224:web:2d7a02fb582ba575438d95",
  measurementId: "G-GP8JGJEJVM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
