const {
  Student,
  Course,
  StudentCourse,
  sequelize,
} = require("../models/index");

class ControllerCourse {
  static async fetchCourse(req, res, next) {
    try {
      let courseData = await Course.findAll();
      res.status(200).json(courseData);
    } catch (error) {
      next(error);
    }
  }

  static async fetchCourseById(req, res, next) {
    try {
      let courseData = await Course.findOne({
        where: {
          id: req.params.courseId,
        },
      });
      if (!courseData) throw { status: 404, msg: "Course not found" };
      req.course = courseData;
      res.status(200).json(courseData);
    } catch (error) {
      next(error);
    }
  }

  static async createCourse(req, res, next) {
    try {
      let { name, code, credit } = req.body;
      let courseData = await Course.create({
        name,
        code,
        credit,
      });
      let newCourse = await Course.findOne({
        where: {
          id: courseData.id,
        },
      });
      res.status(201).json(newCourse);
    } catch (error) {
      next(error);
    }
  }

  static async editCourse(req, res, next) {
    try {
      let { name, code, credit } = req.body;
      let findCourse = await Course.findOne({
        where: {
          id: +req.params.courseId,
        },
      });
      if (!findCourse) throw { status: 404, msg: "Course not found" };
      await Course.update(
        {
          name,
          code,
          credit,
        },
        {
          where: {
            id: +req.params.courseId,
          },
        }
      );
      res.status(200).json({ message: `Course's data updated successfully.` });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCourse(req, res, next) {
    try {
      let deletedCourse = await Course.destroy({
        where: { id: +req.params.courseId },
      });
      if (!deletedCourse) throw { status: 404, msg: "Course not found" };
      res.status(200).json({
        message: `Course's data deleted successfully`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerCourse;
