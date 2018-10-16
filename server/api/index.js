module.exports = (app) => {
    app.use('/api/students', require('./student/student.routes'));
    // TODO replicate for majors and subjects
}