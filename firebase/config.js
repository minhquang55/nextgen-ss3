import { getAuth } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMDNXLDqAcThwnli66p67vAI1rNf78Bjg",
  authDomain: "nextgen-auth.firebaseapp.com",
  projectId: "nextgen-auth",
  storageBucket: "nextgen-auth.appspot.com",
  messagingSenderId: "178501679598",
  appId: "1:178501679598:web:4036f4cd7bf3a8dd7f76ff",
  measurementId: "G-YHQ7BEF416",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
