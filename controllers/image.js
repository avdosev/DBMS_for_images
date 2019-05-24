const imgDB = require('../services/imagedb_control')

function sendImage(req, res, next) {
    imgDB.getImage(req.params.id).then(rstream => {
        res.set({
            'Cache-Control': 'public, max-age=2160000',
            "Content-Type": "image/png"
        });
        rstream.pipe(res)
        // res.write(file, "binary");
        // res.send();
    }).catch(err => {
        console.error(err);
        res.set({
            'Content-Type': 'text/plain'
        });
        res.statusCode = 404;
        res.end('Resourse not found!');
    })
}

function uploadImage(req, res, next) {

}

module.exports = {
    sendImage,
    uploadImage
}