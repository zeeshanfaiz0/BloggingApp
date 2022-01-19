import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAluPiBOie6rahHsWrgXOjJ2rBAWMxzT88",
    authDomain: "blogging-app-a91cf.firebaseapp.com",
    projectId: "blogging-app-a91cf",
    storageBucket: "blogging-app-a91cf.appspot.com",
    messagingSenderId: "65450684931",
    appId: "1:65450684931:web:af808b0b1d627656ca9436",
    measurementId: "G-8FYS0QN3B4"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);