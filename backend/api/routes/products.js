module.exports = (app) => {
	const controller = app.controllers.products;

	app.route('/api/v1/products').get(controller.listProducts);
	app.route('/api/v1/products/a').post(controller.listProducts);
};
