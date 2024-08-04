const express = require('express');
const { db } = require("./config/database");
const cors = require('cors');
const ErrorHandler = require('./middlewares/errorHandler');
const path = require("path");

class App {
    constructor() {
        this.app = express();
        this.config();
        this.database();
        this.cors();
        this.staticFiles();
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
    // Serve static files from the "uploads/images" directory
    staticFiles() {
        this.app.use('/uploads/images', express.static('uploads/images'));
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