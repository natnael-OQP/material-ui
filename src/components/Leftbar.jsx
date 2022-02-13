import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		background: theme.palette.primary.main,
		color: "white",
		paddingLeft: 10,
		minWidth: 50,
		paddingTop: theme.spacing(3),
		[theme.breakpoints.up("sm")]: {
			paddingTop: theme.spacing(3),
			background: "white",
			color: "#555",
			border: "1px solid #e5e5e5",
		},
	},
	item: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(3),
			cursor: "pointer",
		},
	},
	icon: {},
	text: {
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
}));

const LeftBar = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>HomePage</Typography>
			</div>
		</Container>
	);
};

export default LeftBar;
