import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTxGwAmkXRsLn5zvv2N_30sEoRw5efLbE",
  authDomain: "crown-clothing-website.firebaseapp.com",
  projectId: "crown-clothing-website",
  storageBucket: "crown-clothing-website.appspot.com",
  messagingSenderId: "595633207152",
  appId: "1:595633207152:web:c32f5330d17647d0f501b5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDoc = doc(db, "users", userAuth.uid);

  console.log(userDoc);

  const setDocument = await getDoc(userDoc);
  console.log(setDocument.exists());

  if (!setDocument.exists()) {
    const { email, displayName } = userAuth;
    const date = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        date,
      });
    } catch (err) {
      console.log(err.message);
    }
  } else return userDoc;
};
