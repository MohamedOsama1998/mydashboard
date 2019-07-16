import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyAd5wFZ4rgD5wliwHYiPBmgqV08kcQhc2Y",
  authDomain: "mydashboard-e89aa.firebaseapp.com",
  databaseURL: "https://mydashboard-e89aa.firebaseio.com",
  projectId: "mydashboard-e89aa",
  storageBucket: "mydashboard-e89aa.appspot.com",
  messagingSenderId: "1096551595189",
  appId: "1:1096551595189:web:a24f5f76d76acb23"
};

// react-redux-firebase config

const rrfconfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize firestore
// const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfconfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
