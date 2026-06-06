// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBVJMg5lnD6YtWl1qOnQfK-W-GTSjQEllo",

  authDomain: "party-cards-aae88.firebaseapp.com",

  projectId: "party-cards-aae88",

  storageBucket: "party-cards-aae88.firebasestorage.app",

  messagingSenderId: "432657738281",

  appId: "1:432657738281:web:36b375bc405d4d54f78a38"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)