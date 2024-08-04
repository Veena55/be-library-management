const { Library } = require("../models");
const { Book, Student } = require("../models/");

class LibraryController {
    async all(req, res) {
        Library.findAll({
            include: [
                { model: Book, as: 'book' },
                { model: Student, as: 'student' }
            ], order: [['createdAt', 'DESC']]
        },
        )
            .then((library) => {
                console.log(library);

                return res.json(library);
            }).catch(error => {
                console.log(error);
                return res.status(500).json("Something went wrong!!");
            })
    }


    async add(req, res) {
        const { studentId, bookId, startdate, enddate } = req.body;
        req.body.bookId = JSON.parse(bookId).id;
        const libraryList = await Library.create(req.body);
        return res.json(libraryList);
    }

    async allStudents(req, res) {
        const students = await Student.findAll();
        res.json(students);
    }

    async edit(req, res) {
        const { id } = req.params;
        const library = await Library.findByPk(id);
        console.log(library);
        res.json(library);

    }
    async editData(req, res) {
        const id = req.params.id;
        const { studentId, bookId, startdate, enddate } = req.body;
        req.body.bookId = JSON.parse(bookId).id;
        console.log(req.body, "");
        const affectedRows = await Library.update(req.body, {
            where: {
                id: id
            }
        });
        if (affectedRows === 0) {
            throw { status: 403, message: "Unable to Edit!!" };
        }
        console.log(`Number of affected rows: ${affectedRows}`);
        return res.json({ message: "Student updated successfully" });

    }

    async delete(req, res) {
        const { id } = req.params;
        const response = await Library.destroy({ where: { id: id } });
        res.json(response);

    }
}

module.exports = new LibraryController();