const express = require('express');
const { db } = require("./config/database");

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.database();
        this.listen();
    }
    config() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use("/", require("./routes"));
    }

    async database() {
        await db.authenticate();
        db.syncModels();
    }

    listen() {
        this.app.listen(5000, () => {
            console.log("Server running on 5000 port!");
        });
    }
}


module.exports = new App();