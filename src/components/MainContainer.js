import Container from "@mui/material/Container";

export const MainContainer = ({ children, ...props }) => {
	return (
		<Container
			sx={(theme) => ({
				marginTop: theme.spacing(4),
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			})}
			component="main"
			maxWidth="xs"
			{...props}
		>
			{children}
		</Container>
	);
};
