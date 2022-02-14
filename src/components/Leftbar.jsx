import { Container, makeStyles, Typography } from "@material-ui/core";
import {
	Bookmark,
	List,
	ExitToApp,
	Home,
	Person,
	PhotoCamera,
	PlayCircleOutline,
	Settings,
	Storefront,
	TabletMac,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		background: theme.palette.primary.main,
		color: "white",
		position: "sticky",
		top: "7%",
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
	icon: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("xs")]: {
			fontSize: 19,
		},
	},
	text: {
		fontWeight: 500,
		[theme.breakpoints.down("sm")]: {
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
				<Typography className={classes.text}>Homepage</Typography>
			</div>
			<div className={classes.item}>
				<Person className={classes.icon} />
				<Typography className={classes.text}>Friends</Typography>
			</div>
			<div className={classes.item}>
				<List className={classes.icon} />
				<Typography className={classes.text}>Lists</Typography>
			</div>
			<div className={classes.item}>
				<PhotoCamera className={classes.icon} />
				<Typography className={classes.text}>Camera</Typography>
			</div>
			<div className={classes.item}>
				<PlayCircleOutline className={classes.icon} />
				<Typography className={classes.text}>Videos</Typography>
			</div>
			<div className={classes.item}>
				<TabletMac className={classes.icon} />
				<Typography className={classes.text}>Apps</Typography>
			</div>
			<div className={classes.item}>
				<Bookmark className={classes.icon} />
				<Typography className={classes.text}>Collections</Typography>
			</div>
			<div className={classes.item}>
				<Storefront className={classes.icon} />
				<Typography className={classes.text}>Market Place</Typography>
			</div>
			<div className={classes.item}>
				<Settings className={classes.icon} />
				<Typography className={classes.text}>Settings</Typography>
			</div>
			<div className={classes.item}>
				<ExitToApp className={classes.icon} />
				<Typography className={classes.text}>Logout</Typography>
			</div>
		</Container>
	);
};

export default LeftBar;
