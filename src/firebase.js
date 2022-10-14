
import firebase from "firebase/compat/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzCAD4gxlS--847u3ekZlpm8uBmYKHww",
  authDomain: "crud-diplomado-6909f.firebaseapp.com",
  projectId: "crud-diplomado-6909f",
  storageBucket: "crud-diplomado-6909f.appspot.com",
  messagingSenderId: "935985731155",
  appId: "1:935985731155:web:8f7fd77650d77f57e618a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}