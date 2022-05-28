import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANpOsmCPJCAfZs9-b20q_4Ny6dPxLO7GE",
  authDomain: "paws-49d79.firebaseapp.com",
  projectId: "paws-49d79",
  storageBucket: "paws-49d79.appspot.com",
  messagingSenderId: "704328759667",
  appId: "1:704328759667:web:43081fb034d498dfdcad06",
  measurementId: "G-D7WMB7MRRN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
