// import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LeftBar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import RightBar from "./components/Rightbar";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		marginTop: theme.spacing(7),
		[theme.breakpoints.up("sm")]: {
			marginTop: theme.spacing(8),
		},
	},
	right: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<Grid container className={classes.wrapper}>
				<Grid item sm={2} xs={2}>
					<LeftBar />
				</Grid>
				<Grid item sm={7} xs={10}>
					<Feed />
				</Grid>
				<Grid item sm={3} className={classes.right}>
					<RightBar />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
