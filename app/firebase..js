
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "devtest-3c423.firebaseapp.com",
  projectId: "devtest-3c423",
  storageBucket: "devtest-3c423.firebasestorage.app",
  messagingSenderId: "269352535689",
  appId: "1:269352535689:web:0042cdbf07ceafd103e858"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

const provider = new GoogleAuthProvider ();

export const signInWithGoogle = () => signInWithPopup(auth,provider);



