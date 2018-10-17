module.exports = (app) => {
    app.use('/api/students', require('./student/student.routes'));
    app.use('/api/majors', require('./major/major.routes'));
    app.use('/api/subjects', require('./subject/subject.routes'));
}