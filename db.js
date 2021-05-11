const mongoose = require('mongoose');
require('dotenv').config()
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'MyProject';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;
const URL_ATLAS= process.env.URL_ATLAS   ;
const QUERY_STRING = MONGO_USER ? 
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`:
`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

const MONGO_URL=process.env.MONGO_URL;


// Connection to DB



const db = mongoose.connect(`${MONGO_URL}`,{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connected to Database'))
.catch((error) => console.log(error));

module.exports = db;