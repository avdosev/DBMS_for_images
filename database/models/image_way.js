module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define('image-way', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        file_name: { type: Sequelize.STRING , allowNull: false}
    });
    return Image;
};
