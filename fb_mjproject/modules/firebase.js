import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDLxr0UL3qBEkeW1vdWNI3VuLV1ZVmN5UY",
    authDomain: "memo20201103.firebaseapp.com",
    databaseURL: "https://memo20201103.firebaseio.com",
    projectId: "memo20201103",
    storageBucket: "memo20201103.appspot.com",
    messagingSenderId: "337093264374",
    appId: "1:337093264374:web:1d020ae383278d6c623dd7",
    measurementId: "G-K41VDW7QG3"
  }; 
  
var FbApp = firebase.initializeApp(firebaseConfig);
module.exports = FbApp.database();
  

