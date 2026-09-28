import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXS_-o8w5DQt02n-yZhPs8LgMMbgdQS9s",
  authDomain: "hostel-room-allocation-s-4abc0.firebaseapp.com",
  databaseURL: "https://hostel-room-allocation-s-4abc0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hostel-room-allocation-s-4abc0",
  storageBucket: "hostel-room-allocation-s-4abc0.firebasestorage.app",
  messagingSenderId: "456249289693",
  appId: "1:456249289693:web:a8c718a2caa5e1a93fa434"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };