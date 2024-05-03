import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBO6K3ir1lkJzvd1T19f8C_zBeepJJGgw",
  authDomain: "discord-clone-udemy-7eb8c.firebaseapp.com",
  projectId: "discord-clone-udemy-7eb8c",
  storageBucket: "discord-clone-udemy-7eb8c.appspot.com",
  messagingSenderId: "779771594369",
  appId: "1:779771594369:web:0e8fbc1634718a363aef80"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
