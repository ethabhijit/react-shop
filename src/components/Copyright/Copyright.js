import { Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const Copyright = () => {
	const classes = useStyles();

	return (
		<>
			<footer className={classes.footer}>
				<Typography variant="body2" color="textSecondary" align="center">
					{"Copyright © "}
					<Link color="inherit" href="">
						Abhijit Paul
					</Link>{" "}
					{new Date().getFullYear()}
					{"."}
				</Typography>
			</footer>
		</>
	);
};

export default Copyright;
