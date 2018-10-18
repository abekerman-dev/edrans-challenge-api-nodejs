module.exports = (app) => {
	app.use('/api/students', require('./student/student.routes'));
	app.use('/api/majors', require('./major/major.routes'));
	app.use('/api/subjects', require('./subject/subject.routes'));

    app.use(function(req, res, next) {
    	return res.status(404).send({ error: 'Route '+req.url+' not found' });
    });

	app.use(function(err, req, res, next) {
		console.error('an error has occurred:', err.status, err.message);
		return res.status(err.status).send({ error: err.message });
	});
}