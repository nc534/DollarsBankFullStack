# DollarsBankFullStack

A Full Stack variant of the DollarsBank project

## Back-End 🖥

The back-end web application of this full-stack project is written in Java, using the [**Spring**](https://spring.io/) framework. [**Eclipse**](https://www.eclipse.org/ide/) is the IDE in use for development but [**IntelliJ**](https://www.jetbrains.com/idea/) should work too.

Spring's CrudRepository is utilized to establish a connection with an SQL server, which is accessed through services and controllers which make up the API for the front-end. A basic hash and jumble encryption is also applied to Customers' passwords for security.

To open and run this project:

1. Import `/DollarsBank-back-end/` as a Maven Project.
2. Start your local MySQL service and change the `username` and `password` in the `application.properties` if needed
3. Create a `dollars_bank` database in your MySQL local server.
4. Run the application in your IDE which should run on [localhost:8080](localhost:8080) by default.

## Front-End 🖥

The front-end web application of this full-stack project is written in JavaScript using the [**React**](https://reactjs.org/) library. [**npm**](https://docs.npmjs.com/about-npm/) is utilized for installation and development of the web application.

React-wise, a combination of class and functional components make up the extent of the web application. React *hooks* such as `useEffect()` and `useState()` are implemented to handle stateful operations.

To run the web application in your local environment, first ensure NodeJS and npm are installed. Then:

1. In `/dollarsbank_front-end/` run `npm i` to install npm dependencies.
2. Run `npm start` to spin up the development server on [localhost:3000](localhost:3000) by default.
