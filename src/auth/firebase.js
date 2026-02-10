
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDTh_YRswc3sFLlTUTf_XPXOZE44SHfFwU",
  authDomain: "daily-puzzle-game-eb386.firebaseapp.com",
  // projectId: "daily-puzzle-game-eb386",
  // storageBucket: "daily-puzzle-game-eb386.firebasestorage.app",
  // messagingSenderId: "454291949467",
  // appId: "1:454291949467:web:333d6e821783b47061433e",
  // measurementId: "G-0G11B799M4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};