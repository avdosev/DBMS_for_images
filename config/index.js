const port = process.env.PORT || 3020;
const url = `localhost:${port}`;
const path = require('path');
const mainDir = path.join(__dirname, '..');
const imgDir = mainDir + '/public/img';
const storageDir = mainDir + '/storage';

const production= ((process.env.NODE_ENV === "production") ? true : false)

module.exports = {
    port,
    url,
    mainDir,
    imgDir,
    storageDir,
    production
};