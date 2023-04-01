const { compare } = require("../helpers/bcryptjs");
const { createToken } = require("../helpers/jwt");
const jwt = require("../helpers/jwt");
const { User} = require("../models/index");

class ControllerAuth {
  static async postRegister(req, res, next) {
    try {
      const { username, email, password } = req.body;
      let user = await User.create({
        username,
        email,
        password,
        role: "admin",
      });
      res.status(201).json({ user });
    } catch (err) {
      next(err);
    }
  }
  static async postLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ where: { email } });
      if (!user)
        throw {
          status: 401,
          msg: "Error invalid username or email or password",
        };

      let isValidPassword = compare(password, user.password);
      if (!isValidPassword)
        throw {
          status: 401,
          msg: "Error invalid username or email or password",
        };

      let access_token = createToken({ id: user.id, email: user.email });
      res
        .status(200)
        .json({ access_token, id: user.id, username: user.username });
    } catch (err) {
    console.log(err)
      next(err);
    }
  }
}

module.exports = ControllerAuth;
