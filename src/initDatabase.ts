const firebase = require('firebase');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyALM0V1XOmgkyffrE6CstkIdD0E_uG_16c",
    authDomain: "sihaapp-174718.firebaseapp.com",
    databaseURL: "https://sihaapp-174718.firebaseio.com",
    projectId: "sihaapp-174718",
    storageBucket: "sihaapp-174718.appspot.com",
    messagingSenderId: "981358618808"
};
firebase.initializeApp(config);

export const dataBase = firebase.database();