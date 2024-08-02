const { Student } = require("../models");

class StudentController {
    async all(req, res) {
        try {
            const students = await Student.findAll();
            console.log(students);
            return res.json(students);

        } catch (error) {
            console.log("Error:" + error);
            return res.status(500).json({ message: "Something Went Wrong!!" });
        }
    }

    async add(req, res) {
        try {
            const students = await Student.create(req.body);
            console.log(students);
            return res.json(students);

        } catch (error) {
            console.log("Error:" + error);
            return res.status(500).json({ message: "Something Went Wrong!!" });
        }
    }
}
module.exports = new StudentController();