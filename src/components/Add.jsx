import {
	Backdrop,
	Container,
	Fab,
	makeStyles,
	MenuItem,
	Modal,
	TextField,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	add: {
		position: "fixed",
		right: 20,
		bottom: 20,
	},
	container: {
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		margin: "auto",
		width: 400,
		height: 450,
		background: "white",
		borderRadius: 10,
		border: "none",
		padding: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			width: "90vw",
			height: "80vh",
		},
	},
}));

const Add = () => {
	const [open, setOpen] = useState(false);
	const [values, setValue] = useState("");
	const classes = useStyles();
	const handleClose = () => {
		setOpen(!open);
	};
	return (
		<>
			<Tooltip title="Add">
				<Fab
					onClick={handleClose}
					size="medium"
					color="primary"
					className={classes.add}
				>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Container className={classes.container}>
					<form className={classes.form} autoComplete="off">
						<div className={classes.item}>
							<TextField
								style={{ width: "100%" }}
								id="title"
								label="title"
								variant="standard"
							/>
						</div>
						<div className={classes.item}>
							<TextField
								multiline
								style={{ width: "100%", marginTop: 10 }}
								label="description"
								variant="outlined"
								rows={4}
							/>
						</div>
						<div className={classes.item}>
							<TextField
								label="select"
								select
								value={values}
								onChange={(e) => setValue(e.target.value)}
							>
								<MenuItem autoFocus value="Public">
									Public
								</MenuItem>
								<MenuItem value="Private">Private</MenuItem>
								<MenuItem value="Unlisted">Unlisted</MenuItem>
							</TextField>
						</div>
					</form>
				</Container>
			</Modal>
		</>
	);
};

export default Add;
