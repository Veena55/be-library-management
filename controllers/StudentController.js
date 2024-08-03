const ErrorHandler = require("../middlewares/errorHandler");
const { Student } = require("../models");

class StudentController {
    async all(req, res) {
        const students = await Student.findAll();
        console.log(students);
        if (!students) {
            // Throw custom error with status and message
            throw { status: 403, message: "No Records Found" };
        }
        return res.json(students);
    }


    async add(req, res) {
        console.log(req);
        const { image, video } = req.files;
        if (image?.length) req.body.photo = image[0].destination + "/" + image[0].filename;
        if (video?.length) req.body.video = video[0].destination + "/" + video[0].filename;
        const students = await Student.create(req.body);
        if (!students) {
            throw { status: 403, message: "Unable to add!!" };
        }
        return res.json(students);

    }
}
module.exports = new StudentController();