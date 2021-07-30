import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwjXuXAiRErOtToISiKXyGYRSMriMzW9A",
  authDomain: "db-ecommerce-client.firebaseapp.com",
  projectId: "db-ecommerce-client",
  storageBucket: "db-ecommerce-client.appspot.com",
  messagingSenderId: "183189929471",
  appId: "1:183189929471:web:a39913c7d948dbf12dfbca"
};

firebase.initializeApp(firebaseConfig);
export default firebase;