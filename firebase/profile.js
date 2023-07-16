import {
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./config.js";

const displayName = document.getElementById("displayName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const photoURL = document.getElementById("photoURL");
const photoPreview = document.getElementById("photo-preview");
const updateBtn = document.getElementById("update-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const profile = user.providerData[0];
    console.log(profile);
    displayName.value = profile.displayName;
    email.textContent = profile.email;
    phoneNumber.value = profile.phoneNumber;
    photoPreview.setAttribute("src", profile.photoURL);
  } else {
  }
});

const handleUpdateProfile = () => {
  const userName = displayName.value;
  const phone = phoneNumber.value;
  console.log(phone);
  updateProfile(auth.currentUser, {
    displayName: userName,
    photoURL: 'https://media.istockphoto.com/id/1330286152/vector/male-avatar-icon.jpg?s=170667a&w=0&k=20&c=kqhFSiehHNcOLnKfh_gorJ9QVY8-6Z8L1k6AEA-DVgQ='
  })
    .then(() => {
      alert("Update thanh cong");
    })
    .catch((error) => {
      alert(error);
    });
};

updateBtn.addEventListener("click", handleUpdateProfile);
