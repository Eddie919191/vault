// vault/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2NJDPD3ChbRBh08M-KY6miZUS171ArpM",
  authDomain: "vault-ff05f.firebaseapp.com",
  projectId: "vault-ff05f",
  storageBucket: "vault-ff05f.firebasestorage.app",
  messagingSenderId: "82458318084",
  appId: "1:82458318084:web:d47d1a5e6bbc0feb8d2c51"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign in the user anonymously
signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously");
  })
  .catch((error) => {
    console.error("Anonymous sign-in failed:", error);
  });

// Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Current anonymous user UID:", user.uid);
    // Save user.uid for future document ownership if needed
  }
});

export { db, auth };
