module.exports = (app) => {
    app.use('/api/students', require('./student/student.routes'));
    app.use('/api/majors', require('./major/major.routes'));
    // TODO replicate for subjects
}