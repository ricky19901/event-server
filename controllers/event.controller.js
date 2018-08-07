var eventService = require("./../services/event.service");
var loginService = require("./../services/login.service")

exports.createEvent = (event, username, password) => {
    return new Promise(function (resolve, reject) {
        loginService.login(username, password)
            .then(() => {
                eventService.createEvent(event)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
            .catch(() => {
                reject(error);
            })
    });
}

exports.getEventById = (id, username, password) => {
    return new Promise(function (resolve, reject) {
        loginService.login(username, password)
            .then(() => {
                eventService.getEventById(id)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
            .catch(() => {
                reject(error);
            })
    });
}

exports.updateEvent = (event, username, password) => {
    return new Promise(function (resolve, reject) {
        loginService.login(username, password)
            .then(() => {
                eventService.updateEvent(event)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
            .catch(() => {
                reject(error);
            })
    });
}

exports.deleteEvent = (id, username, password) => {
    return new Promise(function (resolve, reject) {
        loginService.login(username, password)
            .then(() => {
                eventService.deleteEvent(id)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
            .catch(() => {
                reject(error);
            })
    });
}