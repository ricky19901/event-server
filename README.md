# Event Server API Demo

This project serves as a starting ground for future API projects based on NodeJS.

## Requirements

Make sure you have NodeJS installed on your machine.

## Getting it to run

After downloading the repo, access its root folder (the folder where server.js is at) and run the following command:
```
npm i
```
Once all dependencies have insalled, you can start the server using the following command:
```
npm server
```
This will launch the server and keep the terminal open for logging. 
And that's it! The API is up and running.

## Architecture

### Dispatcher (Server.js)
The entry point of the API. This element takes the requests, unpacks the contents and routes it to the apropiate controller to handle the Use Case relevant to the request. Once the controllers are done executing the Use Case flow, it will pack the results back into a response and send it back.

### Controller (Business Layer)
In charge of managing the Use Case main and alternative flows. It only executes high-end logic of the use case, leaving the details of execution to the Service Layer.

### Service (Logic Layer)
In charge of the detail and hard work within each line of a Use Case. Services will not generally handle exceptions, as that is more relevant to the flow of a Use Case alternative flows. Services deal almost entirely with funciontal logic and execution, leaving data access logic to the Locator Layer (Traditionally called data layer in non-distributed systems)

### Locators (Data Layer)
Locators are in charge of obtaining and adapting data into the entities that the Service Layers works with. It will be in charge of obtaining data, from different sources if necesary, serializing and de-serializing it. Having this extra layer, allows the rest of the system to operate decoupled from its data source.

### Utils
Normally classes full of static methods that can be useful throughout the whole project. While this case did not need a utils folder to hold any of these functionalities, it is a useful thing to have in a project. Optimally, if the utils become useful to other projects, it is recommended to create a module and set it up within NPM as a package for others to use on future projects.

## Firebase Integration

This API interacts with a firebase project that holds all the data and manages authentication and security. As such, it will require a user and password for it to properly get access to data within that database.

## Aknowledgements

Hope it helps you out.
Kind regards,

Andrés
