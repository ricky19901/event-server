// Imports
var firebase = require("firebase");
var CONFIG = require('./../config.json');

// Initialize Firebase

getAuth = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(CONFIG);
    }
    return firebase.auth();
}

// Authentication Logic

exports.login = (username, password) => {
    return getAuth().signInWithEmailAndPassword(username, password);
}

exports.logout = () => {
    return getAuth().signOut();
}