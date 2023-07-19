import { checkLoginStatus } from "../firebase/checkLoginStatus.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { db } from "../firebase/config.js";

const getAllProduct = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

getAllProduct();
checkLoginStatus();