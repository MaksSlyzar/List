module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Collection', {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: "Description",
            allowNull: true
            // allowNull defaults to true
        },
        allows: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
		timestamps: false,
    });
};