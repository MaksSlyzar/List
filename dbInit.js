const Sequelize = require("sequelize");

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.database',
    logging: false
});


const Lists = require('./models/Lists')(connection, Sequelize.DataTypes);
const Collections = require('./models/Collections')(connection, Sequelize.DataTypes);

module.exports.getAllCollections = () => {
    return Collections.findAll({});
}
module.exports.addCollection = (collection_name) => {
    Collections.create({ name: collection_name, allows: ["all"], completed: false });
}
module.exports.removeCollection = async (collection_id) => {
    let collection = await Collections.findOne({
        where: {
            id: Number(collection_id)
        }
    });
    await collection.destroy();
}
connection.sync().then( async () => {
    console.log('Database synced');
}).catch(console.error());