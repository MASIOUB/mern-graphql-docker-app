const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');

connectDB();

// Init App
const app = express();

var corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
);

// Simple Route (Http Methods (Or Verbs))
app.get('/', (req, res) => {
    res.send('Welcome to your new application');
})

// Set Port, Listen For Requests
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });