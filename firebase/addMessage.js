import {
  addDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { db } from "./config.js";

const chatInput = document.getElementById("chat-input");
const messageTemplate = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const messageRef = collection(db, "messages");
let messageList = [];

const handleAddMessage = () => {
  if (!chatInput.value) {
    return;
  }
  addDoc(messageRef, {
    content: chatInput.value,
    sender: localStorage.getItem("currentUser"),
    createdAt: serverTimestamp(),
  });
};

const getMessageList = async () => {
  messageList = [];
  const snapshot = await getDocs(messageRef);
  snapshot.forEach((doc) => {
    messageList.push(doc.data());
  });
  console.log(messageList);
};

const messageQuery = query(messageRef);
const unsubscribe = onSnapshot(messageRef, () => {
  console.log('change');
});

sendBtn.addEventListener("click", handleAddMessage);
unsubscribe();
getMessageList();
