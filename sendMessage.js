import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function sendMessage(clientId, message) {
  try {
    await addDoc(collection(db, "messages"), {
      clientId: clientId,
      message: message,
      sender: "client",
      createdAt: serverTimestamp()
    });

    console.log("Message sent");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}
