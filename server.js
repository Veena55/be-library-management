const express = require('express');
const { db } = require("./config/database");
const cors = require('cors');
const ErrorHandler = require('./middlewares/errorHandler');

class App {
    constructor() {
        this.app = express();
        this.config();
        this.database();
        this.cors();
        this.routes();
        this.handleErrors();
        this.listen();
    }
    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    cors() {
        this.app.use(cors({ origin: '*' }));
    }
    routes() {
        this.app.use("/", require("./routes"));
    }

    handleErrors() {
        this.app.use(ErrorHandler.globalErrorhandling);
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