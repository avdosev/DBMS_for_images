const bodyParser = require('body-parser');

function initRoutes(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/storage/:id', )
    app.post('/storage')
}


module.exports = initRoutes;