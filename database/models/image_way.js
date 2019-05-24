module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define('image-way', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        path_to_file: { type: Sequelize.STRING , allowNull: false}
    });
    return Image;
};
