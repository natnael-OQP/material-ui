import {
	alpha,
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	toolbar: {},
	logoLg: {},
	logoSm: {},
	search: {},
	input: {},
	cancel: {},
	searchButton: {},
	icons: {},
	badge: {},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles({ open });
	return (
		<div>
			<h1>Header</h1>
		</div>
	);
};

export default Navbar;
