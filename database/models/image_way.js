module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define('image_way', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT(Sequelize.UNSIGNED) },
        file_name: { type: Sequelize.STRING , allowNull: false}
    });
    return Image;
};
