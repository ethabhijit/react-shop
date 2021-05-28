import {
	AppBar,
	Toolbar,
	Typography,
	withStyles,
	IconButton,
	Badge,
	makeStyles,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
    backgroundColor: theme.palette.secondary.main,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

const CustomizedBadges = (itemCount) => {
	return (
		<IconButton aria-label="cart">
			<StyledBadge badgeContent={itemCount} color="secondary">
				<ShoppingCartIcon style={{color: "#fff"}} />
			</StyledBadge>
		</IconButton>
	);
};

const Navbar = () => {
	const classes = useStyles();
  const cartItems = useSelector(state => state.cartItems);

	return (
		<>
			<div className={classes.root}>
				<AppBar position="relative">
					<Toolbar>
						<Typography variant="h6" color="inherit" noWrap className={classes.title}>
							React Shop
						</Typography>
						{CustomizedBadges(cartItems.length)}
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
};

export default Navbar;
