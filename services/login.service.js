var loginLocator = require("./../locators/login.locator");

// Services are the heavy lifters of the project. They execute logic not directly pertaining to the Use Case flow.
// Services can be used for non-entity related elements. Considering that no complex logic is done on this project's login, this service is also simple right now.

exports.login = (username, password) => {
    return loginLocator.login(username, password);
}

exports.logout = () => {
    return loginLocator.logout();
}

exports.tokenLogin = (token) => {
    return loginLocator.tokenLogin(token);
}