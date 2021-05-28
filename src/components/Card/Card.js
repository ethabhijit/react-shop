import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	makeStyles,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/productActions";

const useStyles = makeStyles((theme) => ({
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		height: "150px",
		display: "block",
		margin: "auto",
	},
	cardContent: {
		flexGrow: 1,
	},
}));

const CardComponent = (product) => {
	const classes = useStyles();
	const { title, price, image, id } = product.product;
	const cartItems = useSelector((state) => state.cartItems);
	const dispatch = useDispatch();

	const handelClick = (productId) => {
		dispatch(addProductToCart(productId));
	};

	return (
		<>
			<Card className={classes.card}>
				<div>
					<img className={classes.cardMedia} src={image} alt={title} />
				</div>
				<CardContent className={classes.cardContent}>
					<Typography variant="subtitle1" gutterBottom>
						{title}
					</Typography>
					<Typography gutterBottom variant="h6" component="h4">
						$ {price}
					</Typography>
				</CardContent>
				<CardActions>
					{cartItems && !cartItems.includes(id) && (
						<Button
							color="secondary"
							size="small"
							variant="outlined"
							startIcon={<AddShoppingCartIcon />}
							onClick={() => handelClick(id)}
						>
							Add to cart
						</Button>
					)}
				</CardActions>
			</Card>
		</>
	);
};

export default CardComponent;
