import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";

// Созд. стили с пом. спец. хука (старая версия)
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		margin: theme.spacing(3, 0, 2),
// 		textAlign: "center",
// 		fontSize: "40px",
// 		color: "deeppink",
// 		textShadow: "1px 1px darkmagenta",
// 	},
// }));

// С пом. styled
// const TypographyRoot = styled(Typography)(({ theme }) => ({
// 	margin: theme.spacing(3, 0, 2),
// 	textAlign: "center",
// 	fontSize: "40px",
// 	color: "deeppink",
// 	textShadow: "1px 1px darkmagenta",
// }));

export const Header = () => {
	// const styles = useStyles();

	return (
		<>
			{/* <TypographyRoot component="h1" variant="h5">
				The Ultimate Form Challenge
			</TypographyRoot> */}
			<Typography
				// className={styles.root}
				sx={(theme) => ({
					margin: theme.spacing(3, 0, 2),
					textAlign: "center",
					fontSize: "40px",
					fontFamily: "Permanent Marker",
					color: "deeppink",
					textShadow: "1px 1px darkmagenta",
				})}
				component="h1"
				variant="h5"
			>
				The Ultimate Form Challenge
			</Typography>
		</>
	);
};
