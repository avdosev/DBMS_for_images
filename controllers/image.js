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
    console.log('file requested')
    let file = req.body.file;
    console.log(file)
    imgDB.pushImage((filePath) => {
        tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
            if (err) console.error(err);
            else {
                let outStream = fs.createWriteStream(null, {fd});
                let aborted = false;

                outStream.on('finish', function () {
                    response.statusCode = 201;
                    response.end();
                });

                outStream.on('error', function(err) {
                    console.error(err);
                });

                let counter = new StreamLength();

                counter.on('progress', function() {
                    if (((!isNaN(+contentLength) && counter.bytes > +contentLength) || (counter.bytes > +config.maxFileSize)) && !aborted) {
                        aborted = true;
                        res.statusCode = 413;
                        res.end();
                    }
                });
            
                request.pipe(counter).pipe(outStream);
            }
        })
    })// .then(filePath => {

    // })
    res.send('puk')
}

function removeImage(req, res, next) {
    
}

module.exports = {
    sendImage,
    uploadImage
}