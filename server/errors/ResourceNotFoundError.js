module.exports = class ResourceNotFoundError extends require('./AppError') {
    constructor (message, id) {
        super('Resource ' + message.toUpperCase() + ' with id ' + id + ' not found', 404);
    }
};