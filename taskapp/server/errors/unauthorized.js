const CustomError = require("./custom-error");

class Unauthorized extends CustomError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = Unauthorized;
