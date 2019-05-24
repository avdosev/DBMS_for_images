const bodyParser = require('body-parser');

const imgControllers = require('../controllers/image')

function initRoutes(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/storage/:id', imgControllers.sendImage)
    app.post('/storage')
}


module.exports = initRoutes;