import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyD6-Z-TmZH9NyBwq4ZBA3G5LyZ7iZLotic",
  authDomain: "finance-app-74862.firebaseapp.com",
  projectId: "finance-app-74862",
  storageBucket: "finance-app-74862.appspot.com",
  messagingSenderId: "38933618756",
  appId: "1:38933618756:web:f357d0ed3afd5324bc5c11",
};

if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
