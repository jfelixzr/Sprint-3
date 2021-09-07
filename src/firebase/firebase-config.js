import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBaXpImKXfIZipl6gaakNJPFiQnE7KuX7Q",
  authDomain: "proyecto-f0064.firebaseapp.com",
  projectId: "proyecto-f0064",
  storageBucket: "proyecto-f0064.appspot.com",
  messagingSenderId: "98423819394",
  appId: "1:98423819394:web:042370e138a127d0b8389b"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();


export {
    db,
    googleAuthProvider,
    provider,
    firebase
}

