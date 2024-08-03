class ErrorHandler extends
    Error {

    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }

    static withErrorHandling(fn) {
        return async (req, res, next) => {
            try {
                await fn(req, res, next);
            } catch (error) {
                next(error);
            }
        }
    }

    //global error handling
    static globalErrorhandling(error, req, res, next) {
        error.status = error.status || 500;
        res.status(error.status).json({ message: error.status == 500 ? "Something Went Wrong!!" : error.message });
    }
}

module.exports = ErrorHandler;