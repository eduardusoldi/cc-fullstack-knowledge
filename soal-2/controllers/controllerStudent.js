const { hash } = require("../helpers/bcryptjs");
const {
  Student,
  Course,
  StudentCourse,
  sequelize,
} = require("../models/index");

class ControllerStudent {
  static async fetchStudent(req, res, next) {
    try {
      let studentData = await Student.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: StudentCourse,
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt', 'StudentId',]
            },
            include: [
              {
                model: Course,
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                },
              }
            ]
          },
        ],
      });
      res.status(200).json(studentData);
    } catch (error) {
      next(error);
    }
  }

  static async fetchStudentById(req, res, next) {
    try {
      let studentData = await Student.findOne({
        where: {
          id: req.params.studentId,
        },
        include: [
          {
            model: StudentCourse,
            include: Course,
          },
        ],
      });
      if (!studentData) throw { status: 404, msg: "Student not found" };
      req.student = studentData;
      res.status(200).json(studentData);
    } catch (error) {
      next(error);
    }
  }

  static async createStudent(req, res, next) {
    try {
      let { name, email, password, NIM, major } = req.body;
      let studentData = await Student.create({
        name,
        email,
        password,
        NIM,
        major,
      });
      let newStudent = await Student.findOne({
        where: {
          id: studentData.id,
        },
      });
      res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  }

  static async editStudent(req, res, next) {
    try {
      let { name, email, password, NIM, major } = req.body;
      let findStudent = await Student.findOne({
        where: {
          id: +req.params.studentId,
        },
      });
      let hashedPassword = hash(password);
      if (!findStudent) throw { status: 404, msg: "Student not found" };
      await Student.update(
        {
          name,
          email,
          password: hashedPassword,
          NIM,
          major,
        },
        {
          where: {
            id: +req.params.studentId,
          },
        }
      );
      res.status(200).json({ message: `Student's data updated successfully.` });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteStudent(req, res, next) {
    try {
      let deletedStudent = await Student.destroy({
        where: { id: +req.params.studentId },
      });
      if (!deletedStudent) throw { status: 404, msg: "Student not found" };
      res.status(200).json({
        message: `Student's data deleted successfully`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async fetchStudentCourse(req, res, next) {
    try {
      let studentCourseData = await StudentCourse.findAll(
        {
        include: [Student, Course]
      }
      )
      res.status(200).json(studentCourseData)
    } catch (error) {
      next(error)
    }
  }

  static async createStudentCourse(req, res, next) {
    try {
      let studentData = await Student.findOne({where: {id: +req.user.id}})
      console.log(req.user.id, req.params.courseId)
      if (!studentData) throw ({status: 404, msg: 'Student not found'})
      let studentCourseData = await StudentCourse.create({
        StudentId: +req.user.id, 
        CourseId: +req.params.courseId
      })
      res.status(201).json(studentCourseData)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = ControllerStudent;
