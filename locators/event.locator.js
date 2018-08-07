// Imports
var firebase = require("firebase");
var CONFIG = require('./../config.json');

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