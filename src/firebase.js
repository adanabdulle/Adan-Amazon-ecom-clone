import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATtk7IM0leMsmlmTnC1rQCdoe55MbOtnY",
  authDomain: "clone-1fb08.firebaseapp.com",
  projectId: "clone-1fb08",
  storageBucket: "clone-1fb08.appspot.com",
  messagingSenderId: "460580723392",
  appId: "1:460580723392:web:b6858e902fa4fcccd96b25",
  measurementId: "G-KPNTHQCDH7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
