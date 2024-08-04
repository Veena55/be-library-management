const { where } = require("sequelize");
const ErrorHandler = require("../middlewares/errorHandler");
const { Student } = require("../models");

class StudentController {
    async all(req, res) {
        const students = await Student.findAll({ order: [['createdAt', 'DESC']] });
        // console.log(students);
        if (!students) {
            // Throw custom error with status and message
            throw { status: 403, message: "No Records Found" };
        }
        return res.json(students);
    }


    async add(req, res) {
        const { image, video } = req.files;
        if (image?.length) req.body.photo = image[0].destination + "/" + image[0].filename;
        if (video?.length) req.body.video = video[0].destination + "/" + video[0].filename;
        const students = await Student.create(req.body);
        if (!students) {
            throw { status: 403, message: "Unable to add!!" };
        }
        return res.json(students);

    }

    async edit(req, res) {
        const { id } = req.params;
        const student = await Student.findByPk(id);
        // console.log(student);
        res.json(student);

    }

    async editData(req, res) {
        const { image, video } = req.files;
        const id = req.params.id;
        console.log(id);
        if (image?.length) req.body.photo = image[0].destination + "/" + image[0].filename;
        if (video?.length) req.body.video = video[0].destination + "/" + video[0].filename;
        console.log("==data==", req.body);
        const affectedRows = await Student.update(req.body, {
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
        const response = await Student.destroy({ where: { id: id } });
        console.log(response, id);
        res.json(response);

    }

}
module.exports = new StudentController();