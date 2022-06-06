module.exports = (app) => {
	const controller = app.controllers.user;

	app.route('/api/user').post(controller.getUserByEmail).get(controller.listUsers);
};
