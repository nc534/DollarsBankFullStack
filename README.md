# DollarsBankFullStack

A Full Stack variant of the DollarsBank project

## Front-End 🖥

The front-end web application of this full-stack project is written in JavaScript using the [**React**](https://reactjs.org/) library. [**npm**](https://docs.npmjs.com/about-npm/) is utilized for installation and development of the web application.

React-wise, a combination of class and functional components make up the extent of the web application. React *hooks* such as `useEffect()` and `useState()` are implemented to handle stateful operations.

To run the web application in your local environment, first ensure NodeJS and npm are installed. Then:

1. In `/dollarsbank_front-end/` run `npm i` to install npm dependencies.
2. Run `npm start` to spin up the development server on [localhost:3000](localhost:3000) by default.

## Back-End 🖥

The back-end web application of this full-stack project is written in Java, using the [**Spring**](https://spring.io/) framework. [**Eclipse**](https://www.eclipse.org/ide/) is the IDE in use for development.

Spring's CrudRepository is utilized to establish a connection with an SQL server, which is accessed through services and controllers which make up the API for the front-end. A basic hash and jumble encryption is also applied to Customer's passwords for security.

To open and run this project in Eclipse:

1. Import '/DollarsBank-back-end/' as a Maven Project
2. Start your local SQL service, with username 'root' and password 'root'
  2.1. Alternatively, change the username, password, and/or the url in 'application.properties'