// Imports
var firebase = require("firebase");
var CONFIG = require('./../config.json');

// Locators are the distributed versions of Data Access Objects of old.
// Being a simple CRUD and just managing a single data source, this locator is rather simple.

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

exports.tokenLogin = (token) => {
    return getAuth().signInWithCustomToken(token);
}