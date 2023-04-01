const { decodeToken } = require("../helpers/jwt");
const { User} = require("../models");

const authentication = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) throw { status: 401, msg: "Please login first" };

    const dataToken = decodeToken(access_token);

    const user = await User.findByPk(dataToken.id);

    if (!user) throw { status: 401, msg: "Please login first" };
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};


module.exports = {  authentication };
