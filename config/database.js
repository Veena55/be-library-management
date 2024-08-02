const { Sequelize } = require("sequelize");
const config = require('./config.json')['development'];

class Database {
    constructor() {
        this.db = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect
        });
    }
    async authenticate() {
        try {
            await this.db.authenticate();
            console.log('Database connected...');
        } catch (err) {
            console.log('Error: ' + err);

        }
    }
    syncModels() {
        this.db.sync();
    }
}

module.exports.db = new Database();