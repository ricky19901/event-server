var eventLocator = require("./../locators/event.locator");

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