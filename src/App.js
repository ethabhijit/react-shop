import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import CardContainer from "./components/CardContainer/CardContainer";
import Copyright from "./components/Copyright/Copyright";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: orange[600],
		},
	},
});

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Hero />
				<CardContainer />
				<Copyright />
			</ThemeProvider>
		</>
	);
};

export default App;
