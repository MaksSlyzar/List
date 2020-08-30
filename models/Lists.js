module.exports = (sequelize, DataTypes) => {
	return sequelize.define('List', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            defaultValue: " "
        },
        collectionId: {
            type: DataTypes.INTEGER
        }
    }, {
            timestamps: false,
    });
};