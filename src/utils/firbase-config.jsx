// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv6xMhmPrzt8MtskEn8Pi9vv0yCcDIEsQ",

  authDomain: "react-netflix-clone-89eb1.firebaseapp.com",

  projectId: "react-netflix-clone-89eb1",

  storageBucket: "react-netflix-clone-89eb1.appspot.com",

  messagingSenderId: "900437851590",

  appId: "1:900437851590:web:3a454e046e9a2b219b06c7",

  measurementId: "G-0E2HR5VHZG",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
