const { decodeToken } = require("../helpers/jwt");
const { Student } = require("../models");

const authentication = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) throw { status: 401, msg: "Please login first" };

    const dataToken = decodeToken(access_token);

    const student = await Student.findByPk(dataToken.id);

    if (!student) throw { status: 401, msg: "Please login first" };
    req.student = student;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentication };
