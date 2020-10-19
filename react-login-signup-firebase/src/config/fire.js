import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB3VM-8NY_s9Xv6NO7H7V17ma9ldg3Xseo",
    authDomain: "login-signup-firebase-aa0c1.firebaseapp.com",
    databaseURL: "https://login-signup-firebase-aa0c1.firebaseio.com",
    projectId: "login-signup-firebase-aa0c1",
    storageBucket: "login-signup-firebase-aa0c1.appspot.com",
    messagingSenderId: "281982890807",
    appId: "1:281982890807:web:d2c768ea5489f019cb60b2"
};
const fire = firebase.initializeApp(firebaseConfig)

export default fire;