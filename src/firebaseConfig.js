// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase, ref, set, push, onValue} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDQCP-yizVZNtONVLcNOH9RXRNgfCPolEA",
  authDomain: "loginlogout-fec80.firebaseapp.com",
  projectId: "loginlogout-fec80",
  storageBucket: "loginlogout-fec80.firebasestorage.app",
  messagingSenderId: "792989722666",
  appId: "1:792989722666:web:7141d75b01fab8db313b53",
  databaseURL: "https://loginlogout-fec80-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth(app);
export{database, getDatabase, ref, set, push, onValue}