import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, makeStyles } from "@material-ui/core";
import CardComponent from "../Card/Card";
import { setProducts } from "../../redux/actions/productActions";

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}));

const CardContainer = () => {
	const classes = useStyles();
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				console.log("Error ", err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	console.log(products);

	return (
		<>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>
					{products.allProducts.products &&
						products.allProducts.products.map((product, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<CardComponent key={index} product={product} />
							</Grid>
						))}
				</Grid>
			</Container>
		</>
	);
};

export default CardContainer;
