var eventLocator = require("./../locators/event.locator");

// Services are the heavy lifters of the project. They execute logic not directly pertaining to the Use Case flow.
// Entities managed in this CRUD are rather simple and have little self-generating data, so the services are not complex.

exports.createEvent = (event) => {
    event.dateCreated = Date.now();
    event.dateUpdated = Date.now();
    return eventLocator.createEvent(event);
}

exports.getEventById = (id) => {
    return eventLocator.getEventById(id);
}

exports.updateEvent = (event) => {
    event.dateUpdated = Date.now();
    return eventLocator.updateEvent(event);
}

exports.deleteEvent = (id) => {
    return eventLocator.deleteEvent(event);
}