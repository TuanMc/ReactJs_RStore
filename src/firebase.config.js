import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBbxBRdFYJTYeqyIiDk0Cm-Bu97LLZizvk",
  authDomain: "react-basic-1.firebaseapp.com",
  databaseURL: "https://react-basic-1.firebaseio.com",
  projectId: "react-basic-1",
  storageBucket: "react-basic-1.appspot.com",
  messagingSenderId: "421842276494"
};
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;
