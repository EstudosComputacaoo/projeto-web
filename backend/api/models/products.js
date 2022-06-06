const mongoose = require('../data/db');
const { Schema } = mongoose;

const Product = mongoose.model(
	'Products',
	new Schema({
		id: Number,
		title: String,
		price: Number,
		description: String,
		category: String,
		image: String,
		rating: {
			rate: Number,
			count: Number,
		},
	}),
);

module.exports = Product;
