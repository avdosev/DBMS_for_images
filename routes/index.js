const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const imgControllers = require('../controllers/image')

function initRoutes(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))

    app.get('/storage/:id', imgControllers.sendImage)
    app.post('/load-to-storage', imgControllers.uploadImage)

    app.get('/', (req, res, next) => {
        res.render('home')
    })
}


module.exports = initRoutes;