import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcppHmZFPt_BaHZ32BR_PgLVkzy8RFJQ0",
  authDomain: "bikkus-studio.firebaseapp.com",
  projectId: "bikkus-studio",
  storageBucket: "bikkus-studio.firebasestorage.app",
  messagingSenderId: "1006060945717",
  appId: "1:1006060945717:web:2edfe1da68343b62aa4c7c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
