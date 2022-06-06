module.exports = (app) => {
	const products = app.data.products;
	const controller = {};

	controller.listProducts = async (req, res) =>
		products
			.then((data) => res.status(200).json(data))
			.catch((error) => console.error(`Error on request products: ${error}`));

  
	return controller;
};
