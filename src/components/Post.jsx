import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	card: {
		width: "100%",
		marginBottom: theme.spacing(6),
	},
	cardMedia: {
		height: 240,
	},
	content: {
		background: "#F9F6F8",
	},
}));

const Post = () => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.cardMedia}
				image="https://th.bing.com/th/id/R.ba3e81dd8a219580493202e880d55b7b?rik=poDZLpJfiT8iGw&pid=ImgRaw&r=0"
				title="post1"
			/>
			<CardContent className={classes.content}>
				<Typography gutterButton variant="h5">
					Food
				</Typography>
				<Typography variant="body1">
					obcaecati unde qui. Itaque, illum fugiat. Maiores a magni
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Suscipit, quas? Eveniet, sint dolore quod numquam illo
					Suscipit, quas? obcaecati unde qui. Itaque, illum fugiat.
					Maiores a magni Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Suscipit, quas? Eveniet, sint dolore quod
					numquam illo Eveniet, sint dolore quod numquam illo
					obcaecati unde qui. Itaque, illum fugiat. Maiores a magni
					iure ab! Consequatur, quia dolorem!
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="secondary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
