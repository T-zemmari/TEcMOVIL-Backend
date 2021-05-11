const express = require('express')
const router = require('./router');
const db = require('./db');
const cors = require('cors')
const app = express();
const Port = 3002;
require('crypto').randomBytes(48).toString('hex')


//Midelwares

app.use(cors())
app.use(express.json());
app.use('/public',express.static(`${__dirname}/libs`))
app.use(router);




db.then(() => {
    app.listen(process.env.PORT || Port, () => {
        console.log(`Escuchando en el puerto ${Port}`)
    })
}).catch(console.log);