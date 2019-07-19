import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAd5wFZ4rgD5wliwHYiPBmgqV08kcQhc2Y",
  authDomain: "mydashboard-e89aa.firebaseapp.com",
  databaseURL: "https://mydashboard-e89aa.firebaseio.com",
  projectId: "mydashboard-e89aa",
  storageBucket: "mydashboard-e89aa.appspot.com",
  messagingSenderId: "1096551595189",
  appId: "1:1096551595189:web:a24f5f76d76acb23"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
