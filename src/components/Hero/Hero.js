import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.heroContent}>
				<Container maxWidth="md">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						React Shop
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
						dignissimos officiis reiciendis quos? Neque inventore fugiat ratione
						consectetur perspiciatis quo.
					</Typography>
				</Container>
			</div>
		</>
	);
};

export default Hero;
