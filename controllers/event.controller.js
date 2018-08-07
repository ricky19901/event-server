var eventService = require("./../services/event.service");
var loginService = require("./../services/login.service")

exports.createEvent = (event, token) => {
    return authenticatedRequest(token, eventService.createEvent(event));
}

exports.getEventById = (id, token) => {
    return authenticatedRequest(token, eventService.getEventById(id));
}

exports.updateEvent = (event, token) => {
    return authenticatedRequest(token, eventService.updateEvent(event));
}

exports.deleteEvent = (id, token) => {
    return authenticatedRequest(token, eventService.deleteEvent(id));
}

authenticatedRequest = (token, requestPromise) => {
    return new Promise(function (resolve, reject) {
        loginService.tokenLogin(token)
            .then(() => {
                requestPromise
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
            .catch(() => {
                reject(error);
            }).finally(() => {
                loginService.logout();
            });
    });
}