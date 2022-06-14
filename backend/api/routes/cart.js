module.exports = (app) => {
	const controller = app.controllers.cart;

	app.route('/api/cart/:id_user').post(controller.createCart).get(controller.getCart);
};
