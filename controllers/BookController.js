const { Book, Library, Student } = require("../models");

class BookController {
    async all(req, res) {
        try {
            const Books = await Book.findAll({ order: [['createdAt', 'DESC']] });
            // const Books = await Book.findAll({
            //     include: [{ model: Library, as: 'libraries', include: [{ model: Student, as: 'student' }] }]
            // });
            return res.json(Books);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Something went wrong!!" });
        }
    }
    async add(req, res) {
        console.log(req.body, "HI");
        const Books = await Book.create(req.body);
        return res.json(Books);

    }

    async edit(req, res) {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        console.log(book);
        res.json(book);

    }
    async editData(req, res) {
        const id = req.params.id;
        const affectedRows = await Book.update(req.body, {
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
        const response = await Book.destroy({ where: { id: id } });
        res.json(response);

    }
}

module.exports = new BookController();