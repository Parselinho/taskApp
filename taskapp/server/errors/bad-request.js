const CustomError = require("./custom-error");

class BadRequest extends CustomError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = 400;
  }
}
