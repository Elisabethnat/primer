import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
	products: {
		type: [
			{
				id_prod: {
					type: Schema.Types.ObjectId, 					ref: 'products',
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
				},
			},
		],
		default: function () {
			return [];
		},
	},
});
const cartModel = model('carts', cartSchema);

export default cartModel;