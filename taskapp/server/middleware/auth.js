const jwt = require("jsonwebtoken");
const { CustomError } = require("../errors/custom-error");

// first :

const authticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith("Bearer")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomError("Not auth to acces this route", 401);
  }
};

// second :

const auth = (req, res, next) => {
  let token = req.header("x-api-key");
  if (!token) {
    throw CustomError("you must have token", 401);
  }
  try {
    let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.tokenData = decodedToken;
    next();
  } catch (error) {
    throw CustomError("not auth to acces this route", 401);
  }
};

module.exports = { authticate, auth };
