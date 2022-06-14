const mongoose = require('../data/db');
const { Schema } = mongoose;

const Cart = mongoose.model(
	'Cart',
	new Schema({
		id_user: String,
		status: String,
		products: [
			{
				id: Number,
				title: String,
				price: Number,
				image: String,
				quantity: Number,
			},
		],
	}),
);

module.exports = Cart;
