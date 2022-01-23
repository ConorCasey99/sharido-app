import firebase from "firebase/compat/app";

//Firebase SDKs
import "firebase/compat/auth";
import "firebase/database";
import "firebase/storage";
import getAnalytics from "firebase/analytics"
import { env } from "process";

//Firebase configurations
const firebaseconfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APPFIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseconfig);
//const analytics = getAnalytics(firebase);

//Export 
export const auth = firebase.auth();
export default firebase.app();
