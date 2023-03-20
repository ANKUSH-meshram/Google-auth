// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdHmwUbe_nGEVtT27_bWdYjgR3jWbh3mA",
  authDomain: "authentication-app-99b0c.firebaseapp.com",
  projectId: "authentication-app-99b0c",
  storageBucket: "authentication-app-99b0c.appspot.com",
  messagingSenderId: "1041654796593",
  appId: "1:1041654796593:web:8675d35b1cd944483e6010"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((res) => {
    const name = res.user.displayName;
    const email = res.user.email;
    const profilePic = res.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  }).catch((e) => {
    console.log(e);
  })
}