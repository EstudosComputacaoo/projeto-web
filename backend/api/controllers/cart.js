function cart(app) {
	const controller = [];

	const { getCart, createCart, updateCart } = app.data.cart;

	controller.getCart = async (req, res) => {
		getCart(req.params)
			.then((data) => {
				if (data) {
					const json = JSON.parse(JSON.stringify(data));
					res.status(200).json(json);
				} else res.status(404).json('Cart not found');
			})
			.catch((error) => console.error(`Error on request getCart: ${error}`));
	};

	controller.createCart = async (req, res) => {
		const { params, body } = req;
		let cart = null;
		await getCart(params)
			.then((data) => {
				if (data) {
					cart = JSON.parse(JSON.stringify(data));
				} else console.log('Cart not found');
			})
			.catch((error) => console.error(`Error on request getCart: ${error}`));

		if (cart) {
			const { products } = body;
			let tempIndex = cart.products.findIndex((product) => product.id === products[0].id);

			if (tempIndex >= 0) cart.products[tempIndex].quantity += 1;
			else cart.products.push(body.products[0]);
			updateCart(cart);
		} else {
			createCart(req.body)
				.then((data) => {
					console.log('Create cart', data);
					res.status(200).json({ message: 'Create cart', data });
				})
				.catch((error) => console.error(`Error on createCart: ${error}`));
		}
	};

	return controller;
}

module.exports = cart;
