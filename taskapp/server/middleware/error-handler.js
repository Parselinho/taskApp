const { CustomError } = require("../errors/custom-error");

const globalError = (err,req,res,next) => {
    console.error(err.stack);
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({msg: err.message});
    }
    if (err.name === 'CastError') {
        return res.status(400).json({msg: 'Invalid ID format'});
    }
    res.status(500).json({msg: 'Something Went Wrong, Please Try Again...'});
};

module.exports = globalError;