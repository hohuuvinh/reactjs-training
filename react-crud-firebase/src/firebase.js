import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCGVXIZp_Ejqcrn-1oniWF3zGII_FqVwzk",
    authDomain: "react-crud-c43b6.firebaseapp.com",
    databaseURL: "https://react-crud-c43b6-default-rtdb.firebaseio.com",
    projectId: "react-crud-c43b6",
    storageBucket: "react-crud-c43b6.appspot.com",
    messagingSenderId: "89691730295",
    appId: "1:89691730295:web:947312d8a7b039a7da3172",
    measurementId: "G-5X1037KMZ7"
  };
 var fireDb =  firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();