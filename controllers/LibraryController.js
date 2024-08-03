const { Library } = require("../models");
const { Book, Student } = require("../models/");

class LibraryController {
    async all(req, res) {
        Library.findAll({
            include: [
                { model: Book, as: 'book' },
                { model: Student, as: 'student' }
            ]
        })
            .then((library) => {
                return res.json(library);
            }).catch(error => {
                console.log(error);
                return res.status(500).json("Something went wrong!!");
            })
    }


    async add(req, res) {
        try {
            const libraryList = await Library.create(req.body);
            return res.json(libraryList);
        } catch (error) {
            console.log(error);
            return res.status(500).json("Something went wrong!!");
        }

    }
}

module.exports = new LibraryController();