import firebase from 'firebase/app'
import 'firebase/firestore'

// YOU SHOULD USE YOUR OWN FIREBASE API HERE :-)
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const postsFirebase = firebase.firestore()


export { postsFirebase }