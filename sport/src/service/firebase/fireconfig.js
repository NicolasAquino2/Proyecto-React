import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC48GFvTxISGdmQAm_5ssdgUwD8JrunOEQ",
  authDomain: "proyecto-react-js-coder.firebaseapp.com",
  projectId: "proyecto-react-js-coder",
  storageBucket: "proyecto-react-js-coder.appspot.com",
  messagingSenderId: "131844547201",
  appId: "1:131844547201:web:a45774b93c081328c92380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)