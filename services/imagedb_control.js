// FileSystem
const fs = require('fs')
const fsPromises = fs.promises;

// Sequelize
const models = require('../database/models');

const DBimg = require('../database/models/image_way')(models.sequelize, models.Sequelize)

// Config
const config = require('../config')

/**
 * @param {*} loadTofs колбек который доллжен сохранить полученный файл под названием которое получило
 */
function pushImage(loadToFs, typeImage = 'png') {
    return new Promise((resolve, reject) => {
        const newName = generateImgFileName('img', typeImage)
        const path = config.storageDir + '/' + newName;
        loadToFs(path, err => {
            if (err) reject(err);
            else {
                DBimg.create({
                    file_name: newName
                }).then((item) => {
                    resolve(item)
                    console.log('success insert');
                }).catch(reject)
            } 
        });
    }) 
}

async function removeImage(imgId) {
    const item = DBimg.destroy({
        where: {
            id: imgId
        }
    })

    if (!item) {
        console.log('file not found');
        return false;
    }

    const filePath = config.storageDir + '/' + item.file_name;

    let check = await fsPromises.access(filePath, fs.constants.W_OK)

    if (check) {
        check = await fsPromises.unlink(filePath)
    }

    return !check;
}

/**
 * @param {*} imgId 
 * @returns fs.readstream
 */
async function getImage(imgId) {
    const item = await DBimg.findOne({
        where: {
            id: imgId
        }
    })
    
    const filePath = config.storageDir + '/' + item.file_name;
    
    // const data = await fsPromises.readFile(filePath, "binary")
    // return data;
    const rstream = fs.createReadStream(filePath)
    return rstream;
}

module.exports = {
    getImage,
    pushImage,
    removeImage
}

// Возвращает сгененерированное название для строки
function generateImgFileName(type, extension) {
    const rand = () => Math.floor(Math.random() * 10000000);
    return `${type}_${rand()}_${rand()}.${extension}`;
}