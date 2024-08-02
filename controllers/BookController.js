const { Book, Library, Student } = require("../models");

class BookController {
    async all(req, res) {
        try {
            const Books = await Book.findAll({
                include: [{ model: Library, as: 'libraries', include: [{ model: Student, as: 'student' }] }]
            });
            return res.json(Books);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Something went wrong!!" });
        }
    }
    async add(req, res) {
        try {
            const Books = await Book.create(req.body);
            return res.json(Books);
        } catch (error) {
            return res.status(500).json({ message: "Something went wrong!!" });
        }
    }
}

module.exports = new BookController();