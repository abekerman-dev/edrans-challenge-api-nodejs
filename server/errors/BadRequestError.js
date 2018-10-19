module.exports = class BadRequestError extends require('./AppError') {
    constructor (message) {
        super(message, 400);
    }
};