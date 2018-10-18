module.exports = class ResourceNotFoundError extends require('./AppError') {
    constructor (message) {
        super(message, 404);
    }
};