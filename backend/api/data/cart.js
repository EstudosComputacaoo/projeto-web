const Cart = require('../models/cart');

async function getCart({id_user}) {
	return Cart.findOne({id_user, status: 'active'}).lean();
}

async function createCart(params) {
	return Cart.create(params);
}

async function updateCart(params) {

	Cart.updateOne({_id:params._id}, 
		{...params}, function (err, docs) {
		if (err){
			console.log(err)
		}
		else{
			console.log("Updated Docs : ", docs);
		}
	})
	
}

module.exports = {createCart, getCart, updateCart};
