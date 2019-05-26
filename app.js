const express = require('express');
const app = express();
const models = require('./database/models');


const initRoutes = require('./routes');

const { port } = require('./config');

initRoutes(app);

//For Handlebars
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('./public'));

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