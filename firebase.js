import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6wenDZS-ftjeaOmo2SR3XxpVhHFSccFQ",
    authDomain: "facebook-nextjs-723b6.firebaseapp.com",
    projectId: "facebook-nextjs-723b6",
    storageBucket: "facebook-nextjs-723b6.appspot.com",
    messagingSenderId: "831244025305",
    appId: "1:831244025305:web:e03da77282f903de196dc8"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

