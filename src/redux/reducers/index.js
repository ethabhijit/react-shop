const { combineReducers } = require("redux");
const {
	productReducer,
	selectedProductReducer,
	cartReducer,
} = require("./productReducer");

const reducers = combineReducers({
	allProducts: productReducer,
	product: selectedProductReducer,
	cartItems: cartReducer,
});

export default reducers;
