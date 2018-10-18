const express = require('express');
const db = require('./server/models/db');
const app = express();
const port = 3000;
const seed = require('./server/models/seed/seed-db');

require('./server/middleware/middleware')(app);
require('./server/api')(app);

db.sequelize.sync(
{ 
	logging: console.log,
	force: true 
}
).then(() => {
	seed.insert();
})
.then(() => {
	app.listen(port, () => {
		console.log('running server on port ' + port);
	})
});