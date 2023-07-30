import Button from "@mui/material/Button";

export const PrimaryButton = ({ children, ...props }) => {
	return (
		<Button
			type="submit"
			sx={(theme) => ({
				margin: theme.spacing(3, 0, 2),
			})}
			fullWidth
			variant="contained"
			color="primary"
			{...props}
		>
			{children}
		</Button>
	);
};
