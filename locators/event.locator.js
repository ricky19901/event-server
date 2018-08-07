// Imports
var firebase = require("firebase");
var CONFIG = require('./../config.json');

// Locators are the distributed versions of Data Access Objects of old.
// Being a simple CRUD and just managing a single data source, this locator is rather simple.

// Initialize Firebase

getDatabase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(CONFIG);
    }
    return firebase.firestore();
}

// CRUD Logic

exports.createEvent = (event) => {
    var newId = getDatabase().collection("events").document().getId();
    return getDatabase().collection("events").doc(newId).set(event);
}

exports.getEventById = (id) => {
    return getDatabase().collection("events").get(id);
}

exports.updateEvent = (event) => {
    return getDatabase().collection("events").doc(event.id).set(event);
}

exports.deleteEvent = (id) => {
    return getDatabase().collection("events").doc(id).delete();
}