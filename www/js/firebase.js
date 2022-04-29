// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
const uuid = require("uuid");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB7u9X-BYTSBAY5ORAkVmW4JrzkFf8t3JM",
  authDomain: "proyectointegrador-db216.firebaseapp.com",
  databaseURL: "https://proyectointegrador-db216-default-rtdb.firebaseio.com",
  projectId: "proyectointegrador-db216",
  storageBucket: "proyectointegrador-db216.appspot.com",
  messagingSenderId: "333376001620",
  appId: "1:333376001620:web:446a10f37d1a53bf5c7fc1",
  measurementId: "G-NZSG0SS8FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export const saveReport = (phoneNumber, audioFile) => {
  let uniqueFileName = uuid.uuidv4() + audioFile.split(".").pop();
  let storageRef = ref(storage, "audio/" + uniqueFileName);
  
  // uploadBytes(storageRef, audioFile).then((snapshot) => {
  //   console.log("Uploaded a blob or file!");
  // });

  let reportedPhoneNumber = {
    number: phoneNumber,
    audioFile: storageRef,
    date: new Date().toLocaleString()
  }

  console.log(reportedPhoneNumber);
  // addDoc(collection(db, "reportedNumbers"), reportedPhoneNumber);
};