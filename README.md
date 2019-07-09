# test-for-moneo
This project demonstrates on how you can implement the Mongoose to Neo4j.

The project file structure
* [`bin/www`](bin/www) - variable declarations for the connections to mongoose and moneo [Note: oneo connection is same as neo4j. We use the localhost with post number `7474`] . Also, the port number `3000` is used in the project to know; if the server is working or not.

* [`connection/mongofile.js`](connection/mongofile.js) - mongoose connection

* [`connection/moneofile.js`](connection/moneofile.js) - moneo connection and sample data for two mongoose data models i.e. user and notice

* [`model/userModel.js`](model/userModel.js) - Mongoose schema and data model for user sample data. Also, cypherQuery i.e. query to fetch data from neo4j graph database

* [`model/noticeModel.js`](model/noticeModel.js) - Mongoose schema and data model for notice sample data. Also, cypherQuery i.e. query to fetch data from neo4j graph database

## Installation
cd into folder `test-for-neo` then

    npm install -save

##### Note
    Keep mongodb and neo4j started before running !
## Run
    npm start
