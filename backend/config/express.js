const express = require('express');
//const bodyParser = require('body-parser')
const config = require('config');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
	const app = express();

	//SETTING ENVIRONMENT VARIABLES
	app.set('port', process.env.PORT || config.get('server.port'));

	//MIDDLEWARES
	//app.use(bodyParser.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(cors({ origin: 'http://localhost:3000' }));

	consign({ cwd: 'api' }).then('data').then('controllers').then('routes').into(app);

	return app;
};
