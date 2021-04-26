const mongoose = require('mongoose');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'MyProject';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;
const url_Atlass='mongodb+srv://Guirep:Ta00000000@@dbcluster.92y33.mongodb.net/MyProject?retryWrites=true&w=majority'
const QUERY_STRING = MONGO_USER ? 
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`:
`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

// Connection to DB

/*const db = mongoose.connect(QUERY_STRING,{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connected to Database'))
.catch((error) => console.log(error));*/

const db = mongoose.connect('mongodb+srv://Guirep:Ta00000000@@dbcluster.92y33.mongodb.net/MyProject?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connected to Database'))
.catch((error) => console.log(error));

module.exports = db;