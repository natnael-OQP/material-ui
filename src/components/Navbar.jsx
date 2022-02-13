import {
	alpha,
	AppBar,
	Avatar,
	Badge,
	Button,
	InputBase,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	logoLg: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	logoSm: {
		display: "block",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	search: {
		display: "flex",
		alignItems: "center",
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		borderRadius: theme.shape.borderRadius,
		width: "50%",
		[theme.breakpoints.down("xs")]: {
			display: (open) => (open ? "flex" : "none"),
			width: "70%",
		},
	},
	input: {
		color: "white",
		flex: 1,
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	icons: {
		alignItems: "center",
		display: (open) => (open ? "none" : "flex"),
	},
	searchIcon: {
		cursor: "pointer",
		marginRight: theme.spacing(1),
		display: "none",
		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
	badge: {
		marginRight: theme.spacing(2),
	},
	cancel: {
		cursor: "pointer",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles(open);

	return (
		<AppBar position="sticky">
			<Toolbar className={classes.toolbar}>
				{/* logo */}
				<Typography className={classes.logoLg} variant="h6">
					Material-ui
				</Typography>
				<Typography className={classes.logoSm} variant="h6">
					Mui
				</Typography>
				{/*Search*/}
				<div className={classes.search}>
					<Search />
					<InputBase
						className={classes.input}
						placeholder="Search..."
					/>
					<Cancel
						onClick={() => setOpen(!open)}
						className={classes.cancel}
					/>
				</div>
				{/* Icons */}
				<div className={classes.icons}>
					<Search
						className={classes.searchIcon}
						onClick={() => setOpen(!open)}
					/>
					<Badge
						badgeContent={4}
						color="secondary"
						className={classes.badge}
					>
						<Mail />
					</Badge>
					<Badge
						badgeContent={9}
						color="secondary"
						className={classes.badge}
					>
						<Notifications />
					</Badge>
					<Avatar
						alt="natnael opq"
						src="https://avatars.githubusercontent.com/u/81810944?v=4"
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
