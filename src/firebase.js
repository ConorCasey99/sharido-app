import firebase from "firebase/compat/app";

//Firebase SDKs
import "firebase/compat/auth";
import "firebase/database";
import "firebase/compat/storage";
import getAnalytics from "firebase/analytics"
import { env } from "process";
import { getFirestore } from "firebase/firestore";

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
const app = firebase.initializeApp(firebaseconfig);
//const analytics = getAnalytics(firebase);

//Export 
const db = getFirestore(app);
const storage = firebase.storage();

export { db, storage};
export const auth = firebase.auth();
export default firebase.app();
