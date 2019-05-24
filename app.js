const express = require('express');
const app = express();
const models = require('./database/models');


const initRoutes = require('./routes');

const { port } = require('./config');

initRoutes(app);

models.sequelize
    .sync()
    .then(() => {
        console.log('Nice! Database looks fine');
    })
    .catch(err => {
        console.log('Something went wrong with the Database Update!');
        console.log("Crashed with error: "+ err)
    });

app.listen(port, err => {
    if (!err) console.log('Server started on ' + port + ' port');
    else console.log('Server not started');
});
